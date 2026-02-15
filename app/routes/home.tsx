import type { Route } from "./+types/home";
import Hero from "components/Pages/Hero";
import About from "components/Pages/About";
import Works from "components/Pages/Works";
import SpaceLayout from "components/Animation/SpaceLayout";
import BrandsMarquee from "components/BrandsMarquee";
import Services from "components/Pages/Services";
import Experience from "components/Pages/Experience";
import Process from "components/Pages/Process";
import Testimonials from "components/Pages/Testimonials";
import Contact from "components/Pages/Contact";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Elkilany" }, { name: "description", content: "Elkilany" }];
}

export default function Home() {
  return (
    <SpaceLayout>
      <div className="relative">
        <Hero />
      </div>

      {/* Brands Marquee - Client Logos */}
      <BrandsMarquee />

      {/* About Section - Seamless Transition */}
      <About />

      {/* Works Section - Selected Projects */}
      <Works key="final-works-redraw" />

      {/* Services Section - Capabilities */}
      <Services />

      {/* Experience Section - Stats & Impact */}
      <Experience />

      {/* Process Section - Methodology */}
      <Process />

      {/* Testimonials - Social Proof */}
      <Testimonials />

      {/* Contact - CTA & Footer */}
      <Contact />

    </SpaceLayout>
  );
}
