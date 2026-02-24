import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
    useMotionValue,
    useSpring,
    useInView,
    animate,
    AnimatePresence
} from 'framer-motion';
import Stats from "components/Pages/Stats";
import FAQ from "components/Pages/FAQ";
import FinalCTA from "components/Pages/FinalCTA";
import Contact from "components/Pages/Contact";
import BrandsMarquee from "components/BrandsMarquee";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — Locked to KILANY Design Constitution
// ─────────────────────────────────────────────────────────────────────────────
const ACCENT = '#ff4d29';
const PX = 'px-[4%] md:px-[6%] lg:px-[8%]';
const SECTION_PY = 'py-[60px] md:py-[100px] lg:py-[140px]';

// Typography class helpers
const FONT_HEADLINE = "font-['Mona_Sans','Syne',sans-serif] font-black text-white uppercase leading-[0.88] tracking-[-0.04em]";
const FONT_SUB = "font-['Mona_Sans','Syne',sans-serif] font-bold text-white uppercase tracking-[0.1em]";
const FONT_BODY = "font-['Mona_Sans','Syne',sans-serif] font-medium";
const FONT_LABEL = "font-['Mona_Sans','Syne',sans-serif] font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs";

// ─────────────────────────────────────────────────────────────────────────────
// ArrowUpRight SVG — reusable diagonal slide arrow
// ─────────────────────────────────────────────────────────────────────────────
function ArrowUpRight({ className = '' }: { className?: string }) {
    return (
        <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={className}
        >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION LABEL — accent dot + uppercase label
// ─────────────────────────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
        >
            <span className="w-[6px] h-[6px] rounded-[2px] shrink-0" style={{ background: ACCENT }} />
            <span className={`${FONT_LABEL} text-white/40`}>{text}</span>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PILL BUTTON — 999px radius with diagonal arrow slide animation
// ─────────────────────────────────────────────────────────────────────────────
function PillButton({ to, label, wide = false }: { to: string; label: string; wide?: boolean }) {
    return (
        <Link
            to={to}
            className={`relative inline-flex items-center justify-center gap-4 ${wide ? 'px-16 md:px-24 py-6 md:py-7' : 'px-10 md:px-14 py-5 md:py-6'} bg-transparent border border-white/20 text-white rounded-full overflow-hidden group hover:border-white/100 active:scale-95 transition-all duration-500 transform-gpu`}
        >
            {/* White fill on hover */}
            <div
                className="absolute inset-0 w-full h-full scale-y-0 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 rounded-full"
                style={{ background: ACCENT }}
            />
            {/* Label */}
            <span className={`relative z-10 flex overflow-hidden ${FONT_SUB} text-sm md:text-base tracking-[0.12em]`}>
                {label.split('').map((char, i) => (
                    <span key={i} className="relative inline-block leading-none">
                        <span
                            className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                            style={{ transitionDelay: `${i * 6}ms` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                        <span
                            className="absolute top-0 left-0 block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0"
                            style={{ transitionDelay: `${i * 6}ms` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    </span>
                ))}
            </span>
            {/* Arrow — diagonal slide */}
            <span className="relative z-10 overflow-hidden w-5 h-5 flex items-center justify-center shrink-0">
                <ArrowUpRight className="absolute m-auto inset-0 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-hover:-translate-y-full" />
                <ArrowUpRight className="absolute m-auto inset-0 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
        </Link>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL ICONS
// ─────────────────────────────────────────────────────────────────────────────
const SocialCircle = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="w-10 h-10 md:w-11 md:h-11 bg-[#161616] border border-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:bg-[#202020] transition-all duration-300"
    >
        {children}
    </a>
);

// ─────────────────────────────────────────────────────────────────────────────
// VERTICAL MARQUEE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const VerticalMarquee = () => {
    return (
        <div className="h-[20px] overflow-hidden relative flex flex-col justify-start items-start w-[115px] md:w-[180px]">
            <motion.div
                animate={{ y: ['0%', '-80%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                }}
                className="flex flex-col"
            >
                {/* 5 items = 4 real + 1 clone for loop */}
                {["Brand Strategy", "Website Design", "Visual Identity", "Motion Design", "Brand Strategy"].map((text, i) => (
                    <div key={i} className="h-[20px] flex items-center">
                        <span className={`${FONT_LABEL} text-white/50 tracking-[0.1em] text-[10px] md:text-xs uppercase whitespace-nowrap`}>
                            {text}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — THE IDENTITY HERO (HTML Template Match)
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection({ scrollY }: { scrollY: any }) {
    const scale = useTransform(scrollY, [0, 1000], [1.15, 1]); // Zoom out effect

    return (
        <section className="relative w-full h-[100dvh] bg-[#050505] overflow-hidden">

            {/* BACKGROUND IMAGE & OVERLAY */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="relative w-full h-full">
                    {/* The user's image */}
                    <motion.img
                        style={{ scale }}
                        src="/images/1 v2.jpg"
                        alt="Ahmed Elkilany"
                        className="w-full h-full object-cover object-[center_30%]"
                    />
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 to-transparent" />
                </div>
            </div>

            {/* MAIN FULL-SCREEN LAYOUT */}
            <div className="relative z-10 w-full h-full flex flex-col">

                {/* TOP/CENTER CONTENT */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full h-full pt-[2vh] md:pt-[5vh]">

                    {/* Header Icon */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6 md:mb-8 text-white/80 text-xl tracking-widest origin-center flex justify-center"
                    >
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                            className="inline-block"
                        >
                            ✲
                        </motion.span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="font-['Mona_Sans','Syne',sans-serif] font-bold uppercase text-[#f4f4f4] text-[clamp(4.5rem,14vw,14rem)] leading-[0.85] tracking-[-0.03em] mb-8 md:mb-12"
                    >
                        ABOUT ME
                    </motion.h1>

                    {/* About Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[320px] md:max-w-xl mx-auto"
                    >
                        <p className="font-['Mona_Sans',sans-serif] tracking-wide text-white/70 text-sm md:text-[17px] font-medium leading-[1.6]">
                            We build brand systems that express identity with confidence and consistency — helping businesses connect with their audience in a meaningful and memorable way.
                        </p>
                    </motion.div>
                </div>

                {/* BOTTOM COMPONENT LAYOUT GRID */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full absolute bottom-0 left-0 pb-8 md:pb-12 ${PX}`}
                >
                    <div className="w-full flex flex-wrap md:grid md:grid-cols-3 items-end justify-between gap-y-6 md:gap-y-0">

                        {/* LEFT: Vertical Service Marquee */}
                        <div className="flex justify-start items-end order-1 md:order-1 w-1/2 md:w-auto pb-2 md:pb-2">
                            <VerticalMarquee />
                        </div>

                        {/* CENTER: Social Media Grid */}
                        <div className="flex justify-center items-end gap-2 md:gap-4 order-3 md:order-2 w-full md:w-auto pb-0 md:pb-1 mt-4 md:mt-0">
                            <SocialCircle href="#">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" /></svg>
                            </SocialCircle>
                            <SocialCircle href="#">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" /></svg>
                            </SocialCircle>
                            <SocialCircle href="#">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.44262 5.34998C8.08197 5.34998 8.67213 5.39945 9.21311 5.54786C9.7541 5.6468 10.1967 5.84468 10.5902 6.09203C10.9836 6.33938 11.2787 6.68566 11.4754 7.13089C11.6721 7.57612 11.7705 8.12029 11.7705 8.71393C11.7705 9.40651 11.623 10.0002 11.2787 10.4454C10.9836 10.8906 10.4918 11.2864 9.90164 11.5832C10.7377 11.8305 11.377 12.2758 11.7705 12.8694C12.1639 13.463 12.4098 14.2051 12.4098 15.0461C12.4098 15.7387 12.2623 16.3323 12.0164 16.827C11.7705 17.3217 11.377 17.7669 10.9344 18.0638C10.4918 18.3606 9.95082 18.6079 9.36066 18.7563C8.77049 18.9047 8.18033 19.0037 7.59016 19.0037H1V5.34998H7.44262ZM7.04918 10.8906C7.59016 10.8906 8.03279 10.7422 8.37705 10.4949C8.72131 10.2475 8.86885 9.80227 8.86885 9.2581C8.86885 8.96128 8.81967 8.66446 8.72131 8.46658C8.62295 8.2687 8.47541 8.12029 8.27869 7.97188C8.08197 7.87294 7.88525 7.774 7.63934 7.72453C7.39344 7.67506 7.14754 7.67506 6.85246 7.67506H4V10.8906H7.04918ZM7.19672 16.7281C7.4918 16.7281 7.78689 16.6786 8.03279 16.6291C8.27869 16.5797 8.52459 16.4807 8.72131 16.3323C8.91803 16.1839 9.06557 16.0355 9.21311 15.7881C9.31148 15.5408 9.40984 15.244 9.40984 14.8977C9.40984 14.2051 9.21312 13.7104 8.81967 13.3641C8.42623 13.0673 7.88525 12.9189 7.2459 12.9189H4V16.7281H7.19672ZM16.6885 16.6786C17.082 17.0744 17.6721 17.2722 18.459 17.2722C19 17.2722 19.4918 17.1238 19.8852 16.8765C20.2787 16.5797 20.5246 16.2828 20.623 15.986H23.0328C22.6393 17.1733 22.0492 18.0143 21.2623 18.5585C20.4754 19.0532 19.541 19.35 18.4098 19.35C17.6229 19.35 16.9344 19.2016 16.2951 18.9542C15.6557 18.7069 15.1639 18.3606 14.7213 17.8659C14.2787 17.4206 13.9344 16.8765 13.7377 16.2334C13.4918 15.5903 13.3934 14.8977 13.3934 14.1062C13.3934 13.3641 13.4918 12.6715 13.7377 12.0284C13.9836 11.3853 14.3279 10.8411 14.7705 10.3464C15.2131 9.90121 15.7541 9.50545 16.3443 9.2581C16.9836 9.01075 17.6229 8.86234 18.4098 8.86234C19.2459 8.86234 19.9836 9.01075 20.623 9.35704C21.2623 9.70333 21.7541 10.0991 22.1475 10.6927C22.541 11.2369 22.8361 11.88 23.0328 12.5726C23.1311 13.2652 23.1803 13.9577 23.1311 14.7493H16C16 15.5408 16.2951 16.2828 16.6885 16.6786ZM19.7869 11.4843C19.4426 11.138 18.9016 10.9401 18.2623 10.9401C17.8197 10.9401 17.4754 11.039 17.1803 11.1874C16.8852 11.3358 16.6885 11.5337 16.4918 11.7316C16.2951 11.9295 16.1967 12.1768 16.1475 12.4242C16.0984 12.6715 16.0492 12.8694 16.0492 13.0673H20.4754C20.3771 12.3252 20.1311 11.8305 19.7869 11.4843ZM15.459 6.2899H20.9672V7.62559H15.459V6.2899Z" /></svg>
                            </SocialCircle>
                            <SocialCircle href="#">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47939 2 2 6.47939 2 12C2 17.5206 6.47939 22 12 22C17.5098 22 22 17.5206 22 12C22 6.47939 17.5098 2 12 2ZM18.6052 6.60954C19.7983 8.06291 20.5141 9.91756 20.5358 11.9241C20.2538 11.8699 17.4338 11.295 14.5922 11.6529C14.5271 11.5119 14.4729 11.3601 14.4078 11.2083C14.2343 10.7961 14.0391 10.3731 13.8438 9.97181C16.9891 8.692 18.4208 6.84816 18.6052 6.60954ZM12 3.47506C14.1692 3.47506 16.154 4.28851 17.6616 5.62256C17.5098 5.83948 16.2191 7.56399 13.1822 8.70281C11.7831 6.13232 10.2321 4.0282 9.9935 3.70282C10.6334 3.55097 11.3059 3.47506 12 3.47506ZM8.36662 4.27766C8.59437 4.58134 10.1128 6.69631 11.5336 9.21256C7.5423 10.2755 4.01736 10.2538 3.63774 10.2538C4.19089 7.60738 5.98047 5.40564 8.36662 4.27766ZM3.45336 12.0109C3.45336 11.9241 3.45336 11.8373 3.45336 11.7506C3.82212 11.7614 7.96529 11.8156 12.2277 10.5358C12.4773 11.013 12.705 11.5011 12.9219 11.9891C12.8134 12.0217 12.6941 12.0542 12.5857 12.0868C8.18221 13.5076 5.83948 17.3904 5.64425 17.7158C4.2885 16.2083 3.45336 14.2017 3.45336 12.0109ZM12 20.5466C10.026 20.5466 8.20391 19.8742 6.76139 18.7462C6.91323 18.4317 8.64856 15.0911 13.4642 13.41C13.4859 13.3991 13.4967 13.3991 13.5184 13.3883C14.7223 16.5011 15.2104 19.1149 15.3406 19.8633C14.3102 20.308 13.1822 20.5466 12 20.5466ZM16.7614 19.0824C16.6746 18.5618 16.2191 16.0672 15.1019 12.9978C17.7809 12.5748 20.1236 13.269 20.4165 13.3666C20.0478 15.7419 18.6811 17.7917 16.7614 19.0824Z" /></svg>
                            </SocialCircle>
                        </div>

                        {/* RIGHT: Rotating Circular Text */}
                        <div className="flex justify-end items-end order-2 md:order-3 w-1/2 md:w-auto pb-0 md:pb-0">
                            <div className="w-[90px] h-[90px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] mr-0 md:-mr-4">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                    className="w-full h-full text-white/80"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                        <path id="circularTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                        <text className="text-[11.5px] uppercase font-['Syne'] tracking-[2px] font-bold" fill="currentColor">
                                            <textPath href="#circularTextPath" startOffset="0%">
                                                - DESIGN THINKING - DESIGN THINKING
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — WHO WE ARE (Manifesto Match)
// Scroll-triggered word-by-word paint reveal mimicking Home Page About Section
// ─────────────────────────────────────────────────────────────────────────────
const MANIFESTO_HEADING = "OUR JOURNEY BEGAN WITH A SIMPLE BELIEF: STRONG BRANDS ARE BUILT THROUGH CLARITY, INTENTION, AND THOUGHTFUL DESIGN.".split(" ");

function ManifestoWord({ children, range, progress }: { children: React.ReactNode, range: [number, number], progress: MotionValue<number> }) {
    const opacity = useTransform(progress, range, [0.2, 1]);

    return (
        <span className="relative inline-block mb-[0.1em]">
            <span className="absolute opacity-20 text-white select-none">{children}</span>
            <motion.span style={{ opacity }} className="text-white select-none inline-block">
                {children}
            </motion.span>
        </span>
    );
}

function ManifestoSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "end 0.9"]
    });

    return (
        <section ref={containerRef} className="relative w-full min-h-[150vh] bg-[#050505]">
            {/* Sticky container to lock the view while scrolling through */}
            <div className="sticky top-[10%] md:top-[15%] w-full py-[80px] md:py-[140px] px-[4%] md:px-[6%] lg:px-[8%] flex flex-col md:flex-row items-start justify-center gap-8 xl:gap-16">

                {/* 1. Left Column: Label (Now Empty to maintain grid alignment if needed, or we can just keep the space) */}
                <div className="hidden lg:flex w-[200px] xl:w-[220px] shrink-0 mt-[12px] justify-start xl:justify-end xl:pr-6">
                </div>

                {/* 2. Right Column: Main Content Area */}
                <div className="flex-1 w-full max-w-[1200px] flex flex-col">

                    {/* Top Label: Rotating Asterisk + Looping Marquee */}
                    <div className="flex items-center gap-4 mb-6 md:mb-10 text-[#777] text-xs font-mono uppercase tracking-[0.1em]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                                className="inline-block text-xl md:text-2xl mt-[-2px]"
                            >
                                ✲
                            </motion.span>
                        </svg>
                        <div className="flex overflow-hidden whitespace-nowrap opacity-80 w-[200px] md:w-[300px]" style={{ maskImage: 'linear-gradient(to right, black 60%, transparent)' }}>
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                className="flex"
                            >
                                <span className="mr-4">WHO WE ARE — WHO WE ARE — WHO WE ARE — </span>
                                <span className="mr-4">WHO WE ARE — WHO WE ARE — WHO WE ARE — </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Header Area with Scrolling Reveal Text */}
                    <h2 className="font-['Syne'] text-left flex flex-wrap items-center content-start uppercase">

                        {/* Animated Words */}
                        {MANIFESTO_HEADING.map((word, i) => {
                            const start = i / MANIFESTO_HEADING.length;
                            const end = start + (1 / MANIFESTO_HEADING.length);
                            const isLast = i === MANIFESTO_HEADING.length - 1;
                            return (
                                <ManifestoWord key={i} range={[start, end]} progress={scrollYProgress}>
                                    <span className="text-[36px] md:text-[52px] lg:text-[72px] font-bold tracking-[-0.02em] leading-[1.1]">
                                        {word}{!isLast && '\u00A0'}
                                    </span>
                                </ManifestoWord>
                            );
                        })}
                    </h2>

                    {/* Sub-Texts & Button Grid */}
                    <div className="mt-12 md:mt-20 flex flex-col gap-10 md:gap-14 w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">

                        {/* Top Texts Container (Stacked) */}
                        <div className="flex flex-col gap-6 md:gap-8 w-full">
                            <p className="text-white/60 text-base md:text-xl lg:text-2xl font-['Syne'] leading-[1.6] md:leading-[1.7] font-medium max-w-3xl">
                                What began as a passion for meaningful visual identities evolved into a strategic and consistent brand process.
                            </p>
                            <p className="text-white/60 text-base md:text-xl lg:text-2xl font-['Syne'] leading-[1.6] md:leading-[1.7] font-medium max-w-3xl">
                                Over time, we combined creativity and method to help brands communicate with clarity and confidence.
                            </p>
                        </div>

                        {/* Buttons Container */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 mt-2 md:mt-4 w-full">

                            {/* Button 1: Solid Pill (Download CV) */}
                            <a href="#" download="CV" className="relative inline-flex items-center justify-center gap-3 md:gap-4 px-8 py-4 md:px-12 md:py-5 bg-white text-black rounded-full overflow-hidden group hover:scale-105 active:scale-95 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] shrink-0 w-max transform-gpu">
                                <div className="absolute inset-0 w-full h-full bg-[#ff4d29] scale-y-0 origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 rounded-full"></div>
                                <span className="relative z-10 flex overflow-hidden font-['Syne'] font-bold text-sm md:text-lg tracking-[0.05em] uppercase">
                                    {"DOWNLOAD CV".split('').map((char, i) => (
                                        <span key={i} className="relative inline-block leading-none">
                                            <span className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-black" style={{ transitionDelay: `${i * 10}ms` }}>
                                                {char === ' ' ? '\u00A0' : char}
                                            </span>
                                            <span className="absolute top-0 left-0 block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-white" style={{ transitionDelay: `${i * 10}ms` }}>
                                                {char === ' ' ? '\u00A0' : char}
                                            </span>
                                        </span>
                                    ))}
                                </span>

                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-black group-hover:text-white group-hover:rotate-180 shrink-0">
                                    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
                                </svg>
                            </a>

                            {/* Button 2: Underline Link (Contact Me) */}
                            <a href="/contact" className="inline-flex items-center gap-2 md:gap-3 text-sm md:text-lg font-['Syne'] font-bold uppercase tracking-[0.05em] group shrink-0 w-max">
                                <span className="relative pb-1">
                                    <span className="relative flex overflow-hidden">
                                        {"GET IN TOUCH".split('').map((char, i) => (
                                            <span key={i} className="relative inline-block leading-none">
                                                <span
                                                    className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full text-white"
                                                    style={{ transitionDelay: `${i * 15}ms` }}
                                                >
                                                    {char === ' ' ? '\u00A0' : char}
                                                </span>
                                                <span
                                                    className="absolute top-0 left-0 block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 text-[#ff4d29]"
                                                    style={{ transitionDelay: `${i * 15}ms` }}
                                                >
                                                    {char === ' ' ? '\u00A0' : char}
                                                </span>
                                            </span>
                                        ))}
                                    </span>

                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30">
                                        <span className="absolute inset-0 bg-[#ff4d29] origin-left scale-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"></span>
                                    </span>
                                </span>

                                <span className="relative overflow-hidden w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full absolute m-auto inset-0 text-white transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full absolute m-auto inset-0 text-[#ff4d29] transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Removed inline AnimatedSlideUpStat and AboutStatsSection in favor of shared Stats component

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — PROFESSIONAL TIMELINE
// Year | Company | Role — with 1px dividers
// ─────────────────────────────────────────────────────────────────────────────
const TIMELINE = [
    {
        years: '2022 — Present',
        company: 'Hue Digital Marketing',
        role: 'Senior Graphic Designer',
        note: 'Remote - Saudi Arabia',
        tasks: [
            "Collaborated with clients across real estate, health, and digital sectors to deliver targeted and impactful visual content.",
            "Produced complete campaigns, social visuals, and branded deliverables, leveraging AI-enhanced workflows for speed and clarity."
        ]
    },
    {
        years: '2021 — Present',
        company: 'Freelance',
        role: 'Graphic Designer',
        note: 'Remote - Egypt & GCC',
        tasks: [
            "Led branding, social media, and print design for various clients across different industries.",
            "Built tailored design systems focused on speed, clarity, strategy, and market relevance."
        ]
    },
    {
        years: '2020 — 2021',
        company: 'Trendway',
        role: 'Graphic Designer',
        note: 'Banha, Egypt',
        tasks: [
            "Created digital and print marketing materials for Egyptian brands."
        ]
    },
    {
        years: '2019 — 2020',
        company: 'Onclick',
        role: 'Graphic Designer',
        note: 'Zagazig, Egypt',
        tasks: [
            "Designed brand visuals, social campaigns, and offline materials for local businesses."
        ]
    },
];

function TimelineCard({ item, index, scrollYProgress }: { item: typeof TIMELINE[0]; index: number; scrollYProgress: MotionValue<number> }) {
    const isRight = index % 2 === 0;
    const cardIndex = index;

    // Map scroll progress to card's vertical movement
    // Card starts from the bottom off-screen and comes up to its sticky position
    const startScroll = cardIndex * (1 / TIMELINE.length) * 0.7; // Start slightly earlier
    const endScroll = startScroll + (1 / TIMELINE.length);

    const yOffset = useTransform(
        scrollYProgress,
        [startScroll, endScroll],
        ["100vh", `${cardIndex * 18}vh`]
    );

    // Slide in from sides
    const xOffset = useTransform(
        scrollYProgress,
        [startScroll, endScroll],
        [isRight ? "100%" : "-100%", "0%"]
    );

    const opacity = useTransform(
        scrollYProgress,
        [startScroll, startScroll + 0.1],
        [0, 1]
    );

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            key={index}
            style={{ y: yOffset, x: xOffset, opacity }}
            className={`absolute top-0 w-full md:w-[60%] lg:w-[50%] z-[${10 + index}] ${isRight ? 'right-0' : 'left-0'}`}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex flex-col relative group bg-[#080808]/60 backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.15] px-6 md:px-10 py-8 md:py-10 cursor-pointer transition-colors duration-500 rounded-lg shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
            >
                {/* Top row */}
                <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-['Syne'] text-white text-[1.4rem] md:text-[2rem] font-medium tracking-tight leading-none leading-[1.1]">
                            {item.company}
                        </h3>
                        <p className="text-white/40 text-sm md:text-base font-light">
                            {item.role}, {item.note.split('-').pop()?.trim() || item.note}
                        </p>
                    </div>
                    <div className="text-white/70 text-sm md:text-base font-mono shrink-0 ml-4 tracking-widest uppercase hidden sm:block">
                        {item.years}
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-end mt-auto">
                    <div className="text-white/30 font-mono text-xs md:text-sm tracking-widest">
                        /0{index + 1}
                    </div>

                    {/* Mobile Date Fallback */}
                    <div className="sm:hidden text-white/40 font-mono text-xs tracking-widest absolute bottom-8 left-1/2 -translate-x-1/2">
                        {item.years}
                    </div>

                    <div className="text-white/40 group-hover:text-white transition-colors duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                </div>

                {/* Tasks Reveal */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="border-t border-white/[0.08] mt-8 pt-6 flex flex-col gap-3">
                                {item.tasks.map((task, i) => (
                                    <div key={i} className="flex items-start gap-4 text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                                        <span className="text-[#ff4d29] shrink-0 mt-[2px] font-bold">+</span>
                                        <p>{task}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

function TimelineSection() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={targetRef} className={`relative bg-[#050505] border-b border-white/5 pb-[20vh]`} style={{ height: `${(TIMELINE.length + 1) * 100}vh` }}>
            <div className={`sticky top-0 h-screen overflow-hidden flex flex-col justify-center ${PX}`}>

                {/* Fixed Background Content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full z-0 pointer-events-none mt-[-5%] md:mt-0">

                    {/* Centered Top Label: Rotating Asterisk + Looping Marquee */}
                    <div className="flex items-center gap-4 mb-4 md:mb-6 text-[#777] text-xs font-mono uppercase tracking-[0.1em] opacity-80">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                                className="inline-block text-xl md:text-2xl mt-[-2px]"
                            >
                                ✲
                            </motion.span>
                        </svg>
                        <div className="flex overflow-hidden whitespace-nowrap w-[200px] md:w-[300px]" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                className="flex text-left"
                            >
                                <span className="mr-4">WORK EXPERIENCE — WORK EXPERIENCE — WORK EXPERIENCE — </span>
                                <span className="mr-4">WORK EXPERIENCE — WORK EXPERIENCE — WORK EXPERIENCE — </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Fixed Title that stays in the center background */}
                    <h2 className="font-['Syne'] font-extrabold text-[clamp(2.5rem,10vw,12rem)] md:text-[clamp(4.5rem,10vw,12rem)] leading-[0.85] tracking-[-0.04em] uppercase opacity-40">
                        <span className="block">WORK</span>
                        <span className="block">EXPERIENCE</span>
                    </h2>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative w-full max-w-[1200px] mx-auto h-[80vh]">
                    {TIMELINE.map((item, index) => (
                        <TimelineCard key={index} item={item} index={index} scrollYProgress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3.5 — PARALLAX IMAGE BREAK
// ─────────────────────────────────────────────────────────────────────────────
// Helper to animate words from gray to white based on scroll progress
function ParallaxWord({ children, range, progress }: { children: React.ReactNode, range: [number, number], progress: MotionValue<number> }) {
    // Map the scroll progress over the character's range to a bright white color, otherwise keep it grey #808080
    const color = useTransform(progress, range, ["#808080", "#ffffff"]);
    return (
        <motion.span style={{ color }} className="inline-block mr-[0.25em] mb-[0.1em] drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            {children}
        </motion.span>
    );
}

function ParallaxImageBreak() {
    const containerRef = useRef<HTMLElement>(null);

    // Track the scroll progress based on the layout position of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Capture from when the top enters the bottom of the viewport to when the sticky section is done
        offset: ["start end", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, // Slightly stiffer for better responsiveness
        damping: 30,    // Smooth friction
        restDelta: 0.001
    });

    // Keep in mind with offset ["start end", "end end"] of a 250vh section:
    // 0 = section enters viewport, 0.4 = hits the top and sticks, 1.0 = finishes 250vh scroll
    // Start shrinking slightly as we enter, then accelerate while sticky to 1.0
    const scale = useTransform(smoothProgress,
        [0, 0.4, 0.7, 1],
        [1.6, 1.45, 1.1, 1]
    );

    // Words to animate sequentially
    const wordsLine1 = "I CREATE VISUALS".split(" ");
    const wordsLine2 = "THAT LET PEOPLE FEEL".split(" ");
    const wordsLine3 = "WHAT BRANDS ARE".split(" ");
    const wordsLine4 = "TRYING TO SAY.".split(" ");

    const totalWords = wordsLine1.length + wordsLine2.length + wordsLine3.length + wordsLine4.length;

    // Use a wider animation window so it completes over the scrolling duration
    // Ends exactly at 0.5 so the user gets to see the fully white text before the next section slides over
    const textStart = 0.1;
    const textEnd = 0.5;
    const step = (textEnd - textStart) / totalWords;

    // Helper to calculate ranges sequentially
    let wordIndex = 0;
    const getRange = (): [number, number] => {
        const start = textStart + wordIndex * step;
        const end = start + step;
        wordIndex++;
        return [start, end];
    };

    return (
        <section
            ref={containerRef}
            // Give extra height to allow scrolling while the content stays sticky (300vh)
            // The mb-[-100vh] allows the next section to smoothly slide over the last 100vh of space
            className="relative w-full h-[300vh] mb-[-100vh] bg-[#050505] z-0"
        >
            <div className="sticky top-0 w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center">
                <motion.div
                    className="absolute inset-0 w-full h-full will-change-transform origin-center"
                    style={{ scale }}
                >
                    <img
                        src="/images/freepik recreate.png"
                        alt="Ahmed Kilany"
                        className="w-full h-[100vh] object-cover object-center"
                    />
                </motion.div>

                {/* Dark Fade Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

                {/* Slogan Text Container - Centered */}
                <div className="relative z-20 px-[4%] text-center pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        {/* Rotating Star replaced the label wrapper */}
                        <div className="flex items-center justify-center mb-6 md:mb-10 text-white/80 text-[2rem] md:text-[2.5rem] tracking-widest origin-center">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                                className="inline-block"
                            >
                                ✲
                            </motion.span>
                        </div>

                        {/* Massive Bold Slogan mimicking the screenshot text style, with scroll reveal */}
                        <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,6.5vw,7.5rem)] md:text-[clamp(3.5rem,6vw,7.5rem)] uppercase leading-[0.85] tracking-[-0.03em] flex flex-col items-center text-center w-full px-2 md:px-4 text-[#808080]">
                            <span className="block w-full">
                                {wordsLine1.map((word, i) => (
                                    <ParallaxWord key={`l1-${i}`} progress={smoothProgress} range={getRange()}>
                                        {word}
                                    </ParallaxWord>
                                ))}
                            </span>
                            <span className="block mt-2 md:mt-4 w-full">
                                {wordsLine2.map((word, i) => (
                                    <ParallaxWord key={`l2-${i}`} progress={smoothProgress} range={getRange()}>
                                        {word}
                                    </ParallaxWord>
                                ))}
                            </span>
                            <span className="block mt-2 md:mt-4 w-full">
                                {wordsLine3.map((word, i) => (
                                    <ParallaxWord key={`l3-${i}`} progress={smoothProgress} range={getRange()}>
                                        {word}
                                    </ParallaxWord>
                                ))}
                            </span>
                            <span className="block mt-2 md:mt-4 w-full">
                                {wordsLine4.map((word, i) => (
                                    <ParallaxWord key={`l4-${i}`} progress={smoothProgress} range={getRange()}>
                                        {word}
                                    </ParallaxWord>
                                ))}
                            </span>
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — THE METHODOLOGY
// 3-column pillars with large bg orange numbers
// ─────────────────────────────────────────────────────────────────────────────
const METHODOLOGY = [
    {
        num: '01',
        title: 'STRATEGY',
        desc: 'Deep research, brand positioning, audience mapping, and intent architecture. Every project begins with an obsessive understanding of the brand\'s purpose and competitive landscape.',
    },
    {
        num: '02',
        title: 'CRAFT',
        desc: 'Visual identity systems, technical typographic precision, color science, and scalable design architecture. The execution is as deliberate as the strategy behind it.',
    },
    {
        num: '03',
        title: 'IMPACT',
        desc: 'Launching visual legacies, motion strategy, and long-term brand evolution. The goal is never just delivery — it\'s designing systems that grow and outlive every trend.',
    },
];

function MethodCard({
    num,
    title,
    desc,
    delay,
}: {
    num: string;
    title: string;
    desc: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative flex flex-col gap-5 pt-12 pb-10 border-l border-white/[0.07] pl-8 group overflow-hidden"
        >
            {/* Large bg number */}
            <span
                className="absolute -top-4 right-4 text-[clamp(6rem,10vw,11rem)] font-black leading-none select-none pointer-events-none transition-all duration-700 group-hover:opacity-30"
                style={{
                    color: ACCENT,
                    opacity: 0.12,
                    fontFamily: "'Mona Sans', 'Syne', sans-serif",
                    fontWeight: 900,
                }}
            >
                {num}
            </span>

            {/* Label row */}
            <div className="flex items-center gap-3">
                <span className={`${FONT_LABEL}`} style={{ color: ACCENT }}>{num}</span>
                <span className="w-8 h-[1px] bg-white/20" />
            </div>

            {/* Title */}
            <h3
                className={`${FONT_HEADLINE} text-[clamp(1.8rem,2.8vw,3rem)] relative z-10 group-hover:translate-x-1 transition-transform duration-500`}
            >
                {title}
            </h3>

            {/* Body */}
            <p className={`${FONT_BODY} text-white/50 text-sm md:text-base leading-relaxed relative z-10 max-w-xs`}>
                {desc}
            </p>
        </motion.div>
    );
}

function MethodologySection() {
    return (
        <section className={`relative w-full bg-[#050505] ${PX} ${SECTION_PY} border-b border-white/5`}>
            <div className="flex flex-col gap-14 md:gap-20">
                {/* Header */}
                <div className="flex flex-col gap-5">
                    <SectionLabel text="The Methodology" />
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className={`${FONT_HEADLINE} text-[clamp(2.5rem,5vw,5.5rem)] max-w-2xl`}
                    >
                        HOW GREAT<br />WORK HAPPENS.
                    </motion.h2>
                </div>

                {/* 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/[0.07]">
                    {METHODOLOGY.map((item, i) => (
                        <MethodCard key={item.num} {...item} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 — EXPERT CAPABILITIES
// 2-column split: sticky title left / services list right
// ─────────────────────────────────────────────────────────────────────────────
const CAPABILITIES = [
    {
        index: '01',
        title: 'Brand Strategy',
        desc: 'Defining the core narrative, positioning, and voice that makes a brand impossible to ignore.',
    },
    {
        index: '02',
        title: 'Digital Architecture',
        desc: 'Building comprehensive visual systems — logos, color, typography — that scale from screen to print.',
    },
    {
        index: '03',
        title: 'Motion Design',
        desc: 'Breathing life into static brands through micro-animations, transitions, and full motion identity.',
    },
    {
        index: '04',
        title: 'UI/UX Systems',
        desc: 'Architecting digital experiences with clarity, hierarchy, and purposeful interaction design.',
    },
    {
        index: '05',
        title: 'Art Direction',
        desc: 'Orchestrating campaigns, key visuals, and editorial pieces that command space and attention.',
    },
];

function CapabilityRow({
    index,
    title,
    desc,
    delay,
    isLast,
}: {
    index: string;
    title: string;
    desc: string;
    delay: number;
    isLast: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className={`group flex flex-col gap-2 py-8 ${!isLast ? 'border-b border-white/[0.07]' : ''} hover:pl-2 transition-all duration-500`}
        >
            <div className="flex items-baseline gap-3">
                <span className={`${FONT_LABEL} shrink-0`} style={{ color: ACCENT }}>
                    {index}
                </span>
                <h3 className={`${FONT_SUB} text-white text-[clamp(1.1rem,2vw,1.8rem)] tracking-[-0.01em] leading-none group-hover:text-white transition-colors duration-300`}>
                    {title}
                </h3>
                <span
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
                    style={{ color: ACCENT }}
                >
                    <ArrowUpRight />
                </span>
            </div>
            <p
                className={`${FONT_BODY} text-white/45 text-sm md:text-[0.93rem] leading-relaxed`}
                style={{ paddingLeft: 'calc(22px + 0.75rem)' }}
            >
                {desc}
            </p>
        </motion.div>
    );
}

function CapabilitiesSection() {
    return (
        <section className={`relative w-full bg-[#050505] ${PX} ${SECTION_PY} border-b border-white/5`}>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-28">
                {/* LEFT — Sticky title */}
                <div className="lg:w-[40%] shrink-0">
                    <div className="mb-8">
                        <SectionLabel text="Expert Capabilities" />
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className={`${FONT_HEADLINE} text-[clamp(3rem,6vw,7rem)] lg:sticky lg:top-[140px]`}
                    >
                        CAPA<br />BILI<br />TIES.
                    </motion.h2>
                </div>

                {/* RIGHT — Service list */}
                <div className="flex-1 border-t border-white/[0.07]">
                    {CAPABILITIES.map((cap, i) => (
                        <CapabilityRow
                            key={cap.index}
                            {...cap}
                            delay={i * 0.07}
                            isLast={i === CAPABILITIES.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7 — THE CLOSING CTA
// "READY TO ARCHITECT YOUR BRAND?" — centered, massive, pill CTA
// ─────────────────────────────────────────────────────────────────────────────
function ClosingCTA() {
    return (
        <section
            className={`relative w-full bg-[#050505] ${PX} ${SECTION_PY} flex flex-col items-center justify-center text-center overflow-hidden`}
        >
            {/* Subtle cinematic background texture */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: "url('/images/bg-card.avif')" }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" style={{ opacity: 0.95 }} />
            </div>

            {/* Large ghosted accent line */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    border: `1px solid ${ACCENT}`,
                    opacity: 0.04,
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-12 md:gap-16">
                <SectionLabel text="Ready to collaborate?" />

                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className={`${FONT_HEADLINE} text-[clamp(2.8rem,7.5vw,9rem)] max-w-5xl`}
                >
                    READY TO<br />
                    ARCHITECT<br />
                    <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>
                        YOUR BRAND?
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                >
                    <PillButton to="/contact" label="LET'S TALK" wide />
                </motion.div>

                {/* Decorative bottom marker */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                    <span className="w-12 h-[1px] bg-white/20" />
                    <span className={`${FONT_LABEL} text-white/20`}>KILANY — 2026</span>
                    <span className="w-12 h-[1px] bg-white/20" />
                </motion.div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT — Wires all 7 sections together
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
    const { scrollY } = useScroll();

    return (
        <div className="relative w-full bg-[#050505]">
            {/* Section 1: Identity Hero (Sticky Reveal) */}
            <motion.div
                style={{ opacity: useTransform(scrollY, [400, 1000], [1, 0]) }}
                className="sticky top-0 z-0 w-full flex flex-col items-center justify-start min-h-screen"
            >
                <HeroSection scrollY={scrollY} />
            </motion.div>

            {/* Sections 2–7: Stack over the hero */}
            <div className="relative z-20 bg-[#050505] mt-[50vh]">
                {/* Section 2: The Manifesto */}
                <ManifestoSection />

                {/* Section 2.5: Animated Stats Counters */}
                <Stats className="-mt-8 md:-mt-16" />

                {/* Section 2.75: Brands Marquee */}
                <div className="w-full bg-[#050505] overflow-hidden">
                    <BrandsMarquee />
                </div>

                {/* Section 3: Professional Timeline */}
                <TimelineSection />

                {/* Section 3.5: Parallax Image Break */}
                <ParallaxImageBreak />

                {/* Sections 4–7: Stack and cover the parallax image break */}
                <div style={{ position: 'relative', zIndex: 10, background: '#050505' }}>
                    {/* 4. Strategic FAQ: Common Objections */}
                    <FAQ />

                    {/* 5. The Closer CTA */}
                    <FinalCTA />

                    {/* 6. Footer / Contact */}
                    <Contact />
                </div>
            </div>
        </div>
    );
}
