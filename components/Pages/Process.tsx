import FluidButton from "../FluidButton";
import MarqueeTitle from "../Animation/MarqueeTitle";
import { ArrowUpRight, CheckCircle2, Flag, Lightbulb, PenTool, Search } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Understand",
        category: "Discovery",
        description: "We start by breaking down the brief, analyzing the market, and defining the core problem to solve.",
        icon: Search
    },
    {
        id: "02",
        title: "Think",
        category: "Strategy",
        description: "Translating insights into a solid creative strategy. We define the 'What', 'Why', and 'How'.",
        icon: Lightbulb
    },
    {
        id: "03",
        title: "Design",
        category: "Creation",
        description: "Building the visual language. From logos to systems, we craft every pixel with intent.",
        icon: PenTool
    },
    {
        id: "04",
        title: "Develop",
        category: "Execution",
        description: "Rolling out the brand across all touchpoints—print, digital, social, and web.",
        icon: CheckCircle2
    },
    {
        id: "05",
        title: "Deliver",
        category: "Handover",
        description: "Finalizing files, creating guidelines, and ensuring you have everything to launch.",
        icon: Flag
    },
];

export default function Process() {
    return (
        <section className="relative w-full bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">

            <div className="max-w-[90rem] mx-auto">
                <MarqueeTitle text="MY PROCESS" number="05" className="mb-24" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-[#0a0a0a] border border-white/10 p-8 h-[500px] flex flex-col justify-between overflow-hidden hover:border-[#ff4d29] transition-all duration-500 hover:bg-[#0f0f0f]">

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#ff4d29]/0 via-[#ff4d29]/0 to-[#ff4d29]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Top */}
                            <div className="relative z-10">
                                <span className="block text-4xl font-black text-white/10 mb-6 group-hover:text-[#ff4d29] transition-colors duration-500">
                                    {step.id}
                                </span>
                                <div className="text-white/40 mb-4 group-hover:text-white transition-colors duration-300">
                                    <step.icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="inline-block py-1 px-3 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/60 bg-white/5">
                                    {step.category}
                                </span>
                            </div>

                            {/* Bottom */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </div>

                            {/* Corner Icon */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#ff4d29]">
                                <ArrowUpRight size={20} />
                            </div>

                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-24">
                    <FluidButton to="/services" className="border-white/20 text-white hover:border-[#ff4d29] px-12 h-16 text-sm tracking-widest uppercase">
                        View Detailed Services
                    </FluidButton>
                </div>
            </div>
        </section>
    );
}
