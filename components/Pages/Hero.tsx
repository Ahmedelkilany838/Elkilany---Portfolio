import { motion, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    // Mouse position for magnetic effect - subtle translation
    const imageX = useSpring(0, { stiffness: 80, damping: 40 });
    const imageY = useSpring(0, { stiffness: 80, damping: 40 });

    // Layer offsets (follow with more lag/delay but fast movement)
    const layer1X = useSpring(0, { stiffness: 60, damping: 40 });
    const layer1Y = useSpring(0, { stiffness: 60, damping: 40 });
    const layer2X = useSpring(0, { stiffness: 50, damping: 40 });
    const layer2Y = useSpring(0, { stiffness: 50, damping: 40 });
    const layer3X = useSpring(0, { stiffness: 40, damping: 40 });
    const layer3Y = useSpring(0, { stiffness: 40, damping: 40 });
    const layer4X = useSpring(0, { stiffness: 30, damping: 40 });
    const layer4Y = useSpring(0, { stiffness: 30, damping: 40 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate based on window center since it's a full screen hero
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Normalize delta (-1 to 1) based on screen dimensions
            const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
            const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

            // Main image moves WIDER (max ~80px)
            imageX.set(deltaX * 80);
            imageY.set(deltaY * 80);

            // Layers move closer to main image speed (tucked in) but with delay
            layer1X.set(deltaX * 72);
            layer1Y.set(deltaY * 72);
            layer2X.set(deltaX * 64);
            layer2Y.set(deltaY * 64);
            layer3X.set(deltaX * 56);
            layer3Y.set(deltaY * 56);
            layer4X.set(deltaX * 48);
            layer4Y.set(deltaY * 48);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [imageX, imageY, layer1X, layer1Y, layer2X, layer2Y, layer3X, layer3Y, layer4X, layer4Y]);

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen overflow-hidden bg-black text-white font-sans flex flex-col items-center justify-center"
        >

            {/* --- Background Name (Seamless Infinite Marquee) --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center z-0 pointer-events-none overflow-hidden"
            >
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10" />
                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-24 whitespace-nowrap"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <h1 className="text-[14vw] font-black tracking-tight text-white/[0.08] select-none uppercase">
                        ELKILANY - SENIOR DESIGNER
                    </h1>
                    <h1 className="text-[14vw] font-black tracking-tight text-white/[0.08] select-none uppercase">
                        ELKILANY - SENIOR DESIGNER
                    </h1>
                </motion.div>
            </motion.div>

            {/* --- Main Hero Content --- */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pb-24 md:pb-0 px-4 md:px-8">

                {/* Image with Layered Background - Magnetic Effect */}
                <div
                    ref={imageRef}
                    className="relative"
                    style={{ perspective: 1000 }}
                >
                    {/* Background Image Layers (Initial hidden, peek on move) */}
                    <motion.div
                        className="absolute inset-0 w-full h-full rounded-lg -z-10 overflow-hidden opacity-[0.12]"
                        style={{ x: layer1X, y: layer1Y, willChange: "transform" }}
                    />
                    <motion.div
                        className="absolute inset-0 w-full h-full rounded-lg -z-20 overflow-hidden opacity-[0.08]"
                        style={{ x: layer2X, y: layer2Y, willChange: "transform" }}
                    />
                    <motion.div
                        className="absolute inset-0 w-full h-full rounded-lg -z-30 overflow-hidden opacity-[0.05]"
                        style={{ x: layer3X, y: layer3Y, willChange: "transform" }}
                    />
                    <motion.div
                        className="absolute inset-0 w-full h-full rounded-lg -z-40 overflow-hidden opacity-[0.02]"
                        style={{ x: layer4X, y: layer4Y, willChange: "transform" }}
                    />

                    {/* Main Image Container - Magnetic Movement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 1.8,
                            ease: [0.22, 1, 0.36, 1] // Heavy, premium ease
                        }}
                        style={{
                            x: imageX,
                            y: imageY,
                            willChange: "transform"
                        }}
                        className="relative w-[85vw] max-w-[360px] md:w-[480px] h-[50vh] max-h-[480px] md:h-[580px] overflow-hidden rounded-lg shadow-2xl"
                    >
                        {/* Portrait Image - Clean, no effects */}
                        <img
                            src="/images/hero.png"
                            alt="Portrait"
                            className="w-full h-full object-cover object-top"
                        />
                    </motion.div>
                </div>

            </div>

            {/* --- Bottom Technical Bar --- */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute bottom-12 w-full max-w-[90rem] px-6 md:px-12 flex justify-between items-end z-20"
            >
                {/* Left: Role */}
                <div className="flex flex-col gap-2">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono">Role / Spec</span>
                    <div className="flex items-center gap-3 text-white">
                        <span className="text-sm md:text-base font-bold uppercase tracking-widest">Senior Designer</span>
                        <span className="w-1 h-1 bg-white/40 rounded-full" />
                        <span className="text-sm md:text-base font-bold uppercase tracking-widest">Advertising Specialist</span>
                    </div>
                </div>

                {/* Center: Scroll Indicator (Hidden on Mobile) */}
                <div className="hidden md:flex flex-col items-center gap-2 opacity-50">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                </div>

                {/* Right: Location */}
                <div className="flex flex-col gap-2 text-right">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-mono">Location</span>
                    <span className="text-sm md:text-base font-bold uppercase tracking-widest text-white">Cairo, Egypt © {new Date().getFullYear()}</span>
                </div>
            </motion.div>

        </section>
    );
}
