import type { Route } from "./+types/work";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "components/ProjectCard";
import FooterSection from "components/FooterSection";
import { projects, workCategories, type WorkCategory } from "data/projects";
import { DEFAULT_CONFIG } from "lib/siteConfig";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Work | Kilany" },
        { name: "description", content: "Selected branding, advertising, key visual, AI visual, retouching, packaging, and social media work by Ahmed ElKilany." },
    ];
}

export default function Work() {
    const config = DEFAULT_CONFIG;
    const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(activeCategory));

    return (
        <main className="relative bg-[#050505] min-h-screen text-white overflow-x-hidden">
            <section className="relative w-full min-h-[76vh] bg-[#050505] overflow-hidden flex flex-col justify-end px-[4%] md:px-[6%] lg:px-[8%] pt-[18vh] pb-[8vh] border-b border-white/5">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                        src={config.images.worksHeroImage}
                        alt=""
                        className="w-full h-full object-cover object-[center_30%] opacity-45"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 w-full max-w-[1800px] mx-auto"
                >
                    <p className="mb-5 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/45">
                        Selected work / brand systems / campaign visuals
                    </p>
                    <h1 className="font-['Syne'] font-extrabold text-[clamp(3.2rem,13vw,14rem)] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                        Work
                    </h1>
                    <p className="mt-8 max-w-2xl text-white/60 text-base md:text-xl leading-relaxed">
                        A focused view of my work across brand identity, advertising design, key visuals, AI-powered production, retouching, packaging, and social campaign systems.
                    </p>
                </motion.div>
            </section>

            <section className="relative w-full px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="w-full max-w-[1800px] mx-auto">
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12">
                        <div>
                            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-3">
                                Choose a focus
                            </p>
                            <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold uppercase tracking-[-0.03em]">
                                Work by discipline
                            </h2>
                        </div>
                        <p className="text-white/45 text-sm md:text-base max-w-md leading-relaxed">
                            Use the filters to scan the kind of visual problem each project is built around, from identity systems to campaign production.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-12">
                        {workCategories.map((category) => {
                            const active = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full border px-4 py-2 text-[11px] md:text-xs font-['Syne'] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${active
                                        ? "bg-[#ff4d29] border-[#ff4d29] text-white"
                                        : "bg-white/0 border-white/10 text-white/55 hover:text-white hover:border-white/30"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <div key={project.slug} className="h-[520px] md:h-[560px]">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
