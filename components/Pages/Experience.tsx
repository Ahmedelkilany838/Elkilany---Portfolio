import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FluidButton from "../FluidButton";

// Stats Data
const stats = [
    { label: "Years of Experience", value: 3, suffix: "+" },
    { label: "Satisfied Clients", value: 35, suffix: "+" },
    { label: "Projects Delivered", value: 80, suffix: "+" },
    { label: "Design Awards", value: 3, suffix: "" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { stiffness: 50, damping: 20, duration: 2.5 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className="flex items-baseline">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};



export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Premium "Heavy" Physics
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 1 });

    // 1. Background Zoom (Image goes further back)
    const scale = useTransform(smoothProgress, [0, 1], [1.3, 1]);

    // 2. Parallax Text (Text moves slower than background -> appears closer/floating)
    const textY = useTransform(smoothProgress, [0, 1], [0, -100]);
    const statsY = useTransform(smoothProgress, [0, 1], [0, -50]);

    return (
        <section className="relative w-full bg-black">
            <div ref={containerRef} className="relative w-full h-[150vh]">
                {/* Sticky Container */}
                <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

                    {/* Full Screen Background Image */}
                    <motion.div
                        style={{ scale }}
                        className="absolute inset-0 w-full h-full z-0"
                    >
                        <img
                            src="/images/freepik recreate.png"
                            alt="Ahmed Kilany"
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Cinematic Grain Overlay */}
                        <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-10 mix-blend-overlay"
                            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                        />

                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 z-10" />
                        <div className="absolute inset-0 bg-black/30 z-10" />
                    </motion.div>

                    {/* Content Overlay */}
                    <div className="relative z-20 w-full max-w-[90rem] px-6 md:px-12 flex flex-col justify-end h-full pb-24 md:pb-32">

                        {/* Header Meta - Absolute Top */}
                        <div className="absolute top-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center border-b border-white/20 pb-6">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full inline-block" />
                                <span className="text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                                    PROFESSIONAL JOURNEY
                                </span>
                            </div>
                            <span className="hidden md:block text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                                (WDX® — 05)
                            </span>
                            <span className="text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                                STATS & IMPACT
                            </span>
                        </div>

                        {/* Main Headline - Parallax Effect */}
                        <motion.div style={{ y: textY }}>
                            <motion.h2
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-5xl md:text-[5vw] font-black text-white leading-[0.9] tracking-tighter mb-16 max-w-5xl"
                            >
                                3+ YEARS OF <br />
                                <span className="text-white/50">VISUAL MASTERY.</span>
                            </motion.h2>
                        </motion.div>

                        {/* Stats Row - Parallax Effect (Slightly slower) */}
                        <motion.div
                            style={{ y: statsY }}
                            className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/20 pt-12"
                        >
                            {stats.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                    className="flex flex-col gap-2"
                                >
                                    <span className="text-white text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-1">
                                        <Counter value={item.value} suffix={item.suffix} />
                                    </span>
                                    <span className="text-white/60 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
