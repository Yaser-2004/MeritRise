import { useEffect, useRef, useState } from "react";

export default function HeroStats() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 md:mt-24">
            <Stat
                value={2017}
                label="Established Excellence"
                className="border-b border-r border-white/20"
                isYear
            />

            <Stat
                value={50}
                suffix="+"
                label="Partner Universities Globally"
                className="border-b border-white/20"
            />

            <Stat
                value={6000}
                suffix="+"
                label="Learners Enrolled"
                subLabel="(Past 12 Months)"
                className="border-r border-white/20"
            />

            <Stat
                value={120}
                prefix="₹"
                suffix="Cr+"
                label="Gross Fee Value Collected"
                subLabel="(Past 12 Months)"
            />
        </div>
    );
}

function Stat({
    value,
    label,
    subLabel,
    className = "",
    prefix = "",
    suffix = "",
    isYear = false,
}: {
    value: number;
    label: string;
    subLabel?: string;
    className?: string;
    prefix?: string;
    suffix?: string;
    isYear?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [displayValue, setDisplayValue] = useState(
        isYear ? 2026 : 0
    );
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasAnimated) return;

                setHasAnimated(true);

                const start = isYear ? 2026 : 0;
                const end = value;
                const duration = 2000;

                let startTime: number;

                const animate = (currentTime: number) => {
                    if (!startTime) startTime = currentTime;

                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const current = isYear
                        ? Math.round(
                            start - (start - end) * progress
                        )
                        : Math.round(
                            start + (end - start) * progress
                        );

                    setDisplayValue(current);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            },
            {
                threshold: 0.4,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value, isYear, hasAnimated]);

    const formattedValue =
        !isYear && value >= 1000
            ? displayValue.toLocaleString()
            : displayValue.toString();

    return (
        <div
            ref={ref}
            className={`
                text-center
                py-8
                lg:border-none
                ${className}
            `}
        >
            <h3 className="text-white text-2xl font-semibold md:text-5xl md:font-medium">
                {prefix}
                {formattedValue}
                {suffix}
            </h3>

            <p className="text-white/70 mt-2 md:mt-5 text-sm md:text-lg">
                {label}
            </p>

            {subLabel && (
                <p className="text-white/50 text-sm mt-1">
                    {subLabel}
                </p>
            )}
        </div>
    );
}