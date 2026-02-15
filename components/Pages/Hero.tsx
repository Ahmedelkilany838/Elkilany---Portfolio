import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#050505] text-[#E0E0E0] font-['Inter_Display'] flex flex-col justify-end pb-12 md:pb-24">

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
            <div className="relative z-10 w-full px-6 md:px-12 max-w-[90rem] mx-auto flex flex-col md:flex-row items-end justify-between gap-8">

                {/* Left: Intro Text */}
                <div className="max-w-2xl">
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 font-['Outfit'] drop-shadow-lg tracking-tight text-white/90">
                        I craft visual identities and advertising concepts that bridge the gap between business objectives and human connection — designed with clarity, logic, and intent.
                    </p>
                </div>

                {/* Right: CTA */}
                <div>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff4d29] text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        <span>Start A Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>

            {/* Absolute Title (Top Right) */}
            <div className="absolute top-[30%] right-6 md:right-12 z-10 text-right pointer-events-none">
                <div className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.9] text-white/90 font-['Oswald']">
                    <div>Visualizing</div>
                    <div>Intent<span className="text-[#ff4d29]">.</span></div>
                </div>
            </div>

        </section>
    );
}
