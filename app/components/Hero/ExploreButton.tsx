"use client";

import { Button } from "@/components/ui/button";

export function ExploreButton() {
    return (
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
    );
}

export function TalkToCounsellorButton() {
    return (
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
    );
}
