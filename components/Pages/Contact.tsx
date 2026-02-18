import FluidButton from "../FluidButton";
import { ArrowUpRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="relative w-full bg-[#050505] text-white py-[80px] md:py-[140px] px-[8%] border-t border-white/5">

            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left: Headline & Email */}
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="text-white/40 uppercase font-mono tracking-[0.2em] text-sm animate-pulse block mb-[64px]">
                            Contact
                        </span>
                        <h2 className="font-extrabold text-[9vw] lg:text-[5.5rem] leading-[1.1] tracking-[-0.02em] uppercase mb-16">
                            Let's Work <br />
                            Together<span className="text-[#ff4d29]">.</span>
                        </h2>
                        <FluidButton to="mailto:hello@elkilany.com" variant="outline">
                            hello@elkilany.com
                        </FluidButton>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 border-t border-white/5 pt-16 pb-32">
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
                                <a key={i} href={social.link} className="text-2xl font-bold text-white hover:text-white/70 transition-colors flex items-center gap-2 group">
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
                <div className="col-span-1 lg:col-span-2 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest gap-4">
                    <span>© {currentYear} Ahmed Elkilany. All Rights Reserved.</span>
                    <span>Designed & Developed by Elkilany</span>
                </div>

            </div>
        </footer>
    );
}
