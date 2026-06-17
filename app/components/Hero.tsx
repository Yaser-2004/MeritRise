"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { instrumentSerif } from "../layout";
import img from "../assets/Group43.png";
import Image from "next/image";
import { Zap } from "lucide-react";

function GradientGlow() {
    return (
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
            {/* Radial glow */}
            <div className="h-[500px] w-[500px] rounded-full bg-[#0084E2]/50 blur-[300px]" />

            {/* Optional grid texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(135deg,#000_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
    );
}

function StatCard({
    endValue,
    startValue = 0,
    prefix = "",
    suffix = "",
    useComma = true,
    label,
}: {
    endValue: number;
    startValue?: number;
    prefix?: string;
    suffix?: string;
    useComma?: boolean;
    label: string;
}) {
    const [count, setCount] = useState(startValue);
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let lastTime: number | null = null;
        let elapsed = 0;
        const duration = 2000; // 2 seconds animation

        const step = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            let delta = timestamp - lastTime;

            // Cap delta at 50ms to prevent massive jumps when rAF is paused 
            // (like during dragging/scrolling on mobile devices)
            if (delta > 50) delta = 50;

            elapsed += delta;
            lastTime = timestamp;

            const progress = Math.min(elapsed / duration, 1);

            // easeOutQuart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startValue + (endValue - startValue) * ease);
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(endValue);
            }
        };
        requestAnimationFrame(step);
    }, [inView, endValue, startValue]);

    const formattedCount = useComma ? count.toLocaleString("en-IN") : count.toString();

    return (
        <div ref={ref} className="flex flex-col items-center justify-start px-2 md:px-8 h-full">
            <p className={`text-3xl md:text-5xl font-medium ${instrumentSerif.className}`}>
                {prefix}{formattedCount}{suffix}
            </p>

            <p className="text-xs md:text-lg font-light text-black/80 mt-2 md:mt-6 text-center leading-tight">
                {label.includes("(Past 12 Months)") ? (
                    <>
                        {label.replace(" (Past 12 Months)", "")}
                        <br />
                        <span className="text-[10px] md:text-sm text-black/80 leading-none">
                            (Past 12 Months)
                        </span>
                    </>
                ) : (
                    label
                )}
            </p>
        </div>
    );
}

function HeroStats() {
    return (
        <div className="mt-16 md:mt-20 text-black/80 grid grid-cols-2 md:grid-cols-4 pt-6 md:pt-12 border-t md:border-none border-black/10">
            <div className="border-r border-b border-black/10 md:border-b-0 py-6 md:py-0 h-full">
                <StatCard startValue={2026} endValue={2017} useComma={false} label="Established Excellence" />
            </div>
            <div className="border-b border-black/10 md:border-b-0 md:border-r py-6 md:py-0 h-full">
                <StatCard endValue={50} suffix="+" label="Partner Universities Globally" />
            </div>
            <div className="border-r border-black/10 py-6 md:py-0 h-full">
                <StatCard endValue={6000} suffix="+" label="Learners Enrolled (Past 12 Months)" />
            </div>
            <div className="py-6 md:py-0 h-full">
                <StatCard endValue={120} prefix="₹" suffix="Cr+" label="Gross Fee Value Collected (Past 12 Months)" />
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="pb-20 relative flex min-h-screen flex-col items-center justify-center px-6 text-center ">
            <Image src={img} alt="" className="w-full h-[350px] top-1/2 -translate-y-[350px] object-cover absolute -z-20" />
            <GradientGlow />

            {/* HERO CONTENT */}
            <div className="max-w-5xl relative">
                {/* Heading */}
                <h1 className={`text-[44px] md:text-7xl leading-tight text-black ${instrumentSerif.className}`}>
                    The Excellence of India’s
                    <br />
                    <span className="text-[#232AFF] italic">Leading Institutions.</span>
                    <br />
                    Built for Everywhere.
                </h1>

                {/* Subtext */}
                <p className="mt-8 text-base md:text-lg text-black/70 max-w-2xl mx-auto">
                    Bringing IIT, IIM, and Tier-1 academic excellence to every learner,
                    because potential, not postcode, should define opportunity.
                </p>

                {/* CTA */}
                <div className="mt-14 flex flex-col sm:flex-row md:gap-8 gap-4 justify-center">
                    <Button
                        className="
                            group cursor-pointer h-16
                            bg-[#232AFF] text-white text-[16px]
                            px-6 rounded-lg
                            transition-all duration-300 ease-out
                            hover:-translate-y-1
                            hover:bg-[#1f25e0]
                            hover:shadow-[0_12px_32px_rgba(35,42,255,0.25)]
                            active:translate-y-0
                        "
                        onClick={() =>
                            document
                                .getElementById('programs')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Explore Upcoming Programs
                    </Button>
                    <Button
                        onClick={() =>
                            document
                                .getElementById('partner-with-us')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        variant="outline"
                        className="
                            cursor-pointer h-16
                            border-black/50 text-black
                            text-[16px] px-6 rounded-lg
                            transition-all duration-300 ease-out
                            hover:-translate-y-1
                            hover:bg-black
                            hover:text-white
                            hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]
                            active:translate-y-0
                        "
                    >
                        Partner With Us (Institutions)
                    </Button>
                </div>
            </div>

            {/* STATS */}
            <HeroStats />

            {/* Make Powered By LearningShala capsule */}
            <div className="mt-8">
                <a href="https://learningshala.in" target="_blank" className={`border border-black rounded-full px-10 py-3 text-sm md:text-lg text-black/80 mt-2 md:mt-6 text-center leading-tight ${instrumentSerif.className}`}>
                    <span><Zap className="inline-block mr-3 w-[10px] h-[20px] scale-y-200 pb-0.5" /></span>Powered By LearningShala</a>
            </div>
        </section>
    );
}