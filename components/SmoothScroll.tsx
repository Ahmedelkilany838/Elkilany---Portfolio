import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // 1. Measure the height of the content
    const [ref, bounds] = useMeasure();

    // 2. Track native scroll position
    const { scrollY } = useScroll();

    // 3. Create a heavy spring physics effect
    // mass: 0.5 (lighter feel) to 3 (heavy truck). User wants "Heavy/Premium".
    // damping: friction. Higher = less oscillation.
    // stiffness: tension. Lower = looser/laggier.
    const smoothY = useSpring(scrollY, {
        mass: 1.2,      // Moderate weight
        stiffness: 80,  // Responsive but springy
        damping: 30,    // Smooth stop
        restDelta: 0.001
    });

    // 4. Invert scroll value for 'transform: translateY'
    const y = useTransform(smoothY, (value) => -value);

    // Sync shim height with content
    // We need to ensure the body can scroll to 'bounds.height'

    return (
        <>
            {/* 
        The Scroll Shim:
        This invisible div pushes the native browser scrollbar to the correct height.
        The user scrolls THIS div natively.
      */}
            <div style={{ height: bounds.height }} className="relative w-full" />

            {/* 
        The Fixed Content:
        This element stays fixed at the top, but moves UP visually 
        based on the spring-dampened scroll Y value.
      */}
            <motion.div
                ref={ref}
                style={{
                    y,
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                }}
                className="fixed top-0 left-0 w-full overflow-hidden transform-gpu"
            >
                {children}
            </motion.div>
        </>
    );
}
