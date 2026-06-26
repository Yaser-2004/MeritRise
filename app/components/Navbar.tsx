"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

import logoWhite from "../assets/logoWhite.png";
import WaitlistModal from "./WaitlistModal";
import SlideButton from "./SlideButton";

// ---------------------------------------------------------------------------
// Nav data — this is the ONE place you edit to add/remove/rename links.
// `subItems` is optional: leave it off for a plain link, add it for a
// dropdown (desktop: hover/click panel, mobile: expandable row).
// ---------------------------------------------------------------------------
export interface NavSubItem {
    title: string;
    url: string;
    description?: string;
}

export interface NavItem {
    title: string;
    url?: string;
    subItems?: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
    { title: "Our Ecosystem", url: "#our-ecosystem" },
    { title: "How It Works", url: "#how-it-works" },
    { title: "Upcoming Programs", url: "#upcoming-programs" },
    { title: "AI Architecture", url: "#ai-architecture" },
];

interface NavbarProps {
    items?: NavItem[];
    ctaText?: string;
}

export function Navbar({ items = NAV_ITEMS, ctaText = "Join Waitlist" }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
    const [showWaitlist, setShowWaitlist] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close the mobile panel automatically if the viewport grows back to desktop.
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b border-white/5 bg-[#151515]/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""
                }`}
        >
            <nav className="relative flex items-center justify-between px-6 py-4 md:px-10">
                {/* Logo — left */}
                <Link href="/" className="flex shrink-0 items-center">
                    <Image src={logoWhite} alt="Logo" priority className="h-6 w-auto md:h-7" />
                </Link>

                {/* Nav links — true center, desktop only */}
                <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:gap-7 lg:flex">
                    {items.map((item) => (
                        <li
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => item.subItems && setOpenDesktopMenu(item.title)}
                            onMouseLeave={() => item.subItems && setOpenDesktopMenu(null)}
                        >
                            <Link
                                href={item.url ?? "#"}
                                onClick={(e) => {
                                    if (item.subItems) {
                                        e.preventDefault();
                                        setOpenDesktopMenu((cur) => (cur === item.title ? null : item.title));
                                    }
                                }}
                                className="group relative flex items-center gap-1 px-4 md:px-4 lg:px-0 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                            >
                                {item.title}
                                {item.subItems && (
                                    <ChevronDown
                                        className={`h-3.5 w-3.5 transition-transform duration-200 ${openDesktopMenu === item.title ? "rotate-180" : ""
                                            }`}
                                    />
                                )}
                                <span className="w-full pointer-events-none absolute -bottom-0.5 h-px origin-left scale-x-0 bg-[#0055FF] transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>

                            {item.subItems && (
                                <div
                                    className={`absolute left-1/2 top-full grid -translate-x-1/2 overflow-hidden pt-2 transition-[grid-template-rows,opacity] duration-200 ease-out ${openDesktopMenu === item.title
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="min-w-[260px] overflow-hidden rounded-2xl bg-[#1d1d1d] p-2 shadow-2xl ring-1 ring-white/10">
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.url}
                                                onClick={() => setOpenDesktopMenu(null)}
                                                className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                                            >
                                                <div className="font-medium">{sub.title}</div>
                                                {sub.description && (
                                                    <div className="mt-0.5 text-xs text-white/40">{sub.description}</div>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right side — CTA on desktop, hamburger on mobile */}
                <div className="flex items-center gap-3">
                    <SlideButton
                        text={ctaText}
                        onComplete={() => {
                            setMobileOpen(false);
                            setShowWaitlist(true);
                        }}
                    />

                    <button
                        onClick={() => setMobileOpen((o) => !o)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        className="hover:cursor-pointer flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown panel — pure CSS height animation, no JS measuring */}
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-0 border-t border-white/10 px-6 py-2">
                        {items.map((item) => (
                            <MobileNavItem key={item.title} item={item} onNavigate={() => setMobileOpen(false)} />
                        ))}
                        <button
                            onClick={() => {
                                setMobileOpen(false);
                                setShowWaitlist(true);
                            }}
                            className="mt-4 mb-4 flex h-11 w-full items-center justify-center rounded-full border border-white text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                        >
                            {ctaText}
                        </button>
                    </div>
                </div>
            </div>

            {showWaitlist && (
                <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
            )}

            <div className="h-px bg-gradient-to-r from-[#151515] via-[#0055FF] to-[#151515]"></div>
        </header>
    );
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
    const [open, setOpen] = useState(false);

    if (!item.subItems) {
        return (
            <Link
                href={item.url ?? "#"}
                onClick={onNavigate}
                className="border-b border-white/10 py-3 text-base font-medium text-white/80 last:border-b-0"
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div className="border-b border-white/10 last:border-b-0">
            <button
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-white/80"
            >
                {item.title}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 pb-3 pl-3">
                        {item.subItems.map((sub) => (
                            <Link
                                key={sub.title}
                                href={sub.url}
                                onClick={onNavigate}
                                className="py-2 text-sm text-white/60"
                            >
                                {sub.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}