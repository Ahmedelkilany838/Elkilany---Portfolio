import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function FXSlider() {
    // Single static hero image
    const heroImage = "/images/hero.png";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Specialties Ticker
    const specialties = [
        "VISUAL IDENTITY", "•",
        "MOTION DESIGN", "•",
        "DIGITAL ECOSYSTEMS", "•",
        "WEB DESIGN", "•",
        "ART DIRECTION", "•",
        "BRAND STRATEGY", "•",
        "3D VISUALS", "•"
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#020617] text-white">

            {/* --- BACKGROUND LAYER (Single Image + Zoom Out) --- */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full overflow-hidden">
                    {/* Image with Zoom-Out Effect - Triggered on Mount */}
                    <motion.img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.8 }}
                        animate={{ scale: mounted ? 1 : 1.8 }}
                        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    />
                </div>
            </div>

            {/* --- CONTENT LAYOUT --- */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 pb-2 md:pb-6 pt-32 md:pt-40">

                {/* --- RIGHT SIDE: BOLD MANIFESTO (Top/Middle Right) --- */}
                {/* Positioned to be visible but not interfere with the bottom heavy title */}
                <div className="w-full flex justify-end mt-24 md:mt-40">
                    <div className="flex flex-col items-end text-right z-20 max-w-xl">
                        <h2 className="font-['Inter_Display'] font-bold text-3xl md:text-5xl leading-[1.1] text-white">
                            CRAFTING DIGITAL <br />
                            <span className="text-[#ff4d29]">EXPERIENCES</span> THAT <br />
                            DEFY EXPECTATIONS.
                        </h2>
                        <p className="font-['Inter'] text-white/60 text-sm md:text-lg mt-6 max-w-md leading-relaxed">
                            I specialize in building immersive visual identities and digital ecosystems that leave a lasting impact.
                        </p>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: TICKER ABOVE TITLE --- */}
                <div className="relative w-full z-20 mt-auto">

                    {/* 1. Ticker (Above Title) */}
                    <div className="flex flex-col gap-2 max-w-[300px] md:max-w-[500px] mb-2 md:mb-4">
                        <span className="text-xs text-white/50 uppercase tracking-widest font-mono mb-1 pl-1">Expertise</span>
                        <div className="relative w-full overflow-hidden mask-linear-fade">
                            <div
                                style={{
                                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                                }}
                                className="w-full flex"
                            >
                                <motion.div
                                    className="flex items-center gap-6 whitespace-nowrap font-['Syne'] font-bold text-sm md:text-lg text-white/80 uppercase tracking-wider"
                                    animate={{ x: "-50%" }}
                                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                                    style={{ width: "fit-content", willChange: "transform" }}
                                >
                                    {/* Duplicated content for seamless loop */}
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-6">
                                            {specialties.map((text, index) => (
                                                <span key={index} className={text === "•" ? "text-[#ff4d29]" : ""}>{text}</span>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Massive Title (Bottom) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="font-['Inter_Display'] font-black text-[15vw] leading-[0.8] tracking-tighter uppercase text-white mix-blend-overlay opacity-90 -ml-2"
                    >
                        ELKILANY<span className="text-2xl md:text-5xl align-top opacity-50 font-normal">®</span>
                    </motion.h1>

                </div>

            </div>
        </div>
    );
}
