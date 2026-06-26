import EcosystemCard from "./EcosystemCard";
import { ecosystemItems } from "./ecosystemData";
import { alata } from "@/app/fonts";

export default function Ecosystem() {
    const firstRow = ecosystemItems.slice(0, 4);
    const secondRow = ecosystemItems.slice(4);

    const allCards = [...firstRow, ...secondRow];

    return (
        <section
            id="our-ecosystem"
            className="bg-white py-12 md:py-18 px-6"
        >
            <div className="max-w-[85rem] mx-auto">

                {/* Heading */}

                <h2 className={`text-center text-4xl md:text-[42px] md:text-5xl font-semibold ${alata.className}`}>
                    The Beyond Screens{" "}
                    <span className="text-[#0055FF]">
                        Ecosystem
                    </span>
                </h2>

                <h3 className="text-center text-[20px] md:text-[24px] font-medium text-[#222] mt-3 md:mt-6">
                    Learning That Connects, Builds, and Leads
                </h3>

                <p className="max-w-4xl mx-auto text-center text-[17px] md:text-[18px] text-[#555] leading-relaxed mt-3 md:mt-8">
                    Traditional online degrees feel isolated. At Meritrise.ai,
                    we break the screen barrier by embedding a central
                    co-curricular framework across all our programs.
                </p>

                {/* Mobile Stacking Cards */}
                <div className="md:hidden relative mt-16">
                    {allCards.map((item, index) => (
                        <div
                            key={item.title}
                            className="sticky top-20 mb-6"
                            style={{
                                zIndex: index + 1,
                                top: `${80 + index * 80}px`,
                            }}
                        >
                            <EcosystemCard {...item} index={index} />
                        </div>
                    ))}
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-20">
                        {firstRow.map((item, index) => (
                            <EcosystemCard
                                key={item.title}
                                {...item}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
                        {secondRow.map((item, index) => (
                            <EcosystemCard
                                key={item.title}
                                {...item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}