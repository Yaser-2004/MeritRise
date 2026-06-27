import { STIX_Two_Text, Instrument_Serif, Alata, DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const alata = Alata({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic", "normal"],
    display: "swap",
});

export const stixTwoText = STIX_Two_Text({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic", "normal"],
    display: "swap",
});