"use client"

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import WaitListModal from "./WaitlistModal";

export function WaitListButton({ variant }: { variant: "default" | "blue" }) {
    const [showWaitlist, setShowWaitlist] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowWaitlist(true)}
                className={`
                                mt-8 lg:mt-10
                                w-fit
                                h-14
                                px-7
                                rounded-full
                                font-medium
                                flex
                                items-center
                                gap-3
                                transition-all
                                duration-300
                                hover:scale-[1.03]
                                ${variant === "blue"
                        ? "bg-white text-[#0055FF]"
                        : "bg-[#0055FF] text-white"
                    }
                            `}
            >
                Join Waitlist

                <ArrowRight size={18} />
            </button>

            <WaitListModal
                isOpen={showWaitlist}
                onClose={() => setShowWaitlist(false)}
            />

        </>
    );
}