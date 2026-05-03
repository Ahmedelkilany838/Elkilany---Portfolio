import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    "Hello",
    "مرحباً",
    "Bonjour",
    "Hola",
    "Ciao",
    "Olá",
    "Guten Tag",
    "Namaste",
    "Konichiwa",
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
    const [index, setIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setIndex((prev) => {
                    if (prev === words.length - 1) {
                        clearInterval(interval);
                        setTimeout(() => {
                            setShowText(false);
                            setIsExiting(true);
                            if (onComplete) setTimeout(onComplete, 1200);
                        }, 250);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 180);
            return () => clearInterval(interval);
        }, 1200);

        return () => clearTimeout(initialDelay);
    }, [onComplete]);

    // Slice component — reads CSS var at render time
    const TopSlice = ({ num }: { num: number }) => (
        <motion.div
            key={`top-${num}`}
            className="h-full flex-1"
            style={{ backgroundColor: 'var(--site-loader-bg, #000000)', transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            animate={isExiting ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 1.0, delay: num * 0.05, ease: [0.76, 0, 0.24, 1] }}
        />
    );

    const BottomSlice = ({ num }: { num: number }) => (
        <motion.div
            key={`bottom-${num}`}
            className="h-full flex-1"
            style={{ backgroundColor: 'var(--site-loader-bg, #000000)', transformOrigin: "bottom" }}
            initial={{ scaleY: 1 }}
            animate={isExiting ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 1.0, delay: num * 0.05, ease: [0.76, 0, 0.24, 1] }}
        />
    );

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">

            {/* ── Top slices ── */}
            <div className="absolute top-0 left-0 w-full h-1/2 flex z-0">
                {[1, 2, 3, 4, 5, 6].map((num) => <TopSlice key={num} num={num} />)}
            </div>

            {/* ── Bottom slices ── */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 flex z-0">
                {[1, 2, 3, 4, 5, 6].map((num) => <BottomSlice key={num} num={num} />)}
            </div>

            {/* ── Greeting Text ── */}
            <AnimatePresence>
                {showText && !isExiting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-50 flex flex-col items-center gap-12"
                    >
                        <div className="flex items-center gap-4">
                            {/* Accent dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full"
                                style={{ backgroundColor: 'var(--site-accent, #ff4d29)' }}
                            />
                            {/* Word */}
                            <h1
                                className="font-medium text-4xl md:text-6xl uppercase tracking-tighter"
                                style={{
                                    color: 'var(--site-text-primary, #ffffff)',
                                    fontFamily: words[index] === "مرحباً"
                                        ? "'Reem Kufi', sans-serif"
                                        : 'var(--site-font-primary, "Mona Sans", sans-serif)',
                                    ...(words[index] === "مرحباً" ? { fontWeight: 700 } : {}),
                                }}
                            >
                                {words[index]}
                            </h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Progress bar ── */}
            <AnimatePresence>
                {!isExiting && (
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 z-50"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="h-full"
                            style={{ backgroundColor: 'var(--site-accent, #ff4d29)' }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${((index + 1) / words.length) * 100}%` }}
                            transition={{ duration: 0.2, ease: "linear" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
