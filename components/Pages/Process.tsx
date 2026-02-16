import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        id: "1",
        title: "Discovery Phase",
        description: "Understanding your goals, pain points, audience, and what sets you apart.",
    },
    {
        id: "2",
        title: "Project Kickoff",
        description: "Setting up projects, aligning on scope and milestones, and diving into the work.",
    },
    {
        id: "3",
        title: "Design Concept",
        description: "Exploring visual directions and creating initial design systems.",
    },
    {
        id: "4",
        title: "Development",
        description: "Building robust, scalable code structures that bring the design to life.",
    },
    {
        id: "5",
        title: "Final Delivery",
        description: "Testing, refining, and launching the final product to the world.",
    },
];

export default function Process() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505] text-white mt-24 md:mt-32">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">

                {/* Everything scrolls together */}
                <motion.div style={{ x }} className="flex w-max items-start px-6 md:px-12" style={{ x, height: '75vh' }}>

                    {/* FIRST PANEL: Title — top-aligned with cards */}
                    <div className="w-[90vw] md:w-[40vw] h-full flex flex-col justify-between flex-shrink-0 pr-8 md:pr-16 relative">

                        {/* Top: Label */}
                        <div className="flex justify-end pt-2">
                            <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                                (PROCESS)
                            </span>
                        </div>

                        {/* Bottom: Big title */}
                        <div className="pb-4">
                            <h2 className="text-[18vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase text-[#e6e6e6]">
                                <span className="block">HOW I</span>
                                <span className="block">WORK</span>
                            </h2>
                        </div>
                    </div>

                    {/* CARDS */}
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-[75vw] md:w-[26vw] h-full bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col justify-between p-6 md:p-10 transition-all duration-500 hover:bg-[#111111] hover:border-white/20 flex-shrink-0 relative group mx-1.5 md:mx-2.5"
                        >
                            {/* Top: Step Number */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white/50 font-mono tracking-[0.1em] uppercase">
                                    STEP {step.id}<span className="text-[#ff4d29] font-bold">.</span>
                                </h3>
                            </div>

                            {/* Bottom: Title + Description */}
                            <div>
                                <h4 className="text-3xl md:text-[2.8rem] font-black mb-5 md:mb-6 tracking-tight leading-[1.05] text-white">
                                    {step.title}
                                </h4>
                                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm group-hover:text-white/70 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}
