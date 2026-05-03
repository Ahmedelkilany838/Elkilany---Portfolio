import type { Route } from "./+types/services";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FooterSection from "components/FooterSection";
import { services } from "data/services";
import { getProjectBySlug } from "data/projects";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Services | Kilany" },
        { name: "description", content: "Brand identity, advertising design, key visuals, AI visual production, retouching, packaging, and social media design services by Ahmed ElKilany." },
    ];
}

export default function ServicesPage() {
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
                        Services / focused creative support
                    </p>
                    <h1 className="font-['Syne'] font-extrabold text-[clamp(3rem,12vw,13rem)] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                        Services
                    </h1>
                    <p className="mt-8 max-w-2xl text-white/60 text-base md:text-xl leading-relaxed">
                        I support brands, agencies, and marketing teams with clear design direction, campaign visuals, and production-ready assets.
                    </p>
                </motion.div>
            </section>

            <section className="px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] border-b border-white/5">
                <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => {
                        const relatedProject = getProjectBySlug(service.relatedProjectSlugs[0]);
                        return (
                            <motion.article
                                key={service.slug}
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true, margin: "-80px" }}
                                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col gap-8"
                            >
                                <div>
                                    <p className="text-[#ff4d29] text-[10px] font-mono uppercase tracking-[0.25em] mb-4">
                                        0{index + 1}
                                    </p>
                                    <h2 className="font-['Syne'] text-2xl md:text-4xl font-extrabold uppercase tracking-[-0.03em]">
                                        {service.title}
                                    </h2>
                                    <p className="mt-5 text-white/65 leading-relaxed max-w-2xl">
                                        {service.description}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-3">Helps with</p>
                                    <p className="text-white/75 leading-relaxed">{service.helpsWith}</p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mb-4">Deliverables</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.deliverables.map((item) => (
                                            <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
                                    {relatedProject ? (
                                        <Link to={`/works/${relatedProject.slug}`} className="text-white/45 hover:text-white text-sm transition-colors">
                                            Related: {relatedProject.title}
                                        </Link>
                                    ) : (
                                        <span />
                                    )}
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-['Syne'] font-bold uppercase tracking-[0.08em] text-white hover:text-[#ff4d29] transition-colors">
                                        {service.cta}
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <FooterSection />
        </main>
    );
}
