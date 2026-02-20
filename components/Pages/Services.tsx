import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "ADVERTISING",
    description: "Strategic campaigns that capture attention and drive real engagement across all mediums.",
    subServices: ["Social Media Content", "Paid Ads", "Art Direction", "Motion Graphics"]
  },
  {
    title: "BRANDING",
    description: "Building distinctive, memorable, and cohesive visual identities that resonate with your target audience.",
    subServices: ["Logo Design", "Visual Systems", "Brand Guidelines", "Art Direction"]
  },
  {
    title: "PRINT DESIGN",
    description: "Tangible assets designed with precision, ensuring your brand feels as premium in hand as it looks on screen.",
    subServices: ["Packaging Design", "Editorial & Books", "Stationery", "Merchandise"]
  },
  {
    title: "STRATEGY",
    description: "Data-driven insights and roadmaps defining your brand's voice and path to long-term growth.",
    subServices: ["Market Research", "Brand Positioning", "Content Strategy", "Consultation"]
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative w-full bg-[#050505] pt-[80px] md:pt-[140px] px-[8%] border-b border-white/5 pb-[100px]">

      {/* Header DNA */}
      <div className="w-full mb-16 border-b border-white/5 pb-8 flex items-end justify-between">
        <h2 className="font-['Syne'] font-extrabold text-[8.5vw] md:text-[5.3rem] leading-[0.85] tracking-[-0.04em] uppercase text-white">
          HOW I CAN<br />HELP<span className="text-[#ff4d29]">.</span>
        </h2>
        <span className="text-white/50 text-xl tracking-normal hidden md:block mb-2">(04)</span>
      </div>

      <div className="flex flex-col w-full">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group w-full border-t border-white/10 py-12 cursor-pointer transition-colors duration-300 hover:bg-white/5 px-4"
          >
            {/* Top Row: Title + Icon */}
            <div className="flex items-center justify-between w-full">
              <h3 className="font-['Syne'] font-bold text-3xl md:text-6xl text-white uppercase tracking-[-0.02em] group-hover:text-[#ff4d29] transition-colors duration-300">
                {service.title}
              </h3>
              <Plus
                className={`text-white w-8 h-8 md:w-12 md:h-12 font-thin transition-transform duration-300 group-hover:text-[#ff4d29] ${hoveredIndex === index ? "rotate-45 text-[#ff4d29]" : ""}`}
                strokeWidth={1}
              />
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 pb-2">
                    {/* Description */}
                    <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Sub-services */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
                      {service.subServices.map((sub, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#ff4d29] text-xl font-light">+</span>
                          <span className="text-white/80 text-sm font-normal tracking-wide">
                            {sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="w-full border-t border-white/10" />
      </div>

    </section>
  );
}
