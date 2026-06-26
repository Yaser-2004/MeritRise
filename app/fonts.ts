import { STIX_Two_Text, Instrument_Serif, Alata, DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const alata = Alata({
    subsets: ["latin"],
    weight: ["400"],
});

export const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic", "normal"],
});

export const stixTwoText = STIX_Two_Text({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["italic", "normal"],
});