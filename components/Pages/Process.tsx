import FluidButton from "../FluidButton";
import MarqueeTitle from "../Animation/MarqueeTitle";
import { ArrowDownRight, Circle, Diamond, Square, Triangle } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Understand",
        category: "Discovery",
        description: "I begin by understanding the brand, the brief, and the core message behind the project collecting insights and defining a clear, grounded objective.",
        shape: Circle
    },
    {
        id: "02",
        title: "Think",
        category: "Strategy",
        description: "I explore creative directions, translate ideas into visual logic, and form the strategic foundation that guides the design.",
        shape: Diamond
    },
    {
        id: "03",
        title: "Design",
        category: "Creation",
        description: "I craft key visuals, visual systems, and communication-driven designs built on clarity, intention, and strong visual structure.",
        shape: Square
    },
    {
        id: "04",
        title: "Develop",
        category: "Execution",
        description: "I adapt the direction across different formats — branding, key visuals, social media, and digital assets ensuring consistency and impact throughout.",
        shape: Triangle
    },
    {
        id: "05",
        title: "Deliver",
        category: "Handover",
        description: "I refine, finalize, and prepare high-quality outputs that maintain clarity, accuracy, and strong, consistent brand communication.",
        shape: ArrowDownRight
    },
];

export default function Process() {
    return (
        <section className="relative bg-[#020202] py-32 overflow-hidden">

            {/* Noise Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none" />

            {/* Header */}
            <div className="w-full mb-32">
                <MarqueeTitle text="HOW I DO" number="05" className="mb-0" />
            </div>

            <div className="w-full max-w-[90rem] mx-auto px-4 md:px-8 relative">

                {/* Timeline Line - Fixed on Left (Static) */}
                <div className="hidden md:block absolute left-16 top-0 bottom-0 w-[2px] bg-white/10" />

                {/* Steps */}
                <div className="space-y-32 md:space-y-48 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative">

                            {/* Timeline Node (Desktop) */}
                            <div className="hidden md:block absolute left-16 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="w-6 h-6 rounded-full border-2 border-[#ff4d29] bg-[#020202] flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#ff4d29]" />
                                </div>
                            </div>

                            {/* Card */}
                            <div className={`relative ml-0 md:ml-32 ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-48'}`}>

                                {/* Background ID */}
                                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
                                    <span className="text-[300px] md:text-[400px] font-black text-white leading-none select-none whitespace-nowrap">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Main Card */}
                                <div className="relative bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 hover:border-[#ff4d29]/50 transition-colors duration-300">

                                    {/* Left: Icon Section */}
                                    <div className="md:col-span-4 flex items-center justify-center md:justify-start">
                                        <div className="relative">
                                            {/* Icon */}
                                            <div className="text-[#ff4d29]/30">
                                                <step.shape size={160} strokeWidth={1} />
                                            </div>
                                            {/* Number Badge */}
                                            <div className="absolute -top-4 -right-4 bg-[#ff4d29] text-black font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_#ff4d29]">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Content Section */}
                                    <div className="md:col-span-8 flex flex-col justify-center space-y-6">
                                        <div className="inline-flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[#ff4d29] rounded-full" />
                                            <span className="text-[#ff4d29] font-mono text-xs tracking-[0.3em] uppercase">
                                                {step.category}
                                            </span>
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/60 text-lg md:text-2xl leading-relaxed font-light max-w-3xl">
                                            {step.description}
                                        </p>
                                        <div className="w-24 h-1 bg-gradient-to-r from-[#ff4d29] to-transparent" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center mt-32 pt-16 border-t border-white/5">
                    <FluidButton to="/contact" className="border-white/20 text-white hover:border-[#ff4d29] px-16 h-16 text-sm tracking-widest uppercase">
                        Start Collaboration
                    </FluidButton>
                </div>

            </div>
        </section>
    );
}
