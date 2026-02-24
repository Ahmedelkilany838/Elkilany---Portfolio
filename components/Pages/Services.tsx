import { Link } from "react-router";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { createPortal } from "react-dom";

const services = [
  {
    title: "BRANDING",
    description: "Building distinctive, memorable, and cohesive visual identities that resonate with your target audience.",
    subServices: ["Logo Design", "Visual Systems", "Brand Guidelines", "Art Direction"],
    image: "/images/1 v2.jpg"
  },
  {
    title: "ADVERTISING",
    description: "Strategic campaigns that capture attention and drive real engagement across all mediums.",
    subServices: ["Social Media Content", "Paid Ads", "Campaign Strategy", "Motion Graphics"],
    image: "/images/3.png"
  },
  {
    title: "PRINT DESIGN",
    description: "Tangible assets designed with precision, ensuring your brand feels as premium in hand as it looks on screen.",
    subServices: ["Packaging Design", "Editorial & Books", "Stationery", "Merchandise"],
    image: "/images/Artboard 1 copy 4-100.jpg"
  },
  {
    title: "STRATEGY",
    description: "Data-driven insights and roadmaps defining your brand's voice and path to long-term growth.",
    subServices: ["Market Research", "Brand Positioning", "Content Strategy", "Consultation"],
    image: "/images/Artboard 7-100.jpg"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth the mouse movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section id="services" className="relative w-full bg-[#050505] py-[clamp(60px,8vh,140px)] px-[4%] md:px-[6%] lg:px-[8%] border-b border-white/5 overflow-visible transform-gpu">
      <div className="w-full max-w-[1800px] mx-auto flex flex-col">

        {/* Custom Image Cursor (Portal to body to escape transform stacking context) */}
        {isMounted && typeof document !== "undefined" && createPortal(
          <motion.div
            className="fixed top-0 left-0 w-[180px] h-[240px] md:w-[220px] md:h-[290px] rounded-2xl overflow-hidden pointer-events-none z-[99999] hidden md:block border border-white/10 shadow-2xl"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              translateX: "-50%",
              translateY: "-50%",
              scale: hoveredIndex !== null ? 1 : 0.8,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {services.map((srv, idx) => (
              <img
                key={idx}
                src={srv.image}
                alt={srv.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: hoveredIndex === idx ? 1 : 0 }}
              />
            ))}
          </motion.div>,
          document.body
        )}

        {/* Top Grid / Header (Identical structure to Works section) */}
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-end">
            {/* Left Column: Subtitle & Heading */}
            <div className="flex flex-col justify-start shrink-0">
              <div className="flex items-center gap-4 mb-4 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                    className="inline-block text-xl md:text-2xl mt-[-2px]"
                  >
                    ✲
                  </motion.span>
                </svg>
                <div className="flex overflow-hidden whitespace-nowrap opacity-80 w-[200px] md:w-[300px]" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                    className="flex"
                  >
                    <span className="mr-4">MY SERVICES — MY SERVICES — MY SERVICES — </span>
                    <span className="mr-4">MY SERVICES — MY SERVICES — MY SERVICES — </span>
                  </motion.div>
                </div>
              </div>

              <h2 className="font-['Syne'] font-extrabold text-[clamp(2.8rem,10vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase">
                <span className="text-white block whitespace-nowrap">Creative</span>
                <span className="text-[#666] block whitespace-nowrap">Solutions</span>
              </h2>
            </div>

            <div className="pb-2 md:pb-4 flex justify-start md:justify-end">
              <Link
                to="/services"
                className="group rounded-[100px] bg-white text-black px-10 py-5 md:px-14 md:py-6 flex items-center justify-center gap-4 hover:bg-[#ff4d29] hover:text-white transition-all duration-400 ease-out hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] transform-gpu"
              >
                <span className="font-['Syne'] font-bold text-base md:text-lg tracking-[0.15em] uppercase mt-[2px]">All Services</span>
                <span className="text-2xl md:text-3xl leading-none -mt-[2px] font-light transition-transform duration-500 group-hover:rotate-90">+</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Services List */}
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col w-full border-t border-white/10 mt-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-hide-cursor="true"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col w-full py-8 md:py-12 border-b border-white/10 cursor-none transition-colors hover:bg-[#111] active:bg-[#111] duration-500 px-4 md:px-6 -mx-4 md:-mx-6 transform-gpu"
            >
              {/* Top Row: Title + Icon */}
              <div className="flex items-center justify-between w-full">
                <h2 className="font-['Syne'] font-bold text-[clamp(1.8rem,6vw,5rem)] text-white/50 group-hover:text-white transition-colors duration-500 uppercase leading-none tracking-[-0.03em] m-0">
                  {service.title}
                </h2>
                <div className="flex items-center justify-center p-2">
                  <Plus
                    className={`w-8 h-8 md:w-10 md:h-10 text-white/50 group-hover:text-white transition-all duration-500 font-thin ${hoveredIndex === index ? "rotate-45" : ""}`}
                    strokeWidth={1}
                  />
                </div>
              </div>

              {/* Expandable Content (Description & Sub-services) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden w-full"
                  >
                    <div className="pt-8 md:pt-10 flex flex-col">
                      <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-3xl text-left">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 pb-2">
                        {service.subServices.map((sub, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-[#ff4d29] text-xl font-light leading-none mt-[-2px]">+</span>
                            <span className="text-white text-sm md:text-base font-medium tracking-wide">
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
        </motion.div>
      </div>

    </section>
  );
}
