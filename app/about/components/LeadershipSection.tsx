"use client";

import { useEffect, useRef, ReactNode } from "react";
import { instrumentSerif } from "../../layout";
import leaders from "../../assets/leaders.png";

import type { StaticImageData } from "next/image";

/* Data */
interface Leader {
    name: string;
    role: string;
    imageUrl: string | StaticImageData;
    imagePosition: "left" | "right";
    bg: string;
    bullets: ReactNode[];
}

const LEADERS: Leader[] = [
    {
        name: "Devesh Singh",
        role: "Founder",
        imageUrl: leaders,
        imagePosition: "right",
        bg: "linear-gradient(135deg, #4488ff 0%, #74b3ff 100%)",
        bullets: [
            "Drives business strategy, tech integration, and scaling.",
            "An alumnus of IIM Rohtak with a strong entrepreneurial track record.",
            <>He previously co-founded <em>LearningShala</em> and <em>Vagmine Education.</em></>,
        ],
    },
    {
        name: "Priya Sharma",
        role: "Chief Academic Officer",
        imageUrl: leaders,
        imagePosition: "left",
        bg: "linear-gradient(135deg, #1a2a7e 0%, #2a4acc 100%)",
        bullets: [
            "Oversees curriculum design, faculty partnerships, and academic quality.",
            "15+ years in higher education across top-tier Indian universities.",
            "Pioneer in blending industry-aligned outcomes with rigorous academia.",
        ],
    },
    {
        name: "Arjun Mehta",
        role: "Chief Technology Officer",
        imageUrl: leaders,
        imagePosition: "right",
        bg: "linear-gradient(135deg, #0d5c45 0%, #1aaa78 100%)",
        bullets: [
            "Architects the AI-driven learning infrastructure and platform stack.",
            "Previously built scalable edtech systems serving 1M+ users.",
            "Expert in adaptive learning algorithms and career-readiness automation.",
        ],
    },
];

const SCROLL_PER_CARD = 600;

/* Card */
function LeaderCard({ leader }: { leader: Leader }) {
    const imageOnRight = leader.imagePosition === "right";

    return (
        <div className="relative w-full h-full">

            {/* Floating Image */}
            <div
                className="absolute z-20 bottom-0 pointer-events-none"
                style={{
                    width: "40%",
                    height: "140%",
                    [imageOnRight ? "right" : "left"]: "2%",
                }}
            >
                <img
                    src={
                        typeof leader.imageUrl === "string"
                            ? leader.imageUrl
                            : leader.imageUrl.src
                    }
                    alt={leader.name}
                    className="w-full h-full object-contain object-bottom"
                />
            </div>

            {/* Background Card */}
            <div
                className="absolute inset-x-0 bottom-0 h-[87%] rounded-3xl flex"
                style={{
                    background: leader.bg,
                }}
            >
                <div
                    className="flex flex-col justify-center py-10 px-12 w-[58%]"
                    style={{
                        marginLeft: imageOnRight ? 0 : "auto",
                    }}
                >
                    <h3
                        className={`${instrumentSerif.className} text-white font-light tracking-tight leading-tight mb-1`}
                        style={{
                            fontSize: "clamp(34px,2.8vw,54px)",
                        }}
                    >
                        {leader.name}
                    </h3>

                    <p className="text-white/75 text-[15px] font-medium mb-7">
                        {leader.role}
                    </p>

                    <ul className="flex flex-col gap-3.5">
                        {leader.bullets.map((bullet, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3"
                            >
                                <span className="text-white/50 text-[8px] mt-[6px]">
                                    ●
                                </span>

                                <span className="text-white/90 text-[15px] leading-relaxed">
                                    {bullet}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

/* Section */
export default function LeadershipSection() {
    const outerRef = useRef<HTMLDivElement>(null);

    const card0Ref = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outer = outerRef.current;
        const card0 = card0Ref.current;
        const card1 = card1Ref.current;
        const card2 = card2Ref.current;

        if (!outer || !card0 || !card1 || !card2) return;

        const onScroll = () => {
            const { top } = outer.getBoundingClientRect();
            const scrolled = -top;

            // -------------------------
            // CARD 1 PROGRESS
            // -------------------------
            const p1 = Math.max(
                0,
                Math.min(1, scrolled / SCROLL_PER_CARD)
            );

            card1.style.transform = `translateY(${(1 - p1) * 150}%)`;

            if (p1 > 0) {
                card1.style.visibility = "visible";
                card1.style.opacity = "1";
            } else {
                card1.style.visibility = "hidden";
                card1.style.opacity = "0";
            }

            // Hide card 0 after card 1 arrives
            card0.style.opacity = p1 > 0.95 ? "0" : "1";
            card0.style.visibility =
                p1 > 0.98 ? "hidden" : "visible";

            // -------------------------
            // CARD 2 PROGRESS
            // -------------------------
            const p2 = Math.max(
                0,
                Math.min(
                    1,
                    (scrolled - SCROLL_PER_CARD) /
                    SCROLL_PER_CARD
                )
            );

            card2.style.transform = `translateY(${(1 - p2) * 150}%)`;

            if (p2 > 0) {
                card2.style.visibility = "visible";
                card2.style.opacity = "1";
            } else {
                card2.style.visibility = "hidden";
                card2.style.opacity = "0";
            }

            // Hide card 1 after card 2 arrives
            card1.style.opacity =
                p2 > 0.95 ? "0" : card1.style.opacity;

            card1.style.visibility =
                p2 > 0.98 ? "hidden" : card1.style.visibility;
        };

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        onScroll();

        return () =>
            window.removeEventListener(
                "scroll",
                onScroll
            );
    }, []);

    const totalHeight = `calc(100vh + ${(LEADERS.length - 1) * SCROLL_PER_CARD
        }px)`;

    return (
        <section
            ref={outerRef}
            style={{ height: totalHeight }}
            className="relative"
        >
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

                {/* Heading */}
                <div className="text-center pt-14 shrink-0">
                    <h2
                        className={`${instrumentSerif.className} font-light text-gray-900 tracking-tight`}
                        style={{
                            fontSize: "clamp(44px,4vw,72px)",
                        }}
                    >
                        The{" "}
                        <span className="italic text-[#0055ee]">
                            Leadership
                        </span>{" "}
                        Team
                    </h2>
                </div>

                {/* Stack */}
                <div className="flex-1 px-6 md:px-14 lg:px-20 pb-10">
                    <div className="relative h-full max-w-7xl mx-auto overflow-visible">

                        {/* Card 0 */}
                        <div
                            ref={card0Ref}
                            className="absolute inset-0"
                            style={{
                                zIndex: 1,
                                opacity: 1,
                                transition:
                                    "opacity 0.25s ease, visibility 0.25s ease",
                            }}
                        >
                            <LeaderCard leader={LEADERS[0]} />
                        </div>

                        {/* Card 1 */}
                        <div
                            ref={card1Ref}
                            className="absolute inset-0 will-change-transform"
                            style={{
                                zIndex: 2,
                                opacity: 0,
                                visibility: "hidden",
                                transform: "translateY(100%)",
                            }}
                        >
                            <LeaderCard leader={LEADERS[1]} />
                        </div>

                        {/* Card 2 */}
                        <div
                            ref={card2Ref}
                            className="absolute inset-0 will-change-transform"
                            style={{
                                zIndex: 3,
                                opacity: 0,
                                visibility: "hidden",
                                transform: "translateY(100%)",
                            }}
                        >
                            <LeaderCard leader={LEADERS[2]} />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}