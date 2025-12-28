import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustPrimer from "@/components/TrustPrimer";
import Problem from "@/components/Problem";
import Method from "@/components/Method";
import Deliverables from "@/components/Deliverables";
import Comparison from "@/components/Comparison";
import AuditHook from "@/components/AuditHook";
import WhoIsItFor from "@/components/WhoIsItFor";
import Pricing from "@/components/Pricing";
import ChatbotUpsell from "@/components/ChatbotUpsell";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <TrustPrimer />
      <Problem />
      <Method />
      {/* <Deliverables /> */}
      {/* <Comparison /> */}
      <AuditHook />
      <WhoIsItFor />
      <Pricing />
      <ChatbotUpsell />
      <FinalCTA />
      <Footer />
    </main>
  );
}
