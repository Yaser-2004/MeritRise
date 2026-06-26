import Image from "next/image";

interface Testimonial {
    name: string;
    program: string;
    image: string;
    quote: string;
    variant: "blue" | "purple" | "green";
}

interface Props {
    testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
    const isBlue = testimonial.variant === "blue";

    return (
        <div
            className="w-full md:w-[310px] shrink-0"
        >
            {isBlue ? (
                /* BLUE BORDER CARD */
                <div
                    className="
                        rounded-[22px]
                        p-[1.5px]
                        overflow-hidden
                        h-full
                    "
                    style={{
                        background:
                            "linear-gradient(to bottom, #0055FF 0%, #151515 100%)",
                    }}
                >
                    <div
                        className="
                            h-full
                            rounded-[20px]
                            bg-[#151515]
                            overflow-hidden
                        "
                    >
                        {/* IMAGE */}
                        <div className="p-3">
                            <div className="relative h-[180px] rounded-[14px] overflow-hidden">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white text-[18px] font-medium">
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-white/80 text-[14px]">
                                        {testimonial.program}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="px-5 pb-6">
                            <p className="font-light text-white/75 text-[16px] leading-relaxed mt-8">
                                {testimonial.quote}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                /* PURPLE / GREEN CARD */
                <div
                    className="
                        rounded-[22px]
                        overflow-hidden
                        h-full
                    "
                    style={{
                        background:
                            testimonial.variant === "purple"
                                ? "linear-gradient(180deg,#B14CFF 0%,#6627B8 45%,#151515 100%)"
                                : "linear-gradient(180deg,#37FF9D 0%,#16A34A 45%,#151515 100%)",
                    }}
                >
                    {/* IMAGE */}
                    <div className="p-3">
                        <div className="relative h-[180px] rounded-[14px] overflow-hidden">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-white text-[18px] font-medium">
                                    {testimonial.name}
                                </h3>

                                <p className="text-white/80 text-[14px]">
                                    {testimonial.program}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-5 pb-6">
                        <p className="font-light text-white/85 text-[16px] leading-relaxed mt-8">
                            {testimonial.quote}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}