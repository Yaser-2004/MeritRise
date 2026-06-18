"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { instrumentSerif } from "../layout";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const mask1Ref = useRef<HTMLDivElement>(null);
    const mask2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
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

                // ── No pin, no scrub. Just a normal autoplay-on-enter timeline. ──
                // This means: NO extra scroll height is reserved, NO spacer div
                // is injected, and there is nothing to "jump" because the layout
                // never changes — only opacity/transform/CSS vars animate.
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",          // fires when section is 75% down the viewport
                        toggleActions: "play none none none", // play once, never reverse/repeat
                    },
                });

                // Step 1 — Card 1
                tl.to(card1Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });

                // Step 2 — Arrow 1 reveals
                tl.to(mask1Proxy, {
                    p: 0, duration: 0.9, ease: "power1.inOut",
                    onUpdate() { setMaskVar(mask1Ref.current, mask1Proxy.p); },
                }, "+=0.15");

                // Step 3 — Card 2
                tl.to(card2Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, ">");

                // Step 4 — Arrow 2 reveals
                tl.to(mask2Proxy, {
                    p: 0, duration: 0.9, ease: "power1.inOut",
                    onUpdate() { setMaskVar(mask2Ref.current, mask2Proxy.p); },
                }, "+=0.15");

                // Step 5 — Card 3
                tl.to(card3Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, ">");
            }, sectionRef);

            return () => ctx.revert();
        }, 100); // small delay lets layout settle before ScrollTrigger measures positions

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="philosophy" ref={sectionRef} className="relative h-auto py-16 px-6 text-center flex flex-col justify-center overflow-hidden">
            {/* Background blobs */}
            <div className="absolute right-40 top-10 -z-10 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,_#89FFDC_0%,_transparent_70%)] blur-[70px] pointer-events-none" />
            <div className="absolute left-40 bottom-20 -z-10 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_#9C93FF_0%,_transparent_70%)] blur-[120px] pointer-events-none" />

            {/* Label */}
            <p className="text-xl font-medium mb-3">Our Philosophy</p>

            {/* Heading */}
            <h2 className={`${instrumentSerif.className} text-4xl md:text-6xl font-light text-gray-900 mb-24 leading-tight`}>
                Talent is Universal.{" "}
                <em className="text-blue-600 italic font-normal">Opportunity</em> is Not.
            </h2>

            {/* ── Desktop ── */}
            <div className="relative max-w-6xl mx-auto hidden sm:block">

                {/* Arrow 1 */}
                <div
                    className="absolute pointer-events-none"
                    style={{ left: "16.6%", top: "-90px", width: "39%", height: "120px" }}
                >
                    <svg width="333" height="109" viewBox="0 0 333 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.48828 96.1134C4.48828 96.1134 49.8543 3.41485 162.266 5.02062C274.677 6.6264 320.043 96.1134 320.043 96.1134" stroke="#005DFF" strokeWidth="10" />
                        <line y1="-5" x2="25.6563" y2="-5" transform="matrix(0.948981 0.315333 0.315333 -0.948981 291.411 77.6178)" stroke="#005EFF" strokeWidth="10" />
                        <line x1="327.949" y1="66.5201" x2="319.117" y2="90.6082" stroke="#005EFF" strokeWidth="10" />
                        <path d="M321.36 94.8698C321.36 95.3522 321.397 95.951 321.508 96.0906C321.646 96.2636 321.9 96.3612 321.984 96.4641C322.205 96.733 321.399 96.0461 321.063 95.822C320.869 95.6929 320.615 95.5794 319.967 95.3382C317.584 94.4517 317.239 94.3673 316.94 94.1432C316.865 94.0869 316.791 94.0315 316.725 93.9753C316.66 93.9191 316.604 93.8636 316.491 93.7506" stroke="#005DFF" strokeWidth="10" strokeLinecap="round" />
                        <path d="M321.488 97L304.488 92.5L318.937 108.579L332.988 97.7393L328.488 79.5L321.488 97Z" fill="white" />
                    </svg>
                    <div
                        ref={mask1Ref}
                        className="absolute inset-0"
                        style={{
                            background:
                                "conic-gradient(from -90deg at 50% 100%, transparent 0% calc(100% - var(--p)), white calc(100% - var(--p)) 100%)"
                        } as React.CSSProperties}
                    />
                </div>

                {/* Arrow 2 */}
                <div
                    className="absolute pointer-events-none"
                    style={{ left: "50%", bottom: "-105px", width: "33.3%", height: "121px" }}
                >
                    <svg width="356" height="111" viewBox="0 0 356 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.48828 6.69205C4.48828 6.69205 53.7708 107.394 175.887 105.649C298.003 103.905 347.286 6.69205 347.286 6.69205" stroke="#005DFF" strokeWidth="10" />
                        <line x1="340.637" y1="20.2595" x2="313.631" y2="27.1494" stroke="#005EFF" strokeWidth="10" />
                        <line x1="342.05" y1="16.3285" x2="341.818" y2="44.1989" stroke="#005EFF" strokeWidth="10" />
                        <path d="M346.988 13.1715L332.489 17.1715L335.669 0.0382917L355.662 5.53105L346.988 24.1715L346.988 13.1715Z" fill="white" />
                    </svg>
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
                        onMouseEnter={() => gsap.to(card1Ref.current, { scale: 1.05, duration: 0.3 })}
                        onMouseLeave={() => gsap.to(card1Ref.current, { scale: 1, duration: 0.3 })}>
                        <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#0C447C] mb-6`}>Talent</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">Talent is distributed equally in India. Opportunity is not!</p>
                    </div>

                    <div ref={card2Ref} className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
                        style={{ background: "radial-gradient(circle at top right, #d6d3ffff 0%, #DDDAFF 100%)" }}
                        onMouseEnter={() => gsap.to(card2Ref.current, { scale: 1.05, duration: 0.3 })}
                        onMouseLeave={() => gsap.to(card2Ref.current, { scale: 1, duration: 0.3 })}>
                        <h3 className={`${instrumentSerif.className} text-5xl font-medium text-[#291CBB] mb-6`}>Access</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">Geography and institutional access restrict opportunity.</p>
                    </div>

                    <div ref={card3Ref} className="rounded-[10px] p-10 pt-16 text-left flex-1 h-[350px]"
                        style={{ background: "radial-gradient(circle at bottom left, #89ffdaff 0%, #CDFFEF 100%)" }}
                        onMouseEnter={() => gsap.to(card3Ref.current, { scale: 1.05, duration: 0.3 })}
                        onMouseLeave={() => gsap.to(card3Ref.current, { scale: 1, duration: 0.3 })}>
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
        </section>
    );
}