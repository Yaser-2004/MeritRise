import { instrumentSerif } from "@/app/fonts";

/* Data */
const PILLARS = [
    {
        title: "Tier-1 Rigor",
        description:
            "Bringing the exact academic standards, curriculum, and integrity of India's top institutions to a digital-first platform.",
    },
    {
        title: "Outcome-Linked AI",
        description:
            "Driving your journey with adaptive pacing and automated career-readiness tech built for active global job demands.",
    },
    {
        title: "Beyond Screens",
        description:
            "Eliminating online learning isolation via centralized co-curriculars, cross-functional innovation sprints, and live CXO networking.",
    },
];

/* Card */
function PillarCard({ title, description }: { title: string; description: string }) {
    return (
        <div
            className="flex-1 rounded-xl bg-white/80 border border-gray-200 p-14 pb-20"
            style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.04)" }}
        >
            <h3 className={`${instrumentSerif.className} text-[30px] font-light text-gray-900 tracking-tight mb-6`}>
                {title}
            </h3>
            <p className="text-[19px] text-gray-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

/* Blue square connector */
function Connector() {
    return (
        <div className="flex items-center self-center shrink-0">
            <div className="w-[14px] h-[14px] bg-[#2255ee]" />
        </div>
    );
}

/* Section */
export default function EcosystemPillars() {
    return (
        <section className="w-full py-24 px-6 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} text-center font-light text-gray-900 tracking-tight mb-5`}
                    style={{ fontSize: "clamp(70px, 4.5vw, 58px)" }}
                >
                    The{" "}
                    <em className="text-[#2255ee] italic font-light">Ecosystem</em>
                </h2>

                {/* Subheading */}
                <p className="text-center text-xl text-gray-800 leading-relaxed max-w-5xl mx-auto mb-16">
                    We partner with top-tier institutions to deliver high-impact
                    undergraduate, postgraduate, and professional programs through three
                    core pillars.
                </p>

                {/* Cards row with blue square connectors between them */}
                <div className="flex flex-col md:flex-row items-stretch gap-0">
                    {PILLARS.map((pillar, i) => (
                        <div key={pillar.title} className="flex flex-row md:contents items-center">
                            <PillarCard title={pillar.title} description={pillar.description} />
                            {i < PILLARS.length - 1 && <Connector />}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}