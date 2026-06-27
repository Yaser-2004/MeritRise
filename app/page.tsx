import Hero from "./components/Hero/Hero";
import Philosophy from "./components/Philosophy/Philosophy";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import PartnerWithUsSection from "./components/PartnerWithUsSection";
import Footer from "./components/Footer";
import OurUsp from "./components/OurUsp/OurUsp";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import UpcomingPrograms from "./components/UpcomingPrograms";
import AIStack from "./components/AIStack/AIStack";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Testimonials from "./components/Testimonials/Testimonials";
import InstitutionalPartners from "./components/InstitutionalPartners/InstitutionalPartners";
import FAQSection from "./components/FAQ/FAQSection";
import CounsellorCTA from "./components/CounsellorCTA";
import { Navbar } from "./components/Navbar";
import dynamic from "next/dynamic";
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