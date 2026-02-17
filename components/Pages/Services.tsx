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
    <section id="services" className="relative w-full bg-[#050505] py-[140px] px-[8%] border-b border-white/5">

      {/* Header DNA */}
      <div className="w-full mb-[64px] border-b border-white/5 pb-8 flex items-end justify-between">
        <h2 className="font-['Syne'] font-extrabold text-[7vw] md:text-[4.5rem] lg:text-[5rem] leading-[1.1] tracking-[-0.01em] uppercase text-white">
          HOW WE CAN HELP<span className="text-[#ff4d29]">.</span>
        </h2>
        <span className="text-white/50 font-['Syne'] text-xl tracking-normal hidden md:block mb-2">(04)</span>
      </div>

      {/* Services List */}
      <div className="flex flex-col w-full z-10 relative">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group w-full border-t border-white/5 py-[64px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center transition-colors duration-300 hover:bg-white/5 relative"
          >
            {/* Number */}
            <div className="md:col-span-2 pl-4 md:pl-8">
              <span className="text-white/50 font-['Syne'] text-sm md:text-base group-hover:text-white transition-colors font-medium tracking-normal">
                {service.number}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h3 className="font-['Syne'] font-extrabold text-white text-2xl md:text-3xl tracking-[-0.04em] leading-[0.9] group-hover:text-[#ff4d29] transition-colors duration-300 uppercase">
                {service.title}<span className="text-[#ff4d29] opacity-0 group-hover:opacity-100 transition-opacity">.</span>
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-6 flex justify-start md:justify-end">
              <p className="text-white/80 font-['Syne'] text-sm md:text-base leading-[1.6] max-w-md group-hover:text-white/90 transition-colors text-left md:text-right font-medium tracking-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        {/* Bottom Border */}
        <div className="w-full border-t border-white/5" />
      </div>

    </section>
  );
}
