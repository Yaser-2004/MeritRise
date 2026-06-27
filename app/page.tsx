import Hero from "./components/Hero/Hero";
import Philosophy from "./components/Philosophy/Philosophy";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import OurUsp from "./components/OurUsp/OurUsp";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AIStack from "./components/AIStack/AIStack";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import InstitutionalPartners from "./components/InstitutionalPartners/InstitutionalPartners";
import FAQSection from "./components/FAQ/FAQSection";
import { Navbar } from "./components/Navbar";
import dynamic from "next/dynamic";

const UpcomingPrograms = dynamic(() => import("./components/UpcomingPrograms"));
const Testimonials = dynamic(() => import("./components/Testimonials/Testimonials"));
const PartnerWithUsSection = dynamic(() => import("./components/PartnerWithUsSection"));
const CounsellorCTA = dynamic(() => import("./components/CounsellorCTA"));
const Footer = dynamic(() => import("./components/Footer"));
const GoUpButton = dynamic(() => import("./components/GoUpButton"));

export default function Home() {
  return (
    <main className="font-dmsans">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Philosophy />
        <Ecosystem />
      </div>
      <OurUsp />
      <HowItWorks />
      <div className="bg-white">
        <UpcomingPrograms />
        <AIStack />
      </div>
      <WhyChoose />
      <Testimonials />
      <div className="bg-white">
        <InstitutionalPartners />

        <PartnerWithUsSection />
        <FAQSection />
        <CounsellorCTA />
      </div>
      <Footer />
      <GoUpButton />
    </main>
  );
}