import { Link } from "react-router";
import FluidButton from "../FluidButton";
import MarqueeTitle from "components/Animation/MarqueeTitle";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "ARJUNA",
        category: "Web Design",
        description: "A digital portfolio website designed to showcase the work of a talented design engineer, focusing on clean aesthetics and user interaction.",
        image: "/images/1 v2.jpg",
        year: "2024"
    },
    {
        id: "02",
        title: "AURA SKIN",
        category: "Branding",
        description: "A comprehensive branding project for a high-end skincare line, emphasizing purity, elegance, and modern luxury through visual storytelling.",
        image: "/images/Artboard 7-100.jpg",
        year: "2023"
    },
    {
        id: "03",
        title: "NEXT LAYER",
        category: "Identity",
        description: "Corporate identity design for a tech startup, creating a forward-thinking visual language that communicates innovation and stability.",
        image: "/images/Logo.jpg",
        year: "2023"
    },
    {
        id: "04",
        title: "AL WATAN",
        category: "Calligraphy",
        description: "A modern reinterpretation of traditional calligraphy, blending heritage with contemporary design principles for a cultural exhibition.",
        image: "/images/Artboard 1 copy 4-100.jpg",
        year: "2022"
    },
];

export default function Works() {
    return (
        <section id="works" className="relative w-full bg-black py-20 px-4 md:px-12">

            {/* Header / Marquee */}
            <div className="w-full mb-16 border-b border-white/10 pb-8">
                <MarqueeTitle text="SELECTED WORKS" number="03" />
            </div>

            {/* Standard Grid Layout */}
            <div className="max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col gap-6 group">

                        {/* Image */}
                        <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Floating Badge */}
                            <div className="absolute top-6 right-6">
                                <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#ff4d29] group-hover:border-[#ff4d29] transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center text-[#ff4d29] text-xs font-bold uppercase tracking-widest px-2">
                                <span>{project.category}</span>
                                <span className="text-white/40">{project.year}</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase px-1 group-hover:text-[#ff4d29] transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md px-1 mt-2">
                                {project.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-24">
                <FluidButton to="/works" className="border-white/20 text-white">View All Projects</FluidButton>
            </div>

        </section>
    );
}
