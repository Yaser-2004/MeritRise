import whatsapp from "@/app/assets/whatsapp.png";

export default function WhatsappButton() {
    return (
        <button
            className="
                                group
                                h-12
                                md:h-14
                                px-6
                                md:px-8
                                rounded-full
                                bg-white
                                text-[#25D366]
                                text-sm
                                md:text-base
                                font-medium
                                flex
                                items-center
                                justify-center
                                gap-2
                                md:gap-3
                                w-full
                                sm:w-auto
                                transition-all
                                duration-300
                                hover:text-white
                                hover:bg-[#25D366]
                                hover:cursor-pointer
                            "
            onClick={() => window.open("https://wa.me/919555870366", "_self")}
        >
            Whatsapp Us

            <div
                className="
                                        w-5
                                        h-5
                                        bg-[#25D366]
                                        group-hover:bg-white
                                        transition-all
                                        duration-300
                                    "
                style={{
                    WebkitMask: `url(${whatsapp.src}) center / contain no-repeat`,
                    mask: `url(${whatsapp.src}) center / contain no-repeat`,
                }}
            />
        </button>
    )
}