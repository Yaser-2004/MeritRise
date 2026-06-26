"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({
    question,
    answer,
}: FAQItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={cn(
                "border-b border-[#E6E6E6] transition-all duration-300",
                open && "bg-[#151515]"
            )}
        >
            <button
                onClick={() => setOpen(!open)}
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-5
                    md:px-10
                    py-4
                    md:py-7
                    cursor-pointer
                "
            >
                <h3
                    className={cn(
                        "text-[16px] md:text-[22px] font-medium leading-relaxed pr-8 transition-colors duration-300",
                        open ? "text-white" : "text-[#222]"
                    )}
                >
                    {question}
                </h3>

                <ChevronDown
                    size={28}
                    strokeWidth={1.6}
                    className={cn(
                        "transition-all duration-300",
                        open
                            ? "rotate-180 text-white"
                            : "text-[#333]"
                    )}
                />
            </button>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden">
                    <p
                        className={cn(
                            "px-10 pb-8 text-[16px] md:text-[18px] leading-relaxed max-w-5xl transition-colors duration-300",
                            open
                                ? "text-white/80"
                                : "text-[#666]"
                        )}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}