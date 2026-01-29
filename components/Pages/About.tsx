import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import FluidButton from "../FluidButton";

// --- Helper Components for Text Reveal ---

const Word = ({ children, range, progressIn, progressOut }: { children: string; range: [number, number]; progressIn: any; progressOut: any }) => {
  // Entry: 0.1 -> 1
  const opacityIn = useTransform(progressIn, range, [0.1, 1]);
  // Exit: 1 -> 0.1 (As progressOut goes 0->1)
  const opacityOut = useTransform(progressOut, range, [1, 0.1]);

  // Combine: When entering, Out is 1, so we see In. When exiting, In is 1, so we see Out.
  const opacity = useTransform([opacityIn, opacityOut], ([i, o]: any) => i < 1 ? i : o);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.2em] relative">
      {children}
    </motion.span>
  );
};

const ScrollRevealText = ({ content, className }: { content: string; className?: string }) => {
  const element = useRef(null);

  // Track Entry (Scroll Down -> Fade In)
  const { scrollYProgress: scrollIn } = useScroll({
    target: element,
    offset: ["start 0.95", "start 0.45"],
  });

  // Track Exit (Scroll Down further -> Fade Out) 
  const { scrollYProgress: scrollOut } = useScroll({
    target: element,
    offset: ["end 0.6", "end 0.1"], // Starts fading out when element leaves the center-top area
  });

  const springConfig = { damping: 20, stiffness: 70, mass: 0.2 };
  const smoothIn = useSpring(scrollIn, springConfig);
  const smoothOut = useSpring(scrollOut, springConfig);

  const words = content.split(" ");
  // Ensure the last word always finishes exactly at 1.0
  // FADE_DURATION determines how "long" the fade is for a single word relative to the whole scroll
  const FADE_DURATION = 0.15;
  const STEP = (1 - FADE_DURATION) / (words.length - 1);

  return (
    <h2 ref={element} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, i) => {
        const start = i * STEP;
        const end = start + FADE_DURATION;

        return (
          <Word
            key={i}
            range={[start, end]}
            progressIn={smoothIn}
            progressOut={smoothOut}
          >
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
        className="relative z-20 w-full max-w-[90rem] aspect-auto md:aspect-[2/1] min-h-[500px] md:min-h-0 flex flex-col items-center justify-center text-center p-6 md:p-16 pt-24 md:pt-32 rounded-[20px] border border-white/10 overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.4) 100%)",
          backdropFilter: "blur(40px)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset, 0 20px 50px -20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12 max-w-6xl mx-auto w-full px-2 md:px-4">

          {/* Standard Meta Utility Bar - Added for Consistency */}
          <div className="w-full flex justify-between items-center border-b border-white/10 pb-4 mb-4 md:mb-8 absolute top-6 left-0 px-6 md:px-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full inline-block" />
              <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                WHO I AM
              </span>
            </div>
            <span className="hidden md:block text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              (WDX® — 02)
            </span>
            <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              ABOUT ME
            </span>
          </div>

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
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">SENIOR DESIGNER</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">ADVERTISING SPECIALIST</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
              </div>
              <div className="flex gap-4 pr-4">
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">SENIOR DESIGNER</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
                <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">ADVERTISING SPECIALIST</span>
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
              content="I CREATE VISUALS THAT LET PEOPLE FEEL WHAT BRANDS ARE TRYING TO SAY."
              className="text-xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.2] text-white drop-shadow-xl tracking-wide px-2"
            />
          </div>

          <p className="text-white/60 text-sm md:text-lg font-medium max-w-3xl leading-relaxed -mt-2">
            Curious by nature and driven by clarity, I've always been drawn to the spaces where ideas become visuals and visuals become communication. My work sits between creativity and intention — shaping concepts into designs that help brands speak clearly and connect with people in meaningful ways. I approach every project with a mix of strategic thinking, visual sensitivity, and a constant desire to simplify the complex.
          </p>

          {/* Button - Standard Size & Style */}
          {/* @ts-ignore */}
          {/* @ts-ignore */}
          <FluidButton to="/about">
            More About Me
          </FluidButton>
        </div>
      </motion.div>
    </section>
  );
}
