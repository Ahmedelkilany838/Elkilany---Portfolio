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
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#050505] text-white flex flex-col justify-end px-[4%] pb-[40px] md:pb-[60px] border-b border-white/5">

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
                <div className="flex flex-col items-start gap-8 order-2 md:order-1">
                    {/* Description Text */}
                    <p className="max-w-md text-lg md:text-xl font-medium leading-[1.4] tracking-tight text-white/90">
                        We build brands, websites, and digital experiences with <span className="text-white/50">intention, clarity and care.</span>
                    </p>

                    {/* Trust / Logos */}
                    <div className="flex flex-col gap-4 w-full">
                        <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">TRUSTED BY:</span>
                        {/* Simplified Logo Row */}
                        <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-6 w-20 bg-white/20 rounded-sm"></div>
                            <div className="h-6 w-20 bg-white/20 rounded-sm"></div>
                            <div className="h-6 w-20 bg-white/20 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT COLUMN: Headline (Lifted Up) --- */}
                <div className="flex flex-col items-start md:items-end text-left md:text-right gap-8 order-1 md:order-2 h-full justify-end pb-[200px] md:pb-[320px]">
                    {/* Headline */}
                    <h1 className="font-extrabold uppercase text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight">
                        Beyond Visuals.<br />
                        <span className="text-white/40">Built with<br />Vision.</span>
                    </h1>
                </div>

            </div>

        </section>
    );
}
