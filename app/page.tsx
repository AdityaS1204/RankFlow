import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <div className="square-pattern p-4 md:p-[30px]">
        <div className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-black/5 rounded-2xl overflow-hidden relative">
          <Hero />
        </div>
      </div>
      <Services />
      <div className="pattern-border" />
      <HowWeWork />
      <div className="pattern-border" />
      <FAQ />
      <div className="pattern-border" />
      <div className="square-pattern p-4 md:p-[30px]">
        <div className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-black/5 rounded-2xl overflow-hidden relative">
          <FinalCTA />
        </div>
      </div>
      <div className="pattern-border" />
      <Footer />
    </main>
  );
}
