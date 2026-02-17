import FluidButton from "../FluidButton";

export default function About() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#050505] py-[120px] px-[8%]">

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
        className="relative z-20 w-full max-w-[90rem] h-auto flex flex-col items-start justify-center text-left p-6 md:p-10 lg:p-16 pt-[140px] md:pt-[140px] rounded-[8px] border border-white/5 overflow-hidden shadow-2xl bg-[#050505]/95"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset, 0 20px 50px -20px rgba(0,0,0,0.5)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start gap-12 w-full px-2 md:px-4">

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
          <div className="w-full mb-[64px]">
            <h2 className="font-['Syne'] font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase leading-[1.1] text-white drop-shadow-xl tracking-[-0.01em] px-2 text-left">
              I CREATE VISUALS THAT LET PEOPLE FEEL WHAT BRANDS ARE TRYING TO SAY<span className="text-[#ff4d29]">.</span>
            </h2>
          </div>

          <p className="text-white/80 font-['Syne'] text-lg md:text-xl font-medium leading-relaxed max-w-2xl px-2 tracking-normal">
            Curious by nature, I explore the logic behind the layout. Every pixel has a purpose, every interaction tells a story. I don't just design interfaces; I design feelings.
          </p>

          <FluidButton to="/about" variant="outline" className="mt-20">
            More About Me
          </FluidButton>
        </div>
      </div>
    </section>
  );
}
