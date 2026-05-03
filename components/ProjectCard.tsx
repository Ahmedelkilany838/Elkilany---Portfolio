import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "data/projects";
import { ImagePlaceholder } from "components/ui/ImagePlaceholder";

interface ProjectCardProps {
    project: Project;
    compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
    const [failed, setFailed] = useState(false);
    const primaryCategory = project.categories[0] ?? "Branding";

    return (
        <Link
            to={`/works/${project.slug}`}
            className="case-study-link block group w-full h-full cursor-none transform-gpu active:scale-[0.98] transition-transform duration-300"
            data-cursor-view="true"
            aria-label={`View ${project.title} case study`}
        >
            <article
                className="relative w-full h-full flex flex-col p-2.5 md:p-3 gap-2.5 md:gap-3 rounded-[24px] backdrop-blur-[24px] shadow-2xl transition-colors duration-500"
                style={{
                    backgroundColor: "rgba(10,10,10,0.6)",
                    border: "1px solid var(--site-border, rgba(255,255,255,0.05))",
                }}
            >
                <div className="relative w-full rounded-[16px] overflow-hidden shrink-0">
                    <div
                        className="absolute inset-0 transition-colors duration-500"
                        style={{
                            backgroundColor: "var(--site-card-bg, #191919)",
                            border: "1px solid var(--site-border, rgba(255,255,255,0.05))",
                        }}
                    />
                    <div className="relative z-10 w-full min-h-[68px] flex justify-between items-center gap-4 px-5 md:px-6 py-4">
                        <div className="flex flex-col gap-1 min-w-0 font-['Syne']">
                            <h3
                                className="text-[13px] md:text-sm font-bold uppercase tracking-wider truncate"
                                style={{ color: "var(--site-text-primary, #fff)" }}
                            >
                                {project.title}
                            </h3>
                            <p
                                className="text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-medium truncate"
                                style={{ color: "var(--site-text-secondary, rgba(255,255,255,0.5))" }}
                            >
                                {primaryCategory} / {project.year}
                            </p>
                        </div>
                        <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white shrink-0">
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-colors duration-500 group-hover:text-black" />
                        </div>
                    </div>
                </div>

                <div className={`relative w-full ${compact ? "min-h-[240px]" : "flex-grow"} rounded-[16px] overflow-hidden bg-black`}>
                    {failed ? (
                        <ImagePlaceholder projectName={project.title} />
                    ) : (
                        <img
                            src={project.coverImage}
                            alt={`${project.title} cover`}
                            className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[1.06]"
                            onError={() => setFailed(true)}
                            loading="lazy"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
                    {!compact && (
                        <p className="absolute left-5 right-5 bottom-5 text-white/75 text-sm leading-relaxed">
                            {project.summary}
                        </p>
                    )}
                </div>
            </article>
        </Link>
    );
}
