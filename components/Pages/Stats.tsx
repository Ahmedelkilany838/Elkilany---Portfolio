import { motion } from "framer-motion";

const FONT_LABEL = "font-['Syne'] font-bold tracking-[0.15em] uppercase text-xs md:text-sm text-white/40";
const PX = "px-[4%] md:px-[6%] lg:px-[8%]";

export function AnimatedSlideUpStat({ value, suffix = "", delay = 0 }: { value: string, suffix?: string, delay?: number }) {
    return (
        <span className="inline-flex overflow-hidden pb-4">
            <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2, delay: delay, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-block"
            >
                {value}{suffix}
            </motion.span>
        </span>
    );
}

export default function Stats({ className }: { className?: string }) {
    return (
        <section className={`w-full bg-[#050505] pt-12 md:pt-16 pb-12 md:pb-20 relative z-10 border-b border-white/5 ${PX} ${className || ""}`}>
            <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">

                {/* 1. Years of Experience */}
                <div className="flex flex-col items-center justify-center text-center group">
                    <div className="text-white font-['Mona_Sans','Syne',sans-serif] font-bold text-[6rem] md:text-[9.5rem] lg:text-[11.5rem] leading-none tracking-tight mb-2 md:mb-4">
                        <AnimatedSlideUpStat value="13" suffix="+" delay={0} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }}
                        className={`${FONT_LABEL} text-white/50 text-sm md:text-base tracking-[0.08em] uppercase`}
                    >
                        Years of Experience
                    </motion.div>
                </div>

                {/* Divider 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
                    className="hidden md:flex items-center justify-center text-white/20"
                >
                    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M14.75 7.74854L0.75 7.74853" />
                        <path d="M7.74805 0.75L7.74805 14.75" />
                    </svg>
                </motion.div>

                {/* 2. Completed Projects */}
                <div className="flex flex-col items-center justify-center text-center group">
                    <div className="text-white font-['Mona_Sans','Syne',sans-serif] font-bold text-[6rem] md:text-[9.5rem] lg:text-[11.5rem] leading-none tracking-tight mb-2 md:mb-4">
                        <AnimatedSlideUpStat value="290" suffix="+" delay={0.15} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.75 }} viewport={{ once: true }}
                        className={`${FONT_LABEL} text-white/50 text-sm md:text-base tracking-[0.08em] uppercase`}
                    >
                        Completed Projects
                    </motion.div>
                </div>

                {/* Divider 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.45 }} viewport={{ once: true }}
                    className="hidden md:flex items-center justify-center text-white/20"
                >
                    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M14.75 7.74854L0.75 7.74853" />
                        <path d="M7.74805 0.75L7.74805 14.75" />
                    </svg>
                </motion.div>

                {/* 3. Award Winner -> Used to be Award Winner, I'll update to Brands scale or similar later if asked, but the prompt says 3 elements */}
                <div className="flex flex-col items-center justify-center text-center group">
                    <div className="text-white font-['Mona_Sans','Syne',sans-serif] font-bold text-[6rem] md:text-[9.5rem] lg:text-[11.5rem] leading-none tracking-tight mb-2 md:mb-4">
                        <AnimatedSlideUpStat value="60" suffix="+" delay={0.3} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }}
                        className={`${FONT_LABEL} text-white/50 text-sm md:text-base tracking-[0.08em] uppercase`}
                    >
                        Companies trusted us
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
