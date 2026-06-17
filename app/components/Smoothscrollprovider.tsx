"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,        // how long the scroll momentum lasts (seconds)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
            smoothWheel: true,    // smooth mouse wheel
            touchMultiplier: 1.5, // slightly faster on touch devices
        });

        lenisRef.current = lenis;

        // ── CRITICAL: hook Lenis into GSAP's ScrollTrigger ──
        // Without this, ScrollTrigger and Lenis fight each other
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // GSAP ticker drives Lenis (time is in seconds, Lenis wants ms)
        });

        gsap.ticker.lagSmoothing(0); // prevent GSAP from skipping frames

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => lenis.raf(time * 1000));
        };
    }, []);

    return <>{children}</>;
}