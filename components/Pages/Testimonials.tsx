import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section className="relative w-full bg-[#050505] py-[80px] md:py-[140px] px-[4%] md:px-[6%] lg:px-[8%] overflow-hidden border-b border-white/5">
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-[1800px] mx-auto"
            >
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-5">
                    Client notes
                </p>
                <h2 className="font-['Syne'] font-extrabold text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] uppercase text-white max-w-4xl">
                    Client feedback can be added after approval.
                </h2>
                <p className="mt-8 text-white/55 max-w-xl leading-relaxed">
                    This section stays neutral until approved client quotes are ready.
                </p>
            </motion.div>
        </section>
    );
}
