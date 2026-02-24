import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { Link } from 'react-router';

// We keep the original text but we will force it to uppercase in the UI to match the design.
const sentence = "I shape concepts into communication-driven designs that help brands speak clearly and connect with people in meaningful ways".split(" ");

function Word({ children, range, progress }: { children: React.ReactNode, range: [number, number], progress: MotionValue<number> }) {
  // Map the scroll progress over the character's range to a bright white color, otherwise keep it a dark grey #222222
  const color = useTransform(progress, range, ["#222222", "#ffffff"]);

  return (
    <span className="relative inline-block mb-[0.1em] mr-[0.2em]">
      <motion.span style={{ color }} className="select-none inline-block will-change-[color] transform-gpu">
        {children}
      </motion.span>
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start fading when top of container hits the center, finish when bottom of container hits the bottom
    offset: ["start center", "end end"]
  });

  return (
    <section ref={containerRef} className="relative w-full min-h-[150vh] bg-[#050505] flex items-start justify-center">
      {/* Sticky container to lock the view while scrolling through */}
      <div className="sticky top-[15%] w-full py-[clamp(40px,5vh,80px)] px-[4%] md:px-[6%] lg:px-[8%] flex flex-col md:flex-row items-start justify-center gap-8 xl:gap-16 transform-gpu">

        {/* 1. Left Column: Rotating Text Ring */}
        <div className="hidden lg:flex w-[200px] xl:w-[220px] shrink-0 mt-[12px] justify-end xl:pr-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="w-[160px] h-[160px] xl:w-[180px] xl:h-[180px] text-white/80"
          >
            {/* SVG implementation of circular text */}
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="textCircle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text className="text-[11.5px] uppercase font-['Syne'] tracking-[2px] font-bold" fill="currentColor">
                <textPath href="#textCircle" startOffset="0%">
                  - DESIGN THINKING - DESIGN THINKING
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>

        {/* 2. Right Column: Main Content Area */}
        <div className="flex-1 w-full max-w-[1200px] flex flex-col">

          {/* Top Label: Rotating Asterisk + Looping Marquee */}
          <div className="flex items-center gap-4 mb-6 md:mb-10 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
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
                <span className="mr-4">ABOUT ME — ABOUT ME — ABOUT ME — </span>
                <span className="mr-4">ABOUT ME — ABOUT ME — ABOUT ME — </span>
              </motion.div>
            </div>
          </div>

          {/* Header Area with Scrolling Reveal Text */}
          <h2 className="font-['Syne'] text-left flex flex-wrap items-center content-start uppercase">

            {/* Word-by-Word Scroll Engine */}
            {sentence.map((word, i) => {
              // We map the word indices to fractions between 0 and 0.8 so the whole phrase completes
              // well before the user finishes scrolling past the container.
              const completionPoint = 0.8;
              const step = completionPoint / sentence.length;
              const start = i * step;
              const end = start + step;

              return (
                <Word key={i} range={[start, end]} progress={scrollYProgress}>
                  <span className="text-[36px] md:text-[52px] lg:text-[72px] font-bold tracking-[-0.02em] leading-[1.1]">
                    {word}
                  </span>
                </Word>
              );
            })}

            {/* Period / Stop Mark Animation */}
            <span className="inline-block relative">
              <motion.span
                style={{ color: useTransform(scrollYProgress, [0.8, 0.85], ["#222222", "#ffffff"]) }}
                className="text-[36px] md:text-[52px] lg:text-[72px] font-bold tracking-[-0.02em] leading-[1.1]"
              >
                .
              </motion.span>
            </span>
          </h2>

          {/* Sub-Texts & Button Grid */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-16 w-full lg:w-full xl:w-[95%]"
          >

            {/* Left Sub-Column */}
            <div className="flex flex-col gap-10 md:w-[55%] lg:w-[60%]">
              <p className="text-white/60 text-base md:text-lg font-['Syne'] leading-relaxed font-medium max-w-xl">
                Approaching every project with a mix of strategic thinking and visual sensitivity, I create cohesive design systems that
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 mt-2 w-full sm:w-auto">

                {/* Button 1: Solid Pill */}
                <Link to="/about" className="relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-white text-black rounded-full overflow-hidden group hover:scale-105 active:scale-95 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] shrink-0 transform-gpu">
                  <div className="absolute inset-0 w-full h-full bg-[#ff4d29] scale-y-0 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 rounded-full"></div>
                  <span className="relative z-10 flex overflow-hidden font-['Syne'] font-bold text-sm md:text-base lg:text-lg tracking-[0.05em] uppercase">
                    {"MORE ABOUT ME".split('').map((char, i) => (
                      <span key={i} className="relative inline-block leading-none">
                        <span className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-black" style={{ transitionDelay: `${i * 10}ms` }}>
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                        <span className="absolute top-0 left-0 block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-white" style={{ transitionDelay: `${i * 10}ms` }}>
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      </span>
                    ))}
                  </span>

                  {/* Spark Icon with rotation hover */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-black group-hover:text-white group-hover:rotate-180 shrink-0">
                    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                  </svg>
                </Link>

                {/* Button 2: Underline Link */}
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm md:text-base lg:text-lg font-['Syne'] font-bold uppercase tracking-[0.05em] group shrink-0">
                  <span className="relative pb-1">
                    <span className="relative flex overflow-hidden">
                      {"CONTACT ME".split('').map((char, i) => (
                        <span key={i} className="relative inline-block leading-none">
                          <span
                            className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-white"
                            style={{ transitionDelay: `${i * 15}ms` }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                          <span
                            className="absolute top-0 left-0 block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-[#ff4d29]"
                            style={{ transitionDelay: `${i * 15}ms` }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        </span>
                      ))}
                    </span>

                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30">
                      <span className="absolute inset-0 bg-[#ff4d29] origin-left scale-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
                    </span>
                  </span>

                  <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute m-auto inset-0 text-white transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute m-auto inset-0 text-[#ff4d29] transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Sub-Column */}
            <div className="md:w-[45%] lg:w-[40%]">
              <p className="text-white/60 text-base md:text-lg font-['Syne'] leading-relaxed font-medium">
                help brands speak clearly, solving communication challenges through meaningful and human-centered design.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
