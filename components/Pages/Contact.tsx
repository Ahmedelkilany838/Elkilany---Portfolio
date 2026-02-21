import FluidButton from "../FluidButton";
import { ArrowUpRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import FooterSection from "../FooterSection";

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative w-full bg-[#050505] text-white pt-[80px] md:pt-[140px] border-t border-white/5 overflow-hidden">

            {/* Top Contact Section Container */}
            <div className="px-[4%] md:px-[6%] lg:px-[8%] pb-[80px] md:pb-[140px] max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left: Headline & Info */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="font-['Syne'] font-black text-[clamp(4.5rem,9vw,9rem)] leading-[0.9] tracking-[-0.02em] uppercase text-white mb-10 md:mb-20">
                            LET'S TALK
                        </h2>

                        <p className="font-['Syne'] font-bold text-base md:text-xl lg:text-2xl uppercase leading-snug text-white mb-10 md:mb-16 max-w-md">
                            HAVE AN IDEA IN MIND? LET'S CONNECT AND EXPLORE HOW WE CAN HELP BRING IT TO LIFE.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <img
                            src="/images/hero.png"
                            alt="Ahmed Elkilany"
                            className="w-[60px] h-[60px] rounded-full object-cover object-[center_top]"
                        />
                        <div className="flex flex-col">
                            <span className="font-['Syne'] font-bold text-[#ff4d29] uppercase tracking-wide text-lg leading-tight">AHMED ELKILANY</span>
                            <span className="text-white/70 font-sans text-sm mt-1">CEO and Founder</span>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="flex flex-col justify-center w-full pt-10 lg:pt-0">
                    <form className="flex flex-col gap-10 lg:gap-14 w-full">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Name*"
                                required
                                className="w-full bg-transparent border-b border-white/20 text-white pb-4 placeholder:text-white/50 focus:outline-none focus:border-[#ff4d29] transition-colors font-sans text-lg"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email*"
                                required
                                className="w-full bg-transparent border-b border-white/20 text-white pb-4 placeholder:text-white/50 focus:outline-none focus:border-[#ff4d29] transition-colors font-sans text-lg"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                placeholder="Your Massage*"
                                required
                                rows={3}
                                className="w-full bg-transparent border-b border-white/20 text-white pb-4 placeholder:text-white/50 focus:outline-none focus:border-[#ff4d29] transition-colors font-sans text-lg resize-none min-h-[100px]"
                            ></textarea>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="group relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer bg-white border border-white hover:bg-[#ff4d29] hover:border-[#ff4d29] rounded-full px-10 py-[18px] md:px-12 md:py-[20px] flex items-center justify-center w-fit shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:scale-105"
                            >
                                <span className="relative z-10 font-['Syne'] font-extrabold uppercase tracking-[0.08em] text-black group-hover:text-white text-sm md:text-base transition-colors duration-300">
                                    Contact
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <FooterSection />

        </footer>
    );
}
