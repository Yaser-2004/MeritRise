import Image, { StaticImageData } from "next/image";
import { alata } from "@/app/fonts";
import { WaitListButton } from "../WaitListButton";

interface Props {
    title: string;
    description: string;
    image: StaticImageData;
    variant?: "default" | "blue";
}

export default function WhyChooseCard({
    title,
    description,
    image,
    variant = "default",
}: Props) {

    return (
        <>
            <div
                className={`
                    w-full
                    h-auto lg:h-[410px]
                    rounded-[28px]
                    overflow-hidden
                    shadow-[0_30px_80px_rgba(0,0,0,0.28)]
                    ${variant === "blue"
                        ? "bg-[#0055FF]"
                        : "bg-white"
                    }
                `}
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-full flex-col">

                    {/* IMAGE */}

                    <div className="relative h-[240px] lg:h-full overflow-hidden">

                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />

                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-col justify-center px-8 lg:px-6 py-10 lg:py-0">

                        <h3
                            className={`
                                ${alata.className}
                                text-[28px] lg:text-[34px]
                                leading-tight
                                font-semibold
                                ${variant === "blue"
                                    ? "text-white"
                                    : "text-[#1f1f1f]"
                                }
                            `}
                        >
                            {title}
                        </h3>

                        <p
                            className={`
                                mt-5 lg:mt-7
                                text-[16px] lg:text-[17px]
                                leading-relaxed lg:leading-8
                                ${variant === "blue"
                                    ? "text-white/80"
                                    : "text-[#666]"
                                }
                            `}
                        >
                            {description}
                        </p>

                        <WaitListButton variant={variant} />
                    </div>

                </div>
            </div>
        </>
    );
}