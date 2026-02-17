// Stats Data
const stats = [
    { label: "Successful Projects", value: "80", suffix: "+" },
    { label: "Years Experience", value: "03", suffix: "+" },
    { label: "Client Satisfaction", value: "100", suffix: "%" },
    { label: "Design Awards", value: "03", suffix: "" },
];

export default function Experience() {
    return (
        <section className="relative w-full bg-[#050505] border-b border-white/5">
            <div className="relative w-full py-[140px] flex flex-col justify-end overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    <img
                        src="/images/freepik recreate.png"
                        alt="Ahmed Kilany"
                        className="w-full h-full object-cover object-top opacity-80"
                    />

                    {/* Gradient Overlays - Clean & Minimal */}
                    {/* Clear top, subtle gradient at bottom for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95 z-10" />
                    {/* Very faint vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10" />
                </div>

                {/* Content Overlay - Compact Padding */}
                <div className="relative z-20 w-full max-w-[100rem] mx-auto px-[8%] pb-10 md:pb-16 pt-24 flex flex-col justify-end h-full">

                    {/* Top Section: Heading & Description - Compact Spacing */}
                    <div className="flex flex-col xl:flex-row justify-between items-end mb-20 lg:mb-24 gap-12 xl:gap-0">

                        {/* Huge Heading - Modern Sans Serif */}
                        <div className="flex flex-col leading-[1.1] select-none mix-blend-screen font-['Syne']">
                            <h2 className="text-[9vw] xl:text-[7.5rem] font-extrabold text-white uppercase tracking-[-0.01em]">
                                NUMBERS
                            </h2>
                            <h2 className="text-[9vw] xl:text-[7.5rem] font-extrabold text-white uppercase tracking-[-0.01em]">
                                DON'T LIE<span className="text-[#ff4d29]">.</span>
                            </h2>
                        </div>

                        {/* Description Text - Elegantly placed */}
                        <div className="xl:max-w-md w-full text-white/80 text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#ff4d29] pl-6 mb-2">
                            With years of expertise, specialized in crafting
                            bold brands and high-impact digital
                            experiences that get results.
                        </div>
                    </div>

                    {/* Divider / Ruler Line - Sophisticated Tech Look - Reduced Margin */}
                    <div className="w-full relative mb-8 hidden md:block opacity-50">
                        {/* Main Line */}
                        <div className="w-full h-px bg-white/30" />

                        {/* Ticks */}
                        <div className="w-full flex justify-between mt-[-1px]">
                            {[...Array(21)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-px ${i % 5 === 0 ? 'h-5 bg-white/80' : 'h-2 bg-white/30'} transform origin-top`}
                                />
                            ))}
                        </div>
                    </div>


                    {/* Stats Grid - Premium Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-y-12 md:gap-y-0">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-1 px-6 ${index !== 0 ? 'md:border-l border-white/10' : ''
                                    }`}
                            >
                                <div className="flex items-start">
                                    <span className="text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8]">
                                        {item.value}
                                    </span>
                                    <span className="text-[#ff4d29] ml-2 text-4xl lg:text-5xl font-bold mt-1">
                                        {item.suffix}
                                    </span>
                                </div>

                                <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-[0.2em] mt-3 ml-1">
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
