import { Link } from "react-router";
import FluidButton from "../FluidButton";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Kava",
        category: "Visual Identity",
        image: "/images/works/kava.jpg",
        description: "A premium coffee brand identity focused on earth tones and organic patterns."
    },
    {
        title: "Ocula",
        category: "Web Design",
        image: "/images/works/ocula.jpg",
        description: "Immersive e-commerce experience for high-end eyewear, featuring 3D product visualization."
    },
    {
        title: "Apex",
        category: "Rebranding",
        image: "/images/works/apex.jpg",
        description: "Modernizing a legacy financial institution with a bold, digital-first visual system."
    },
    {
        title: "Lumina",
        category: "Art Direction",
        image: "/images/works/lumina.jpg",
        description: "Editorial campaign for a lighting design studio, emphasizing shadow and form."
    }
];

export default function Works() {
    return (
        <section id="works" className="relative w-full bg-[#050505] py-[80px] md:py-[140px] px-[8%] border-b border-white/5">

            {/* Header DNA */}
            <div className="w-full mb-16 border-b border-white/5 pb-8 flex items-end justify-between">
                <h2 className="font-['Syne'] font-extrabold text-[8.5vw] md:text-[5.3rem] leading-[0.85] tracking-[-0.04em] uppercase text-white">
                    SELECTED<br />WORKS<span className="text-[#ff4d29]">.</span>
                </h2>
                <span className="text-white/50 text-xl tracking-normal hidden md:block">(03)</span>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-0">
                {projects.map((project, i) => (
                    <div key={i} className="group relative w-full aspect-[4/5] md:aspect-square overflow-hidden bg-[#111] border border-white/10 rounded-xl">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-white/60 uppercase font-mono tracking-widest text-xs mb-2">{project.category}</span>
                            <h3 className="text-3xl font-extrabold text-white uppercase mb-2 tracking-[-0.02em] leading-none">{project.title}</h3>
                            <p className="text-white/80 text-sm max-w-sm font-medium tracking-normal">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="w-full flex justify-center mt-20">
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
