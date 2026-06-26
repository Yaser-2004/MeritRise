"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoUpButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed
                bottom-6
                left-6
                z-50
                p-3
                rounded-full
                bg-[#0055ff]
                hover:cursor-pointer
                text-white
                transition-all
                duration-300
                hover:scale-105
                ease-in-out
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
            <ArrowUp size={24} strokeWidth={2.5} />
        </button>
    );
}