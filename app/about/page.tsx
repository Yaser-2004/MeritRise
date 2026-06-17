import Footer from "../components/Footer";
import { NavBar2 } from "../components/Navbar";
import EcosystemPillars from "./components/EcosystemPillars";
import LeadershipSection from "./components/LeadershipSection";
import MissionSection from "./components/MissionSection";
import ProvenTrust from "./components/ProvenTrust";
import TenYearDestination from "./components/TenYearDestination";
import WhatWeDo from "./components/WhatWeDo";

export default function About() {
    return (
        <div>
            <NavBar2
                domain={{
                    name: "MeritRise.ai",
                }}
                navigationMenu={[
                    {
                        title: "Our Philosophy",
                        url: "/philosophy",
                    },
                    {
                        title: "AI Architecture",
                        url: "/ai",
                    },
                    {
                        title: "Beyond Screens",
                        url: "/beyond-screens",
                    },
                    {
                        title: "Our Story",
                        url: "/story",
                    },
                    {
                        title: "Institutional Partners",
                        url: "/partners",
                    },
                    {
                        title: "Upcoming Programs",
                        url: "/programs",
                    },
                ]}
                authLinks={{
                    login: {
                        text: "Login",
                        variant: "ghost",
                        isVisible: true,
                    },
                    register: {
                        text: "Join Waitlist",
                        variant: "default",
                        isVisible: true,
                    },
                }}
            />
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