import PhilosophyCard from "./PhilosophyCard";
import { philosophyCards } from "./dataPhilosophy";

export default function PhilosophyCards() {
    return (
        <>
            {/* Mobile stacking */}
            <div className="md:hidden relative">
                {philosophyCards.map((card, index) => (
                    <PhilosophyCard
                        key={card.title}
                        {...card}
                        index={index}
                    />
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
                {philosophyCards.map((card, index) => (
                    <PhilosophyCard
                        key={card.title}
                        {...card}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
}