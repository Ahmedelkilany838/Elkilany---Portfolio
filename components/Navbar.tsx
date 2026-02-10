import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router";
import WavyText from "./WavyText";
import { ArrowUpRight, X } from "lucide-react";

// Menu items
const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    // Smooth Scroll with Physics (Spring)
    const scrollYBounded = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Scroll Animations
    // Scroll Animations
    const fontSize = useTransform(scrollYBounded, [0, 500], ["15.5vw", "1.75rem"]);
    const opacity = useTransform(scrollYBounded, [0, 300], [0.9, 1]);
    const trademarkOpacity = useTransform(scrollYBounded, [0, 100], [1, 0]);

    // Mix blend mode is tricky with framer motion string interpolation, 
    // usually better to just switch class or use simple opacity crossfade if needed.
    // simpler approach: keep it white/normal always but start with lower opacity if needed.
    // User asked for "Heavy/Solid", so maybe just pure white is best.

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 w-full px-4 md:px-8 py-6 z-[1000] flex items-start justify-between pointer-events-none">

                {/* Logo - Smoothly Shrinks from Hero Title */}
                <div className="pointer-events-auto origin-top-left">
                    <Link to="/">
                        <motion.h1
                            style={{
                                fontSize,
                                opacity
                            }}
                            className="font-black font-['Oswald'] tracking-tighter uppercase text-white whitespace-nowrap leading-[0.8]"
                        >
                            KILANY
                        </motion.h1>
                    </Link>
                </div>

                {/* Right Actions: Talk + Menu (Always Visible) */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    {/* Let's Talk Button */}
                    <Link
                        to="/contact"
                        className="group relative flex items-center gap-2 px-8 py-3 border border-white/5 bg-white/5 backdrop-blur-xl rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_0_15px_rgba(255,255,255,0.02)] overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                        {/* Fill Effect */}
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]"></div>

                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                            Let's Talk
                            <ArrowUpRight className="w-3 h-3 text-white/50 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </span>
                    </Link>

                    {/* Menu Button (3 Lines) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-12 h-12 flex flex-col items-center justify-center gap-[6px] border border-white/5 bg-white/5 backdrop-blur-xl rounded-full shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group transition-all duration-300 ease-out"
                    >
                        <span className="w-5 h-[1.5px] bg-white group-hover:bg-black transition-colors block"></span>
                        <span className="w-5 h-[1.5px] bg-white group-hover:bg-black transition-colors block"></span>
                        <span className="w-5 h-[1.5px] bg-white group-hover:bg-black transition-colors block"></span>
                    </button>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001]"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#0a0a0a] z-[1002] flex flex-col border-l border-white/10 shadow-2xl shadow-black"
                        >
                            {/* Close Button Header */}
                            <div className="p-8 flex justify-between items-center border-b border-white/5">
                                <span className="text-white/40 uppercase text-xs tracking-widest">Navigation</span>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 flex flex-col justify-center px-10 md:px-14">
                                <nav className="flex flex-col items-start gap-6">
                                    {menuItems.map((item, i) => {
                                        const isActive = location.pathname === item.path;
                                        return (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + i * 0.05 }}
                                                className="w-full"
                                            >
                                                <Link
                                                    to={item.path}
                                                    onClick={() => setMenuOpen(false)}
                                                    className="group relative flex items-center justify-between w-full py-2 border-b border-white/5 overflow-hidden"
                                                >
                                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ff4d29] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1]"></span>
                                                    <div className="flex items-end gap-4">
                                                        <span className="text-xs font-mono text-[#ff4d29] mb-1">0{i + 1}</span>
                                                        <span className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white group-hover:text-[#ff4d29] transition-colors font-['Oswald']">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#ff4d29] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Footer Info */}
                            <div className="p-10 border-t border-white/5 flex justify-between items-center text-white/30 text-[10px] uppercase tracking-widest">
                                <span>© {new Date().getFullYear()} Kilany</span>
                                <span>Cairo, EG</span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
