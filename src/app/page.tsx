import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Patent } from "@/components/Patent";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative selection:bg-white selection:text-black">
      <CustomCursor />

      {/* Background grain texture effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-[-100%] bg-grain animate-grain" />
      </div>

      <Navbar />

      <div className="relative z-10 space-y-24 md:space-y-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Patent />
        <Contact />
        <Footer />
      </div>

      {/* Subtle border around the page for that premium feel */}
      <div className="fixed inset-0 border-[20px] md:border-[40px] border-black pointer-events-none z-50 hidden md:block" />
    </main>
  );
}
