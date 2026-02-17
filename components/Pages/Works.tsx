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
        <section id="works" className="relative w-full bg-[#050505] py-[140px] px-[8%] border-b border-white/5">

            {/* Header DNA */}
            <div className="w-full mb-[64px] border-b border-white/5 pb-8 flex items-end justify-between">
                <h2 className="font-['Syne'] font-extrabold text-[8vw] md:text-[5rem] leading-[1.1] tracking-[-0.01em] uppercase text-white">
                    SELECTED WORKS<span className="text-[#ff4d29]">.</span>
                </h2>
                <span className="text-white/50 font-['Syne'] text-xl tracking-normal hidden md:block">(03)</span>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-32">
                {projects.map((project, i) => (
                    <div key={i} className="group relative w-full aspect-[4/5] md:aspect-square overflow-hidden bg-[#111] border border-white/5 rounded-[4px]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-[#ff4d29] uppercase font-mono tracking-widest text-xs mb-2 font-['Syne']">{project.category}</span>
                            <h3 className="text-3xl font-extrabold text-white uppercase mb-2 font-['Syne'] tracking-[-0.02em] leading-none">{project.title}</h3>
                            <p className="text-white/80 text-sm max-w-sm font-medium tracking-normal font-['Syne']">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="w-full flex justify-center">
                <FluidButton to="/work" variant="outline">
                    View All Projects
                </FluidButton>
            </div>

        </section>
    );
}
