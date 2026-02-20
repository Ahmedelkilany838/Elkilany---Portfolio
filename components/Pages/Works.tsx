import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const projects = [
    {
        title: "Artisan Co.",
        category: "Branding",
        image: "/images/1 v2.jpg",
        description: "Comprehensive visual identity focusing on craftsmanship and authenticity."
    },
    {
        title: "Neon Pulse",
        category: "Digital Art",
        image: "/images/3.png",
        description: "Vibrant, high-contrast digital illustrations for a synthwave music festival."
    },
    {
        title: "Vertex",
        category: "Identity Design",
        image: "/images/Artboard 1 copy 4-100.jpg",
        description: "Minimalist geometric branding system for a tech startup."
    },
    {
        title: "Elevation",
        category: "Campaign",
        image: "/images/Artboard 7-100.jpg",
        description: "High-impact visual campaign celebrating athletic performance and resilience."
    }
];

export default function Works() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useSpring(0, { stiffness: 500, damping: 30 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 30 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <section id="works" className="relative w-full bg-[#050505] pt-[80px] md:pt-[140px] px-[4%] md:px-[8%] border-b border-white/5 pb-[100px]">

            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-white"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 1 : 0,
                    opacity: isHovering ? 1 : 0,
                }}
            >
                View Project
            </motion.div>

            {/* Header DNA */}
            <div className="w-full mb-16 border-b border-white/5 pb-8 flex items-end justify-between">
                <h2 className="font-['Syne'] font-extrabold text-[8.5vw] md:text-[5.3rem] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                    SELECTED<br />WORKS<span className="text-[#ff4d29]">.</span>
                </h2>
                <span className="text-white/50 text-xl tracking-normal hidden md:block">(03)</span>
            </div>

            {/* Stacking Cards Container */}
            <div className="flex flex-col gap-0 w-full">
                {projects.map((project, i) => (
                    <Card
                        key={i}
                        project={project}
                        index={i}
                        total={projects.length}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    />
                ))}
            </div>

            {/* View All Button */}
            <div className="w-full flex justify-center mt-12 relative z-50">
                <Link
                    to="/work"
                    className="group relative overflow-hidden rounded-full border border-white min-w-[300px] md:min-w-[480px] px-[80px] py-[20px] flex items-center justify-center gap-4 transition-all duration-300 ease-out hover:bg-white hover:text-black text-white"
                >
                    <span className="font-['Syne'] font-extrabold uppercase tracking-[0.05em] text-sm relative z-10">
                        View All Projects
                    </span>
                    <ArrowUpRight strokeWidth={2.5} className="relative z-10 w-6 h-6 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
                </Link>
            </div>

        </section>
    );
}

function Card({
    project,
    index,
    total,
    onMouseEnter,
    onMouseLeave
}: {
    project: any,
    index: number,
    total: number,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div
            ref={containerRef}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{
                top: `${index * 0}px`,
                zIndex: index + 1
            }}
        >
            <motion.div
                style={{ scale, opacity }}
                className="relative w-full h-[100vh] bg-[#111] overflow-hidden border-b border-white/5 cursor-none"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-hide-cursor="true"
            >
                {/* Background Image - Natural Colors */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
                    <div className="flex justify-between items-end border-t border-white/20 pt-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-white/60 uppercase font-mono tracking-widest text-xs md:text-sm">
                                {project.category} / 2025
                            </span>
                            <h3 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-[-0.02em]">
                                {project.title}
                            </h3>
                        </div>
                        <div className="hidden md:block">
                            <ArrowUpRight className="w-12 h-12 text-white/40" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
