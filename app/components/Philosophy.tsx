// "use client";
// import { instrumentSerif } from "../layout";

// export default function Philosophy() {
//     return (
//         <section className="relative overflow-hidden py-16 px-6 text-center">
//             <div className="absolute right-40 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,_#89FFDC_0%,_transparent_70%)] blur-[70px]" />
//             <div className="absolute left-40 bottom-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_#9C93FF_0%,_transparent_70%)] blur-[120px]" />
//             {/* Label */}
//             <p className="text-xl font-medium mb-3">
//                 Our Philosophy
//             </p>

//             {/* Heading */}
//             <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl font-light text-gray-900 mb-24 leading-tight`}>
//                 Talent is Universal.{" "}
//                 <em className="text-blue-600 italic font-normal">Opportunity</em> is
//                 Not.
//             </h2>

//             {/* Cards row — hidden on mobile, shown sm+ */}
//             <div className="relative max-w-6xl mx-auto hidden sm:block">
//                 {/* ── Top arrow: spans card1 center → card2 center, above the cards ── */}
//                 {/*
//           The cards row has gap-5 (20px). Each card is flex-1 inside a 3-col flex.
//           Arrow sits above the cards: negative top offset pulls it up.
//           left: starts at ~1/6 of the row (card1 center), right: ends at ~1/2 (card2 center).
//           We use left/width to control horizontal span.
//         */}
//                 <div
//                     className="absolute -z-10 pointer-events-none"
//                     style={{
//                         /* Horizontally: card1-center to card2-center ≈ left 16.6% to 50% */
//                         left: "16.6%",
//                         // width: "33.3%",
//                         /* Vertically: sits above the card tops */
//                         top: "-80px",
//                         // height: "121px",
//                     }}
//                 >
//                     <svg
//                         width="100%"
//                         height="100%"
//                         viewBox="0 0 411 121"
//                         fill="none"
//                         preserveAspectRatio="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M4.48828 118.475C4.48828 118.475 60.9883 3.02581 200.988 5.02569C340.988 7.02556 397.488 118.475 397.488 118.475"
//                             stroke="#005DFF"
//                             strokeWidth="10"
//                         />
//                         <line
//                             y1="-5"
//                             x2="31.9531"
//                             y2="-5"
//                             transform="matrix(0.948981 0.315333 0.315333 -0.948981 361.83 95.4402)"
//                             stroke="#005EFF"
//                             strokeWidth="10"
//                         />
//                         <line
//                             x1="406.183"
//                             y1="81.1964"
//                             x2="395.183"
//                             y2="111.196"
//                             stroke="#005EFF"
//                             strokeWidth="10"
//                         />
//                     </svg>
//                 </div>

//                 {/* ── Bottom arrow: spans card2 center → card3 center, below the cards ── */}
//                 <div
//                     className="absolute -z-10 pointer-events-none"
//                     style={{
//                         left: "50%",
//                         /* Vertically: sits below the card bottoms; adjust bottom offset to taste */
//                         bottom: "-80px",

//                     }}
//                 >
//                     <svg
//                         width="100%"
//                         height="100%"
//                         viewBox="0 0 402 121"
//                         fill="none"
//                         preserveAspectRatio="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="M4.48828 2.26447C4.48828 2.26447 60.9883 117.714 200.988 115.714C340.988 113.714 397.488 2.26447 397.488 2.26447"
//                             stroke="#005DFF"
//                             strokeWidth="10"
//                         />
//                         <line
//                             x1="389.685"
//                             y1="17.1093"
//                             x2="358.724"
//                             y2="25.0083"
//                             stroke="#005EFF"
//                             strokeWidth="10"
//                         />
//                         <line
//                             x1="390.754"
//                             y1="13.306"
//                             x2="390.489"
//                             y2="45.258"
//                             stroke="#005EFF"
//                             strokeWidth="10"
//                         />
//                     </svg>
//                 </div>

//                 {/* Cards */}
//                 <div className="flex flex-row gap-10 justify-center">
//                     {/* Card 1: Talent */}
//                     <div
//                         className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
//                         style={{
//                             //radial gradient origination from bottom right corner
//                             background: "radial-gradient(circle at bottom right, #a7d2fdff 0%, #D9EEFF 100%)",
//                         }}
//                     >
//                         <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#0C447C] mb-6`}>Talent</h3>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             Talent is distributed equally in India. Opportunity is not!
//                         </p>
//                     </div>

//                     {/* Card 2: Access */}
//                     <div
//                         className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
//                         style={{
//                             background: "radial-gradient(circle at top right, #c7c2fbff 0%, #DDDAFF 100%)",
//                         }}
//                     >
//                         <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#291CBB] mb-6`}>
//                             Access
//                         </h3>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             Geography and institutional access restrict opportunity.
//                         </p>
//                     </div>

//                     {/* Card 3: Meritrise */}
//                     <div
//                         className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
//                         style={{
//                             background: "radial-gradient(circle at bottom left, #50f4c0ff 0%, #CDFFEF 100%)",
//                         }}
//                     >
//                         <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#085041] mb-6`}>
//                             Meritrise
//                         </h3>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             We are closing this infrastructure gap by removing geographical and economic barriers to Tier-1 education.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile: stacked cards, no arrows */}
//             <div className="sm:hidden flex flex-col gap-5 max-w-sm mx-auto">
//                 <div
//                     className="rounded-2xl p-7 text-left"
//                     style={{
//                         background: "linear-gradient(135deg, #dbeafe 0%, #c7d7f5 100%)",
//                     }}
//                 >
//                     <h3 className="text-xl font-medium text-blue-700 mb-3">Talent</h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                         Talent is distributed equally in India. Opportunity is not!
//                     </p>
//                 </div>
//                 <div
//                     className="rounded-2xl p-7 text-left"
//                     style={{
//                         background: "linear-gradient(135deg, #e0d7f8 0%, #d5c8f5 100%)",
//                     }}
//                 >
//                     <h3 className="text-xl font-medium text-purple-700 mb-3">Access</h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                         Geography and institutional access restrict opportunity.
//                     </p>
//                 </div>
//                 <div
//                     className="rounded-2xl p-7 text-left"
//                     style={{
//                         background: "linear-gradient(135deg, #d1fae5 0%, #b9f0d8 100%)",
//                     }}
//                 >
//                     <h3 className="text-xl font-medium text-emerald-700 mb-3">
//                         Meritrise
//                     </h3>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                         We are closing this infrastructure gap by removing{" "}
//                         <strong className="font-semibold text-gray-800">geographical</strong>{" "}
//                         and{" "}
//                         <strong className="font-semibold text-gray-800">economic</strong>{" "}
//                         barriers to Tier-1 education.
//                     </p>
//                 </div>
//             </div>

//             {/* Footer tagline — extra top margin to clear the bottom arrow overhang */}
//             <p className="mt-24 sm:mt-28 text-xl leading-relaxed">
//                 Same rigorous curriculum, same elite standards, built
//                 <br className="hidden sm:block" /> digitally for the minds that{" "}
//                 <em className={`text-2xl text-blue-600 italic ${instrumentSerif.className}`}>deserve a seat.</em>
//             </p>
//         </section>
//     );
// }


"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { instrumentSerif } from "../layout";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null); // ← pin THIS, not the section
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const mask1Ref = useRef<HTMLDivElement>(null);
    const mask2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(card1Ref.current, { opacity: 0, y: 30 });
            gsap.set(card2Ref.current, { opacity: 0, y: 30 });
            gsap.set(card3Ref.current, { opacity: 0, y: 30 });

            const setMaskVar = (el: HTMLDivElement | null, val: number) => {
                if (el) el.style.setProperty("--p", `${val}%`);
            };
            setMaskVar(mask1Ref.current, 100);
            setMaskVar(mask2Ref.current, 100);

            const mask1Proxy = { p: 100 };
            const mask2Proxy = { p: 100 };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current, // outer section defines scroll length
                    start: "top top",
                    end: "bottom bottom",        // section height drives the scroll distance
                    scrub: 1,
                },
            });

            // Step 1 — Card 1
            tl.to(card1Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

            // Step 2 — Arrow 1 reveals
            tl.to(mask1Proxy, {
                p: 0, duration: 2, ease: "none",
                onUpdate() { setMaskVar(mask1Ref.current, mask1Proxy.p); },
            }, "+=0.3");

            // Step 3 — Card 2
            tl.to(card2Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, ">");

            // Step 4 — Arrow 2 reveals
            tl.to(mask2Proxy, {
                p: 0, duration: 2, ease: "none",
                onUpdate() { setMaskVar(mask2Ref.current, mask2Proxy.p); },
            }, "+=0.3");

            // Step 5 — Card 3
            tl.to(card3Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, ">");

            tl.to({}, { duration: 0.5 });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        /*
         * Outer section is TALL (500vh) on desktop to create the scroll distance.
         * The inner stickyRef div is position:sticky so it stays in view.
         * No GSAP pin at all → zero layout shift, zero jumping.
         */
        <section id="philosophy" ref={sectionRef} className="relative h-auto sm:h-[500vh]">
            {/* Sticky inner container — this is what the user actually sees */}
            <div
                ref={stickyRef}
                className="sm:sticky top-0 overflow-hidden py-16 px-6 text-center min-h-screen flex flex-col justify-center will-change-transform"
            >
                {/* Background blobs */}
                <div className="absolute right-40 top-10 -z-10 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,_#89FFDC_0%,_transparent_70%)] blur-[70px] pointer-events-none" />
                <div className="absolute left- bottom-20 -z-10 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_#9C93FF_0%,_transparent_70%)] blur-[120px] pointer-events-none" />

                {/* Label */}
                <p className="text-xl font-medium mb-3">Our Philosophy</p>

                {/* Heading */}
                <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl font-light text-gray-900 mb-24 leading-tight`}>
                    Talent is Universal.{" "}
                    <em className="text-blue-600 italic font-normal">Opportunity</em> is Not.
                </h2>

                {/* ── Desktop ── */}
                <div className="relative max-w-6xl mx-auto hidden sm:block">

                    {/* Arrow 1 — top arc Card1 → Card2 */}
                    <div
                        className="absolute pointer-events-none"
                        style={{ left: "16.6%", top: "-90px", width: "39%", height: "120px" }}
                    >
                        <svg width="333" height="109" viewBox="0 0 333 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.48828 96.1134C4.48828 96.1134 49.8543 3.41485 162.266 5.02062C274.677 6.6264 320.043 96.1134 320.043 96.1134" stroke="#005DFF" stroke-width="10" />
                            <line y1="-5" x2="25.6563" y2="-5" transform="matrix(0.948981 0.315333 0.315333 -0.948981 291.411 77.6178)" stroke="#005EFF" stroke-width="10" />
                            <line x1="327.949" y1="66.5201" x2="319.117" y2="90.6082" stroke="#005EFF" stroke-width="10" />
                            <path d="M321.36 94.8698C321.36 95.3522 321.397 95.951 321.508 96.0906C321.646 96.2636 321.9 96.3612 321.984 96.4641C322.205 96.733 321.399 96.0461 321.063 95.822C320.869 95.6929 320.615 95.5794 319.967 95.3382C317.584 94.4517 317.239 94.3673 316.94 94.1432C316.865 94.0869 316.791 94.0315 316.725 93.9753C316.66 93.9191 316.604 93.8636 316.491 93.7506" stroke="#005DFF" stroke-width="10" stroke-linecap="round" />
                            <path d="M321.488 97L304.488 92.5L318.937 108.579L332.988 97.7393L328.488 79.5L321.488 97Z" fill="white" />
                        </svg>


                        {/* White radial mask — shrinks clockwise to reveal arrow */}
                        <div
                            ref={mask1Ref}
                            className="absolute inset-0"
                            style={{
                                background:
                                    "conic-gradient(from -90deg at 50% 100%, transparent 0% calc(100% - var(--p)), white calc(100% - var(--p)) 100%)"
                            } as React.CSSProperties}
                        />
                    </div>

                    {/* Arrow 2 — bottom arc Card2 → Card3 */}
                    <div
                        className="absolute pointer-events-none"
                        style={{ left: "50%", bottom: "-105px", width: "33.3%", height: "121px" }}
                    >
                        <svg width="356" height="111" viewBox="0 0 356 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.48828 6.69205C4.48828 6.69205 53.7708 107.394 175.887 105.649C298.003 103.905 347.286 6.69205 347.286 6.69205" stroke="#005DFF" stroke-width="10" />
                            <line x1="340.637" y1="20.2595" x2="313.631" y2="27.1494" stroke="#005EFF" stroke-width="10" />
                            <line x1="342.05" y1="16.3285" x2="341.818" y2="44.1989" stroke="#005EFF" stroke-width="10" />
                            <path d="M346.988 13.1715L332.489 17.1715L335.669 0.0382917L355.662 5.53105L346.988 24.1715L346.988 13.1715Z" fill="white" />
                        </svg>
                        {/* White radial mask */}
                        <div
                            ref={mask2Ref}
                            className="absolute inset-0"
                            style={{
                                background: "conic-gradient(from 90deg at 50% 0%, white 0% var(--p), transparent var(--p) 100%)",
                            } as React.CSSProperties}
                        />
                    </div>

                    {/* Cards */}
                    <div className="flex flex-row gap-10 justify-center">
                        <div ref={card1Ref} className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
                            style={{ background: "radial-gradient(circle at bottom right, #b8dbffff 0%, #D9EEFF 100%)" }}
                            onMouseEnter={() =>
                                gsap.to(card1Ref.current, { scale: 1.05, duration: 0.3 })
                            }
                            onMouseLeave={() =>
                                gsap.to(card1Ref.current, { scale: 1, duration: 0.3 })
                            }>
                            <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#0C447C] mb-6`}>Talent</h3>
                            <p className="text-xl text-gray-600 leading-relaxed">Talent is distributed equally in India. Opportunity is not!</p>
                        </div>

                        <div ref={card2Ref} className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
                            style={{ background: "radial-gradient(circle at top right, #d6d3ffff 0%, #DDDAFF 100%)" }}
                            onMouseEnter={() =>
                                gsap.to(card2Ref.current, { scale: 1.05, duration: 0.3 })
                            }
                            onMouseLeave={() =>
                                gsap.to(card2Ref.current, { scale: 1, duration: 0.3 })
                            }>
                            <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#291CBB] mb-6`}>Access</h3>
                            <p className="text-xl text-gray-600 leading-relaxed">Geography and institutional access restrict opportunity.</p>
                        </div>

                        <div ref={card3Ref} className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
                            style={{ background: "radial-gradient(circle at bottom left, #89ffdaff 0%, #CDFFEF 100%)" }}
                            onMouseEnter={() =>
                                gsap.to(card3Ref.current, { scale: 1.05, duration: 0.3 })
                            }
                            onMouseLeave={() =>
                                gsap.to(card3Ref.current, { scale: 1, duration: 0.3 })
                            }>
                            <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#085041] mb-6`}>Meritrise</h3>
                            <p className="text-xl text-gray-600 leading-relaxed">We are closing this infrastructure gap by removing geographical and economic barriers to Tier-1 education.</p>
                        </div>
                    </div>
                </div>

                {/* ── Mobile ── */}
                <div className="sm:hidden flex flex-col gap-5 max-w-sm mx-auto">
                    <div className="rounded-[10px] p-10 pt-10 text-left flex-1 h-[350px] pb-20" style={{ background: "radial-gradient(circle at bottom right, #b8dbffff 0%, #D9EEFF 100%)" }}>
                        <h3 className={`${instrumentSerif.className} text-3xl font-medium text-blue-700 mb-3`}>Talent</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Talent is distributed equally in India. Opportunity is not!</p>
                    </div>
                    <div className="rounded-[10px] p-10 pt-10 text-left flex-1 h-[350px] pb-20" style={{ background: "radial-gradient(circle at top right, #d6d3ffff 0%, #DDDAFF 100%)" }}>
                        <h3 className={`${instrumentSerif.className} text-3xl font-medium text-purple-700 mb-3`}>Access</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Geography and institutional access restrict opportunity.</p>
                    </div>
                    <div className="rounded-[10px] p-10 pt-10 text-left flex-1 h-[350px] pb-20" style={{ background: "radial-gradient(circle at bottom left, #89ffdaff 0%, #CDFFEF 100%)" }}>
                        <h3 className={`${instrumentSerif.className} text-3xl font-medium text-emerald-700 mb-3`}>Meritrise</h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            We are closing this infrastructure gap by removing{" "}
                            <strong className="font-semibold text-gray-800">geographical</strong> and{" "}
                            <strong className="font-semibold text-gray-800">economic</strong> barriers to Tier-1 education.
                        </p>
                    </div>
                </div>

                {/* Footer tagline */}
                <p className="mt-24 sm:mt-28 text-xl leading-relaxed">
                    Same rigorous curriculum, same elite standards, built
                    <br className="hidden sm:block" /> digitally for the minds that{" "}
                    <em className={`text-2xl text-blue-600 italic ${instrumentSerif.className}`}>deserve a seat.</em>
                </p>
            </div>
        </section>
    );
}