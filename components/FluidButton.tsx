import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";


interface FluidButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    className?: string; // Additional classes for the container
    fillColor?: string; // Default orange #ff4d29
}

export default function FluidButton({
    children,
    to,
    onClick,
    className = "",
    fillColor = "#ff4d29", // Default to the requested Orange
}: FluidButtonProps) {

    const [isHovered, setIsHovered] = useState(false);

    // Wrapper component configuration
    const isLink = !!to;

    // Liquid Fill Animation Variants - Smoother & From Center Bottom
    const liquidVariants = {
        hover: {
            top: "-150%", // Rises to cover properly
            rotate: [0, 10, -10, 0], // Gentle wave wiggle instead of heavy rotation
            scale: 1.5,
        },
        initial: {
            top: "100%", // Start just below
            rotate: 0,
            scale: 0.8, // Start smaller
        }
    };

    // Shared Content
    const innerContent = (
        <>
            {/* Liquid Fill Element */}
            <motion.div
                className="absolute left-1/2 top-[150%] h-[450%] w-[300%] -translate-x-1/2 rounded-[40%] text-[#ff4d29]"
                style={{
                    backgroundColor: fillColor,
                    zIndex: 0
                }}
                transition={{
                    duration: 1.2, // Slower, smoother liquid feel
                    ease: [0.33, 1, 0.68, 1], // Cubic bezier for fluid motion
                    rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
                variants={liquidVariants}
                animate={isHovered ? "hover" : "initial"}
                initial="initial"
            />

            {/* Text Content - Rolling Text Effect */}
            <span className="relative z-10 flex items-center justify-center gap-2 mix-blend-normal">
                {typeof children === 'string' ? (
                    <div className="flex flex-col overflow-hidden h-5 md:h-6 text-base md:text-lg font-black uppercase tracking-widest leading-none">
                        <div className="flex gap-[1px]">
                            {children.split("").map((char, i) => (
                                <span key={i} className="relative inline-flex flex-col h-5 md:h-6 overflow-hidden">
                                    <motion.span
                                        initial={{ y: "0%" }}
                                        animate={{ y: isHovered ? "-100%" : "0%" }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.76, 0, 0.24, 1], // Premium 'Quart' ease
                                            delay: i * 0.03, // Consistent stagger
                                        }}
                                        className="h-full flex items-center justify-center text-white"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: isHovered ? "-100%" : "0%" }} // Moves up behind the first one
                                        style={{ top: "100%", position: "absolute" }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.76, 0, 0.24, 1],
                                            delay: i * 0.03,
                                        }}
                                        className="h-full flex items-center justify-center text-black"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                </span>
                            ))}
                        </div>
                    </div>
                ) : (
                    children
                )}
            </span>
        </>
    );

    const baseClasses = `group relative overflow-hidden rounded-full border border-white/30 bg-black/20 backdrop-blur-sm px-10 py-4 md:px-12 md:py-5 transition-all duration-300 hover:border-[#ff4d29] cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,77,41,0.4)] flex items-center justify-center whitespace-nowrap w-fit ${className}`;

    if (isLink && to) {
        return (
            <Link
                to={to}
                className={baseClasses}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {innerContent}
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={baseClasses}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{ scale: 0.98 }}
        >
            {innerContent}
        </motion.button>
    );
}
