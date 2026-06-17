"use client";

import { ArrowRight } from "lucide-react";
import { instrumentSerif, stixTwoText } from "../layout";
import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

/* ── Data ─────────────────────────────────────────────────────────────── */
interface Program {
    school: string;
    focusAreas: string;
    standard: string;
    href: string;
}

const PROGRAMS: Program[] = [
    {
        school: "Advanced Technology & Computing",
        focusAreas:
            "Executive Master's, Online Bachelor's (BSc/BS/BCA), Master's Applications (MCA), and Core Computing Systems.",
        standard: "Tier-1 & INI Rigor",
        href: "#",
    },
    {
        school: "Elite Management & Strategy",
        focusAreas:
            "Online MBA, Online BBA, Corporate Strategy, Leadership, and Enterprise Transformation.",
        standard: "Elite B-School Frameworks",
        href: "#",
    },
    {
        school: "Professional PG Diplomas & Certifications",
        focusAreas:
            "Specialized PG Diplomas, Executive Certifications, Cross-Functional Tech & Non-Tech Programs.",
        standard: "Advanced Professional Track",
        href: "#",
    },
];

/* ── Row ──────────────────────────────────────────────────────────────── */
function ProgramRow({
    program,
    showDivider,
}: {
    program: Program;
    showDivider: boolean;
}) {
    const [openType, setOpenType] = useState<"student" | "institution" | null>(null);

    return (
        <>
            <tr className="group">
                {/* School */}
                <td className="py-10 pr-8 align-middle w-[26%]">
                    <span className="text-[16px] md:text-[20px] font-medium text-gray-900 leading-snug tracking-tight">
                        {program.school}
                    </span>
                </td>

                {/* Focus Areas */}
                <td className="py-10 pr-8 align-middle w-[38%]">
                    <span className="text-[14px] md:text-[18px] text-gray-500 leading-relaxed">
                        {program.focusAreas}
                    </span>
                </td>

                {/* Standard */}
                <td className="py-10 pr-8 align-middle w-[20%]">
                    <span className="text-[14px] md:text-[18px] text-gray-500 leading-relaxed">
                        {program.standard}
                    </span>
                </td>

                {/* CTA */}
                <td className="py-10 align-middle w-[16%]">
                    <a
                        onClick={() => setOpenType("student")}
                        className="cursor-pointer inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-4 py-2.5 text-[16px] font-medium text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white whitespace-nowrap"
                    >
                        Join Waitlist
                        <ArrowRight size={14} strokeWidth={2} />
                    </a>
                </td>
            </tr>

            {/* Divider row */}
            {showDivider && (
                <tr>
                    <td colSpan={4} className="p-0">
                        <div className="h-px bg-blue-200/60" />
                    </td>
                </tr>
            )}

            {openType && <WaitlistModal
                isOpen={true}
                userType={openType}
                onClose={() => setOpenType(null)}
            />}
        </>
    );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function ProgramEcosystem() {

    return (
        <section id="programs" className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2
                    className={`text-4xl md:text-[clamp(70px,3.5vw,46px)] text-center font-light text-gray-900 md:tracking-tight mb-12 ${instrumentSerif.className}`}
                >
                    Upcoming Program{" "}
                    <em className="text-[#005EFF] italic font-light">Ecosystem</em>
                </h2>

                {/* Table card */}
                <div
                    className="rounded-2xl px-8 pt-2 pb-4 overflow-x-auto bg-gradient-to-r from-[#D3EBFF] via-[#E8F5FF] to-white"
                >
                    <table className="w-full border-collapse min-w-[640px]">
                        {/* Column headers */}
                        <thead>
                            <tr>
                                <th className="pt-7 pb-4 pr-8 text-left align-bottom">
                                    <span className={`text-[20px] font-normal italic text-[#2255ee] tracking-tight ${stixTwoText.className}`}>
                                        School
                                    </span>
                                </th>
                                <th className="pt-7 pb-4 pr-8 text-left align-bottom">
                                    <span className={`text-[20px] font-normal italic text-[#2255ee] tracking-tight ${stixTwoText.className}`}>
                                        Focus Areas
                                    </span>
                                </th>
                                <th className="pt-7 pb-4 pr-8 text-left align-bottom">
                                    <span className={`text-[20px] font-normal italic text-[#2255ee] tracking-tight ${stixTwoText.className}`}>
                                        Standard
                                    </span>
                                </th>
                                <th className="pt-7 pb-4 text-left align-bottom" />
                            </tr>
                        </thead>

                        {/* Header divider */}
                        <tbody>
                            <tr>
                                <td colSpan={4} className="p-0 pb-1">
                                    <div className="h-px bg-blue-300/50" />
                                </td>
                            </tr>

                            {PROGRAMS.map((program, i) => (
                                <ProgramRow
                                    key={program.school}
                                    program={program}
                                    showDivider={i < PROGRAMS.length - 1}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}