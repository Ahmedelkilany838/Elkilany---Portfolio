import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Timelines depend on the scope, but a complete brand identity usually takes 4-6 weeks. Web projects range from 3-8 weeks. I prioritize quality and strategic depth, ensuring every delivery is market-ready."
    },
    {
        question: "Do you use AI in your workflow?",
        answer: "Yes, I leverage AI for research, rapid prototyping, and workflow optimization. However, the core strategy, creative direction, and final polish are 100% human-crafted to ensure uniqueness and emotional resonance."
    },
    {
        question: "What exactly do I get at the end?",
        answer: "You receive a comprehensive brand system: Logo suites, typography, color palettes, usage guidelines, and ready-to-use assets for print and digital. For web, a fully deployed, high-performance site."
    },
    {
        question: "Do you work with agencies or directly with clients?",
        answer: "Both. I partner with agencies as a specialized senior creative lead for high-stakes pitches, and I work directly with visionary founders who want to build legacy brands."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative w-full bg-[#050505] py-[60px] md:py-[100px] lg:py-[140px] px-[4%] md:px-[6%] lg:px-[8%] border-b border-white/5">
            <div className="w-full max-w-[1800px] mx-auto flex flex-col">

                {/* Header: Template Snippet Layout */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-12 md:mb-16 gap-12 md:gap-24"
                >
                    {/* Left Column: Subtitle & Heading */}
                    <div className="flex flex-col justify-start shrink-0">
                        <div className="flex items-center gap-4 mb-4 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
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
                                    <span className="mr-4">GENERAL FAQ — GENERAL FAQ — GENERAL FAQ — </span>
                                    <span className="mr-4">GENERAL FAQ — GENERAL FAQ — GENERAL FAQ — </span>
                                </motion.div>
                            </div>
                        </div>

                        <h2 className="font-['Syne'] font-extrabold text-[clamp(2.8rem,10vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase">
                            <span className="text-white block">General</span>
                            <span className="text-[#666] block">Questions</span>
                        </h2>
                    </div>

                    {/* Right Column: Paragraph & Link */}
                    <div className="flex flex-col md:items-end">
                        <div className="max-w-md text-left flex flex-col items-start">
                            <p className="text-white/60 text-lg md:text-xl leading-[1.6] mb-8 md:mb-12">
                                Explore helpful answers to frequent questions about my services and working approach.
                            </p>

                            <Link to="/contact" className="inline-flex items-center gap-2 text-base md:text-lg font-['Syne'] font-bold uppercase tracking-[0.05em] group mt-2 md:mt-4">
                                <span className="relative pb-1">
                                    <span className="relative flex overflow-hidden">
                                        {"ASK A QUESTION".split('').map((char, i) => (
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

                                <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
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
                </motion.div>

                {/* Accordion: Full Width */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full flex flex-col"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-white/10"
                        >
                            <button
                                onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                                className="w-full py-6 md:py-10 flex items-center justify-between text-left group"
                            >
                                <span className={`font-['Syne'] font-extrabold text-xl md:text-3xl lg:text-4xl uppercase transition-colors duration-300 tracking-[-0.02em] flex items-center gap-4 ${openIndex === index ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                                    {faq.question}
                                    {openIndex === index && <span className="w-2 h-2 shrink-0 rounded-full bg-[#ff4d29]" />}
                                </span>
                                <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'border-white bg-white text-black' : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 md:pb-12 text-white/70 text-base md:text-xl leading-relaxed max-w-4xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
