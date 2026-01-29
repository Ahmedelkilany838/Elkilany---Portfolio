import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    "Hello",       // English
    "مرحباً",      // Arabic
    "Bonjour",     // French
    "Hola",        // Spanish
    "Ciao",        // Italian
    "Olá",         // Portuguese
    "Guten Tag",   // German
    "Namaste",     // Hindi
    "Konichiwa",   // Japanese
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
    const [index, setIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        // Initial delay for the first "Hello" to be seen clearly
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setIndex((prev) => {
                    if (prev === words.length - 1) {
                        clearInterval(interval);
                        // Sequence finished
                        setTimeout(() => {
                            setShowText(false);
                            setIsExiting(true);
                            if (onComplete) setTimeout(onComplete, 1200); // Trigger completion slightly faster after text hides
                        }, 250); // Shorter pause on last word before exit
                        return prev;
                    }
                    return prev + 1;
                });
            }, 180); // Speed of change

            return () => clearInterval(interval);
        }, 1200); // Hold first "Hello"

        return () => clearTimeout(initialDelay);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">

            {/* Background Slices (Top) */}
            <div className="absolute top-0 left-0 w-full h-1/2 flex z-0">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <motion.div
                        key={`top-${num}`}
                        className="h-full bg-black flex-1"
                        initial={{ scaleY: 1 }}
                        animate={isExiting ? { scaleY: 0 } : { scaleY: 1 }}
                        transition={{
                            duration: 1.0,
                            delay: num * 0.05, // Stagger effect
                            ease: [0.76, 0, 0.24, 1], // Premium Ease
                        }}
                        style={{ transformOrigin: "top" }}
                    />
                ))}
            </div>

            {/* Background Slices (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 flex z-0">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <motion.div
                        key={`bottom-${num}`}
                        className="h-full bg-black flex-1"
                        initial={{ scaleY: 1 }}
                        animate={isExiting ? { scaleY: 0 } : { scaleY: 1 }}
                        transition={{
                            duration: 1.0,
                            delay: num * 0.05, // Stagger effect
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        style={{ transformOrigin: "bottom" }}
                    />
                ))}
            </div>

            {/* Text Container */}
            {/* Text Container */}
            <AnimatePresence>
                {showText && !isExiting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-50 flex flex-col items-center gap-12"
                    >
                        {/* Dot indicator like in the image */}
                        <div className="flex items-center gap-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#ff4d29] rounded-full"
                            />
                            <h1
                                className="text-[#ff4d29] font-medium text-4xl md:text-6xl uppercase tracking-tighter"
                                style={words[index] === "مرحباً" ? { fontFamily: "'Reem Kufi', sans-serif", fontWeight: 700 } : {}}
                            >
                                {words[index]}
                            </h1>
                        </div>

                        {/* Progress Line */}

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Progress Line - Full Width */}
            <AnimatePresence>
                {!isExiting && (
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 z-50 bg-[#ff4d29]/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="h-full bg-[#ff4d29]"
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
