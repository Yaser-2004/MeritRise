"use client"

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import counsellorImg from "@/app/assets/counsellor.webp"; // replace
import WhatsappButton from "./WhatsappButton";
import TalkToCounsellor from "./TalkToCounsellor";

export default function CounsellorCTA() {
    return (
        <section className="bg-white pb-12 pt-16 md:pb-18 md:pt-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 ">

                <div
                    className="
                        relative
                        bg-[#151515]
                        rounded-[28px]
                        overflow-hidden
                        lg:overflow-visible
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:max-h-[300px]
                    "
                >
                    {/* Counsellor Image */}
                    <div
                        className="
                            relative
                            w-full
                            h-[300px]
                            sm:h-[320px]
                            max-sm:left-5/8
                            max-sm:pt-10
                            max-sm:-translate-x-1/2
                            lg:absolute
                            lg:left-0
                            lg:bottom-0
                            lg:h-[450px]
                            lg:w-auto
                        "
                    >
                        <Image
                            src={counsellorImg}
                            alt="Counsellor"
                            className="
                                object-cover
                                object-top
                                lg:object-bottom
                                h-full
                                w-full
                            "
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="
                            w-full
                            lg:ml-auto
                            lg:w-[58%]
                            px-6
                            sm:px-8
                            md:px-12
                            py-12
                            md:py-12
                        "
                    >
                        <p
                            className="
                                text-white/70
                                text-sm
                                md:text-[18px]
                                uppercase
                                tracking-wide
                                mb-3
                                md:mb-4
                            "
                        >
                            Not Sure Where To Start?
                        </p>

                        <h2
                            className="
                                text-white
                                text-[19px]
                                sm:text-[20px]
                                md:text-[24px]
                                leading-tight
                                font-medium
                                max-w-[650px]
                                max-sm:mb-10
                            "
                        >
                            Our advisors are here to help you find the right
                            program and next career move.
                        </h2>

                        {/* Buttons */}
                        <div
                            className="
                                flex
                                flex-col
                                sm:flex-row
                                flex-wrap
                                gap-3
                                sm:gap-5
                                mt-6
                                md:mt-10
                            "
                        >
                            {/* Talk To Counsellor */}
                            <TalkToCounsellor />

                            {/* WhatsApp */}
                            <WhatsappButton />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}