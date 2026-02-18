import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


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
        <section className="relative w-full bg-[#050505] py-[80px] md:py-[140px] px-[8%] border-b border-white/5">
            <div className="max-w-[100rem] mx-auto">

                {/* Header DNA */}
                <div className="w-full mb-[64px] border-b border-white/5 pb-8 flex items-end justify-between">
                    <h2 className="font-['Syne'] font-extrabold text-[8.5vw] md:text-[5.3rem] leading-[0.9] tracking-[-0.04em] uppercase text-white">
                        FAQ<span className="text-[#ff4d29]">.</span>
                    </h2>
                    <span className="text-white/50 text-xl tracking-normal hidden md:block">(08)</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Title/Context */}
                    <div className="lg:col-span-4">
                        <h3 className="font-extrabold text-2xl md:text-4xl text-white uppercase leading-tight mb-[64px] tracking-[-0.02em]">
                            COMMON <br />
                            <span className="text-white">QUESTIONS<span className="text-[#ff4d29] opacity-100">.</span></span>
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                            Clear answers to help you decide. No hidden details, just transparent professional partnership.
                        </p>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-8 flex flex-col">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-white/10"
                            >
                                <button
                                    onClick={() => setOpenIndex(project => project === index ? null : index)}
                                    className="w-full py-8 flex items-center justify-between text-left group"
                                >
                                    <span className={`font-extrabold text-xl md:text-2xl uppercase transition-colors duration-300 tracking-[-0.05em] flex items-center gap-3 ${openIndex === index ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                                        {faq.question}
                                        {openIndex === index && <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d29]" />}
                                    </span>
                                    <div className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${openIndex === index ? 'border-white bg-white text-black' : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'}`}>
                                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-8 text-white/70 text-lg leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
