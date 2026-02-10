import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const currentYear = new Date().getFullYear();
    const [time, setTime] = useState("");

    // Rotating Text Logic
    const phrases = [
        ["Visualizing", "Intent"],
        ["Crafting", "Clarity"],
        ["Designing", "Impact"],
        ["Building", "Connection"],
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#050505] text-[#E0E0E0] font-['Inter_Display'] selection:bg-white/20">

            {/* --- Background Image Layer (Full Screen) --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.4 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.img
                        src="/images/hero.png"
                        alt="Ahmed Kilany"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark Gradients for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
                </motion.div>

                {/* Scanline/Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
            </div>

            {/* --- Top Navigation Bar --- */}
            <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-start p-6 md:p-10 pointer-events-none">



            </div>

            {/* --- Middle Right Text --- */}
            <div className="absolute top-[35%] right-6 md:right-16 z-20 text-right pointer-events-none flex flex-col items-end drop-shadow-xl font-['Outfit']">

                {/* Line 1 */}
                <div className="overflow-hidden h-[1.1em] flex items-center justify-end text-white/80 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        >
                            {phrases[index][0]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Line 2 */}
                <div className="overflow-hidden h-[1.1em] flex items-center justify-end text-white/80 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                        >
                            {phrases[index][1]}<span className="text-[#ff4d29]">.</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* --- Bottom Left Content --- */}
            <div className="absolute bottom-10 left-6 md:left-16 z-30 max-w-2xl pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <p className="text-lg md:text-2xl font-light leading-relaxed mb-8 font-['Outfit'] drop-shadow-lg tracking-tight text-left">
                        <span className="text-white">I craft visual identities and advertising concepts that bridge the gap between business objectives and human connection </span>
                        <span className="text-white/30">—designed with clarity, logic, and intent.</span>
                    </p>

                    {/* Logos */}

                </motion.div>
            </div>

            {/* --- Bottom Right CTA --- */}
            <div className="absolute bottom-10 right-6 md:right-10 z-30 pointer-events-auto">
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="group relative px-6 py-2 md:px-8 md:py-3 bg-black/40 backdrop-blur-md border border-[#ff4d29] text-[#ff4d29] font-bold text-xs md:text-sm tracking-widest uppercase rounded-full overflow-hidden hover:text-white transition-colors duration-300"
                >
                    <div className="absolute inset-0 bg-[#ff4d29] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.76,0,0.24,1]"></div>
                    <span className="relative z-10 flex items-center gap-2">
                        Start A Project
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                </motion.button>
            </div>

        </section>
    );
}
