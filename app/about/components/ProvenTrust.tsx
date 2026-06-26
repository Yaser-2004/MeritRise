import { instrumentSerif } from "@/app/fonts";

/* Data */
const STATS = [
    {
        value: "50+",
        label: "Partner Universities Globally",
        sublabel: null,
        bg: "#ddeeff",      // soft blue
        color: "#1a3a6e",
    },
    {
        value: "6,000+",
        label: "Learners Enrolled",
        sublabel: "(Past 12 Months)",
        bg: "#e0d9f7",      // soft purple
        color: "#3b2a7e",
    },
    {
        value: "₹120Cr+",
        label: "Gross Fee Value Collected",
        sublabel: "(Past 12 Months)",
        bg: "#c8f0e4",      // soft mint
        color: "#0d5c45",
        underlineLabel: true,
    },
];

/* Stat card */
function StatCard({
    value,
    label,
    sublabel,
    bg,
    color,
    underlineLabel,
}: {
    value: string;
    label: string;
    sublabel: string | null;
    bg: string;
    color: string;
    underlineLabel?: boolean;
}) {
    return (
        <div
            className="flex-1 rounded-lg px-10 py-12 flex flex-col items-center justify-top"
            style={{ background: bg }}
        >
            {/* Big stat number */}
            <p
                className={`${instrumentSerif.className} font-light tracking-tight leading-none mb-5`}
                style={{ fontSize: "clamp(40px, 5vw, 60px)", color }}
            >
                {value}
            </p>

            {/* Label */}
            <p
                className="text-xl leading-snug tracking-tight"
                style={{
                    color,
                }}
            >
                {label}
            </p>

            {/* Sublabel */}
            {sublabel && (
                <p className="text-[12px] mt-1" style={{ color }}>
                    {sublabel}
                </p>
            )}
        </div>
    );
}

/* Section */
export default function ProvenTrust() {
    return (
        <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} text-center font-light text-gray-900 tracking-tight mb-3`}
                    style={{ fontSize: "clamp(70px, 4.5vw, 56px)" }}
                >
                    Proven{" "}
                    <em className="text-[#0055ee] italic font-light">Trust</em>
                </h2>

                {/* Subheading — "LearningShala" in serif */}
                <p className="text-center text-xl text-gray-800 leading-relaxed max-w-5xl mx-auto mb-16">
                    We aren't testing an unproven concept. MeritRise.ai is backed by the
                    robust infrastructure of{" "}
                    <span
                        className={`${instrumentSerif.className} text-gray-900 tracking-tight`}
                        style={{ fontSize: "1.4em" }}
                    >
                        LearningShala
                    </span>
                    , one of India's fastest-growing higher-education ecosystems.
                </p>

                {/* Stat cards */}
                <div className="flex flex-col sm:flex-row gap-5">
                    {STATS.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>

            </div>
        </section>
    );
}