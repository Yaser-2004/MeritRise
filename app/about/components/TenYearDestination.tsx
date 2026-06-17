import { instrumentSerif } from "../../layout";

/* Data */
const STATS = [
    { value: "50M+", label: "Learners" },
    { value: "100+", label: "Elite Institutions" },
    { value: "10,000+", label: "Global Employers" },
];

/* Section */
export default function TenYearDestination() {
    return (
        <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} text-center font-light text-gray-900 tracking-tight mb-6 leading-tight`}
                    style={{ fontSize: "clamp(30px, 4.5vw, 58px)" }}
                >
                    The{" "}
                    <em className="text-[#0055ee] italic font-light">10-Year</em>
                    {" "}Destination
                </h2>

                {/* Subheading */}
                <p className="text-center text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto mb-20">
                    Our goal is to become the trusted, common language of verified
                    credentials, uniting 50 million learners, 100 elite institutions,
                    and 10,000 global employers.
                </p>

                {/* Stats row with vertical pipe dividers */}
                <div className="flex items-stretch justify-center divide-x divide-gray-300 mb-24">
                    {STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex-1 flex flex-col items-center px-8 py-4"
                        >
                            <span
                                className={`${instrumentSerif.className} font-light text-gray-900 tracking-tight leading-none mb-3`}
                                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                            >
                                {stat.value}
                            </span>
                            <span className="text-[14px] text-gray-500 tracking-tight">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Tagline */}
                <p
                    className={`${instrumentSerif.className} text-center font-light text-gray-900 tracking-tight leading-snug`}
                    style={{ fontSize: "clamp(20px, 2.8vw, 36px)" }}
                >
                    Same rigorous{" "}
                    <em className="text-[#2255ee] italic">curriculum</em>. Same elite{" "}
                    <em className="text-[#2255ee] italic">standards</em>.
                    <br />
                    Built for the minds that{" "}
                    <em className="text-[#2255ee] italic">deserve a seat</em>.
                </p>

            </div>
        </section>
    );
}