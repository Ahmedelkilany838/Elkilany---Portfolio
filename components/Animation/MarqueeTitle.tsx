import { motion } from "framer-motion";

interface MarqueeTitleProps {
    text: string;
    number?: string; // e.g. "03" or "04"
    duration?: number;
    className?: string; // Optional override
}

export default function MarqueeTitle({
    text,
    number,
    duration = 20,
    className = ""
}: MarqueeTitleProps) {
    return (
        <div className={`w-full overflow-hidden flex mb-12 relative ${className}`}>
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            {/* Scrolling Content */}
            <motion.div
                className="flex whitespace-nowrap gap-12 md:gap-24"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {/* 4 Identical Items for seamless loop */}
                {[1, 2, 3, 4].map((item) => (
                    <h2 key={item} className="text-[15vw] md:text-[12vw] font-black tracking-tighter text-white leading-none uppercase flex items-start gap-4">
                        {text}
                        {number && (
                            <span className="align-top text-[4vw] font-light opacity-50 font-mono tracking-normal">
                                ({number})
                            </span>
                        )}
                    </h2>
                ))}
            </motion.div>
        </div>
    );
}
