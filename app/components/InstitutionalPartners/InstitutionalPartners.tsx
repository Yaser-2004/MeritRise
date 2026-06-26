import BenefitCard from "./BenefitCard";
import { UserRound, Lock, Cog } from "lucide-react";
import { alata, dmSans } from "@/app/fonts";
import PartnerButton from "./PartnerButton";

const BENEFITS = [
    {
        icon: UserRound,
        title: "Cohort Integrity",
        description:
            "We pool highly ambitious, high-potential learners from every corner of the country, ensuring your faculty teaches a cohort that values quality over pure volume.",
        iconBg: "#8EC5F7",
        borderGradient:
            "linear-gradient(to bottom, #088EFB 0%, white 100%)",
    },
    {
        icon: Lock,
        title: "IP Security",
        description:
            "Enterprise-grade cloud infrastructure safeguarding your faculty's core intellectual property.",
        iconBg: "#C7BEFF",
        borderGradient:
            "linear-gradient(to bottom, #796FFF 0%, white 100%)",
    },
    {
        icon: Cog,
        title: "Operational Heavy Lifting",
        description:
            "We manage tech, compliance, support, and industry readiness seamlessly.",
        iconBg: "#67F0AE",
        borderGradient:
            "linear-gradient(to bottom, #32FF94 0%, white 100%)",
    },
];

export default function InstitutionalPartners() {
    return (
        <section
            id="institutional-partners"
            className="py-18 px-6 bg-white"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2
                    className={`
                        ${alata.className}
                        text-center
                        text-4xl
                        md:text-5xl
                        font-medium
                        leading-tight
                        text-[#111]
                    `}
                >
                    The Ultimate Tier-<span className={` ${dmSans.className}`}>1</span>{" "}
                    <span className="text-[#0055FF]">
                        Institutional Partner
                    </span>
                </h2>

                {/* Description */}
                <p
                    className="
                        mt-4
                        max-w-lg
                        mx-auto
                        text-center
                        text-[16px]
                        md:text-[18px]
                        text-[#444]
                        leading-relaxed
                        font-light
                    "
                >
                    Built for universities and faculty who refuse to dilute
                    their academic standard for digital scale.
                </p>

                {/* CTA */}
                <div className="flex justify-center mt-10">
                    <PartnerButton />
                </div>

                {/* Cards */}
                <div
                    className="
                        mt-20
                        grid
                        grid-cols-1
                        md:grid-cols-3
                        gap-6
                    "
                >
                    {BENEFITS.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            {...benefit}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}