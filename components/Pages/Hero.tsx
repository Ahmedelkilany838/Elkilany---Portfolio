import { useRef } from "react";
import { Link } from "react-router";
import FluidButton from "../FluidButton";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 200]); // Reduced parallax
    const scale = useTransform(scrollY, [0, 1000], [1.15, 1]); // Zoom out effect
    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#050505] text-white flex flex-col justify-end px-[4%] md:px-[6%] lg:px-[8%] pb-[40px] md:pb-[60px] border-b border-white/5">
            {/* --- Background Layer --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="relative w-full h-full">
                    <motion.img
                        style={{ scale }}
                        src="/images/hero.png"
                        alt="Hero"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                    {/* Subtle bottom fade only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
            </div>

            {/* --- Bottom Content Grid (Framer Replica) --- */}
            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-12 md:mb-0">

                {/* --- LEFT COLUMN: Description & Trust --- */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-start gap-8 order-2 md:order-1"
                >
                    {/* Description Text */}
                    <p className="max-w-md text-lg md:text-xl font-medium leading-[1.4] tracking-tight text-white/90">
                        I shape visual systems, key visuals, and communication-driven designs with <span className="text-white/50">clarity, strategy, and intention.</span>
                    </p>

                    {/* Expertise / Focus Areas */}
                    <div className="flex flex-col gap-4 w-full mt-2">
                        <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">CORE EXPERTISE:</span>
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-['Syne'] font-bold text-white uppercase tracking-[0.05em] mix-blend-difference">
                            <span className="px-4 py-1.5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">Branding</span>
                            <span className="px-4 py-1.5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">Advertising</span>
                            <span className="px-4 py-1.5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">Visual Direction</span>
                        </div>
                    </div>
                </motion.div>

                {/* --- RIGHT COLUMN: Headline (Lifted Up) --- */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-start md:items-end text-left md:text-right gap-4 sm:gap-8 order-1 md:order-2 h-full justify-end pb-[80px] sm:pb-[140px] md:pb-[320px]"
                >
                    {/* Headline */}
                    <h1 className="font-['Syne'] font-extrabold uppercase text-[clamp(2.2rem,11vw,7.5rem)] sm:text-[clamp(3.5rem,7.5vw,7.5rem)] leading-[0.85] tracking-[-0.04em] flex flex-col items-start md:items-end text-white text-left md:text-right">
                        <span className="block drop-shadow-lg text-white">INTENTIONAL</span>
                        <span className="block drop-shadow-lg">AESTHETICS.</span>
                    </h1>
                </motion.div>

            </div>

        </section>
    );
}
