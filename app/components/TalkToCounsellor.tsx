import { ArrowRight } from "lucide-react";

export default function TalkToCounsellor() {
    return (
        <button
            className="
                                    h-12
                                    md:h-14
                                    px-6
                                    md:px-8
                                    rounded-full
                                    bg-white
                                    text-[#0055FF]
                                    text-sm
                                    md:text-base
                                    font-medium
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    md:gap-3
                                    w-full
                                    sm:w-auto
                                    transition-all
                                    duration-300
                                    hover:text-white
                                    hover:bg-[#0055FF]
                                    hover:cursor-pointer
                                    z-50
                                "
            onClick={() => window.open("tel:+919555870366", "_self")}
        >
            Talk to Counsellor
            <ArrowRight size={18} strokeWidth={2.5} />
        </button>
    )
}