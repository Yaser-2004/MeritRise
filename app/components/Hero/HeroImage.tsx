"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import heroImage1 from "@/app/assets/mrhero1.webp";
import heroImage2 from "@/app/assets/studentCTAman.webp";
import heroImage3 from "@/app/assets/group.webp";

export interface HeroSlide {
    image: StaticImageData;
    eyebrow?: string;
    subtitle?: string;
}

const SLIDES: HeroSlide[] = [
    {
        image: heroImage1,
        eyebrow: "Learn without limits",
        subtitle: "Education designed for the modern learner",
    },
    {
        image: heroImage2,
        eyebrow: "Build skills that matter",
        subtitle: "AI-powered learning for real-world growth",
    },
    {
        image: heroImage3,
        eyebrow: "Grow beyond the classroom",
        subtitle: "Learning, mentorship, and opportunity in one place",
    },
];

const SLIDE_DURATION = 4000;

export default function HeroImage() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setActive((i) => (i + 1) % SLIDES.length);
        }, SLIDE_DURATION);
        return () => clearInterval(id);
    }, [paused]);

    const current = SLIDES[active];

    return (
        <div className="relative">
            {/* ============================================================
                DESKTOP — exact same crop/treatment as before, images crossfade
               ============================================================ */}
            <div
                className="relative hidden lg:block h-[500px] overflow-hidden"
                style={{ clipPath: "polygon(25% 0%,100% 0%,100% 100%,0% 100%)" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {SLIDES.map((slide, i) => (
                    <Image
                        key={i}
                        src={slide.image}
                        alt="Student"
                        fill
                        priority={i === 0}
                        className={`${i === 1 ? "scale-x-[-1]" : ""} ${i === 2 ? "object-left" : ""} ${i === 1 ? "object-left" : ""} object-cover transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"
                            }`}
                        style={i !== 2 ? { filter: "brightness(1.2)" } : {}}
                    />
                ))}

                {/* Gradient overlay */}
                <div className="absolute -bottom-1 inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/25 to-[#151515]/0 pointer-events-none" />

                {/* Caption */}
                <div className="w-full absolute inset-x-0 bottom-0 px-10 pb-10 z-10 right-0 text-right">
                    <div
                        key={active}
                        className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 duration-500"
                    >
                        {current.eyebrow && (
                            <p className="text-white text-xl font-semibold leading-snug">
                                {current.eyebrow}
                            </p>
                        )}

                        {current.subtitle && (
                            <p className="text-white/75 text-base mt-1">
                                {current.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Slide indicators */}
                    <div className="w-full justify-end flex items-center gap-2 mt-6">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => setActive(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === active
                                    ? "w-8 bg-[#0055FF]"
                                    : "w-2 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* ============================================================
                MOBILE / TABLET — full-bleed banner, caption overlay, dots
                (breaks out of the section's side padding to go edge-to-edge)
               ============================================================ */}
            <div
                className="
                    relative lg:hidden
                    h-[300px] sm:h-[500px] w-full
                    overflow-hidden
                    rounded-lg
                "
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
            >
                {SLIDES.map((slide, i) => (
                    <Image
                        key={i}
                        src={slide.image}
                        alt="Student"
                        fill
                        priority={i === 0}
                        className={`object-cover transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* Gradient so the caption stays readable over any photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />

                {/* Caption — remounts (via key) on every slide change so it fades/slides in */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-7">
                    <div
                        key={active}
                        className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 duration-500"
                    >
                        {current.eyebrow && (
                            <p className="text-white text-[15px] font-semibold leading-snug">
                                {current.eyebrow}
                            </p>
                        )}
                        {current.subtitle && (
                            <p className="text-white/75 text-sm mt-0.5">{current.subtitle}</p>
                        )}
                    </div>

                    {/* Slide indicators */}
                    <div className="flex items-center gap-1.5 mt-5">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => setActive(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#0055FF]" : "w-1.5 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}