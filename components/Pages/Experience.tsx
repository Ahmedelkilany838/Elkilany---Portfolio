import FluidButton from "../FluidButton";

// Stats Data
const stats = [
    { label: "Years of Experience", value: 3, suffix: "+" },
    { label: "Satisfied Clients", value: 35, suffix: "+" },
    { label: "Projects Delivered", value: 80, suffix: "+" },
    { label: "Design Awards", value: 3, suffix: "" },
];

export default function Experience() {
    return (
        <section className="relative w-full bg-black">
            <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">

                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src="/images/freepik recreate.png"
                        alt="Ahmed Kilany"
                        className="w-full h-full object-cover object-top"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 z-10" />
                    <div className="absolute inset-0 bg-black/30 z-10" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 w-full max-w-[90rem] px-6 md:px-12 flex flex-col justify-end h-full pb-24 md:pb-32">

                    {/* Header Meta - Absolute Top */}
                    <div className="absolute top-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center border-b border-white/20 pb-6">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full inline-block" />
                            <span className="text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                                PROFESSIONAL JOURNEY
                            </span>
                        </div>
                        <span className="hidden md:block text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                            (WDX® — 05)
                        </span>
                        <span className="text-white/80 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                            STATS & IMPACT
                        </span>
                    </div>

                    {/* Main Headline */}
                    <div className="mb-16 max-w-5xl">
                        <h2 className="text-5xl md:text-[5vw] font-black text-white leading-[0.9] tracking-tighter">
                            3+ YEARS OF <br />
                            <span className="text-white/50">VISUAL MASTERY.</span>
                        </h2>
                    </div>

                    {/* Stats Row */}
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/20 pt-12">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 items-center text-center md:items-start md:text-left"
                            >
                                <span className="text-white text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-1">
                                    {item.value}{item.suffix}
                                </span>
                                <span className="text-white/60 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
