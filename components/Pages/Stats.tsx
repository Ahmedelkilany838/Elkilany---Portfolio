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
    const notes = [
        { title: "Brand Systems", text: "Identity foundations built for consistent use." },
        { title: "Campaign Visuals", text: "Key visuals shaped for clear communication." },
        { title: "Production Craft", text: "Retouching, finishing, and format-ready artwork." },
    ];

    return (
        <section className={`w-full bg-[#050505] py-[clamp(60px,8vh,140px)] relative z-10 border-b border-white/5 transform-gpu ${PX} ${className || ""}`}>
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {notes.map((note, index) => (
                    <motion.div
                        key={note.title}
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 md:p-8"
                    >
                        <div className="text-white font-['Syne'] font-extrabold text-3xl md:text-5xl leading-none tracking-[-0.03em] mb-5 uppercase">
                            {note.title}
                        </div>
                        <div className={`${FONT_LABEL} text-white/50 text-sm md:text-base tracking-[0.08em] uppercase`}>
                            {note.text}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
