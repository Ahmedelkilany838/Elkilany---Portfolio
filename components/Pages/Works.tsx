import { Link } from "react-router";
import { motion } from "framer-motion";
import { DEFAULT_CONFIG } from "lib/siteConfig";
import ProjectCard from "components/ProjectCard";
import { featuredProjects } from "data/projects";

export default function Works() {
    // ── Read all config from static DEFAULT_CONFIG ────────────────────────────
    const config = DEFAULT_CONFIG;

    const sectionTitle = config.content.worksTitle;
    const yearRange = config.content.worksYearRange;

    const projects = featuredProjects.slice(0, 6);

    // Split title into two display lines
    const titleWords = sectionTitle.split(' ');
    const titleLine1 = titleWords[0] ?? 'Selected';
    const titleLine2 = titleWords.slice(1).join(' ') || 'Work';

    return (
        <section
            id="works"
            className="relative w-full py-[clamp(60px,8vh,140px)] px-[4%] md:px-[6%] lg:px-[8%] overflow-visible transform-gpu"
            style={{
                backgroundColor: 'var(--site-section-bg, #050505)',
                borderBottom: '1px solid var(--site-border, rgba(255,255,255,0.05))',
            }}
        >
            <div className="w-full max-w-[1800px] mx-auto flex flex-col">

                {/* ── Header ────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col mb-16 md:mb-20"
                >
                    {/* Ticker label */}
                    <div
                        className="flex items-center gap-4 mb-4 text-xs font-mono uppercase tracking-[0.1em]"
                        style={{ color: 'var(--site-text-muted, #777)' }}
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                            className="inline-block text-xl leading-none"
                        >
                            ✲
                        </motion.span>
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

                    {/* Title row */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-end">
                        <h2 className="font-['Syne'] font-extrabold text-[clamp(2.8rem,10vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase">
                            <span className="block" style={{ color: 'var(--site-text-primary, #ffffff)' }}>
                                {titleLine1}
                            </span>
                            <span className="block" style={{ color: 'var(--site-text-muted, #666)' }}>
                                {titleLine2}
                            </span>
                        </h2>
                        <div
                            className="font-['Syne'] font-medium text-2xl md:text-3xl lg:text-4xl hidden md:block pb-2 tracking-[0.05em]"
                            style={{ color: 'var(--site-text-muted, #777)' }}
                        >
                            {yearRange}
                        </div>
                    </div>
                </motion.div>

                {/* ── Project Grid ──────────────────────────────────────────── */}
                <div className="flex flex-col relative w-full mt-10 gap-8 md:gap-12" style={{ paddingBottom: '5vh' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                        {projects.map((project, i) => (
                            <div
                                key={project.slug}
                                className="w-full h-[45vh] md:h-[65vh] sticky top-[100px] md:top-[120px] will-change-transform"
                                style={{ zIndex: i + 1 }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── View All Button ───────────────────────────────────────── */}
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full flex justify-center mt-10 md:mt-14 relative z-50"
                >
                    <Link
                        to="/works"
                        className="group relative overflow-hidden rounded-full w-full sm:w-auto min-w-[280px] md:min-w-[500px] px-8 md:px-[80px] py-[24px] md:py-[28px] flex items-center justify-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.05)] bg-transparent transform-gpu"
                        style={{
                            color: 'var(--site-text-primary, #fff)',
                            border: '1px solid var(--site-button-border, rgba(255,255,255,0.2))',
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.backgroundColor = 'var(--site-accent, #ff4d29)';
                            el.style.borderColor = 'var(--site-accent, #ff4d29)';
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.backgroundColor = 'transparent';
                            el.style.borderColor = 'var(--site-button-border, rgba(255,255,255,0.2))';
                        }}
                    >
                        <span className="font-['Syne'] font-extrabold uppercase tracking-[0.05em] text-sm md:text-lg relative z-10 w-full text-center">
                            View All Projects
                        </span>
                        <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute m-auto inset-0 w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute m-auto inset-0 w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0">
                                <path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z" />
                            </svg>
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

