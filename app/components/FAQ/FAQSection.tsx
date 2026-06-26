import FAQItem from "./FAQItem";
import { alata } from "@/app/fonts";

const faqs = [
    {
        question:
            "Will I be learning from INI professors or industry experts directly?",
        answer:
            "Yes. Depending on the program, you will learn from a combination of distinguished faculty members from premier institutions and experienced industry practitioners.",
    },
    {
        question:
            "Do I need to attend any classes on campus, or is everything online?",
        answer:
            "Most programs are delivered online. Some programs may offer an optional 3–5 day annual campus immersion. The exact duration and availability may vary by program and will be communicated in advance.",
    },
    {
        question:
            "Can I access recordings and learning materials even after the program ends?",
        answer:
            "Most programs provide extended access to recordings and learning resources for revision and continued learning.",
    },
    {
        question:
            "Are live sessions mandatory, or can I learn at my own pace?",
        answer:
            "Most programs offer flexibility through recordings while encouraging attendance in live sessions for maximum engagement.",
    },
];

export default function FAQSection() {
    return (
        <section
            className="
                py-10
                md:py-18
                px-6
                bg-white
            "
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2
                    className={`
                        ${alata.className}
                        text-center
                        text-3xl
                        md:text-5xl
                        font-medium
                        text-[#111]
                        md:mb-14
                        mb-8
                    `}
                >
                    Frequently Asked Questions
                </h2>

                {/* FAQ Container */}
                <div
                    className="
                        border
                        border-[#E6E6E6]
                        bg-white
                    "
                >
                    {faqs.map((faq) => (
                        <FAQItem
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}