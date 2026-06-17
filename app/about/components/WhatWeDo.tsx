import { instrumentSerif } from "../../layout";

export default function WhatWeDo() {
    return (
        <section className="w-full bg-white pb-24 px-6">
            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <h2
                    className={`${instrumentSerif.className} font-light text-gray-900 tracking-tight mb-10`}
                    style={{ fontSize: "clamp(70px, 4.5vw, 56px)" }}
                >
                    What{" "}
                    <em className="text-[#2255ee] italic font-light">We</em>
                    {" "}Do
                </h2>

                {/* Para 1 */}
                <p className="text-[28px] text-gray-800 leading-relaxed mb-6">
                    MeritRise.ai is a higher-education enablement platform that partners
                    with elite institutions to bring Tier-1 aligned academic programs
                    directly to your screen.
                </p>

                {/* Para 2 */}
                <p className="text-[28px] text-gray-800 leading-relaxed">
                    By combining institute-backed rigor with adaptive AI technology and a
                    centralized co-curricular network, we turn ambition into global career
                    outcomes, making world-class education accessible to everyone,
                    everywhere.
                </p>

            </div>
        </section>
    );
}