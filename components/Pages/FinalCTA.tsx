import FluidButton from "../FluidButton";

export default function FinalCTA() {
    return (
        <section className="relative w-full bg-[#050505] overflow-hidden py-[140px] px-[8%] text-left flex flex-col items-start justify-center border-b border-white/5">

            {/* Background Texture - Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#ff4d29]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start w-full max-w-[90rem] mx-auto">
                <span className="text-[#ff4d29] uppercase font-mono tracking-[0.2em] text-sm md:text-base animate-pulse mb-[64px] font-['Syne']">
                    The Next Step
                </span>

                <h2 className="font-['Syne'] font-extrabold text-[8vw] md:text-[5rem] lg:text-[6rem] uppercase leading-[1.1] tracking-[-0.01em] text-white mb-[64px]">
                    Visual <span className="text-[#ff4d29]">Legacy</span> <br />
                    Starts Here<span className="text-[#ff4d29]">.</span>
                </h2>

                <p className="text-white/80 text-lg md:text-2xl font-medium mb-32 max-w-2xl leading-relaxed font-['Syne'] tracking-normal">
                    You've seen the work. You know the process. If you are ready for a brand that commands attention, let's talk.
                </p>

                <FluidButton
                    to="/contact"
                    variant="primary"
                >
                    Start A Project
                </FluidButton>
            </div>
        </section>
    );
}
