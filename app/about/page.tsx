import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import EcosystemPillars from "./components/EcosystemPillars";
import LeadershipSection from "./components/LeadershipSection";
import MissionSection from "./components/MissionSection";
import ProvenTrust from "./components/ProvenTrust";
import TenYearDestination from "./components/TenYearDestination";
import WhatWeDo from "./components/WhatWeDo";

export default function About() {
    return (
        <div>
            <Navbar />
            <WhatWeDo />
            <MissionSection />
            <EcosystemPillars />
            <ProvenTrust />
            <LeadershipSection />
            <TenYearDestination />
            <Footer />
        </div>
    );
}