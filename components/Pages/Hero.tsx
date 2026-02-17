import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

import FluidButton from "../FluidButton";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#050505] text-[#E0E0E0] font-['Syne'] flex flex-col justify-end pb-[140px] px-[8%] border-b border-white/5">

            {/* --- Background Image Layer (Full Screen) --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <img
                        src="/images/hero.png"
                        alt="Ahmed Kilany"
                        className="w-full h-full object-cover object-center"
                        // @ts-ignore
                        fetchPriority="high"
                    />
                    {/* Dark Gradients for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
                </div>
            </div>

            {/* --- Content --- */}
            <div className="relative z-10 w-full max-w-[90rem] mx-auto flex flex-col md:flex-row items-end justify-between gap-[64px]">

                {/* Left: Intro Text */}
                <div className="max-w-2xl">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-32 font-['Syne'] drop-shadow-lg tracking-normal text-white/80">
                        I craft visual identities and advertising concepts that bridge the gap between business objectives and human connection — designed with clarity, logic, and intent.
                    </p>
                    <FluidButton to="/contact" variant="primary">
                        Start A Project
                    </FluidButton>
                </div>

            </div>

            {/* Title (Aligned Top LEFT now per guidelines) */}
            <div className="absolute top-[30%] left-[8%] z-10 text-left pointer-events-none">
                <h1 className="font-['Syne'] font-extrabold uppercase text-white leading-[1.1] tracking-[-0.01em] text-[clamp(2.5rem,7vw,6.5rem)] text-left"
                    style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                >
                    Visualizing<br />
                    <span className="text-white">Intent</span>
                    <span className="text-[#ff4d29]">.</span>
                </h1>
            </div>

        </section>
    );
}
