import { ArrowUpRight } from "lucide-react";
import { footerLinks, siteProfile, socialLinks } from "data/site";

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
                    Have a brand, campaign, or visual production brief that needs a clearer direction?
                </p>
                <a
                    href={`mailto:${siteProfile.email}`}
                    className="font-['Syne'] font-black uppercase text-white tracking-[-0.02em] transition-colors duration-300 hover:text-[#ff4d29] break-all sm:break-normal"
                    style={{ fontSize: "clamp(2rem, 7vw, 7.5rem)", lineHeight: 1.1 }}
                >
                    {siteProfile.email}
                </a>
            </div>

            {/* ─── Wide Footer Section ─── */}
            <div className="w-full border-t border-white/5 px-[4%] md:px-[6%] lg:px-[8%] pt-16 pb-10">

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-white/5">

                    {/* Col 1 — Socials */}
                    <div className="flex flex-col gap-1">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="group flex items-center justify-between border-b border-white/5 py-2 hover:border-white/20 transition-colors"
                            >
                                <span className="font-['Syne'] font-extrabold uppercase text-white text-2xl md:text-3xl tracking-[-0.02em] group-hover:text-[#ff4d29] transition-colors duration-300">
                                    {s.label}
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
                        {footerLinks.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="group flex items-center border-b border-white/5 py-2 hover:border-white/20 transition-colors"
                            >
                                <span className="font-['Syne'] font-extrabold uppercase text-white text-2xl md:text-3xl tracking-[-0.02em] group-hover:text-white/70 transition-colors duration-300">
                                    {l.label}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Col 3 — Project CTA */}
                    <div className="flex flex-col gap-6">
                        <p className="text-white/50 text-sm font-sans leading-relaxed max-w-xs">
                            Send the project context and I will suggest the clearest next step for the visual direction.
                        </p>
                        <a
                            href="/contact"
                            className="group flex items-center justify-center gap-2 bg-white text-xs font-['Syne'] font-bold uppercase tracking-[0.08em] px-5 py-4 rounded-full hover:bg-[#ff4d29] active:scale-95 transition-all duration-300 shrink-0 min-h-[48px] w-fit"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors block"></span>
                            <span className="text-black group-hover:text-white transition-colors">Start a project</span>
                        </a>
                        <a
                            href={`mailto:${siteProfile.email}`}
                            className="text-white/45 hover:text-white text-sm transition-colors break-all"
                        >
                            {siteProfile.email}
                        </a>
                        {siteProfile.whatsapp.available && siteProfile.whatsapp.href ? (
                            <a
                                href={siteProfile.whatsapp.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 bg-white text-xs font-['Syne'] font-bold uppercase tracking-[0.08em] px-5 py-3 md:py-4 rounded-full hover:bg-[#ff4d29] active:scale-95 transition-all duration-300 shrink-0 min-h-[48px]"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors block"></span>
                                <span className="text-black group-hover:text-white transition-colors">{siteProfile.whatsapp.label}</span>
                            </a>
                        ) : (
                            <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.12em] text-white/35">
                                {siteProfile.whatsapp.note}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 pt-8 text-white/40 text-[11px] md:text-[13px] font-mono uppercase tracking-[0.05em] md:tracking-[0.1em] text-center md:text-left">
                    <div className="flex items-center gap-1 order-3 md:order-1 mt-2 md:mt-0">
                        <span className="text-[#ff4d29]">©</span>
                        <span>2026 {siteProfile.displayName}®</span>
                    </div>

                    <div className="order-1 md:order-3">
                        Personal portfolio of{" "}
                        <span className="text-white font-bold font-['Syne'] whitespace-nowrap">{siteProfile.name}</span>
                    </div>
                </div>
            </div>

            {/* ─── Footer Bottom Marquee ─── */}
            <div className="w-full bg-[#ff4d29] overflow-hidden select-none" aria-hidden="true">
                <div
                    className="flex items-center whitespace-nowrap min-w-max py-8"
                    style={{ animation: "footer-marquee 32s linear infinite" }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="flex items-center gap-[3vw] font-['Syne'] font-black uppercase text-white text-[6vw] leading-none tracking-[-0.03em] pr-[4vw]">
                            {siteProfile.displayName}
                            <StarSVG />
                            VISUAL WORK
                            <StarSVG />
                            {siteProfile.displayName}
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
