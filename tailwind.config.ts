import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A2753",
                secondary: "#566C8B",
                accent: "#C8A96A",
                background: "#FAF9F7",
                border: "#E6E1D8",
            },
            fontFamily: {
                dmsans: ["DM Sans", "sans-serif"],
                notoserif: ["Noto Serif", "serif"],
            },
        },
    },
    plugins: [],
};

export default config;