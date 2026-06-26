import Image, { StaticImageData } from "next/image";

interface UspCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    index: number;
}

export default function UspCard({
    title,
    description,
    image,
    index,
}: UspCardProps) {
    return (
        <div
            className="
        relative
        overflow-hidden
        rounded-[22px]
        border-[2px]
        border-dashed
        border-[#0055FF]/70
        h-[250px]
        group
        p-2
      "
        >
            <div
                className="
      relative
      overflow-hidden
      rounded-[16px]
      h-full
    "
            >
                <Image
                    //increase brightness
                    style={{ filter: "brightness(1.2)" }}
                    src={image}
                    alt={title}
                    fill
                    className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
                />

                <div
                    className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
        "
                />

                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-[20px] font-medium leading-tight whitespace-pre-line">
                        {title}
                    </h3>

                    <p className="text-white/75 text-sm mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}