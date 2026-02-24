import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

import { Quote } from "lucide-react";

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "CMO, MG Motors MENA",
        text: "Ahmed transformed our regional identity completely. The visual system he created wasn't just beautiful—it was strategic. Our engagement rates soared by 40% within the first month.",
    },
    {
        name: "David Chen",
        role: "Head of Digital, Chevrolet",
        text: "I've worked with many designers, but Kilany is in a league of his own. His understanding of motion and typography created a digital experience that feels alive. Absolute mastery.",
    },
    {
        name: "Marcus Thorne",
        role: "Creative Director, Apex Media",
        text: "We needed a high-end, cinematic web presence for the BMW launch. Ahmed delivered exactly that. The site is fast, fluid, and visually stunning. He's a visual engineer.",
    },
    {
        name: "Elena Rodriguez",
        role: "Brand Manager, Range Rover",
        text: "A rare talent who understands luxury. The digital campaign he crafted perfectly balanced our heritage with modern innovation. The results spoke for themselves.",
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full bg-[#050505] py-[80px] md:py-[140px] px-[4%] md:px-[6%] lg:px-[8%] overflow-hidden border-b border-white/5">

            {/* Header DNA */}
            <motion.div
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full mb-[64px] border-b border-white/5 pb-8 flex items-end justify-between"
            >
                <h2 className="font-extrabold text-[clamp(2.5rem,8vw,4.25rem)] leading-[1.1] tracking-[-0.02em] uppercase text-white">
                    CLIENT VOICES<span className="text-[#ff4d29]">.</span>
                </h2>
                <span className="text-white/50 text-xl tracking-normal hidden md:block">(05)</span>
            </motion.div>

            <motion.div
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-[100rem] mx-auto"
            >

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Controls/List */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {reviews.map((review, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`text-left py-6 border-b transition-all duration-300 group ${activeIndex === index
                                    ? 'border-white opacity-100 pl-4'
                                    : 'border-white/10 opacity-40 hover:opacity-70 hover:pl-2'
                                    }`}
                            >
                                <span className={`block text-xs font-mono uppercase tracking-[0.2em] mb-2 ${activeIndex === index ? 'text-white' : 'text-white/50'}`}>
                                    0{index + 1}
                                </span>
                                <h4 className="font-extrabold text-xl md:text-2xl text-white uppercase tracking-[-0.05em]">
                                    {review.name}
                                </h4>
                                <span className="text-sm text-white/50 font-light">
                                    {review.role}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Right Content Display */}
                    <div className="lg:col-span-8 relative min-h-[400px] flex flex-col justify-center">
                        <Quote className="text-white/10 w-32 h-32 absolute -top-10 -left-10" />

                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10"
                        >
                            <p className="text-3xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.2] tracking-tight">
                                "{reviews[activeIndex].text}"
                            </p>

                            <div className="mt-12 flex items-center gap-4">
                                <div className="w-12 h-[2px] bg-white" />
                                <span className="text-white/80 font-mono text-sm uppercase tracking-widest">
                                    {reviews[activeIndex].role}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
