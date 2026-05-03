import type { Route } from './+types/contact';
import { motion } from 'framer-motion';
import { ContactForm } from 'components/ContactForm';
import FooterSection from 'components/FooterSection';
import { siteProfile, socialLinks } from 'data/site';

// ─── SEO ──────────────────────────────────────────────────────────────────────

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Work With Ahmed Kilany | Contact' },
        {
            name: 'description',
            content:
                `Ready to shape a brand, campaign, or visual system? Contact ${siteProfile.name}, ${siteProfile.role} based in ${siteProfile.location}.`,
        },
    ];
}

// ─── Animation variants ───────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
});

// ─── Reusable info row ────────────────────────────────────────────────────────

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-1 border-b border-white/5 py-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                {label}
            </span>
            <span className="font-['Syne'] text-white/80 text-base font-medium">
                {children}
            </span>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
    return (
        <div className="relative bg-[#050505] min-h-screen text-white overflow-x-hidden">

            {/* ── SECTION 1 — Page Hero ─────────────────────────────────────────── */}
            <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-[4%] md:px-[8%] pt-[12vh] pb-[8vh] border-b border-white/5 overflow-hidden">

                {/* Subtle radial glow behind headline */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-[600px] h-[600px] rounded-full bg-[#ff4d29]/5 blur-[120px]" />
                </div>

                {/* Section label marquee */}
                <motion.div
                    {...fadeUp(0)}
                    className="flex items-center gap-3 mb-10 text-[#555] text-[10px] font-mono uppercase tracking-[0.2em] overflow-hidden w-full max-w-[280px]"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
                >
                    <motion.div
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 18 }}
                        className="flex whitespace-nowrap"
                    >
                        <span className="mr-6">— LET'S TALK — LET'S TALK — LET'S TALK —</span>
                        <span className="mr-6">— LET'S TALK — LET'S TALK — LET'S TALK —</span>
                    </motion.div>
                </motion.div>

                {/* Rotating asterisk divider */}
                <motion.div {...fadeUp(0.05)} className="mb-8">
                    <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
                        className="inline-block text-[#ff4d29] text-2xl"
                    >
                        ✲
                    </motion.span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,8rem)] leading-[0.88] tracking-[-0.04em] uppercase text-white max-w-5xl"
                >
                    Let's Build Something<br />
                    <span className="text-white/40">Worth Remembering</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    {...fadeUp(0.18)}
                    className="mt-8 text-white/50 text-base md:text-lg font-['Syne'] font-medium leading-relaxed max-w-xl"
                >
                    Tell me about your brand challenge.{' '}
                    <span className="text-white/70">I'll tell you how I'd approach it.</span>
                </motion.p>
            </section>

            {/* ── SECTION 2 — Contact Layout ────────────────────────────────────── */}
            <section className="relative w-full px-[4%] md:px-[6%] lg:px-[8%] py-[60px] md:py-[100px] lg:py-[140px]">
                <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 md:gap-20 lg:gap-24 items-start">

                    {/* ── LEFT: Form ────────────────────────────────────────────────── */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: EASE }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-3">
                                Start a project
                            </p>
                            <h2 className="font-['Syne'] font-extrabold text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.9] tracking-[-0.03em] uppercase text-white">
                                Drop Me a Line
                            </h2>
                        </motion.div>

                        <ContactForm />
                    </div>

                    {/* ── RIGHT: Contact Info ───────────────────────────────────────── */}
                    <motion.aside
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:sticky lg:top-[15vh]"
                    >
                        {/* Label */}
                        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-8">
                            Reach Out
                        </p>

                        {/* Large decorative icon */}
                        <div className="mb-8 text-[4rem] leading-none select-none opacity-20">
                            ✉
                        </div>

                        {/* Info rows */}
                        <div className="flex flex-col">
                            <InfoRow label="Email">
                                <a
                                    href={`mailto:${siteProfile.email}`}
                                    className="text-white hover:text-[#ff4d29] transition-colors duration-300 break-all"
                                >
                                    {siteProfile.email}
                                </a>
                            </InfoRow>

                            <InfoRow label={siteProfile.whatsapp.label}>
                                {siteProfile.whatsapp.available && siteProfile.whatsapp.href ? (
                                    <a
                                        href={siteProfile.whatsapp.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#ff4d29] transition-colors duration-300"
                                    >
                                        Message me on WhatsApp
                                    </a>
                                ) : (
                                    <span className="text-white/35">{siteProfile.whatsapp.note}</span>
                                )}
                            </InfoRow>

                            <InfoRow label="Location">
                                {siteProfile.location}
                            </InfoRow>

                            <InfoRow label="Availability">
                                <span className="flex items-center gap-2">
                                    {/* Live indicator dot */}
                                    <span className="relative flex w-2 h-2 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60" />
                                        <span className="relative inline-flex rounded-full w-2 h-2 bg-[#4ade80]" />
                                    </span>
                                    {siteProfile.availability}
                                </span>
                            </InfoRow>

                            <InfoRow label="Response Time">
                                {siteProfile.responseTime}
                            </InfoRow>
                        </div>

                        {/* Divider */}
                        <div className="mt-10 pt-10 border-t border-white/5">
                            <p className="text-white/30 text-sm font-['Syne'] leading-relaxed">
                                Prefer social? Find me on{' '}
                                {socialLinks.map((link, index) => (
                                    <span key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/60 hover:text-white transition-colors duration-300 underline underline-offset-4"
                                        >
                                            {link.label}
                                        </a>
                                        {index < socialLinks.length - 1 ? ', ' : '.'}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </motion.aside>

                </div>
            </section>

            {/* ── SECTION 3 — CTA Footer Band ───────────────────────────────────── */}
            <section className="relative w-full border-t border-white/5 overflow-hidden">

                {/* Glitch headline */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: EASE }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="w-full px-[4%] md:px-[8%] py-[60px] md:py-[100px] text-center"
                >
                    <h2
                        className="font-['Syne'] font-extrabold text-[clamp(2.5rem,10vw,11rem)] leading-[0.85] tracking-[-0.04em] uppercase text-white select-none"
                        style={{
                            // CSS-only duotone glitch: double-stacked pseudo text via textShadow trick
                            textShadow: [
                                '3px 0 0 rgba(255,77,41,0.6)',
                                '-3px 0 0 rgba(0,200,255,0.4)',
                            ].join(', '),
                        }}
                    >
                        GET IN TOUCH
                    </h2>
                </motion.div>

                {/* Scrolling marquee band */}
                <div className="w-full bg-[#ff4d29] overflow-hidden select-none">
                    <div
                        className="flex items-center whitespace-nowrap min-w-max py-5"
                        style={{ animation: 'contact-marquee 24s linear infinite' }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <span
                                key={i}
                                className="font-['Syne'] font-black uppercase text-white text-[3.5vw] md:text-[2.5vw] leading-none tracking-[-0.02em] mr-[4vw]"
                            >
                                — CONTACT — CONTACT — CONTACT
                            </span>
                        ))}
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
              @keyframes contact-marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `
                    }} />
                </div>
            </section>

            {/* ── Global Footer ─────────────────────────────────────────────────── */}
            <footer className="relative w-full bg-[#050505] text-white pt-[40px] overflow-hidden">
                <FooterSection />
            </footer>

        </div>
    );
}
