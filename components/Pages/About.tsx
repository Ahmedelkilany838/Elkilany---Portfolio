import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- Helper Components for Text Reveal ---

const Word = ({ children, range, progress }: { children: string; range: [number, number]; progress: any }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.2em] relative">
      {children}
    </motion.span>
  );
};

const ScrollRevealText = ({ content, className }: { content: string; className?: string }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.4"], // Start lighting up when entering viewport
  });

  const words = content.split(" ");

  return (
    <h2 ref={element} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
};

export default function About() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black py-20 px-6 md:px-24 overflow-hidden">

      {/* --- Abstract Wave (Wide, Behind Card) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/bg-card.avif"
          alt="Abstract Wave"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Glass Card - Premium Sharp Look */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 w-full max-w-[90rem] aspect-auto md:aspect-[2/1] min-h-[500px] md:min-h-0 flex flex-col items-center justify-center text-center p-6 md:p-16 rounded-[20px] border border-white/10 overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.4) 100%)",
          backdropFilter: "blur(40px)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset, 0 20px 50px -20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12 max-w-6xl mx-auto w-full px-2 md:px-4">

          {/* Mini Marquee Subtitle */}
          <div className="relative overflow-hidden w-[180px] h-8 flex items-center justify-center mask-image-gradient">
            <motion.div
              className="flex whitespace-nowrap min-w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="flex gap-4 pr-4">
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">WHO I AM!</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">WHO I AM!</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
              </div>
              <div className="flex gap-4 pr-4">
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">WHO I AM!</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">WHO I AM!</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
              </div>
            </motion.div>
            <style>{`
                .mask-image-gradient {
                  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
              `}</style>
          </div>

          {/* Main Headline - Correct Width (max-w-4xl) to make lines break naturally but wide */}
          <div className="max-w-5xl mx-auto">
            <ScrollRevealText
              content="I AM A CREATIVE GRAPHIC DESIGNER TURNING IDEAS INTO VISUAL REALITY WITH PASSION."
              className="text-xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.2] text-white drop-shadow-xl tracking-wide px-2"
            />
          </div>

          <p className="text-white/60 text-sm md:text-lg font-medium max-w-3xl leading-relaxed -mt-2">
            Specializing in Branding, Visual Identity, and Creative Direction. My goal is to elevate brands through strategic design and compelling visual storytelling that leaves a lasting impression.
          </p>

          {/* Button - Standard Size & Style */}
          <button className="mt-4 px-8 py-3 bg-[#ff4d29] text-white text-xs md:text-sm font-bold uppercase tracking-widest rounded transition-all hover:bg-[#ff330a] shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 hover:scale-105 active:scale-95">
            More About Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
