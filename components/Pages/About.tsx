import FluidButton from "../FluidButton";

export default function About() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black py-20 px-6 md:px-24">

      {/* --- Abstract Wave (Wide, Behind Card) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40">
        <img
          src="/images/bg-card.avif"
          alt="Abstract Wave"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glass Card - Premium Sharp Look */}
      <div
        className="relative z-20 w-full max-w-[90rem] h-auto flex flex-col items-center justify-center text-center p-6 md:p-10 lg:p-16 pt-24 md:pt-32 rounded-[20px] border border-white/10 overflow-hidden shadow-2xl bg-[#050505]/95"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset, 0 20px 50px -20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12 max-w-6xl mx-auto w-full px-2 md:px-4">

          {/* Standard Meta Utility Bar - Added for Consistency */}
          <div className="w-full flex justify-between items-center border-b border-white/10 pb-4 mb-4 md:mb-8 absolute top-6 left-0 px-6 md:px-12">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff4d29] rounded-full inline-block" />
              <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                WHO I AM
              </span>
            </div>
            <span className="hidden md:block text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              (WDX® — 02)
            </span>
            <span className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              ABOUT ME
            </span>
          </div>

          {/* Mini Subtitle */}
          <div className="flex gap-4">
            <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">SENIOR DESIGNER</span>
            <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">—</span>
            <span className="text-[#ff4d29] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">ADVERTISING SPECIALIST</span>
          </div>

          {/* Main Headline */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase leading-[1.2] text-white drop-shadow-xl tracking-wide px-2">
              I CREATE VISUALS THAT LET PEOPLE FEEL WHAT BRANDS ARE TRYING TO SAY.
            </h2>
          </div>

          <p className="text-white/60 text-sm md:text-lg font-medium max-w-3xl leading-relaxed -mt-2">
            Curious by nature and driven by clarity, I've always been drawn to the spaces where ideas become visuals and visuals become communication. My work sits between creativity and intention — shaping concepts into designs that help brands speak clearly and connect with people in meaningful ways. I approach every project with a mix of strategic thinking, visual sensitivity, and a constant desire to simplify the complex.
          </p>

          <FluidButton to="/about">
            More About Me
          </FluidButton>
        </div>
      </div>
    </section>
  );
}
