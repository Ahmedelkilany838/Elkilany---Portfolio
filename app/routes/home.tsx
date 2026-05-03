import type { Route } from "./+types/home";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Hero from "components/Pages/Hero";
import BrandsMarquee from "components/BrandsMarquee";
import Works from "components/Pages/Works";
import About from "components/Pages/About";
import Services from "components/Pages/Services";
import Stats from "components/Pages/Stats";
import Experience from "components/Pages/Experience";
import Process from "components/Pages/Process";
import FAQ from "components/Pages/FAQ";
import FinalCTA from "components/Pages/FinalCTA";
import Contact from "components/Pages/Contact";
import { DEFAULT_CONFIG } from "lib/siteConfig";
import Testimonials from "components/Pages/Testimonials";

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  about: About,
  brands: BrandsMarquee,
  works: Works,
  testimonials: Testimonials,
  services: Services,
  experience: Experience,
  process: Process,
  faq: FAQ,
  cta: FinalCTA,
  contact: Contact
};

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Kilany | Senior Brand & Advertising Specialist" }, { name: "description", content: "Building visual legacies for visionary brands." }];
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [400, 1000], [1, 0]);
  const config = DEFAULT_CONFIG;

  const homeSections = config.pages?.home?.sections || [];
  const heroSection = homeSections.find(s => s.id === 'hero');
  const otherSections = homeSections.filter(s => s.id !== 'hero');

  return (
    <div ref={containerRef} className="relative bg-[#050505] min-h-screen">

      {/* 1. Hero Cluster: Sticky (Hero) */}
      {heroSection?.visible !== false && (
        <motion.div
          style={{ opacity: heroOpacity }}
          className="sticky top-0 z-0 w-full flex flex-col items-center justify-start min-h-screen"
        >
          <Hero content={heroSection?.content} />
        </motion.div>
      )}

      {/* Rest of the Site: Rising Cover Layer */}
      <div className="relative z-20 bg-[#050505] mt-[50vh]">
        {otherSections.map((sec) => {
          if (!sec.visible) return null;
          const Component = COMPONENT_MAP[sec.id];
          if (!Component) return null;
          return <Component key={sec.id} content={sec.content} />;
        })}
      </div>

    </div>
  );
}
