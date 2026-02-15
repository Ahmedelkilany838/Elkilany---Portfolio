import MarqueeTitle from "components/Animation/MarqueeTitle";
import { useState } from "react";

// Service Data
const services = [
  {
    number: "01",
    title: "Advertising",
    description: "Compelling visuals for Social Media, Print Ads, and comprehensive campaigns that capture attention and drive engagement across all platforms.",
    image: "/images/1 v2.jpg"
  },
  {
    number: "02",
    title: "Branding",
    description: "From Logo Design to full Corporate Identity and Visual Systems. We build brands that stand out and tell a unique story.",
    image: "/images/Artboard 7-100.jpg"
  },
  {
    number: "03",
    title: "Print Design",
    description: "High-quality print assets, editorial layouts, and tangibles. We ensure your brand feels as premium in hand as it looks on screen.",
    image: "/images/Artboard 1 copy 4-100.jpg"
  },
  {
    number: "04",
    title: "Strategy",
    description: "In-depth market positioning and roadmap planning to define your brand's voice and ensure long-term growth and relevance.",
    image: "/images/Logo.jpg"
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden cursor-default">

      {/* Header Meta Bar - Contained */}
      <div className="w-full px-6 md:px-12 mb-12">
        <div className="flex justify-between items-center border-t border-white/20 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full inline-block" />
            <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              CAPABILITIES
            </span>
          </div>
          <span className="hidden md:block text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
            (WDX® — 04)
          </span>
          <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
            DIGITAL EXECUTION
          </span>
        </div>
      </div>

      {/* Marquee Title - Full Width */}
      <MarqueeTitle text="SERVICES" number="04" className="mb-24" />

      {/* White Divider Bar - Full Width Background, Contained Content */}
      <div className="w-full bg-white text-black py-3 mb-2 hidden md:block">
        <div className="px-6 md:px-12 flex justify-between items-center font-bold text-xs uppercase tracking-widest">
          <span className="w-1/4 pl-8">Precise</span>
          <span className="w-1/4 text-center">Structured</span>
          <span className="w-1/4 text-center">Focused</span>
          <span className="w-1/4 text-right pr-8">Visual Language</span>
        </div>
      </div>

      {/* Services List - Contained */}
      <div className="flex flex-col w-full px-6 md:px-12 z-10 relative">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group w-full border-t border-white/20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center transition-colors duration-300 hover:bg-white/5 relative"
          >
            {/* Number - Added Indentation */}
            <div className="md:col-span-2 pl-4 md:pl-8">
              <span className="text-white/50 font-mono text-sm md:text-base group-hover:text-white transition-colors">
                {service.number}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h3 className="text-white font-bold text-2xl md:text-3xl tracking-tight group-hover:text-[#ff4d29] transition-colors duration-300">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-6 flex justify-start md:justify-end">
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md group-hover:text-white/90 transition-colors">
                {service.description}
              </p>
            </div>

            {/* Simple Hover Image Reveal (Optional, static position or just hidden if total simplifiction is desired. Let's keep it simple: no floating image) */}
          </div>
        ))}
        {/* Bottom Border */}
        <div className="w-full border-t border-white/20" />
      </div>

    </section>
  );
}
