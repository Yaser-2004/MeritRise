"use client";

import { Card } from "@/components/ui/card";
import { instrumentSerif, stixTwoText } from "../layout";
import { Gauge, Bot, ShieldCheck, Radar, UserCheck, Rocket, LucideIcon } from "lucide-react";
import img from "../assets/Group38w.webp";
import Image from "next/image";

const leftFeatures = [
    {
        icon: Gauge,
        title: "Adaptive Pacing",
        description: "Dynamically shifts speed based on your real-time understanding.",
    },
    {
        icon: Bot,
        title: "24/7 AI Tutor",
        description: "Instant, deep-dive conceptual clarity on complex frameworks.",
    },
    {
        icon: ShieldCheck,
        title: "Rigorous Exams",
        description: "Proctored assessments that preserve Tier-1 grading integrity.",
    },
];

const rightFeatures = [
    {
        icon: Radar,
        title: "Skill Gap Mapping",
        description: "Matches your coursework instantly against active global job demands.",
    },
    {
        icon: UserCheck,
        title: "AI Mock Interviews",
        description: "Live, voice-based tech and management prep with data-backed scores.",
    },
    {
        icon: Rocket,
        title: "Direct-to-Hire",
        description: "Skips the resume pile to connect top performers directly with corporate networks.",
    },
];

function FeatureCard({
    title,
    description,
    showBorder = true,
    icon: Icon,
    color,
    borderColor,
}: {
    title: string;
    description: string;
    showBorder?: boolean;
    icon: LucideIcon;
    color: string;
    borderColor: string;
}) {
    return (
        <div className="pt-6">
            <div className="flex items-top gap-4">
                <Icon style={{ color }} size="25px" />
                <h3
                    className={`text-xl mb-3 font-light ${stixTwoText.className} italic tracking-tight`}
                    style={{ color }}
                >
                    {title}
                </h3>
            </div>
            <p
                style={{ borderBottomColor: borderColor }}
                className={`text-lg text-black/70 tracking-tight ${showBorder ? "border-b pb-6" : ""}`}
            >
                {description}
            </p>
        </div>
    );
}

export default function TechStackSection() {
    return (
        <section
            id="ai"
            className="relative z-10 w-full bg-white py-24 px-6 overflow-hidden"
        >
            <Image
                priority
                src={img}
                alt="Group 38"
                style={{ transform: "scaleX(-1)" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[250px] w-[140%] object-cover"
            />

            {/* Heading */}
            <div className={`text-center max-w-3xl mx-auto ${instrumentSerif.className}`}>
                <h2 className="text-4xl md:text-7xl text-black">
                    The Custom AI Tech Stack
                </h2>
                <p className="mt-4 text-4xl text-[#232AFF] italic">
                    Your Outcome-Linked Engine
                </p>
            </div>

            {/* Grid */}
            <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                {/* Left Card */}
                <div>
                    <Card className="hover:scale-103 transition-all duration-300 p-10 rounded-2xl bg-[#daeffeff]">
                        <h3 className="text-3xl w-full text-center font-medium tracking-tight bg-gradient-to-r from-black to-[#666666]/90 text-transparent bg-clip-text">
                            AI-Powered LMS
                        </h3>
                        <div className="space-y-2">
                            {leftFeatures.map((item, index) => (
                                <FeatureCard
                                    key={item.title}
                                    {...item}
                                    showBorder={index !== leftFeatures.length - 1}
                                    color="#453AC2"
                                    borderColor="#D6D7FF"
                                />
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right Card */}
                <div>
                    <Card className="hover:scale-103 transition-all duration-300 p-10 rounded-2xl bg-[#D9FFF2]">
                        <h3 className="text-3xl w-full text-center font-medium tracking-tight bg-gradient-to-r from-black to-[#666666]/90 text-transparent bg-clip-text">
                            AI Career Readiness
                        </h3>
                        <div className="space-y-2">
                            {rightFeatures.map((item, index) => (
                                <FeatureCard
                                    key={item.title}
                                    {...item}
                                    showBorder={index !== rightFeatures.length - 1}
                                    color="#005A43"
                                    borderColor="#BEF0DE"
                                />
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            <div className="h-[0.5px] w-[90%] mt-28 mx-auto bg-[#D6D7FF]" />
        </section>
    );
}