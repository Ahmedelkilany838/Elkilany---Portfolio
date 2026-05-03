import type { Route } from "./+types/ai-lab";
import { Link } from "react-router";
import { motion } from "framer-motion";
import ProjectCard from "components/ProjectCard";
import FooterSection from "components/FooterSection";
import { aiLabProjects } from "data/projects";

const aiCategories = ["AI Visual Direction", "Key Visual Exploration", "Retouching Support", "Creative Production"];

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "AI Lab | Kilany" },
        { name: "description", content: "AI visual direction, key visual exploration, retouching support, and creative production studies by Ahmed ElKilany." },
    ];
}

export default function AiLabPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
            <section className="px-[4%] md:px-[6%] lg:px-[8%] pt-[20vh] pb-[70px] md:pb-[110px] border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-[1800px] mx-auto"
                >
                    <p className="mb-5 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/45">
                        AI Lab / directed visual production
                    </p>
                    <h1 className="font-['Syne'] font-extrabold text-[clamp(3rem,12vw,13rem)] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                        AI Lab
                    </h1>
                    <p className="mt-8 max-w-2xl text-white/60 text-base md:text-xl leading-relaxed">
                        I use AI as part of creative direction and visual production: exploring moods, testing compositions, and refining campaign-ready imagery with intention.
                    </p>
                </motion.div>
            </section>

            <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                        {aiCategories.map((category) => (
                            <div key={category} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                                <p className="font-['Syne'] font-bold uppercase tracking-[-0.02em] text-white/80">
                                    {category}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-3">
                                Selected studies
                            </p>
                            <h2 className="font-['Syne'] text-3xl md:text-5xl font-extrabold uppercase tracking-[-0.03em]">
                                Directed, not random
                            </h2>
                        </div>
                        <p className="text-white/45 text-sm md:text-base max-w-md leading-relaxed">
                            These projects are shown because they include AI visuals, key visuals, retouching, or creative production.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                    >
                        {aiLabProjects.map((project) => (
                            <div key={project.slug} className="h-[520px] md:h-[560px]">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-3">Process teaser</p>
                        <h2 className="font-['Syne'] text-3xl md:text-6xl font-extrabold uppercase tracking-[-0.03em]">
                            Direction first. Tools second.
                        </h2>
                        <p className="mt-5 text-white/55 max-w-2xl leading-relaxed">
                            I start with the brief, mood, composition, and use case. AI helps explore routes, then the strongest visuals are refined for real communication.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link to="/works" className="rounded-full border border-white/15 px-7 py-4 font-['Syne'] text-sm font-bold uppercase tracking-[0.08em] text-white hover:border-white/40 transition-colors">
                            View work
                        </Link>
                        <Link to="/contact" className="rounded-full bg-white px-7 py-4 font-['Syne'] text-sm font-bold uppercase tracking-[0.08em] text-black hover:bg-[#ff4d29] hover:text-white transition-colors">
                            Start a brief
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
