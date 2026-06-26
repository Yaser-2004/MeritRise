"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SlideButtonProps {
    text?: string;
    onComplete: () => void;
}

export default function SlideButton({
    text = "Join the waitlist",
    onComplete,
}: SlideButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [completed, setCompleted] = useState(false);

    const startX = useRef(0);
    const startPosition = useRef(0);
    const maxPosition = useRef(0);

    useEffect(() => {
        const calculate = () => {
            if (!containerRef.current) return;

            const width = containerRef.current.offsetWidth;

            // h-8 w-8 = 32px
            const thumb = 32;

            // left-1 top-1 = 4px padding each side
            maxPosition.current = width - thumb - 8;
        };

        calculate();

        window.addEventListener("resize", calculate);

        return () => window.removeEventListener("resize", calculate);
    }, []);

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (completed) return;

        setDragging(true);

        startX.current = e.clientX;
        startPosition.current = position;

        e.preventDefault();
    };

    useEffect(() => {
        const handleMove = (e: PointerEvent) => {
            if (!dragging) return;

            const delta = e.clientX - startX.current;

            let next = startPosition.current + delta;

            next = Math.max(0, Math.min(next, maxPosition.current));

            setPosition(next);
        };

        const handleUp = () => {
            if (!dragging) return;

            setDragging(false);

            if (position >= maxPosition.current * 0.9) {
                setCompleted(true);
                setPosition(maxPosition.current);

                setTimeout(() => {
                    onComplete();

                    setCompleted(false);
                    setPosition(0);
                }, 250);
            } else {
                setPosition(0);
            }
        };

        window.addEventListener("pointermove", handleMove);
        window.addEventListener("pointerup", handleUp);
        window.addEventListener("pointercancel", handleUp);

        return () => {
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("pointerup", handleUp);
            window.removeEventListener("pointercancel", handleUp);
        };
    }, [dragging, position, completed, onComplete]);

    const progress = maxPosition.current
        ? (position / maxPosition.current) * 100
        : 0;

    return (
        <div
            ref={containerRef}
            className="relative h-[41px] w-[150px] overflow-hidden rounded-full border border-white/60 bg-white/5 select-none"
        >
            {/* Progress */}
            <div
                className="absolute z-10 left-0 top-0 h-full rounded-full bg-[#0055FF] transition-none"
                style={{
                    width: `${progress}%`,
                }}
            />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-sm ml-6 font-medium text-white">
                    {text}
                </span>
            </div>

            {/* Thumb */}
            <div
                onPointerDown={handlePointerDown}
                style={{
                    transform: `translateX(${position}px)`,
                }}
                className={`absolute left-1 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md
                ${dragging
                        ? "cursor-grabbing scale-105 transition-none" //cursor color to blue
                        : "cursor-grab transition-all duration-200"
                    }`}
            >
                <ArrowRight className="h-4 w-4 text-black" strokeWidth={2.5} />
            </div>
        </div>
    );
}