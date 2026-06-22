import { STIX_Two_Text, Instrument_Serif, Red_Hat_Text, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body className={`${redHatText.className}`}>
        {children}
      </body>
    </html>
  );
}