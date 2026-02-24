import type { Route } from "./+types/contact";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FooterSection from "components/FooterSection";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact | Kilany" },
        { name: "description", content: "Contact Kilany - Graphic Designer" },
    ];
}

export default function Contact() {
    useEffect(() => {
        // Handled by root transition
    }, []);

    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1.15, 1]); // Zoom out effect

    return (
        <div className="relative bg-[#050505] min-h-screen">

            {/* 1. Hero Cluster: Sticky (Hero) */}
            <motion.div
                style={{ opacity: useTransform(scrollY, [400, 1000], [1, 0]) }}
                className="sticky top-0 z-0 w-full flex flex-col items-center justify-start min-h-screen"
            >
                <section className="relative w-full h-[100dvh] bg-[#050505] overflow-hidden flex flex-col items-center justify-center px-6 md:px-12">
                    {/* BACKGROUND IMAGE & OVERLAY */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className="relative w-full h-full">
                            <motion.img
                                style={{ scale }}
                                src="/images/1 v2.jpg"
                                alt="Contact Hero"
                                className="w-full h-full object-cover object-[center_30%]"
                            />
                            <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 to-transparent" />
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Big Editorial Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[20vw] md:text-[15vw] font-black uppercase text-white leading-none tracking-tighter text-center"
                        >
                            Contact
                        </motion.h1>

                        {/* Coming Soon Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 text-white/50 text-sm md:text-base uppercase tracking-[0.3em] font-medium"
                        >
                            Coming Soon
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-12 w-24 h-[2px] bg-white/20 origin-center"
                        />
                    </div>
                </section>
            </motion.div>

            {/* Rest of the Site: Rising Cover Layer */}
            <div className="relative z-20 bg-[#050505] mt-[50vh]">
                <FooterSection />
            </div>
        </div>
    );
}
