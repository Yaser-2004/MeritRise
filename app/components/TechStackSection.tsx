"use client";

import { Card } from "@/components/ui/card";
import { instrumentSerif, stixTwoText } from "../layout";
import { Gauge, Bot, ShieldCheck, Radar, UserCheck, Rocket, LucideIcon } from "lucide-react";
import img from "../assets/Group38.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Small timeout lets the DOM fully paint before GSAP measures positions.
        // This is the most common reason ScrollTrigger fires instantly or never fires —
        // it calculates offsets before layout is complete.
        const timer = setTimeout(() => {
            const ctx = gsap.context(() => {
                // Hide both cards before animation
                gsap.set(leftCardRef.current, { opacity: 0, y: 60 });
                gsap.set(rightCardRef.current, { opacity: 0, y: 60 });

                // Left card — triggers when top of section hits 75% down the viewport
                gsap.to(leftCardRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftCardRef.current, // trigger on the card itself, not the section
                        start: "top 85%",             // fires when card top is 85% down viewport
                        toggleActions: "play none none none", // play once, don't reverse
                    },
                });

                // Right card — slight delay via stagger feeling (start a little lower)
                gsap.to(rightCardRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    delay: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightCardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            }, sectionRef);

            return () => ctx.revert();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="ai"
            ref={sectionRef}
            className="relative z-10 w-full bg-white py-24 px-6 overflow-hidden"
        >
            <Image
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
                <div ref={leftCardRef} onMouseEnter={() =>
                    gsap.to(leftCardRef.current, { scale: 1.05, duration: 0.3 })
                }
                    onMouseLeave={() =>
                        gsap.to(leftCardRef.current, { scale: 1, duration: 0.3 })
                    }>
                    <Card className="p-10 rounded-2xl bg-[#daeffeff]">
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
                <div ref={rightCardRef} onMouseEnter={() =>
                    gsap.to(rightCardRef.current, { scale: 1.02, duration: 0.3 })
                }
                    onMouseLeave={() =>
                        gsap.to(rightCardRef.current, { scale: 1, duration: 0.3 })
                    }>
                    <Card className="p-10 rounded-2xl bg-[#D9FFF2]">
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