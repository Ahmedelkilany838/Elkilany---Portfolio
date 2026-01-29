import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link, useLocation } from "react-router";
import GlassyButton from "./GlassyButton";
import WavyText from "./WavyText";

// Menu items with their routes
const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Playground", path: "/playground" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* Fixed Navbar - Stays visible on scroll */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 2, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 w-full px-8 md:px-12 py-6 z-[1000] flex items-center justify-between bg-black/20 backdrop-blur-xl"
            >
                {/* Logo - Links to Home */}
                <Link to="/" className="font-bold text-base md:text-lg tracking-tight text-white uppercase hover:opacity-70 transition-opacity">
                    ELKILANY
                </Link>

                {/* Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col items-center cursor-pointer"
                >
                    <motion.div
                        animate={{
                            width: menuOpen ? 100 : 80,
                            backgroundColor: menuOpen ? "#f9452c" : "#ffffff",
                        }}
                        whileHover={{ width: 90 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="h-[4px] rounded-full mb-2"
                        style={{ backgroundColor: menuOpen ? "#f9452c" : "#ffffff" }}
                    />
                    <span className="text-xs md:text-sm uppercase tracking-widest font-medium text-white hover:opacity-70 transition-opacity">
                        {menuOpen ? "Close" : "Menu"}
                    </span>
                </button>


                {/* Contact CTA */}
                <div className="hidden md:block">
                    <Link to="/contact" className="font-bold text-base md:text-lg tracking-tight text-white uppercase hover:opacity-70 transition-opacity">
                        Contact
                    </Link>
                </div>
            </motion.nav>

            {/* Backdrop to close menu when clicking outside */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-[900] bg-transparent cursor-pointer"
                    />
                )}
            </AnimatePresence>

            {/* Dropdown Menu (Glass Layer, Expands Down) */}
            <AnimatePresence mode="wait">
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-0 left-0 right-0 z-[950] bg-black/80 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="pt-28 pb-12 px-8 md:px-12">
                            <nav className="flex flex-col items-center gap-5">
                                {menuItems.map((item, i) => {
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.5 + i * 0.12,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={() => setMenuOpen(false)}
                                                className={`text-2xl md:text-3xl font-bold uppercase tracking-wide transition-colors duration-300 ${isActive
                                                    ? "text-[#f9452c]"
                                                    : "text-white hover:text-[#f9452c]"
                                                    }`}
                                            >
                                                <WavyText text={item.label} />
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
