import { motion } from "framer-motion";
import { Link } from "react-router";

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
    return (
        <section id="process" className="relative w-full bg-[#050505] py-[60px] md:py-[100px] lg:py-[140px] px-[4%] md:px-[6%] lg:px-[8%] border-b border-white/5">
            <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24 w-full max-w-[1800px] mx-auto">

                {/* LEFT COLUMN - STICKY TITLE & SUBTEXT */}
                <div className="md:w-[45%] flex flex-col md:sticky md:top-[12vh] will-change-transform">
                    <div className="flex items-center gap-4 mb-6 md:mb-10 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                                className="inline-block text-xl md:text-2xl mt-[-2px]"
                            >
                                ✲
                            </motion.span>
                        </svg>
                        <div className="flex overflow-hidden whitespace-nowrap opacity-80 w-[200px]" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                className="flex"
                            >
                                <span className="mr-4">WORK PROCESS — WORK PROCESS — </span>
                                <span className="mr-4">WORK PROCESS — WORK PROCESS — </span>
                            </motion.div>
                        </div>
                    </div>

                    <h2 className="font-['Syne'] font-extrabold text-[clamp(6rem,14vw,14rem)] leading-[0.85] tracking-[-0.03em] uppercase mt-4 flex flex-col w-full">
                        <span className="text-white block">HOW I</span>
                        <span className="text-[#666] flex items-baseline">
                            WORK<span className="inline-block w-[0.15em] h-[0.15em] bg-[#ff4d29] ml-1 mb-[0.05em]"></span>
                        </span>
                    </h2>

                    <p className="mt-12 md:mt-20 lg:mt-24 text-white/50 text-base md:text-lg lg:text-xl xl:text-2xl leading-[1.6] max-w-full lg:max-w-[600px] xl:max-w-[700px] font-medium pr-4">
                        A seamless journey from initial concept to a polished digital reality, crafted with absolute precision.
                    </p>

                    <div className="mt-4 md:mt-6 lg:mt-10">
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-[100px] overflow-hidden hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] shrink-0 w-max"
                        >
                            <div className="absolute inset-0 w-full h-full bg-[#ff4d29] scale-y-0 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 rounded-[100px]"></div>
                            <span className="relative z-10 flex overflow-hidden font-['Syne'] font-bold text-sm tracking-[0.05em] uppercase">
                                {"CONTACT ME".split('').map((char, i) => (
                                    <span key={i} className="relative inline-block leading-none">
                                        <span className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-black" style={{ transitionDelay: `${i * 10}ms` }}>
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                        <span className="absolute top-0 left-0 block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-white" style={{ transitionDelay: `${i * 10}ms` }}>
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    </span>
                                ))}
                            </span>

                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-black group-hover:text-white group-hover:rotate-45 shrink-0">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* RIGHT COLUMN - SCROLLING PROCESS CARDS */}
                <div className="md:w-[50%] flex flex-col w-full mt-24 md:mt-0 pt-[2px] relative pl-4 md:pl-16">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-[35px] top-6 bottom-6 w-[2px] bg-white/5 hidden sm:block"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col sm:flex-row py-12 md:py-20 border-t border-white/10 group transition-all duration-500 relative"
                        >
                            {/* Number Circle Node */}
                            <div className="hidden sm:flex flex-col items-center absolute left-[-2rem] md:left-[-3.5rem] top-12 z-10 w-16 shrink-0 bg-[#050505] py-2">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center font-['Syne'] font-bold text-lg md:text-xl text-white group-hover:border-[#ff4d29] group-hover:text-[#ff4d29] group-hover:scale-110 transition-all duration-500">
                                    {step.id}
                                </div>
                            </div>

                            <div className="flex-1 w-full pl-0 sm:pl-10 md:pl-12">
                                {/* Title Component */}
                                <h3 className="font-['Syne'] font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-white tracking-[-0.02em] leading-none mb-8 md:mb-10 group-hover:text-[#ff4d29] transition-colors duration-500">
                                    {step.title}
                                </h3>

                                {/* Two-Column Detail Component */}
                                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                                    <div className="flex flex-col gap-4 max-w-[450px]">
                                        <h4 className="font-['Syne'] text-lg md:text-xl text-white font-bold tracking-wide">
                                            Phase 0{step.id}
                                        </h4>
                                        <p className="text-white/50 text-base md:text-[1.05rem] leading-relaxed md:leading-[1.8]">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="shrink-0 mt-2 xl:mt-0">
                                        <div className="border border-white/10 rounded-full px-5 py-2 text-[#444] font-mono text-[10px] md:text-xs uppercase tracking-widest group-hover:border-white/30 group-hover:text-white transition-all duration-500 bg-white/[0.02] w-fit">
                                            (STEP — 0{step.id})
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Final Bottom Border */}
                    <div className="border-t border-white/10 w-full" />
                </div>

            </div>
        </section>
    );
}
