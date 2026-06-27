"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { HERO_IMAGE_SIZES, HERO_SLIDES, type HeroSlide } from "./heroSlides";

const SLIDE_DURATION = 4000;

function preloadSlide(slide: HeroSlide) {
    const img = new window.Image();
    img.src = slide.image.src;
}

export default function HeroImageCarousel({ slides = HERO_SLIDES }: { slides?: HeroSlide[] }) {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [imageReady, setImageReady] = useState(true);

    const goToSlide = useCallback((index: number) => {
        if (index === active) return;
        setImageReady(false);
        setActive(index);
    }, [active]);

    useEffect(() => {
        if (paused) return;
        const id = window.setInterval(() => {
            setImageReady(false);
            setActive((i) => (i + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => window.clearInterval(id);
    }, [paused, slides.length]);

    useEffect(() => {
        const preloadRest = () => {
            slides.forEach((slide, i) => {
                if (i !== 0) preloadSlide(slide);
            });
        };

        if (typeof window.requestIdleCallback === "function") {
            const id = window.requestIdleCallback(preloadRest);
            return () => window.cancelIdleCallback(id);
        }

        const id = window.setTimeout(preloadRest, 300);
        return () => window.clearTimeout(id);
    }, [slides]);

    const current = slides[active];

    return (
        <div className="relative">
            <div
                className="
                    relative h-[300px] sm:h-[500px] lg:h-[500px] w-full
                    overflow-hidden rounded-lg lg:rounded-none
                    lg:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)]
                "
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
            >
                <Image
                    src={current.image}
                    alt="Student"
                    fill
                    sizes={HERO_IMAGE_SIZES}
                    priority={active === 0}
                    quality={80}
                    onLoad={() => setImageReady(true)}
                    className={`object-cover transition-opacity duration-500 ease-in-out ${active === 1 ? "scale-x-[-1] object-left" : ""} ${active === 2 ? "object-left" : ""} ${imageReady ? "opacity-100" : "opacity-0"
                        }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/25 to-transparent lg:from-[#151515] lg:via-[#151515]/25 lg:to-[#151515]/0 pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 px-6 pb-7 lg:px-10 lg:pb-10 z-10 lg:text-right">
                    <div
                        key={active}
                        className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 duration-500"
                    >
                        {current.eyebrow && (
                            <p className="text-white text-[15px] lg:text-xl font-semibold leading-snug">
                                {current.eyebrow}
                            </p>
                        )}

                        {current.subtitle && (
                            <p className="text-white/75 text-sm lg:text-base mt-0.5 lg:mt-1">
                                {current.subtitle}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-1.5 lg:gap-2 mt-5 lg:mt-6 lg:justify-end">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => goToSlide(i)}
                                className={`rounded-full transition-all duration-300 ${i === active
                                    ? "h-1.5 w-6 lg:h-2 lg:w-8 bg-[#0055FF]"
                                    : "h-1.5 w-1.5 lg:h-2 lg:w-2 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
