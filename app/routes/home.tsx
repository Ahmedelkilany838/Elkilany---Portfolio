import type { Route } from "./+types/home";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Hero from "components/Pages/Hero";
import BrandsMarquee from "components/BrandsMarquee";
import Works from "components/Pages/Works";
import About from "components/Pages/About";
import Services from "components/Pages/Services";
import Experience from "components/Pages/Experience";
import Process from "components/Pages/Process";
import FAQ from "components/Pages/FAQ"; // Strategic FAQ
import FinalCTA from "components/Pages/FinalCTA";
import Contact from "components/Pages/Contact";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Elkilany | Senior Brand & Advertising Specialist" }, { name: "description", content: "Building visual legacies for visionary brands." }];
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <div ref={containerRef} className="relative bg-[#050505] min-h-screen">

      {/* 1. Hero Cluster: Sticky (Hero) */}
      <motion.div
        style={{ opacity: useTransform(scrollY, [400, 1000], [1, 0]) }}
        className="sticky top-0 z-0 w-full flex flex-col items-center justify-start min-h-screen"
      >
        <Hero />
      </motion.div>

      {/* Rest of the Site: Rising Cover Layer */}
      <div className="relative z-20 bg-[#050505] mt-[50vh]">

        {/* 2. The Narrative: Why we do this */}
        <About />

        {/* 3. The Brands/Logos Section: Immediate Validation */}
        <BrandsMarquee />

        {/* 4. The Results: Selected Works */}
        <Works key="works-grid" />

        {/* 5. Services: Dynamic Accordion */}
        <Services />

        {/* 6. The Proof: Stats & Impact */}
        <Experience />

        {/* 7. The Workflow: 5-step strategic map */}
        <Process />

        {/* 9. Strategic FAQ: Common Objections */}
        <FAQ />

        {/* 10. The Closer CTA */}
        <FinalCTA />

        {/* Footer / Contact */}
        <Contact />

      </div>

    </div>
  );
}
