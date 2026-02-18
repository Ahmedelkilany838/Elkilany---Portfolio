import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const sentence = "I combine years of branding and advertising expertise to craft meaningful, story-driven experiences".split(" ");

function Word({ children, range, progress }: { children: string, range: [number, number], progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="absolute opacity-20 text-white select-none">{children}</span>
      <motion.span style={{ opacity }} className="text-white select-none">
        {children}
      </motion.span>
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.9"]
  });

  return (
    <section ref={containerRef} className="relative w-full min-h-[150vh] bg-[#050505]">
      <div className="sticky top-[10%] w-full py-[80px] md:py-[140px] px-[8%] border-b border-white/5 flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8">

        {/* 1. The Label */}
        <div className="md:w-[100px] shrink-0 pt-[2px]">
          <span className="text-[#ff4d29] text-[14px] font-['Syne'] font-medium uppercase tracking-[0.1em]">
            (ABOUT)
          </span>
        </div>

        {/* 2. The Text Block (Scroll Reveal) */}
        <h2 className="max-w-[1200px] font-['Syne'] text-left flex flex-wrap items-start content-start">
          {sentence.map((word, i) => {
            const start = i / sentence.length;
            const end = start + (1 / sentence.length);
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {/* Re-applying exact styling classes */}
                <span className="text-[42px] md:text-[60px] lg:text-[72px] font-semibold tracking-[-0.06em] leading-[1.05]">
                  {word}
                </span>
              </Word>
            );
          })}

          {/* Creating the Dot component similarly but simpler logic if needed, or just append it */}
          <span className="inline-block relative">
            <span className="text-[#ff4d29] text-[42px] md:text-[60px] lg:text-[72px] font-semibold tracking-[-0.06em] leading-[1.05] opacity-20 absolute">.</span>
            <motion.span
              style={{ opacity: useTransform(scrollYProgress, [0.95, 1], [0.2, 1]) }}
              className="text-[#ff4d29] text-[42px] md:text-[60px] lg:text-[72px] font-semibold tracking-[-0.06em] leading-[1.05]"
            >
              .
            </motion.span>
          </span>

        </h2>
      </div>
    </section>
  );
}
