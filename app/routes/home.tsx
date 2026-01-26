import type { Route } from "./+types/home";
import AnimatedOrangeBackground from "components/Animation/AnimatedOrangeBackground";
import Hero from "components/Pages/Hero";
import About from "components/Pages/About";
import Works from "components/Pages/Works";
import SpaceLayout from "components/Animation/SpaceLayout";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Elkilany" }, { name: "description", content: "Elkilany" }];
}

export default function Home() {
  return (
    <SpaceLayout>
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 z-20 h-full w-full pointer-events-none">
          <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
          </div>
          <div className="absolute inset-0 z-[2000] pointer-events-none">
            <AnimatedOrangeBackground />
          </div>
        </div>
      </div>

      {/* About Section - Seamless Transition */}
      <About />

      {/* Works Section - Selected Projects */}
      <Works />

    </SpaceLayout>
  );
}
