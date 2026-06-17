import { NavBar2 } from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import TechStackSection from "./components/TechStackSection";
import EcosystemSection from "./components/EcosystemSection";
import InstitutionalPartner from "./components/InstitutionalPartner";
import ProgramEcosystem from "./components/ProgramEcosystem";
import PartnerWithUsSection from "./components/PartnerWithUsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-dmsans">
      <NavBar2
        domain={{
          name: "MeritRise.ai",
        }}
        navigationMenu={[
          {
            title: "Our Philosophy",
            url: "#philosophy",
          },
          {
            title: "AI Architecture",
            url: "#ai",
          },
          {
            title: "Beyond Screens",
            url: "#beyond-screens",
          },
          {
            title: "Institutional Partners",
            url: "#partners",
          },
          {
            title: "Upcoming Programs",
            url: "#programs",
          },
        ]}
        authLinks={{
          register: {
            text: "Join Waitlist",
            variant: "default",
            isVisible: true,
          },
        }}
      />

      <Hero />
      <Philosophy />
      <TechStackSection />
      <EcosystemSection />
      <InstitutionalPartner />
      <ProgramEcosystem />
      <PartnerWithUsSection />
      <Footer />
    </main>
  );
}