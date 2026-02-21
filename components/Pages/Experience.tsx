import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);

    // Track the scroll progress based on the layout position of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Animates from when it first appears until the next section completely covers it
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,  // Fast enough to feel responsive
        damping: 25,    // Smooth friction to stop jumping
        restDelta: 0.001
    });

    // We scale down gracefully so the zoom effect is constantly moving
    const scale = useTransform(smoothProgress, [0, 1], [1.3, 1]);

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
