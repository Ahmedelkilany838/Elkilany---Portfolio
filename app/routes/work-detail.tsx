import type { Route } from "./+types/work-detail";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FooterSection from "components/FooterSection";
import { getNextProject, getProjectBySlug } from "data/projects";

export function meta({ params }: Route.MetaArgs) {
    const project = params.slug ? getProjectBySlug(params.slug) : undefined;
    if (!project) {
        return [
            { title: "Project Not Found | Kilany" },
            { name: "description", content: "The requested project could not be found." },
        ];
    }

    return [
        { title: `${project.title} | Kilany Work` },
        { name: "description", content: project.summary },
    ];
}

export default function WorkDetail() {
    const { slug } = useParams();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        throw new Response("Project not found", { status: 404, statusText: "Project not found" });
    }

    const nextProject = getNextProject(project.slug);

    return (
        <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
            <section className="relative min-h-[86vh] w-full flex items-end px-[4%] md:px-[6%] lg:px-[8%] pt-[18vh] pb-[8vh] border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={project.coverImage} alt="" className="w-full h-full object-cover opacity-45" />
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 48 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 w-full max-w-[1800px] mx-auto"
                >
                    <Link to="/works" className="inline-flex items-center gap-2 mb-10 text-white/50 hover:text-white transition-colors text-xs font-mono uppercase tracking-[0.2em]">
                        <ArrowLeft size={14} />
                        Back to work
                    </Link>
                    <p className="mb-5 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/45">
                        {project.categories.join(" / ")} / {project.year}
                    </p>
                    <h1 className="font-['Syne'] font-extrabold text-[clamp(2.8rem,11vw,12rem)] leading-[0.85] tracking-[-0.04em] uppercase text-white max-w-6xl">
                        {project.title}
                    </h1>
                    <p className="mt-8 max-w-2xl text-white/65 text-base md:text-xl leading-relaxed">
                        {project.summary}
                    </p>
                </motion.div>
            </section>

            <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-14 lg:gap-24">
                    <aside className="lg:sticky lg:top-[120px] self-start">
                        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-6">
                            Case study details
                        </p>
                        <dl className="space-y-6">
                            <div className="border-b border-white/10 pb-5">
                                <dt className="text-white/35 text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Year</dt>
                                <dd className="font-['Syne'] text-white/80">{project.year}</dd>
                            </div>
                            <div className="border-b border-white/10 pb-5">
                                <dt className="text-white/35 text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Services</dt>
                                <dd className="font-['Syne'] text-white/80">{project.services.join(", ")}</dd>
                            </div>
                            <div className="border-b border-white/10 pb-5">
                                <dt className="text-white/35 text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Scope / Deliverables</dt>
                                <dd className="flex flex-wrap gap-2">
                                    {project.deliverables.map((item) => (
                                        <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                                            {item}
                                        </span>
                                    ))}
                                </dd>
                            </div>
                        </dl>
                    </aside>

                    <div className="space-y-14">
                        <CaseStudyBlock title="Overview" body={project.overview} />
                        <CaseStudyBlock title="Challenge" body={project.challenge} />
                        <CaseStudyBlock title="Creative Direction" body={project.creativeDirection} />

                        {project.processNotes && project.processNotes.length > 0 && (
                            <div>
                                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-5">Process notes</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.processNotes.map((note, index) => (
                                        <div key={note} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6">
                                            <span className="text-[#ff4d29] text-xs font-mono">0{index + 1}</span>
                                            <p className="mt-4 text-white/70 leading-relaxed">{note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="max-w-[1800px] mx-auto">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-8">Visual gallery</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {project.gallery.map((image, index) => (
                            <div key={`${image}-${index}`} className="relative rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.03] aspect-[4/3]">
                                <img src={image} alt={`${project.title} gallery image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-3">Next brief</p>
                        <h2 className="font-['Syne'] text-3xl md:text-6xl font-extrabold uppercase tracking-[-0.03em]">
                            Need this kind of clarity?
                        </h2>
                        <p className="mt-5 text-white/55 max-w-xl leading-relaxed">
                            Send me the goal, audience, and timeline. I will help shape the visual route before production starts.
                        </p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-5 font-['Syne'] font-bold uppercase tracking-[0.08em] hover:bg-[#ff4d29] hover:text-white transition-colors">
                        Start a project
                    </Link>
                </div>
            </section>

            {nextProject && (
                <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                    <Link to={`/works/${nextProject.slug}`} className="group max-w-[1800px] mx-auto flex items-center justify-between gap-8">
                        <div>
                            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-3">Next project</p>
                            <h2 className="font-['Syne'] text-3xl md:text-7xl font-extrabold uppercase tracking-[-0.03em] text-white group-hover:text-[#ff4d29] transition-colors">
                                {nextProject.title}
                            </h2>
                        </div>
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:text-[#ff4d29] transition-colors shrink-0" />
                    </Link>
                </section>
            )}

            <FooterSection />
        </main>
    );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
    return (
        <div className="border-b border-white/10 pb-12">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-5">{title}</p>
            <p className="text-white/75 text-xl md:text-3xl leading-relaxed font-['Syne'] tracking-[-0.02em]">
                {body}
            </p>
        </div>
    );
}
