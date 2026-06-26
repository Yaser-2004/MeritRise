import { dmSans } from "./fonts";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: {
    default: "MeritRise | Learn from the Best, Rise to your Best",
    template: "MeritRise | %s",
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