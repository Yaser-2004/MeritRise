import WhyChooseCard from "./WhyChooseCard";
import { whyChooseCards } from "./whyChooseData";
import { alata, stixTwoText } from "@/app/fonts";

export default function WhyChoose() {
    return (
        <section id="why-choose" className="relative bg-[#151515] py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid lg:grid-cols-[0.5fr_1fr] gap-16">

                    {/* LEFT — sticks alongside the stack, releases naturally once it ends */}
                    <div className="lg:block lg:sticky lg:top-26 lg:self-start">
                        <h2 className={`text-white text-4xl lg:text-5xl leading-tight ${alata.className}`}>
                            Why choose
                            <br />
                            <span className={`italic text-[#0055FF] ${stixTwoText.className}`}>
                                MeritRise?
                            </span>
                        </h2>
                        <p className="mt-4 md:mt-8 text-white/70 max-w-sm leading-8">
                            Everything you need to learn from top
                            institutions, build practical skills, and move
                            closer to your career goals.
                        </p>
                    </div>

                    {/* MOBILE — unchanged */}
                    <div className="lg:hidden space-y-6">
                        <WhyChooseCard {...whyChooseCards[0]} />
                        <WhyChooseCard {...whyChooseCards[1]} variant="blue" />
                        <WhyChooseCard {...whyChooseCards[2]} />
                    </div>

                    {/* DESKTOP — natural sticky stack, no spacer track, no overflow-hidden */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative" >
                            {whyChooseCards.map((card, i) => (
                                <div
                                    key={card.id ?? i}
                                    className={`sticky top-26 ${i !== whyChooseCards.length - 1 ? "mb-20" : ""
                                        }`}

                                    style={{
                                        zIndex: i + 1,
                                        top: 100 + i * 80
                                    }}

                                >
                                    <WhyChooseCard
                                        {...card}
                                        variant={i === 1 ? "blue" : undefined}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}