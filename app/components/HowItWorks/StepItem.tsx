import { alata, stixTwoText } from "@/app/fonts";

interface StepItemProps {
    number: string;
    title: string;
    description: string;
    isLast?: boolean;
}

export default function StepItem({
    number,
    title,
    description,
    isLast = false,
}: StepItemProps) {
    return (
        <div className={`grid items-center grid-cols-[70px_1fr] gap-1 md:gap-6 py-8 ${!isLast ? "border-b border-[#0055FF]/40" : ""}`}>
            <div className={`${stixTwoText.className} text-white text-[24px] font-light leading-none opacity-90`}>
                {number}
            </div>

            <div>
                <h3 className={`${alata.className} text-white text-[22px] font-semibold leading-tight`}>
                    {title}
                </h3>

                <p className="font-light text-white/75 text-[16px] mt-2 leading-relaxed max-w-[550px]">
                    {description}
                </p>
            </div>
        </div>
    );
}