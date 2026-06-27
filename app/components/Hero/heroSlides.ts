import type { StaticImageData } from "next/image";
import heroImage1 from "@/app/assets/mrhero1.webp";
import heroImage2 from "@/app/assets/studentCTAman.webp";
import heroImage3 from "@/app/assets/group.webp";

export interface HeroSlide {
    image: StaticImageData;
    eyebrow?: string;
    subtitle?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
    {
        image: heroImage1,
        eyebrow: "Learn without limits",
        subtitle: "Education designed for the modern learner",
    },
    {
        image: heroImage2,
        eyebrow: "Build skills that matter",
        subtitle: "AI-powered learning for real-world growth",
    },
    {
        image: heroImage3,
        eyebrow: "Grow beyond the classroom",
        subtitle: "Learning, mentorship, and opportunity in one place",
    },
];

export const HERO_IMAGE_SIZES = "(min-width: 1024px) 50vw, 100vw";
