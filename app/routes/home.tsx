import type { Route } from "./+types/home";
import Hero from "components/Pages/Hero";
import BrandsMarquee from "components/BrandsMarquee";
import Works from "components/Pages/Works";
import About from "components/Pages/About";
import Services from "components/Pages/Services";
import Experience from "components/Pages/Experience";
import Process from "components/Pages/Process";
import Testimonials from "components/Pages/Testimonials"; // Client Voices
import FAQ from "components/Pages/FAQ"; // Strategic FAQ
import FinalCTA from "components/Pages/FinalCTA"; // The Closer
import Contact from "components/Pages/Contact";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Elkilany | Senior Brand & Advertising Specialist" }, { name: "description", content: "Building visual legacies for visionary brands." }];
}

export default function Home() {
  return (
    <div className="relative bg-[#050505] min-h-screen">

      {/* 1. Hero Section: Visualizing Intent */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* 2. Social Proof: Immediate Credibility */}
      <BrandsMarquee />

      {/* 3. Selected Works: Top Case Studies */}
      <Works key="works-grid" />

      {/* 4. The Philosophy: Why we do this */}
      <About />

      {/* 5. Services: Dynamic Accordion */}
      <Services />

      {/* 6. The Proof: Stats & Impact */}
      <Experience />

      {/* 7. The Workflow: 5-step strategic map */}
      <Process />

      {/* 8. Client Voices: Minimalist Slider */}
      <Testimonials />

      {/* 9. Strategic FAQ: Common Objections */}
      <FAQ />

      {/* 10. Final CTA: The Closer */}
      <FinalCTA />

      {/* Footer / Contact */}
      <Contact />

    </div>
  );
}
