import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
    {
        id: "1",
        title: "Discovery & Strategy",
        description: "Understanding your vision, business goals, and target audience to build a solid foundation.",
    },
    {
        id: "2",
        title: "Concept & Design",
        description: "Crafting wireframes, exploring visual directions, and creating pixel-perfect high fidelity designs.",
    },
    {
        id: "3",
        title: "Development & Build",
        description: "Translating the design into clean, scalable, and highly performant code architectures.",
    },
    {
        id: "4",
        title: "Refine & Launch",
        description: "Rigorous testing, optimization, and seamless deployment of your brand's new digital experience.",
    },
];

export default function Process() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring for that buttery scrolling feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    // Make translation responsive so it doesn't overshoot
    const [scrollRange, setScrollRange] = useState("-65%");
    useEffect(() => {
        const updateRange = () => {
            if (window.innerWidth < 768) {
                setScrollRange("-82%");
            } else if (window.innerWidth < 1024) {
                setScrollRange("-75%");
            } else {
                setScrollRange("-65%");
            }
        };
        updateRange();
        window.addEventListener("resize", updateRange);
        return () => window.removeEventListener("resize", updateRange);
    }, []);

    const x = useTransform(smoothProgress, [0, 1], ["0%", scrollRange]);
    const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505] text-white border-b border-white/5">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <motion.div style={{ x }} className="flex items-center px-[4%] md:px-[6%] lg:px-[8%] w-max relative">

                    {/* TITLE BLOCK */}
                    <div className="w-max shrink-0 flex flex-col justify-center pr-16 md:pr-24 lg:pr-40">
                        <div className="flex items-center gap-4 mb-4 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                            </svg>
                            <div className="flex overflow-hidden whitespace-nowrap opacity-80 w-[200px] md:w-[300px]" style={{ maskImage: 'linear-gradient(to right, black 60%, transparent)' }}>
                                <motion.div
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                    className="flex"
                                >
                                    <span className="mr-4">WORK PROCESS — WORK PROCESS — WORK PROCESS — </span>
                                    <span className="mr-4">WORK PROCESS — WORK PROCESS — WORK PROCESS — </span>
                                </motion.div>
                            </div>
                        </div>

                        <h2 className="font-['Syne'] font-extrabold text-[clamp(4.5rem,10vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase">
                            <span className="text-white block">How I</span>
                            <span className="text-[#666] block">Work<span className="text-[#ff4d29]">.</span></span>
                        </h2>

                        <p className="mt-6 md:mt-8 text-white/50 text-sm md:text-base leading-[1.6] max-w-[300px] md:max-w-[400px] whitespace-normal">
                            A seamless journey from initial concept to a polished digital reality, crafted with absolute precision.
                        </p>
                    </div>

                    {/* JOURNEY TRACK */}
                    <div className="flex items-center gap-16 md:gap-32 lg:gap-[200px] relative px-4 md:px-0">

                        {/* THE BACKGROUND LINE */}
                        <div className="absolute top-[45%] md:top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>

                        {/* THE FILLED PROGRESS LINE */}
                        <motion.div
                            style={{ width: progressWidth }}
                            className="absolute top-[45%] md:top-1/2 left-0 h-[1px] bg-[#ff4d29] -translate-y-1/2 z-10 origin-left"
                        ></motion.div>

                        {steps.map((step, index) => (
                            <div key={index} className="relative z-20 w-[75vw] md:w-[320px] lg:w-[380px] shrink-0 flex flex-col">

                                {/* Top: Enormous Background Number */}
                                <div className="mb-12 md:mb-16">
                                    <span className="font-['Syne'] font-bold text-[6rem] md:text-[8rem] lg:text-[10rem] text-white/[0.03] tracking-tighter leading-none select-none">
                                        0{step.id}
                                    </span>
                                </div>

                                {/* Node Dot on the timeline */}
                                <div className="absolute top-[45%] md:top-1/2 left-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ff4d29] shadow-[0_0_15px_rgba(255,77,41,0.5)] -translate-y-1/2 z-20 scale-0 transform transition-transform duration-700 ease-out group-hover:scale-100"></div>
                                <div className="absolute top-[45%] md:top-1/2 left-0 w-2 h-2 rounded-full bg-white -translate-y-1/2 z-20"></div>

                                {/* Bottom: Typography Content */}
                                <div className="mt-8 md:mt-12">
                                    <h4 className="font-['Syne'] font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-[-0.02em] mb-4 uppercase">
                                        {step.title}
                                    </h4>
                                    <div className="w-8 h-[2px] bg-[#ff4d29] mb-4 md:mb-6"></div>
                                    <p className="text-white/50 text-sm md:text-base leading-[1.6]">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
