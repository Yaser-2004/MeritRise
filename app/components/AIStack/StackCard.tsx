import { LucideIcon } from "lucide-react";
import { stixTwoText } from "@/app/fonts";

interface Item {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface StackCardProps {
    title: string;
    items: Item[];
    variant: "blue" | "white";
}

const borderGradient = (variant: "blue" | "white") =>
    variant === "blue"
        ? "linear-gradient(45deg, #0055FF 0%, white 50%, #0055FF 100%)"
        : "linear-gradient(135deg, #0055FF 0%, white 50%, #0055FF 100%)";

export default function StackCard({
    title,
    items,
    variant,
}: StackCardProps) {
    return (
        <div
            className={`
        relative
        rounded-[20px]
        p-[2px]
        overflow-hidden
        h-full
      `}
            style={{
                background: borderGradient(variant),
            }}
        >
            <div
                className={`
          rounded-[19px]
          h-full
          px-9
          py-8
          ${variant === "blue"
                        ? "bg-[#D8EDFF]"
                        : "bg-white"
                    }
        `}
            >
                <h3 className="text-[28px] font-medium text-center text-[#222] mb-10">
                    {title}
                </h3>

                <div className="space-y-7">
                    {items.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.title}>
                                <div className="flex gap-4">
                                    <Icon
                                        size={20}
                                        className="text-[#0055FF] shrink-0 mt-1"
                                    />

                                    <div>
                                        <h4 className={`text-[#0055FF] italic font-regular text-[20px] ${stixTwoText.className}`}>
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-[#444] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {idx !== items.length - 1 && (
                                    <div
                                        className="
                      h-px
                      mt-7
                      bg-gradient-to-r
                      from-transparent
                      via-[#D8E3EA]
                      to-transparent
                    "
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}