import Image from "next/image";
import { howItWorksSteps } from "./howItWorksData";
import StepItem from "./StepItem";
import { alata } from "@/app/fonts";
import studentImage from "@/app/assets/howitwork.webp";

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative bg-[#151515] overflow-hidden py-18 pr-5"
        >
            {/* Blue Glow

            <div
                className="absolute inset-0 pointer-events-none"
            >
                <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] bg-[#0055FF]/15 blur-[220px] rounded-full"
                />
            </div> */}

            <div className="relative max-w-[1400px] mx-auto">

                {/* Heading */}

                <h2 className={`text-center text-white text-4xl md:text-5xl font-semibold mb-10 md:mb-20 ${alata.className}`}>
                    How MeritRise Works?
                </h2>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-center">

                    {/* Left Image */}

                    <div className="relative">

                        <div
                            className="relative overflow-hidden h-[300px] md:h-[500px] lg:h-[550px]"
                            style={{
                                borderTopRightRadius: "350px",
                                borderBottomRightRadius: "350px",
                            }}
                        >
                            <Image
                                src={studentImage}
                                alt="Student"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                loading="lazy"
                                className="object-cover object-left"
                                style={{
                                    filter: "brightness(1.05)",
                                }}
                            />
                        </div>

                    </div>

                    {/* Right Steps */}

                    <div className="pl-5 md:pl-0">
                        {howItWorksSteps.map((step, index) => (
                            <StepItem
                                key={step.number}
                                {...step}
                                isLast={index === howItWorksSteps.length - 1}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}