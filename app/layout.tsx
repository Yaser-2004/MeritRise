import { dmSans } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MeritRise | A Second Chance to Earn a Premium Online Degree & Certification",
    template: "%s | MeritRise",
  },

  description:
    "Learn From India's Leading Institutions - Bringing IIT, IIM, and Tier-1 academic excellence to every learner, because potential, not postcode, should define opportunity.",

  keywords: [
    "MeritRise",
    "AI career guidance",
    "higher education",
    "college admissions",
    "study abroad",
    "career counselling",
    "university recommendations",
  ],

  metadataBase: new URL("https://meritrise.ai"),

  openGraph: {
    title: "MeritRise | A Second Chance to Earn a Premium Online Degree & Certification",
    description:
      "Learn From India's Leading Institutions - Bringing IIT, IIM, and Tier-1 academic excellence to every learner, because potential, not postcode, should define opportunity.",
    url: "https://meritrise.ai",
    siteName: "MeritRise",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MeritRise",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body className={`${dmSans.className} bg-[#151515]`}>
        {children}
      </body>
    </html>
  );
}