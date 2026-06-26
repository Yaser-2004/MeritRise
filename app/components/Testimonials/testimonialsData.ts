// testimonialsData.ts
import mayank from "@/app/assets/Reviews/Mayank.png";
import amisha from "@/app/assets/Reviews/Amisha.png";
import ananya from "@/app/assets/Reviews/Ananya.png";
import balaji from "@/app/assets/Reviews/Balaji.png";
import simran from "@/app/assets/Reviews/Simran.png";

export type Testimonial = {
    name: string;
    program: string;
    image: string;
    quote: string;
    variant: "blue" | "purple" | "green";
};

export const testimonials: Testimonial[] = [
    {
        name: "Mayank",
        program: "Online MSc Data Science",
        image: mayank.src,
        quote:
            "I have over 10 years of experience in IT and work with Google. Online MSc in Data Science helped me strengthen my data science skills and expand my knowledge for career growth.",
        variant: "blue",
    },
    {
        name: "Amisha Alok",
        program: "Online MBA",
        image: amisha.src,
        quote:
            "With 2 years of experience in sales, I wanted an MBA in Marketing without leaving my job. The flexibility of online program helped me balance work and studies while advancing my career.",
        variant: "purple",
    },
    {
        name: "Ananya",
        program: "Online PGCP Business Analytics",
        image: ananya.src,
        quote:
            "After completing my master's degree in business, I wanted to move into business analytics. The certification program gave me the flexibility to learn at my own pace while building industry-relevant skills.",
        variant: "blue",
    },
    {
        name: "Balaji TN",
        program: "Online PGCP LSCM",
        image: balaji.src,
        quote:
            "With 2 years of experience in the supply chain industry, I wanted to deepen my expertise. The flexible certification program helped me upskill while comfortably managing my professional commitments.",
        variant: "green",
    },
    {
        name: "Thakur Simran Sunil",
        program: "Online MSc in Business Analytics",
        image: simran.src,
        quote:
            "I chose the Online MSc in Business Analytics to transition from aeronautical engineering into business analytics. The curriculum, live sessions, and mentorship have helped me build strong industry-focused skills.",
        variant: "blue",
    },
];