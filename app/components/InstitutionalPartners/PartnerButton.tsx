"use client";

import { Button } from "@/components/ui/button";

export default function PartnerButton() {
    return (
        <Button
            className="h-16 px-10 rounded-full bg-[#0055FF] hover:bg-[#0047D9] text-white text-lg"
            onClick={() =>
                document
                    .getElementById("partner-with-us")
                    ?.scrollIntoView({ behavior: "smooth" })
            }
        >
            Partner With Us (Institutions)
        </Button>
    );
}