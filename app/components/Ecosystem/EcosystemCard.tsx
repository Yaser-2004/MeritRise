import { LucideIcon } from "lucide-react";

interface EcosystemCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    variant: "white" | "blue";
    index: number;
}

const cardStyles = {
    white: "bg-white",
    blue: "bg-gradient-to-b from-[#D8EDFF] to-white",
};

export default function EcosystemCard({
    title,
    description,
    icon: Icon,
    variant,
    index,
}: EcosystemCardProps) {
    return (
        <div
            className="
                rounded-[22px]
                p-[2px]
                min-h-[190px]
                bg-gradient-to-b
                hover:-translate-y-1
                transition-all
                duration-300
                from-[#0055FF]
                to-white
            "
        >
            <div
                className={`
                    rounded-[20px]
                    p-10
                    pr-5
                    h-full
                    ${cardStyles[variant]}
                    `}
            >
                <div className="flex items-center gap-3 mb-4">
                    <Icon
                        size={25}
                        className="text-[#555]"
                        strokeWidth={1.8}
                    />

                    <h3 className="text-[20px] font-medium text-[#333]">
                        {title}
                    </h3>
                </div>

                <p className="text-[16px] text-[#666] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}