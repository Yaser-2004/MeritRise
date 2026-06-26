import { alata } from "@/app/fonts";

interface PhilosophyCardProps {
    title: string;
    description: string;
    pills: string[];
    color: string;
    titleColor: string;
    index: number;
}

export default function PhilosophyCard({
    title,
    description,
    pills,
    color,
    titleColor,
    index,
}: PhilosophyCardProps) {
    return (
        // Outer wrapper: gradient border, now thicker (p-1 = 4px instead of 2px)
        <div
            className="
        p-1
        h-[400px]
        sticky
        top-20
        md:static
        md:h-[480px]
    "
            style={{
                background: `linear-gradient(to bottom, ${color}, white)`,
                zIndex: index + 1,
                top: `${80 + index * 20}px`,
            }}
        >
            <div
                className="
          relative
          overflow-hidden
          px-8
          pt-10
          pb-8
          h-full
          w-full
          flex
          flex-col
          items-center md:items-start
          text-center md:text-left
          bg-white
        "
            >
                <h3
                    className={`text-3xl md:text-4xl font-bold mb-5 ${alata.className}`}
                    style={{ color: titleColor }}
                >
                    {title}
                </h3>

                <p className="text-[15px] md:text-[18px] text-[#404040] leading-relaxed md:max-w-[240px]">
                    {description}
                </p>

                <div className="mt-8 md:mt-16 w-full flex flex-col gap-3">
                    {pills.map((pill) => (
                        <div
                            key={pill}
                            className="
                rounded-full
                py-2.5
                text-center
                text-[15px] md:text-[18px]
                text-[#3d3d3d]
                font-medium
              "
                            style={{ backgroundColor: `${color}60` }} //decrease only background color opacity , not the whole div
                        >
                            {pill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}