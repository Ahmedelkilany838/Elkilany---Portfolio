import { Link } from "react-router";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden py-[clamp(60px,8vh,140px)] border-b border-white/5 transform-gpu">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/bg-card.avif')" }}
            >
                {/* Dark overlay to ensure text is readable */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Gradient fades at top and bottom to blend with adjacent sections */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90"></div>
            </div>

            <motion.div
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1800px] mx-auto px-[4%] text-center"
            >

                {/* Scrolling Top Label (Matching Works.tsx style) */}
                <div className="flex items-center justify-center gap-4 mb-8 md:mb-12 text-white/50 text-[10px] md:text-sm font-mono uppercase tracking-[0.2em]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/80">
                        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                    </svg>
                    <div className="flex overflow-hidden whitespace-nowrap opacity-80 w-[200px] md:w-[300px]" style={{ maskImage: 'linear-gradient(to right, black 60%, transparent)' }}>
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                            className="flex"
                        >
                            <span className="mr-8">BRING IDEAS TO LIFE — </span>
                            <span className="mr-8">BRING IDEAS TO LIFE — </span>
                            <span className="mr-8">BRING IDEAS TO LIFE — </span>
                            <span className="mr-8">BRING IDEAS TO LIFE — </span>
                        </motion.div>
                    </div>
                </div>

                {/* Massive Typography - All White & Larger */}
                <h2 className="font-['Syne'] font-extrabold text-[clamp(2rem,11vw,14rem)] leading-[0.85] tracking-[-0.04em] uppercase flex flex-col items-center">
                    <span className="text-white block drop-shadow-2xl whitespace-nowrap">
                        LET'S BUILD
                    </span>
                    <span className="text-white block drop-shadow-2xl text-center whitespace-nowrap">
                        YOUR BRAND
                    </span>
                </h2>

                {/* Interactive Animated Button (Matching About.tsx "MORE ABOUT ME") */}
                <div className="mt-8 md:mt-12">
                    <Link to="/contact" className="relative inline-flex items-center justify-center gap-4 px-10 md:px-14 py-5 md:py-6 bg-white text-black rounded-full overflow-hidden group shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 w-full h-full bg-[#ff4d29] scale-y-0 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 rounded-full"></div>

                        <span className="relative z-10 flex overflow-hidden font-['Syne'] font-bold text-base md:text-lg tracking-[0.05em] uppercase">
                            {"GET IN TOUCH".split('').map((char, i) => (
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

                        {/* Spark Icon with rotation hover */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-black group-hover:text-white group-hover:rotate-180">
                            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                        </svg>
                    </Link>
                </div>

            </motion.div>
        </section>
    );
}
