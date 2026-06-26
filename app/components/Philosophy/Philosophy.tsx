import PhilosophyCards from "./PhilosophyCards";
import PhilosophyConnector from "./PhilosophyConnector";
import PhilosophyFooter from "./PhilosophyFooter";
import { alata } from "@/app/fonts";

export default function Philosophy() {
    return (
        <section
            id="philosophy"
            className="
                    py-12
                    md:py-18
                    px-6
                    bg-white
                    relative
                "
        >
            <div className="max-w-6xl mx-auto">

                <p className="text-center text-xl font-medium md:font-normal md:text-[28px] md:text-2xl text-[#333] mb-4">
                    Our Philosophy
                </p>

                <h2
                    className={`${alata.className} text-center text-3xl md:text-[42px] md:text-5xl font-medium leading-tight text-[#171717] mb-16`}
                >
                    Talent is Universal.
                    {" "}
                    Opportunity is Not.
                </h2>

                <PhilosophyCards />

                <PhilosophyConnector />

                <PhilosophyFooter />

            </div>
        </section>
    );
}