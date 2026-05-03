import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const credibilityNotes = [
    {
        title: "Strategic visual thinking",
        description: "I connect the visual direction to the brand goal, audience, and communication context.",
    },
    {
        title: "Production-aware craft",
        description: "I design with real formats in mind, from social and campaign assets to print and packaging.",
    },
    {
        title: "Flexible collaboration",
        description: "I can work directly with brands, agencies, or internal teams as a focused creative partner.",
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scale = useTransform(smoothProgress,
        [0, 0.5, 0.8, 1],
        [1.6, 1.45, 1.1, 1]
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100vh] overflow-hidden bg-[#050505] z-10 border-b border-white/5"
        >
            <motion.div
                className="w-full h-full will-change-transform origin-center"
                style={{ scale }}
            >
                <img
                    src="/images/freepik recreate.png"
                    alt="Ahmed Kilany"
                    className="w-full h-[100vh] object-cover object-center"
                />
            </motion.div>

            {/* Dark Fade Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

            {/* Credibility notes */}
            <div className="absolute inset-0 z-20 flex w-full flex-col h-full items-center justify-center pt-[10vh]">
                <div className="w-full max-w-[1800px] h-full px-[4%] md:px-[6%] lg:px-[8%] mx-auto flex flex-col md:flex-row items-center justify-evenly md:justify-between py-[15vh]">
                    {credibilityNotes.map((note, index) => (
                        <motion.div
                            key={note.title}
                            initial={{ opacity: 0, y: 36 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full md:w-[30%] rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8"
                        >
                            <span className="text-[#ff4d29] text-xs font-mono">0{index + 1}</span>
                            <h3 className="mt-5 font-['Syne'] font-extrabold text-2xl md:text-4xl uppercase tracking-[-0.03em] text-white">
                                {note.title}
                            </h3>
                            <p className="mt-5 text-white/60 text-sm md:text-base leading-relaxed">
                                {note.description}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
