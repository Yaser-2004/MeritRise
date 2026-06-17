"use client";

import { useRef, useEffect } from "react";
import {
    Flame, Mic2, Users, Trophy, BookOpen, Briefcase, Globe,
    type LucideIcon,
} from "lucide-react";
import { instrumentSerif } from "../layout";

/* ── Data ─────────────────────────────────────────────────────────────── */
interface Item { id: number; icon: LucideIcon; title: string; description: string; }

const ITEMS: Item[] = [
    { id: 1, icon: Flame, title: "Innovation Spirits", description: "Solve real-world corporate problem statements in cross-functional student teams." },
    { id: 2, icon: Mic2, title: "CXO Firesides", description: "Interact directly with tech founders and industry executives in live Q&A sessions." },
    { id: 3, icon: Users, title: "Active Chapters", description: "Build a lifelong professional network via localized peer circles and digital clubs." },
    { id: 4, icon: Trophy, title: "Merit Leagues", description: "Compete in national rankings that signal your performance to top recruiters." },
    { id: 5, icon: BookOpen, title: "Case Libraries", description: "Access a curated vault of real consulting, product, and strategy case studies." },
    { id: 6, icon: Briefcase, title: "Live Projects", description: "Ship real deliverables for partner companies while still in your program." },
    { id: 7, icon: Globe, title: "Global Cohorts", description: "Learn alongside peers from 30+ cities in live, timezone-synced cohort sessions." },
];

/* ── Layout constants ────────────────────────────────────────────────── */
const CARD_W = 350;
const CARD_H = 250;    // generous estimate for card height //170
const TOTAL_W = 2842;
const SVG_H = 397;    // SVG viewBox height (original)

// Vertical padding: enough to show a full card above/below the SVG extremes.
// Top cards sit at SVG y=12, bottom cards at y=447.
// We need CARD_H/2 clearance above y=12 and below y=447.
const VPAD = Math.ceil(170 / 2) + 20; // 105px — safe margin on both sides

// The total content height of the track (SVG + padding on both sides)
const CONTENT_H = SVG_H + VPAD * 2; // 670px

// Card centres in local track coordinates (SVG offset by VPAD from top)
const cardCentres = [
    { x: 0, y: 0 + VPAD },      // Innovation Spirits
    { x: 320, y: 363 + VPAD },     // CXO Firesides
    { x: 769, y: 0 + VPAD },      // Active Chapters
    { x: 1280, y: 300 + VPAD },    // Merit Leagues
    { x: 1801, y: 0 + VPAD },    // Case Libraries
    { x: 2291, y: 329 + VPAD },    // Live Projects
    { x: 2800, y: 0 + VPAD },    // Global Cohorts
];

/* ── SVG curve — translated down by VPAD so it sits inside the padded canvas */
function SCurve() {
    return (
        <svg
            className="pointer-events-none"
            style={{
                position: "absolute",
                top: VPAD,
                left: 0,
                width: TOTAL_W,
                height: SVG_H,
            }}
            viewBox="0 0 2842 397"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.4834 129.491C17.4834 129.491 22.5449 247.392 86.2557 297.795C137.256 338.143 183.489 364.181 248.505 363.247C339.411 361.941 396.512 340.065 466.84 282.434C523.537 235.974 543.74 171.629 603.717 129.491C667.372 84.7693 690.899 77.2961 768.637 80.0687C857.299 83.2309 900.219 107.293 968.277 164.221C1018.97 206.623 1029.99 255.116 1080.45 297.795C1141.26 349.231 1187.77 378.132 1267.4 379.276C1372.63 380.788 1501.1 245.033 1501.1 245.033C1501.1 245.033 1570.47 162.378 1629.29 129.491C1695.21 92.6388 1740.73 80.96 1816.25 80.0687C1895.29 79.1357 1924.73 85.6492 1990.51 129.491C2053.32 171.347 2068.94 239.098 2130.73 282.434C2206.54 335.601 2269.01 348.304 2361.08 338.536C2459.31 328.114 2491.31 317.869 2558.05 245.033C2601.37 197.765 2637.52 122.499 2685.58 80.0687C2739.08 32.8383 2838.48 17.2886 2838.48 17.2886"
                stroke="#0008FF"
                strokeWidth="35"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* ── Card ─────────────────────────────────────────────────────────────── */
function EcosystemCard({ item }: { item: Item }) {
    const Icon = item.icon;
    return (
        <div
            className="rounded-2xl bg-white border-2 border-black p-8 md:p-12 w-full"
            style={{
                maxWidth: CARD_W,
                minHeight: CARD_H,
            }}
        >
            <div className="flex items-center gap-2.5 mb-6">
                <Icon size={30} color="black" strokeWidth={1.7} />
                <span className={`text-3xl text-gray-900 tracking-tight ${instrumentSerif.className}`}>
                    {item.title}
                </span>
            </div>
            <p className="text-base leading-relaxed m-0">
                {item.description}
            </p>
        </div>
    );
}

function MobileEcosystemCard({ item }: { item: Item }) {
    const Icon = item.icon;
    return (
        <div
            className="rounded-2xl bg-white/70 backdrop-blur-xl border border-black/5 p-6 w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >
            <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <Icon size={22} className="text-blue-600" strokeWidth={2} />
                </div>
                <h3 className={`${instrumentSerif.className} text-2xl font-medium text-gray-900 tracking-tight leading-tight`}>
                    {item.title}
                </h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-600 m-0">
                {item.description}
            </p>
        </div>
    );
}

/* ── Main section ─────────────────────────────────────────────────────── */
export default function EcosystemSection() {
    const outerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outer = outerRef.current;
        const track = trackRef.current;
        if (!outer || !track) return;

        // Card 1 sits at x=12 on the SVG. We want it 20% from the left edge of
        // the viewport on load, so we start the track shifted right by (0.2*vw - 12).
        // Total horizontal travel = TOTAL_W - vw + initialOffset.
        const getOffsets = () => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const initialOffset = Math.round(vw * 0.2) - 12;
            const lastCardRight =
                cardCentres[cardCentres.length - 1].x +
                CARD_W / 2;
            const totalTravel =
                lastCardRight -
                vw +
                initialOffset +
                150;
            // Centre the track vertically: push it down by (availableHeight - CONTENT_H) / 2
            // availableHeight = vh minus the sticky header (measured from track's parent)
            const canvasEl = track.parentElement;
            const canvasH = canvasEl ? canvasEl.clientHeight : vh * 0.55;
            const topOffset = Math.max(0, Math.round((canvasH - CONTENT_H) / 2));
            return { initialOffset, totalTravel, topOffset };
        };

        const setHeight = () => {
            if (window.innerWidth < 768) {
                outer.style.height = "auto";
                return;
            }
            const { totalTravel } = getOffsets();
            outer.style.height = `${totalTravel + window.innerHeight}px`;
        };

        const onScroll = () => {
            if (window.innerWidth < 768) return;
            const { top, height } = outer.getBoundingClientRect();
            const scrollable = height - window.innerHeight;
            if (scrollable <= 0) return;
            const progress = Math.max(0, Math.min(1, -top / scrollable));
            const { initialOffset, totalTravel, topOffset } = getOffsets();
            track.style.top = `${topOffset}px`;
            track.style.transform = `translateX(${initialOffset - progress * totalTravel}px)`;
        };

        setHeight();
        onScroll();
        window.addEventListener("resize", setHeight);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("resize", setHeight);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        // Height set dynamically in useEffect to match viewport width
        <div className="relative" id="beyond-screens">

            <div
                className="md:hidden absolute z-10 top-[800px] w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none"
                style={{
                    left: -50,
                    top: 0,
                    background: "radial-gradient(circle, #2391FF 0%, transparent 75%)",
                }}
            />

            {/* Header */}
            <div className="text-center px-6 pb-8">
                <h2
                    className={`${instrumentSerif.className} text-4xl md:text-[clamp(70px,3.5vw,46px)] font-light text-gray-900 md:tracking-tight md:leading-tight mb-2.5`}
                >
                    The Beyond Screens{" "}
                    <em className="text-[#005DFF] italic">
                        Ecosystem
                    </em>
                </h2>

                <p className="md:text-2xl text-xl font-medium text-gray-800 tracking-tight mb-3">
                    Learning That Connects, Builds, and Leads
                </p>

                <p className="text-base md:text-xl max-w-4xl mx-auto leading-7 mt-10">
                    Traditional online degrees feel isolated.
                    At Meritrise.ai, we break the screen barrier
                    by embedding a central co-curricular framework
                    across all our programs.
                </p>
            </div>

            {/* Horizontal Scroll Section (Desktop) */}
            <div ref={outerRef} className="relative hidden md:block">
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[250px] pointer-events-none"
                    style={{
                        left: 100,
                        top: 0,
                        background:
                            "radial-gradient(circle, #2391FF 0%, transparent 75%)",
                    }}
                />

                <div
                    className="sticky top-0 h-screen overflow-hidden"
                >

                    <div className="relative h-full">
                        <div
                            ref={trackRef}
                            className="absolute left-0 top-1/2  will-change-transform"
                            style={{
                                width: TOTAL_W,
                                height: CONTENT_H,
                            }}
                        >

                            {/* Gradient 2 */}
                            <div
                                className="absolute w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none"
                                style={{
                                    left: 1000,
                                    top: 100,
                                    background:
                                        "radial-gradient(circle, #7C3AED55 0%, #7C3AED22 40%, transparent 75%)",
                                }}
                            />

                            <div
                                className="absolute w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
                                style={{
                                    left: 2500,
                                    top: -100,
                                    background:
                                        "radial-gradient(circle, #89FFDC 0%, transparent 75%)",
                                }}
                            />

                            <SCurve />

                            {cardCentres.map((pos, i) => (
                                <div
                                    key={ITEMS[i].id}
                                    className="absolute"
                                    style={{
                                        left: pos.x - CARD_W / 2,
                                        top: pos.y - 170 / 2,
                                        width: CARD_W,
                                    }}
                                >
                                    <EcosystemCard item={ITEMS[i]} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>

            {/* Vertical Simple List (Mobile) */}
            <div className="md:hidden flex flex-col gap-6 px-3 relative pb-24 items-center overflow-hidden">
                {/* Background glows for mobile layout */}
                <div
                    className="absolute w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none"
                    style={{
                        right: -50,
                        bottom: 0,
                        background: "radial-gradient(circle, #89FFDC 0%, transparent 75%)",
                    }}
                />

                {ITEMS.map((item) => (
                    <div key={item.id} className="relative z-10 w-full max-w-[380px]">
                        <MobileEcosystemCard item={item} />
                    </div>
                ))}
            </div>

        </div>
    );
}
