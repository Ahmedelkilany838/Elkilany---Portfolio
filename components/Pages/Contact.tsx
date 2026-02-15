import FluidButton from "../FluidButton";
import MarqueeTitle from "components/Animation/MarqueeTitle";
import { ArrowUpRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="relative w-full bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/10 overflow-hidden">

            <div className="max-w-[90rem] mx-auto">

                {/* Main CTA */}
                <div className="flex flex-col items-center text-center mb-32">
                    <span className="text-[#ff4d29] font-mono text-xs tracking-[0.3em] uppercase mb-6">
                        Start A Project
                    </span>
                    <h2 className="text-[10vw] md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter uppercase mb-12">
                        Let's Work<br />Together.
                    </h2>
                    <FluidButton to="mailto:hello@elkilany.com" className="border-white/20 text-white hover:border-[#ff4d29] hover:bg-[#ff4d29] hover:text-black px-12 h-20 text-lg tracking-widest uppercase">
                        hello@elkilany.com
                    </FluidButton>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 border-t border-white/10 pt-16 pb-32">
                    {/* Socials */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-4">
                            Connect
                        </h3>
                        <div className="flex flex-col gap-4 items-start">
                            {[
                                { name: "Instagram", link: "#" },
                                { name: "LinkedIn", link: "#" },
                                { name: "Behance", link: "#" },
                                { name: "Twitter", link: "#" }
                            ].map((social, i) => (
                                <a key={i} href={social.link} className="text-2xl font-bold text-white hover:text-[#ff4d29] transition-colors flex items-center gap-2 group">
                                    {social.name}
                                    <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex flex-col md:items-end md:text-right gap-8">
                        <h3 className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-4">
                            Details
                        </h3>
                        <p className="text-white/80 text-xl font-light">
                            Cairo, Egypt<br />
                            Remote Worldwide
                        </p>
                        <p className="text-white/80 text-xl font-light">
                            +20 100 000 0000
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest gap-4">
                    <span>© {currentYear} Ahmed Elkilany. All Rights Reserved.</span>
                    <span>Designed & Developed by Elkilany</span>
                </div>

            </div>
        </section>
    );
}
