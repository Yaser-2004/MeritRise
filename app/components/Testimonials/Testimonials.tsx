"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";
import { alata } from "@/app/fonts";
import ctaImage from "@/app/assets/studentCTAwoman.webp";
import WaitListModal from "../WaitlistModal";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [showWaitlist, setShowWaitlist] = useState(false);

    const visibleCards = 4;

    const next = () => {
        if (current < testimonials.length - visibleCards) {
            setCurrent((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (current > 0) {
            setCurrent((prev) => prev - 1);
        }
    };

    return (
        <>
            {/* TESTIMONIALS */}

            <section id="testimonials" className="bg-[#151515]  overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-5">

                    {/* Header */}

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10 lg:mb-14">

                        <h2
                            className={`${alata.className} text-white text-4xl md:text-5xl leading-[1.05] font-medium`}
                        >
                            Hear From
                            <br />
                            Our{" "}
                            <span className="text-[#0055FF]">
                                Learners
                            </span>
                        </h2>

                        {/* Arrows only on desktop */}

                        <div className="hidden md:flex gap-3 pr-14">

                            <button
                                onClick={prev}
                                className="
                                    w-12 h-12
                                    rounded-full
                                    border border-white/40
                                    flex items-center justify-center
                                    text-white
                                    hover:border-white
                                    transition-all
                                "
                            >
                                <ChevronLeft size={22} />
                            </button>

                            <button
                                onClick={next}
                                className="
                                    w-12 h-12
                                    rounded-full
                                    bg-[#0055FF]
                                    flex items-center justify-center
                                    text-white
                                    transition-all
                                "
                            >
                                <ChevronRight size={22} />
                            </button>

                        </div>

                    </div>

                    {/* MOBILE */}
                    <div className="md:hidden">
                        <div
                            className="
                            flex
                            gap-4
                            overflow-x-auto
                            snap-x
                            snap-mandatory
                            scrollbar-hide
                            pb-2
                        "
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        snap-center
                                        w-[78vw]
                                        shrink-0
                                    "
                                >
                                    <TestimonialCard testimonial={item} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:block overflow-hidden">
                        <div
                            className="
                                flex
                                gap-6
                                transition-transform
                                duration-500
                                ease-out
                            "
                            style={{
                                transform: `translateX(-${current * 334}px)`,
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <TestimonialCard
                                    key={index}
                                    testimonial={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-gray-500 text-center text-xs md:mt-20 mt-10 md:mb-0 mb-10 mx-5">*These reviews are for online degree programs offered by LearningShala (Our Parent Brand) in partnership with private universities.</p>
            </section>

            {/* CTA */}

            <section className="bg-[#151515] pb-20 md:py-12 lg:py-24 px-5">
                <div className="max-w-7xl mx-auto">

                    <div className="relative overflow-hidden rounded-[28px]">

                        <Image
                            src={ctaImage}
                            alt="MeritRise CTA"
                            className="
                            max-md:hidden
                                w-full
                                h-[620px]
                                md:h-[500px]
                                lg:h-[440px]
                                object-cover
                                object-center
                                lg:object-[center_-120px]
                            "
                        />

                        <div className="absolute inset-0 md:bg-[#0055FF]/30 bg-[#0055FF]/30 max-md:hidden" />

                        <div
                            className="
                            max-md:relative
                            max-md:bg-[#0055ff]
                            max-md:pt-10
                                absolute inset-0
                                flex
                                items-end
                                md:items-center
                                justify-center
                                lg:justify-end
                                px-6
                                md:px-10
                                lg:pr-20
                                pb-10
                                md:pb-0
                            "
                        >
                            <div className="max-w-[450px]">

                                <h2
                                    className={`${alata.className} text-white text-[32px] md:text-[40px] leading-[1.2] font-medium`}
                                >
                                    Ready to Transform
                                    <br />
                                    Your Career?
                                </h2>

                                <p className="mt-5 md:mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                                    Take the first step towards a brighter future.
                                    Our education counselors are here to guide you
                                    through every step of your journey.
                                </p>

                                <button
                                    onClick={() => setShowWaitlist(true)}
                                    className="
                                        mt-8
                                        md:mt-10
                                        h-14
                                        px-8
                                        bg-white
                                        text-[#0055FF]
                                        rounded-full
                                        font-medium
                                        flex
                                        items-center
                                        gap-3
                                        transition-all
                                        duration-300
                                        hover:bg-[#0055FF]
                                        hover:text-white
                                        hover:cursor-pointer
                                    "
                                >
                                    Join Waitlist

                                    <ArrowRight
                                        size={18}
                                        strokeWidth={2.5}
                                    />
                                </button>

                            </div>
                        </div>

                    </div>

                    <WaitListModal
                        isOpen={showWaitlist}
                        onClose={() => setShowWaitlist(false)}
                    />

                </div>
            </section>
        </>
    );
}