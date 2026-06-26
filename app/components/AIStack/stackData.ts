import {
    Gauge,
    Bot,
    ShieldCheck,
    Target,
    Rocket,
    UserCheck
} from "lucide-react";

export const stackCards = [
    {
        title: "AI-Powered LMS",
        variant: "blue",
        items: [
            {
                icon: Gauge,
                title: "Adaptive Pacing",
                description:
                    "Dynamically shifts speed based on your real-time understanding.",
            },
            {
                icon: Bot,
                title: "24/7 AI Tutor",
                description:
                    "Instant, deep-dive conceptual clarity on complex frameworks.",
            },
            {
                icon: ShieldCheck,
                title: "Rigorous Exams",
                description:
                    "Proctored assessments that preserve Tier-1 grading integrity.",
            },
        ],
    },
    {
        title: "AI Career Readiness",
        variant: "white",
        items: [
            {
                icon: Target,
                title: "Skill Gap Mapping",
                description:
                    "Matches your coursework instantly against active global job demands.",
            },
            {
                icon: UserCheck,
                title: "AI Mock Interviews",
                description:
                    "Live, voice-based tech and management prep with data-backed scores.",
            },
            {
                icon: Rocket,
                title: "Direct-to-Hire",
                description:
                    "Skips the resume pile to connect top performers directly with corporate networks.",
            },
        ],
    },
];