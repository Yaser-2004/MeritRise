"use client";

import { ArrowRight } from "lucide-react";
import { stixTwoText, alata } from "@/app/fonts";
import { useState } from "react";
import dynamic from "next/dynamic";
const WaitListModal = dynamic(() => import("./WaitlistModal"));

const programs = [
    {
        school: "Advanced Technology & Computing",
        focusAreas:
            "Executive Master's, Online Bachelor's (BSc/BS/BCA), Master's Applications (MCA), and Core Computing Systems.",
        standard: "Tier-1 & NIR Rigor",
        color: "#0095FF",
    },
    {
        school: "Elite Management & Strategy",
        focusAreas:
            "Online MBA, Online BBA, Corporate Strategy, Leadership, and Enterprise Transformation.",
        standard: "Elite B-School Frameworks",
        color: "#6B4FFF",
    },
    {
        school: "Professional PG Diplomas & Certifications",
        focusAreas:
            "Specialized PG Diplomas, Executive Certifications, Cross-Functional Tech & Non-Tech Programs.",
        standard: "Advanced Professional Track",
        color: "#00E08F",
    },
];

export default function UpcomingPrograms() {
    const [showWaitlist, setShowWaitlist] = useState(false);

    return (
        <section id="upcoming-programs" className="bg-white py-12 md:py-18 mx-5">
            <div className="max-w-[1400px] mx-auto">

                {/* Heading */}

                <h2 className={`${alata.className} text-center text-4xl md:text-5xl font-semibold text-[#111]`}>
                    Upcoming Program Ecosystem
                </h2>

                <div className="w-full max-w-4xl mx-auto h-px bg-[#E5E5E5] mt-8 md:mt-10 mb-8 md:mb-14" />

                {/* Desktop Header */}

                <div className={`${stixTwoText.className} text-xl hidden lg:grid grid-cols-[1.3fr_1.3fr_0.8fr_180px] gap-8 px-8 mb-5`}>
                    <p className="text-[#0055FF] italic font-medium">School</p>
                    <p className="text-[#0055FF] italic font-medium">Focus Areas</p>
                    <p className="text-[#0055FF] italic font-medium">Standard</p>
                    <div />
                </div>

                {/* Rows */}

                <div className="space-y-5">

                    {programs.map((program) => (
                        // Outer wrapper: gradient border (color -> white), 4px thick —
                        // same technique used on the Philosophy / Ecosystem cards.
                        <div
                            key={program.school}
                            className="p-1"
                            style={{
                                background: `linear-gradient(to bottom, ${program.color}, white)`,
                            }}
                        >
                            <div className="bg-white px-8 py-10">

                                {/* Desktop */}

                                <div className="hidden lg:grid grid-cols-[1.3fr_1.3fr_0.8fr_180px] gap-8 items-center">

                                    <h3 className="text-[22px] max-w-[300px] leading-tight font-medium text-[#111]">
                                        {program.school}
                                    </h3>

                                    <p className="text-[#444] max-w-[300px] text-base leading-relaxed">
                                        {program.focusAreas}
                                    </p>

                                    <p className="text-[#555] max-w-[150px] text-base leading-relaxed">
                                        {program.standard}
                                    </p>

                                    <button
                                        onClick={() => setShowWaitlist(true)}
                                        className="
                                            flex items-center justify-center gap-3
                                            h-14
                                            rounded-full
                                            border-2
                                            border-[#0055FF]
                                            text-[#0055FF]
                                            font-medium
                                            transition-all
                                            duration-300
                                            hover:bg-[#0055FF]
                                            hover:text-white
                                            hover:cursor-pointer
                                        "
                                    >
                                        Join Waitlist
                                        <ArrowRight size={18} strokeWidth={2} />
                                    </button>
                                </div>

                                {/* Mobile */}

                                <div className="lg:hidden space-y-6">

                                    <div>
                                        <p className="text-[#0055FF] text-sm mb-2 font-medium">School</p>
                                        <h3 className="text-2xl font-semibold text-[#111]">{program.school}</h3>
                                    </div>

                                    <div>
                                        <p className="text-[#0055FF] text-sm mb-2 font-medium">Focus Areas</p>
                                        <p className="text-[#444]">{program.focusAreas}</p>
                                    </div>

                                    <div>
                                        <p className="text-[#0055FF] text-sm mb-2 font-medium">Standard</p>
                                        <p className="text-[#444]">{program.standard}</p>
                                    </div>

                                    <button
                                        className="
                                            flex items-center justify-center gap-3
                                            h-12
                                            px-6
                                            rounded-full
                                            border-2
                                            border-[#0055FF]
                                            text-[#0055FF]
                                            font-medium
                                        "
                                    >
                                        Join Waitlist
                                        <ArrowRight size={16} strokeWidth={2} />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                    <WaitListModal
                        isOpen={showWaitlist}
                        onClose={() => setShowWaitlist(false)}
                    />

                </div>
            </div>
        </section>
    );
}