import { HeroText, HeroButtons } from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
    return (
        <section className="lg:min-h-[720px] relative">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center pt-10 md:pt-20">

                    {/* Mobile: Text first */}
                    <div className="order-1 lg:hidden">
                        <HeroText />
                    </div>

                    {/* Mobile: Image second, Desktop: Image in column 2 */}
                    <div className="w-full order-2 lg:order-none lg:col-start-2">
                        <HeroImage />
                    </div>

                    {/* Mobile: Buttons third */}
                    <div className="order-3 lg:hidden w-full">
                        <HeroButtons />
                    </div>

                    {/* Desktop: Content (Text + Buttons) */}
                    <div className="hidden lg:block lg:col-start-1 lg:row-start-1">
                        <HeroText />
                        <HeroButtons className="mt-10" />
                    </div>

                </div>

                <HeroStats />
                <p className="text-right text-xs text-gray-500 pb-16 md:pt-0 pt-10">*These statistics belong to LearningShala, our parent brand.</p>
            </div>

            <div
                className="
                    absolute
                    -left-60
                    top-1/2
                    bottom-0
                    w-[400px]
                    h-[400px]
                    bg-[#0055FF]
                    rounded-full
                    blur-[300px]
                    -z-10
                    pointer-events-none
                    "
            />
        </section>
    );
}