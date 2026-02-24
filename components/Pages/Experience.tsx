import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);

    // Track the scroll progress based on the layout position of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Capture from when the top enters the bottom of the viewport to when it leaves
        offset: ["start end", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, // Slightly stiffer for better responsiveness
        damping: 30,    // Smooth friction
        restDelta: 0.001
    });

    // Custom mapping for: starts heavy/slow, accelerates, and lands exactly at 1.0
    // Keep in mind with offset ["start end", "end end"] of a 100vh section:
    const scale = useTransform(smoothProgress,
        [0, 0.5, 0.8, 1],
        [1.6, 1.45, 1.1, 1]
    );

    return (
        <section
            ref={containerRef}
            // `sticky top-0` freezes the image so the next section slides OVER it.
            // Explicitly set z-index to 0 to ensure the next sibling (with relative/z-10) floats above.
            className="sticky top-0 w-full h-[100vh] overflow-hidden bg-[#050505] z-0"
        >
            <motion.div
                className="w-full h-full will-change-transform origin-center"
                style={{ scale }}
            >
                <img
                    src="/images/freepik recreate.png"
                    alt="Ahmed Kilany"
                    className="w-full h-[100vh] object-cover object-center"
                />
            </motion.div>
        </section>
    );
}

// Note: Ensure HMR catches this to sync both pages
