import { stixTwoText } from "@/app/fonts";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconBg: string;
    borderGradient: string;
}

export default function BenefitCard({
    icon: Icon,
    title,
    description,
    iconBg,
    borderGradient,
}: BenefitCardProps) {
    return (
        <div
            className="
                p-[4px]
                h-full
                hover:-translate-y-2
                transition-all
                duration-300
            "
            style={{
                background: borderGradient,
            }}
        >
            <div
                className="
                    bg-white
                    h-full
                    min-h-[300px]
                    md:min-h-[380px]
                    px-10
                    py-8
                    md:py-12
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >
                {/* Icon */}
                <div
                    className="
                        w-[72px]
                        h-[72px]
                        rounded-full
                        flex
                        items-center
                        justify-center
                        mb-6
                        md:mb-10
                    "
                    style={{
                        backgroundColor: iconBg,
                    }}
                >
                    <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-[#222]"
                    />
                </div>

                {/* Title */}
                <h3
                    className={`
                        text-[20px]
                        md:text-[22px]
                        text-[#222]
                        mb-4
                        md:mb-6
                        ${stixTwoText.className}
                    `}
                >
                    <em>{title}</em>
                </h3>

                {/* Description */}
                <p
                    className="
                        text-[17px]
                        leading-[1.6]
                        text-[#444]
                        max-w-[280px]
                        font-light
                    "
                >
                    {description}
                </p>
            </div>
        </div>
    );
}