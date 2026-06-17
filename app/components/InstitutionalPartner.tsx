"use client";

import { User, Lock, Settings, LucideIcon } from "lucide-react";
import { instrumentSerif, stixTwoText } from "../layout";

/* Data */
interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FEATURES: Feature[] = [
    {
        icon: User,
        title: "Cohort Integrity",
        description:
            "We pool highly ambitious, high-potential learners from every corner of the country, ensuring your faculty teaches a cohort that values quality over pure volume.",
    },
    {
        icon: Lock,
        title: "IP Security",
        description:
            "Enterprise-grade cloud infrastructure safeguarding your faculty's core intellectual property.",
    },
    {
        icon: Settings,
        title: "Operational Heavy Lifting",
        description:
            "We manage tech, compliance, support, and industry readiness seamlessly.",
    },
];

/* Feature row */
function FeatureRow({
    feature,
    showDivider,
}: {
    feature: Feature;
    showDivider: boolean;
}) {
    const Icon = feature.icon;
    return (
        <div>
            <div className="flex items-center gap-8 py-8">
                {/* Icon */}
                <div className="shrink-0 mt-0.5">
                    <Icon size={20} strokeWidth={1.5} className="text-white" />
                </div>

                {/* Text */}
                <div>
                    <h3 className={`${stixTwoText.className} text-white font-normal italic text-[22px] tracking-tight mb-1.5`}>
                        {feature.title}
                    </h3>
                    <p className="text-white/80 text-[16px] font-light leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>

            {/* Divider */}
            {showDivider && (
                <div className="h-px bg-white/10 mx-0" />
            )}
        </div>
    );
}

/* Main section */
export default function InstitutionalPartner() {
    return (
        <section
            id="partners"
            className="relative w-full overflow-hidden py-20 px-6 md:px-16 lg:px-24"
            style={{ background: "#042C53" }}
        >
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left: Headline + CTA */}
                <div className="flex-1 min-w-0">
                    <h2
                        className={`text-4xl md:text-[clamp(70px,3.5vw,46px)] text-white font-light md:leading-tight md:tracking-tight mb-4 ${instrumentSerif.className}`}
                    >
                        The Ultimate Tier-1
                        <br />
                        <em className="text-[#3366ff] italic font-light">
                            Institutional Partner
                        </em>
                    </h2>

                    <p className="text-white text-base md:text-xl max-w-lg mb-12">
                        Built for universities and faculty who refuse to dilute their
                        academic standard for digital scale.
                    </p>

                    <button
                        //go to section partnet-with-us
                        onClick={() => document.getElementById("partner-with-us")?.scrollIntoView({ behavior: "smooth" })}
                        className="inline-flex items-center h-16 gap-2 rounded-md px-5 py-3 text-[16px] font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                        style={{ background: "#0058F0" }}
                    >
                        Partner With Us (Institutions)
                    </button>
                </div>

                {/* Right: Feature card */}
                <div
                    className="flex-1 min-w-0 w-full rounded-2xl px-6 md:px-12 py-3 shadow-lg"
                    //rgba for white
                    style={{
                        background:
                            "linear-gradient(145deg, rgba(30,52,110,0.85) 0%, rgba(30,52,110,0.85) 50%, rgba(255,255,255,0.1) 100%)",
                        border: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    {FEATURES.map((feature, i) => (
                        <FeatureRow
                            key={feature.title}
                            feature={feature}
                            showDivider={i < FEATURES.length - 1}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}