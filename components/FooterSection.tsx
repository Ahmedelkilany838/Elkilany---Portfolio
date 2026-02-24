import { ArrowUpRight } from "lucide-react";

const StarSVG = () => (
    <span className="inline-flex opacity-50 shrink-0" style={{ width: "4.5vw", height: "4.5vw" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        </svg>
    </span>
);

export default function FooterSection() {
    return (
        <div className="w-full border-t border-white/5 bg-[#050505]">

            {/* Email CTA Strip */}
            <div className="w-full pt-0 pb-[40px] md:pb-[60px] flex flex-col items-center justify-center text-center px-[4%]">
                <p className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] md:tracking-[0.25em] mb-2 md:mb-0 leading-normal md:leading-none max-w-[80%] mx-auto">
                    Reach out if you're ready to make something amazing together.
                </p>
                <a
                    href="mailto:hello@kilany.com"
                    className="font-['Syne'] font-black uppercase text-white tracking-[-0.02em] transition-colors duration-300 hover:text-[#ff4d29] break-all sm:break-normal"
                    style={{ fontSize: "clamp(2rem, 7vw, 7.5rem)", lineHeight: 1.1 }}
                >
                    hello@kilany.com
                </a>
            </div>

            {/* ─── Wide Footer Section ─── */}
            <div className="w-full border-t border-white/5 px-[4%] md:px-[6%] lg:px-[8%] pt-16 pb-10">

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/5">

                    {/* Col 1 — Socials */}
                    <div className="flex flex-col gap-1">
                        {[
                            { name: "Facebook", href: "https://www.facebook.com/" },
                            { name: "Instagram", href: "https://www.instagram.com/" },
                            { name: "LinkedIn", href: "https://www.linkedin.com/" },
                            { name: "Twitter", href: "https://x.com/" },
                        ].map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between border-b border-white/5 py-2 hover:border-white/20 transition-colors"
                            >
                                <span className="font-['Syne'] font-extrabold uppercase text-white text-2xl md:text-3xl tracking-[-0.02em] group-hover:text-[#ff4d29] transition-colors duration-300">
                                    {s.name}
                                </span>
                                <ArrowUpRight
                                    size={18}
                                    className="text-white/30 group-hover:text-[#ff4d29] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Col 2 — Nav Links */}
                    <div className="flex flex-col gap-1">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Works", href: "/works" },
                            { name: "Contact", href: "/contact" },
                        ].map((l) => (
                            <a
                                key={l.name}
                                href={l.href}
                                className="group flex items-center border-b border-white/5 py-2 hover:border-white/20 transition-colors"
                            >
                                <span className="font-['Syne'] font-extrabold uppercase text-white text-2xl md:text-3xl tracking-[-0.02em] group-hover:text-white/70 transition-colors duration-300">
                                    {l.name}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Col 3 — Newsletter */}
                    <div className="flex flex-col gap-6">
                        <p className="text-white/50 text-sm font-sans leading-relaxed max-w-xs">
                            Sign up for my newsletter to get the latest insights and updates on design &amp; branding.
                        </p>
                        <form className="flex items-center border-b border-white/20 focus-within:border-[#ff4d29] transition-colors pb-3 gap-3">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                required
                                className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 focus:outline-none font-sans"
                            />
                            <button
                                type="submit"
                                className="group flex items-center gap-2 bg-white text-xs font-['Syne'] font-bold uppercase tracking-[0.08em] px-4 py-2 rounded-full hover:bg-[#ff4d29] transition-all duration-300 shrink-0"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors block"></span>
                                <span className="text-black group-hover:text-white transition-colors">Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 pt-8 text-white/40 text-[11px] md:text-[13px] font-mono uppercase tracking-[0.05em] md:tracking-[0.1em] text-center md:text-left">
                    <div className="flex items-center gap-1 order-3 md:order-1 mt-2 md:mt-0">
                        <span className="text-[#ff4d29]">©</span>
                        <span>2026 Kilany®</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 order-2">
                        <a href="#" className="hover:text-white transition-colors">License</a>
                        <a href="#" className="hover:text-white transition-colors">Changelog</a>
                        <a href="#" className="hover:text-white transition-colors">Style Guide</a>
                    </div>
                    <div className="order-1 md:order-3">
                        Designed &amp; Developed by{" "}
                        <span className="text-white font-bold font-['Syne'] whitespace-nowrap">Ahmed Kilany</span>
                    </div>
                </div>
            </div>

            {/* ─── Footer Bottom Marquee ─── */}
            <div className="w-full bg-[#ff4d29] overflow-hidden select-none">
                <div
                    className="flex items-center whitespace-nowrap min-w-max py-8"
                    style={{ animation: "footer-marquee 32s linear infinite" }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="flex items-center gap-[3vw] font-['Syne'] font-black uppercase text-white text-[6vw] leading-none tracking-[-0.03em] pr-[4vw]">
                            KILANY
                            <StarSVG />
                            PORTFOLIO
                            <StarSVG />
                            KILANY
                            <StarSVG />
                        </span>
                    ))}
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes footer-marquee {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                ` }} />
            </div>

        </div>
    );
}
