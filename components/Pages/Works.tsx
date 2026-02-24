import { Link } from "react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
    {
        title: "SPACE",
        category: "DESIGN",
        image: "/images/1 v2.jpg",
        link: "/project/space"
    },
    {
        title: "MOBILE",
        category: "IDENTITY",
        image: "/images/3.png",
        link: "/project/mobile"
    },
    {
        title: "REALITY",
        category: "STRATEGY",
        image: "/images/Artboard 1 copy 4-100.jpg",
        link: "/project/reality"
    },
    {
        title: "ECOLOGY",
        category: "REBRANDING",
        image: "/images/Artboard 7-100.jpg",
        link: "/project/ecology"
    },
    {
        title: "VISION",
        category: "DIGITAL",
        image: "/images/1 v2.jpg",
        link: "/project/vision"
    },
    {
        title: "SYSTEM",
        category: "CONCEPT",
        image: "/images/3.png",
        link: "/project/system"
    }
];

export default function Works() {
    const [isHoveringProject, setIsHoveringProject] = useState(false);

    return (
        <section id="works" className="relative w-full bg-[#050505] py-[60px] md:py-[100px] lg:py-[140px] px-[4%] md:px-[6%] lg:px-[8%] border-b border-white/5 overflow-visible">
            <div className="w-full max-w-[1800px] mx-auto flex flex-col">

                {/* Top Grid / Header */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col mb-16 md:mb-20"
                >
                    <div className="flex items-center gap-4 mb-4 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                                className="inline-block text-xl md:text-2xl mt-[-2px]"
                            >
                                ✲
                            </motion.span>
                        </svg>
                        <div className="flex overflow-hidden whitespace-nowrap opacity-80 w-[200px] md:w-[300px]" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                className="flex"
                            >
                                <span className="mr-4">MY PORTFOLIO — MY PORTFOLIO — MY PORTFOLIO — </span>
                                <span className="mr-4">MY PORTFOLIO — MY PORTFOLIO — MY PORTFOLIO — </span>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-end">
                        <h2 className="font-['Syne'] font-extrabold text-[clamp(2.8rem,10vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase">
                            <span className="text-white block">Selected</span>
                            <span className="text-[#666] block">Work</span>
                        </h2>
                        <div className="font-['Syne'] font-medium text-2xl md:text-3xl lg:text-4xl text-[#777] hidden md:block pb-2 tracking-[0.05em]">
                            2024 — 2026
                        </div>
                    </div>
                </motion.div>

                {/* Project Grid With Independent Sticky Stacking */}
                <div className="project-component flex flex-col relative w-full mt-10 gap-8 md:gap-12" style={{ paddingBottom: '5vh' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className={`w-full h-[45vh] md:h-[65vh] sticky top-[100px] md:top-[120px] will-change-transform`}
                                style={{
                                    zIndex: i + 1,
                                }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full flex justify-center mt-10 md:mt-14 relative z-50"
                >
                    <Link
                        to="/works"
                        className="group relative overflow-hidden rounded-full border border-white/20 w-full sm:w-auto min-w-[280px] md:min-w-[500px] px-8 md:px-[80px] py-[24px] md:py-[28px] flex items-center justify-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:bg-[#ff4d29] hover:border-[#ff4d29] hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.05)] text-white bg-transparent"
                    >
                        <span className="font-['Syne'] font-extrabold uppercase tracking-[0.05em] text-sm md:text-lg relative z-10 w-full text-center">
                            View All Projects
                        </span>
                        <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute m-auto inset-0 w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute m-auto inset-0 w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0">
                                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                            </svg>
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <Link
            to={project.link}
            className="case-study-link block group w-full h-full cursor-none"
            data-cursor-view="true"
        >
            <div className="case-study-wrapper relative w-full h-full flex flex-col p-2.5 md:p-3 gap-2.5 md:gap-3 rounded-[24px] bg-[#0a0a0a]/60 backdrop-blur-[24px] border border-white/5 shadow-2xl transition-colors duration-500 hover:bg-[#151515]/70">

                {/* Header Container */}
                <div className="relative w-full rounded-[16px] overflow-hidden shrink-0">
                    <div className="background-glass absolute inset-0 bg-[#191919] border border-white/5 transition-colors duration-500 group-hover:bg-[#222]"></div>

                    <div className="case-study-container relative z-10 w-full h-[60px] md:h-[72px] flex justify-between items-center px-5 md:px-6">
                        <div className="w-layout-grid case-study-content-grid flex items-center gap-2 md:gap-3 font-['Syne']">
                            <div className="project-name text-white text-[13px] md:text-sm font-bold uppercase tracking-wider">{project.title}</div>
                            <div className="text-size-regular-2 text-style-allcaps text-white/50 text-[10px] md:text-xs font-bold">•</div>
                            <div className="project-detail-text text-white/50 text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-medium">{project.category}</div>
                        </div>

                        <div className="case-study-item">
                            <div className="case-arrow-wrap w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:border-white">
                                <div className="case-arrow-block relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center overflow-hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="case-arrow _01 absolute m-auto inset-0 text-white transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-hover:-translate-y-full w-full h-full group-hover:text-black">
                                        <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="case-arrow _02 absolute m-auto inset-0 text-white transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0 w-full h-full group-hover:text-black">
                                        <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* project-image-wrapper */}
                <div className="project-image-wrapper relative w-full flex-grow rounded-[16px] overflow-hidden bg-black">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[1.1]"
                    />
                </div>
            </div>
        </Link>
    );
}
