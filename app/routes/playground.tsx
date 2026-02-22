import type { Route } from "./+types/playground";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Playground | Kilany" },
        { name: "description", content: "Playground by Kilany - Experiments & Fun" },
    ];
}

export default function Playground() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            id="playground-page"
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 md:px-12"
        >
            {/* Big Editorial Title */}
            <motion.h1
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-[20vw] md:text-[12vw] font-black uppercase text-white leading-none tracking-tighter text-center"
            >
                Playground
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
        </section>
    );
}
