import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DEFAULT_CONFIG } from "lib/siteConfig";

export default function Hero({ content }: { content?: any }) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1.15, 1]);

    // Use passed content (from section config) or fall back to static defaults
    const heroImage = content?.image || DEFAULT_CONFIG.images.heroImage;
    const headline = content?.headline || DEFAULT_CONFIG.content.heroHeadline;
    const description = content?.description || DEFAULT_CONFIG.content.heroDescription;
    const tags = content?.tags || DEFAULT_CONFIG.content.heroExpertiseTags;

    // Split headline at first period for the two-line display
    const dotIdx = headline.indexOf('.');
    const line1 = dotIdx !== -1 ? headline.slice(0, dotIdx) : headline;
    const line2 = dotIdx !== -1 ? headline.slice(dotIdx + 1).trim() : '';

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden text-white flex flex-col justify-end px-[4%] md:px-[6%] lg:px-[8%] pb-[clamp(60px,8vh,140px)] transform-gpu"
            style={{
                backgroundColor: 'var(--site-page-bg, #050505)',
                borderBottom: '1px solid var(--site-border, rgba(255,255,255,0.05))',
            }}
        >
            {/* ── Background Image ─────────────────────────────────────────── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="relative w-full h-full">
                    <motion.img
                        key={heroImage}
                        style={{ scale }}
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* film grain overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                </div>
            </div>

            {/* ── Bottom Content Grid ───────────────────────────────────────── */}
            <div className="relative z-10 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-4 md:mb-0">

                {/* LEFT: Description + Tags */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-start gap-6 md:gap-8 order-2 md:order-1"
                >
                    <p
                        className="max-w-md text-base md:text-xl font-medium leading-[1.4] tracking-tight"
                        style={{ color: 'var(--site-text-primary, rgba(255,255,255,0.9))' }}
                    >
                        {description}
                    </p>

                    <div className="flex flex-col gap-3 md:gap-4 w-full mt-2">
                        <span
                            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]"
                            style={{ color: 'var(--site-text-muted, rgba(255,255,255,0.4))' }}
                        >
                            CORE EXPERTISE:
                        </span>
                        <div
                            className="flex flex-wrap items-center gap-2 md:gap-3 text-[10px] md:text-sm font-['Syne'] font-bold uppercase tracking-[0.05em] mix-blend-difference"
                            style={{ color: 'var(--site-text-primary, #fff)' }}
                        >
                            {tags.map((tag: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-3 md:px-4 py-1 md:py-1.5 rounded-full transition-colors cursor-default"
                                    style={{
                                        border: '1px solid var(--site-button-border, rgba(255,255,255,0.2))',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Headline */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-start md:items-end text-left md:text-right gap-2 sm:gap-4 lg:gap-8 order-1 md:order-2 h-full justify-end pb-[2vh] md:pb-[15vh] lg:pb-[20vh]"
                >
                    <h1
                        className="font-['Syne'] font-extrabold uppercase text-[clamp(2.5rem,11.5vw,7.5rem)] lg:text-[clamp(4.5rem,7.5vw,7.5rem)] leading-[0.85] tracking-[-0.04em] flex flex-col items-start md:items-end text-left md:text-right w-full overflow-hidden"
                        style={{ color: 'var(--site-text-primary, #ffffff)' }}
                    >
                        <span className="block drop-shadow-lg whitespace-nowrap">{line1}{!line2 ? '.' : ''}</span>
                        {line2 && <span className="block drop-shadow-lg whitespace-nowrap">{line2}.</span>}
                    </h1>
                </motion.div>

            </div>
        </section>
    );
}
