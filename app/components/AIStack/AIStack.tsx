import StackCard from "./StackCard";
import { stackCards } from "./stackData";
import { alata, stixTwoText } from "@/app/fonts";

export default function AIStack() {
    return (
        <section id="ai-architecture" className="py-18 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}

                <h2 className={`text-center text-3xl md:text-5xl font-semibold text-[#111] ${alata.className}`}>
                    The Custom AI Tech Stack
                </h2>

                <p
                    className={`
            mt-4
            text-center
            text-[#0055FF]
            italic
            text-2xl
            md:text-3xl
            ${stixTwoText.className}
          `}
                >
                    Your Outcome Linked Engine
                </p>

                {/* Connector */}

                <div className="hidden md:flex justify-center mt-4">
                    <svg
                        width="520"
                        height="60"
                        viewBox="0 0 520 60"
                        fill="none"
                        className="overflow-visible"
                    >
                        <path
                            d="M260 0V15"
                            stroke="#444"
                            strokeWidth="1.5"
                            strokeDasharray="5 5"
                        />

                        <path
                            d="M260 15
                 C260 35 240 35 220 35
                 H40
                 C20 35 20 55 20 60"
                            stroke="#444"
                            strokeWidth="1.5"
                            strokeDasharray="5 5"
                            fill="none"
                        />

                        <path
                            d="M260 15
                 C260 35 280 35 300 35
                 H480
                 C500 35 500 55 500 60"
                            stroke="#444"
                            strokeWidth="1.5"
                            strokeDasharray="5 5"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 gap-14 max-sm:mt-10">
                    {stackCards.map((card) => (
                        <StackCard
                            key={card.title}
                            title={card.title}
                            items={card.items}
                            variant={card.variant as "blue" | "white"}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}