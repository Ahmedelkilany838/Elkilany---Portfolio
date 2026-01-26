import SplashCursor from "components/Animation/SplashCursor";
import { motion, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect - subtle translation
  const imageX = useSpring(0, { stiffness: 80, damping: 40 });
  const imageY = useSpring(0, { stiffness: 80, damping: 40 });

  // Layer offsets (follow with more lag/delay but fast movement)
  // Low stiffness = more "drag" / delay feel
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
      className="relative w-full h-screen overflow-hidden bg-black text-white font-sans"
      style={{ willChange: "transform" }}
    >
      {/* SplashCursor disabled - uncomment to enable mouse effect */}
      {/* <SplashCursor containerRef={heroRef} /> */}

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
            ELKILANY - GRAPHIC DESIGNER
          </h1>
          <h1 className="text-[14vw] font-black tracking-tight text-white/[0.08] select-none uppercase">
            ELKILANY - GRAPHIC DESIGNER
          </h1>
        </motion.div>
      </motion.div>

      {/* --- Menu functionality moved to home.tsx --- */}

      {/* --- Main Hero Content --- */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pb-24 md:pb-14 px-4 md:px-8">

        {/* Spacer + Centered Image Container */}
        <div className="flex-1 flex items-center justify-center w-full min-h-0">
          {/* Image with Layered Background - Magnetic Effect */}
          <div
            ref={imageRef}
            className="relative mt-8 md:mt-12"
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

        {/* Info Row at Bottom - With Dividers */}
        {/* Info Row at Bottom - With Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="-mt-4 md:-mt-12 flex items-start md:items-center justify-between w-full max-w-2xl px-4 md:px-0 md:justify-center md:gap-28 text-white"
        >
          {/* Based In */}
          <div className="flex flex-col items-center text-center gap-1 md:gap-2 w-1/3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 mb-1" />
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider leading-tight">Based in <br className="md:hidden" /> Egypt</span>
            <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wider hidden md:block">Cairo</span>
          </div>

          {/* Divider */}
          <div className="h-8 md:h-14 w-[1px] bg-white/15" />

          {/* Available */}
          <div className="flex flex-col items-center text-center gap-1 md:gap-2 w-1/3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white/50 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <ellipse cx="12" cy="12" rx="4" ry="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider leading-tight">Available <br className="md:hidden" /> Worldwide</span>
            <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wider hidden md:block">Remote</span>
          </div>

          {/* Divider */}
          <div className="h-8 md:h-14 w-[1px] bg-white/15" />

          {/* Role */}
          <div className="flex flex-col items-center text-center gap-1 md:gap-2 w-1/3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white/50 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-wider leading-tight">Graphic <br className="md:hidden" /> Designer</span>
            <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wider hidden md:block">+ Brand Dev</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
