import { instrumentSerif } from "../../layout";

export default function MissionSection() {
    return (
        <section className="w-full bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} text-center font-light text-gray-900 tracking-tight mb-10`}
                    style={{ fontSize: "clamp(70px, 4.5vw, 56px)" }}
                >
                    The{" "}
                    <em className="text-[#005DFF] italic font-light">Mission</em>
                </h2>

                {/* Card */}
                <div className="relative rounded-b-2xl bg-white/80 border border-t-6 border-t-[#005DFF] border-gray-500/80 px-14 py-16"
                    style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.04)" }}
                >
                    {/* Para 1 */}
                    <p className="text-[28px] text-gray-800 leading-relaxed mb-6">
                        Talent is distributed equally across India; opportunity is not. For
                        too long, elite education and powerful networks have been rationed by
                        geography and economics.
                    </p>

                    {/* Para 2 — MeritRise.ai in serif/italic */}
                    <p className="text-[28px] text-gray-800 leading-relaxed">
                        <span className="font-serif italic font-semibold text-gray-900">
                            MeritRise.ai
                        </span>{" "}
                        is fixing this infrastructure failure. We bring uncompromising,
                        Tier-1 aligned academic excellence straight to your screen—because
                        your potential, not your postcode, should define your future.
                    </p>
                </div>

            </div>
        </section>
    );
}