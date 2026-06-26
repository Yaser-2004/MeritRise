import { instrumentSerif } from "@/app/fonts";
import logoWhite from "../assets/logoWhite.webp";
import Image from "next/image";

/* Data*/
const NAV_LINKS = [
    { label: "Our Ecosystem", href: "#our-ecosystem" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Upcoming Programs", href: "#upcoming-programs" },
    { label: "AI Architecture", href: "#ai-architecture" },
];

/* Sub-components */
function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
        <h4 className="text-white font-medium md:text-[24px] text-[18px] uppercase mb-4">
            {children}
        </h4>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="block text-white/60 text-[14px] hover:text-white transition-colors duration-200"
        >
            {children}
        </a>
    );
}

/* Logo */
function Logo() {
    return (
        <div className="flex md:items-center justify-start gap-3 mb-4">
            {/* M icon — two vertical bars with a chevron */}
            <Image src={logoWhite} alt="Logo" className="md:h-[80px] md:-ml-2 object-cover md:mb-6 h-[60px] max-sm:w-fit max-sm:object-contain" />
        </div>
    );
}

/* Footer */
export default function Footer() {
    return (
        <footer style={{ background: "#151515" }}>

            {/* Main grid */}
            <div className="max-w-[1400px] mx-auto pt-24 pb-16 px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 md:mb-20 mb-10">

                    {/* Col 1: Brand */}
                    <div className="max-w-xs md:-mt-4">
                        <Logo />
                        <p className="text-white/80 md:text-[14px] text-[12px] leading-relaxed mt-2">
                            MeritRise.ai is an advanced higher-education enablement platform.
                            Degrees and certifications are granted directly by our upcoming
                            institute partners upon final academic approvals.
                        </p>
                    </div>

                    {/* Col 2: Nav links */}
                    <div className="flex flex-col items-start md:items-center">
                        <FooterHeading>Company</FooterHeading>
                        <nav className="flex flex-col gap-4 md:text-center">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/90 md:text-[16px] text-[14px] font-medium hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3: Contact + Location */}
                    <div className="flex flex-col items-start md:items-end gap-8">
                        {/* Contact */}
                        <div className="text-left md:text-right">
                            <FooterHeading>Contact</FooterHeading>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="mailto:info@meritrise.ai"
                                    className="text-white/90 md:text-[16px] text-[14px] hover:text-white transition-colors duration-200"
                                >
                                    info@meritrise.ai
                                </a>
                                <a
                                    href="tel:+919555870366"
                                    className="text-white/90 md:text-[16px] text-[14px] hover:text-white transition-colors duration-200"
                                >
                                    +91-9555870366
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="text-left md:text-right">
                            <FooterHeading>Location</FooterHeading>
                            <p className="text-white/90 md:text-[16px] text-[14px] leading-relaxed">
                                B-21, Block B, Noida Sector 3,
                                <br />
                                Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Watermark tagline */}
            <div className="px-6 md:px-12 lg:px-16 pb-6">
                <p
                    className={`${instrumentSerif.className} md:text-7xl text-[30px] text-center font-black uppercase select-none`}
                    style={{
                        color: "rgba(255,255,255,0.2)",
                    }}
                >
                    Learn from the Best, Rise to Your Best
                </p>

                {/* Thin rule below tagline */}
                <div className="h-px bg-white/10 mt-4" />
            </div>

            {/* Copyright */}
            <div className="px-6 md:px-12 py-6 text-center pb-10">
                <p className="text-white/35 text-[16px] font-light tracking-tight">
                    © 2026 MeritRise.ai (A Unit of LearningShala). All Rights Reserved.
                </p>
            </div>

        </footer>
    );
}