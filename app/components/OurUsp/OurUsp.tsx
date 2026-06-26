import UspCard from "./UspCard";
import { uspCards } from "./uspData";
import { alata } from "@/app/fonts";

export default function OurUsp() {

    const allCards = [...uspCards];

    return (
        <section id="our-usp" className="relative bg-[#151515] py-12 md:py-24 md:overflow-hidden">

            <div className="relative max-w-[85rem] mx-auto px-5">

                {/* Mobile */}
                {/* Mobile */}
                <div className="md:hidden">

                    {/* Sticky Heading */}
                    <div className="bg-[#151515] pb-8 pt-2">
                        <h2
                            className={`${alata.className} text-white text-4xl font-semibold leading-tight`}
                        >
                            Built to Help
                            <br />
                            You <span className="text-[#0055FF]">Rise</span>
                        </h2>

                        <p className="text-white/60 mt-4 max-w-[220px]">
                            From Day 1 to your next role,
                            we guide you at every step.
                        </p>
                    </div>

                    {/* Stacking Cards */}
                    <div className="mt-8">
                        {allCards.map((card, index) => (
                            <div
                                key={card.title}
                                className="sticky top-20"
                                style={{
                                    zIndex: index + 1,
                                    top: `${100 + index * 18}px`,
                                }}
                            >
                                <UspCard {...card} index={index} />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Desktop */}
                <div className="hidden md:block">
                    {/* Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                        <div className="flex flex-col justify-center">
                            <h2
                                className={`${alata.className} text-white text-4xl md:text-5xl font-semibold leading-tight`}
                            >
                                Built to Help
                                <br />
                                You <span className="text-[#0055FF]">Rise</span>
                            </h2>

                            <p className="text-white/60 mt-6 max-w-[220px]">
                                From Day 1 to your next role,
                                we guide you at every step.
                            </p>
                        </div>

                        {uspCards.slice(0, 3).map((card, index) => (
                            <UspCard key={card.title} {...card} index={index} />
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
                        {uspCards.slice(3).map((card, index) => (
                            <UspCard key={card.title} {...card} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}