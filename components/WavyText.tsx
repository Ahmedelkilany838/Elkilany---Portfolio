import { motion } from "framer-motion";
import { useState } from "react";

interface WavyTextProps {
    text: string;
    className?: string;
    parentHovered?: boolean;
}

export default function WavyText({ text, className = "", parentHovered }: WavyTextProps) {
    const [internalHover, setInternalHover] = useState(false);
    const isActive = parentHovered !== undefined ? parentHovered : internalHover;

    return (
        <span
            className={`inline-block ${className}`}
            onMouseEnter={() => setInternalHover(true)}
            onMouseLeave={() => setInternalHover(false)}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    animate={{
                        y: isActive ? [0, -8, 0] : 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
