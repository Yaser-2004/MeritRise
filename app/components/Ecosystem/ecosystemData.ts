import {
    Flame,
    Users,
    Mic,
    Briefcase,
    type LucideIcon,
} from "lucide-react";

export type EcosystemItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    variant: "white" | "blue";
};

export const ecosystemItems: EcosystemItem[] = [
    {
        title: "Innovation Sprints",
        description: "Solve real-world corporate problem statements in cross-functional student teams.",
        icon: Flame,
        variant: "white",
    },
    {
        title: "Active Chapters",
        description: "Build a lifelong professional network via localized peer circles and digital clubs.",
        icon: Users,
        variant: "blue",
    },
    {
        title: "CXO Firesides",
        description: "Interact directly with tech founders and industry executives in live Q&A sessions.",
        icon: Mic,
        variant: "white",
    },
    {
        title: "Live Projects",
        description: "Gain day-one job readiness with mentorship from industry veterans.",
        icon: Briefcase,
        variant: "blue",
    },
    {
        title: "Social Impact",
        description: "Design tech and business solutions for real-world non-profit challenges.",
        icon: Flame,
        variant: "white",
    },
    {
        title: "Digital Wellness",
        description: "Beat fatigue with built-in mindfulness workshops and community fitness tracking.",
        icon: Flame,
        variant: "blue",
    },
    {
        title: "Hackathons",
        description: "Fast-track your resume to top hiring partners through high-energy skill competitions.",
        icon: Flame,
        variant: "white",
    },
];