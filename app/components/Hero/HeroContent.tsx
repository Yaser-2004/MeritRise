import { Button } from "@/components/ui/button";
import { alata } from "@/app/fonts";

export function HeroText() {
    return (
        <>
            <h1 className={`${alata.className} max-md:text-center text-white font-medium leading-[1.15] text-3xl md:text-4xl lg:text-6xl lg:min-w-[600px]`}>
                Learn From India's

                <span className="block text-[#0055FF] mt-2">
                    Leading Institutions
                </span>
            </h1>

            <p className="mt-4 max-md:text-center md:mt-8 text-white/70 text-base md:text-lg leading-relaxed max-w-[600px]">
                Bringing IIT, IIM, and Tier-1 academic excellence
                to every learner, because potential, not postcode,
                should define opportunity.
            </p>
        </>
    );
}

export function HeroButtons({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-col md:flex-row gap-5 ${className}`}>
            <Button
                className="
                bg-[#0055FF]
                hover:bg-[#0047d8]
                hover:cursor-pointer
                text-white
                rounded-full
                px-8
                h-14
            "
                onClick={() => document.getElementById("upcoming-programs")?.scrollIntoView({ behavior: "smooth" })}
            >
                Explore Upcoming Programs
            </Button>

            <Button
                variant="outline"
                className="
                border-white/60
                text-white
                bg-transparent
                rounded-full
                h-14
                px-8
                hover:bg-white
                hover:text-[#151515]
                hover:cursor-pointer
            "
                onClick={() => window.open("tel:+919555870366", "_self")}
            >
                Talk to Counsellor
            </Button>
        </div>
    );
}

export default function HeroContent() {
    return (
        <div>
            <HeroText />
            <HeroButtons className="mt-10" />
        </div>
    );
}