import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router";
import { useRef, useState } from "react";

const projects = [
    {
        id: "01",
        title: "LOCK CONCEPT",
        category: "3D Art",
        image: "/images/1 v2.jpg",
        aspect: "aspect-square", // Big Square
    },
    {
        id: "02",
        title: "AURA SKIN",
        category: "Branding",
        image: "/images/Artboard 7-100.jpg",
        aspect: "aspect-video", // Landscape
    },
    {
        id: "03",
        title: "NEXT LAYER",
        category: "Identity",
        image: "/images/Logo.jpg",
        aspect: "aspect-[21/9]", // Cinematic Wide for full-span
    },
    {
        id: "04",
        title: "AL WATAN",
        category: "Calligraphy",
        image: "/images/Artboard 1 copy 4-100.jpg",
        aspect: "aspect-square", // Square for variety
    },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const cardRef = useRef(null);
    const position = index % 3;

    // Custom Cursor Logic
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }; // Smooth fluid follow
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHover, setIsHover] = useState(false);

    let gridClass = "";
    if (position === 0) gridClass = "md:col-span-1 md:justify-self-start w-full md:w-[95%]";
    if (position === 1) gridClass = "md:col-span-1 md:justify-self-end md:mt-48 w-full md:w-[85%]";
    if (position === 2) gridClass = "md:col-span-2 md:justify-self-center w-full max-w-6xl mt-12";

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Center the larger cursor (approx 120px wide now)
        cursorX.set(e.clientX - rect.left - 60);
        cursorY.set(e.clientY - rect.top - 24);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 120, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col gap-6 group ${gridClass}`}
        >
            <Link
                to={`/works/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block w-full relative cursor-none"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onMouseMove={handleMouseMove}
                data-hide-global-cursor={isHover}
            >
                <div className={`w-full ${project.aspect} bg-gray-900 relative rounded-lg`}>
                    {/* Overflow Container for Image */}
                    <div className="w-full h-full overflow-hidden rounded-lg relative z-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                        />
                        {/* Dark Overlay on Hover - Increased Opacity */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />

                        {/* White Ribbon Overlay - Re-added as requested */}
                        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-8 flex items-center justify-center z-20 overflow-hidden pointer-events-none">
                            {/* Background Scales Cleanly */}
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.22,1,0.36,1] origin-center" />

                            {/* Text Fades In */}
                            <span className="relative z-10 text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out whitespace-nowrap">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Floating Custom Cursor (Instant Follow - No Lag) */}
                    <motion.div
                        style={{
                            x: cursorX, // Direct binding for instant follow
                            y: cursorY,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: isHover ? 1 : 0,
                            opacity: isHover ? 1 : 0
                        }}
                        transition={{ duration: 0.2 }} // Fast scale enter
                        className="absolute top-0 left-0 z-50 pointer-events-none"
                    >
                        {/* Large, Shadowless, Slightly Transparent Pill */}
                        <div className="bg-white/95 backdrop-blur-sm px-10 py-3 rounded-full flex items-center justify-center">
                            <span className="text-black font-black uppercase text-base tracking-widest">
                                View
                            </span>
                        </div>
                    </motion.div>
                </div>

                <div className="flex justify-between items-end border-t border-white/20 pt-6 mt-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter transition-colors duration-300">
                            {project.title}
                        </h3>
                        <span className="text-white/50 text-xs md:text-sm uppercase tracking-widest font-mono">
                            {project.category}
                        </span>
                    </div>
                    <span className="text-white/30 text-base font-mono font-bold">
                        ({project.id})
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export default function Works() {
    return (
        <section id="works" className="relative w-full bg-black py-32 px-6 md:px-12 overflow-hidden">

            {/* Header Section */}
            <div className="w-full mb-24 md:mb-32 border-b border-white/10 pb-12">

                {/* Meta Utility Bar - Reference Style */}
                <div className="w-full flex justify-between items-center border-b border-white/10 pb-4 mb-8">
                    <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full inline-block" />
                        Featured Projects
                    </span>
                    <span className="hidden md:block text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                        (WDX® — 03)
                    </span>
                    <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                        Creative Development
                    </span>
                </div>

                {/* Massive Infinite Marquee Title - Refined Size */}
                <div className="w-full overflow-hidden flex mb-12 relative">
                    {/* Gradient Overlays for Fade Effect (Cheaper than Mask) */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                    <motion.div
                        className="flex whitespace-nowrap gap-12 md:gap-24"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <h2 className="text-[6vw] md:text-[8vw] font-black uppercase text-white leading-none tracking-tighter flex items-center gap-12 md:gap-24 opacity-90">
                            Featured Works <span className="text-orange-500 text-[3vw] align-top">©</span>
                        </h2>
                        <h2 className="text-[6vw] md:text-[8vw] font-black uppercase text-white leading-none tracking-tighter flex items-center gap-12 md:gap-24 opacity-90">
                            Featured Works <span className="text-orange-500 text-[3vw] align-top">©</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Sub-header Content (Text Left, Button Right) */}
                <div className="max-w-[90rem] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed font-light tracking-wide">
                        Every project is a chance to blend design and development,
                        shaping bold interactive ideas into <span className="text-white font-medium">sleek digital realities</span>
                        —built with intent, speed, and visual clarity.
                    </p>

                    <button className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 hover:border-[#ff4d29] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#ff4d29] transition-all duration-300">
                        See All Works
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>

            {/* Scattered Grid */}
            <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-x-12">
                {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </div>

        </section>
    );
}
