import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);

    // Track the scroll progress based on the layout position of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Capture from when the top enters the bottom of the viewport to when it leaves
        offset: ["start end", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, // Slightly stiffer for better responsiveness
        damping: 30,    // Smooth friction
        restDelta: 0.001
    });

    // Custom mapping for: starts heavy/slow, accelerates, and lands exactly at 1.0
    // Keep in mind with offset ["start end", "end end"] of a 100vh section:
    const scale = useTransform(smoothProgress,
        [0, 0.5, 0.8, 1],
        [1.6, 1.45, 1.1, 1]
    );

    return (
        <section
            ref={containerRef}
            // `sticky top-0` freezes the image so the next section slides OVER it.
            // Explicitly set z-index to 0 to ensure the next sibling (with relative/z-10) floats above.
            className="sticky top-0 w-full h-[100vh] overflow-hidden bg-[#050505] z-0"
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

            {/* Dark Fade Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

            {/* Absolute Centered Stats Floating Over Image */}
            <div className="absolute inset-0 z-20 flex w-full flex-col h-full items-center justify-center pt-[10vh]">
                <div className="w-full max-w-[1800px] h-full px-[4%] md:px-[6%] lg:px-[8%] mx-auto flex flex-col md:flex-row items-center justify-evenly md:justify-between py-[15vh]">

                    {/* 1. Years of Experience */}
                    <div className="flex flex-col items-center justify-center text-center group">
                        <div className="text-white font-['Mona_Sans','Syne',sans-serif] font-bold text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] leading-none tracking-tight mb-2 md:mb-4">
                            <span className="inline-flex overflow-hidden pb-4">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="inline-block"
                                >
                                    13+
                                </motion.span>
                            </span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }}
                            className="font-['Syne'] font-bold tracking-[0.15em] uppercase text-xs md:text-sm text-white/50"
                        >
                            Years of Experience
                        </motion.div>
                    </div>

                    {/* Divider 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
                        className="hidden md:flex items-center justify-center text-white/30"
                    >
                        <svg width="32" height="32" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M14.75 7.74854L0.75 7.74853" />
                            <path d="M7.74805 0.75L7.74805 14.75" />
                        </svg>
                    </motion.div>

                    {/* 2. Completed Projects */}
                    <div className="flex flex-col items-center justify-center text-center group">
                        <div className="text-white font-['Mona_Sans','Syne',sans-serif] font-bold text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] leading-none tracking-tight mb-2 md:mb-4">
                            <span className="inline-flex overflow-hidden pb-4">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="inline-block"
                                >
                                    290+
                                </motion.span>
                            </span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75 }} viewport={{ once: true }}
                            className="font-['Syne'] font-bold tracking-[0.15em] uppercase text-xs md:text-sm text-white/50"
                        >
                            Completed Projects
                        </motion.div>
                    </div>

                    {/* Divider 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.45 }} viewport={{ once: true }}
                        className="hidden md:flex items-center justify-center text-white/30"
                    >
                        <svg width="32" height="32" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M14.75 7.74854L0.75 7.74853" />
                            <path d="M7.74805 0.75L7.74805 14.75" />
                        </svg>
                    </motion.div>

                    {/* 3. Companies Trusted */}
                    <div className="flex flex-col items-center justify-center text-center group">
                        <div className="text-white font-['Mona_Sans','Syne',sans-serif] font-bold text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] leading-none tracking-tight mb-2 md:mb-4">
                            <span className="inline-flex overflow-hidden pb-4">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="inline-block"
                                >
                                    60+
                                </motion.span>
                            </span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }}
                            className="font-['Syne'] font-bold tracking-[0.15em] uppercase text-xs md:text-sm text-white/50"
                        >
                            Companies trusted us
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Note: Ensure HMR catches this to sync both pages
