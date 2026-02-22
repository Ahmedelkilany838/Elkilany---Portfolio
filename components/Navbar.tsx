import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, X, Menu } from "lucide-react";
import FluidButton from "./FluidButton";

// Menu items
const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Works", path: "/works" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Work path fix: /work -> /works in menuItems if needed.
    // User conversation history mentions "Works.tsx".
    // I updated menuItems path to "/works" above to be safe.

    return (
        <>
            {/* --- Backdrop Layer (Fixed & animated) --- */}
            <div
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled ? 'h-[80px] bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-sm' : 'h-0 bg-transparent'
                    }`}
            />

            {/* --- Decoupled Logo Layer (Independent Movement) --- */}
            <div className={`fixed z-[1002] left-4 md:left-8 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled ? 'top-6' : 'top-4 md:top-6'
                }`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <h1 className={`font-['Syne'] font-extrabold tracking-tighter uppercase text-white whitespace-nowrap leading-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled ? 'text-3xl md:text-4xl' : 'text-[clamp(4.5rem,10vw,12rem)]'
                        }`}>
                        KILANY
                    </h1>
                </Link>
            </div>

            {/* --- Decoupled Right Actions Layer (Static Position) --- */}
            <div className="fixed top-6 right-4 md:right-8 z-[1002] flex items-center gap-3">
                {/* Let's Talk - Pill Shape */}
                <div className="hidden md:block origin-right">
                    <Link
                        to="/contact"
                        className="font-['Syne'] flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black/20 backdrop-blur-sm"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Menu Toggle - Perfect Circle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="group relative w-[46px] h-[46px] flex items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-black/20 backdrop-blur-sm"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : (
                        <div className="flex flex-col gap-[5px]">
                            <span className="w-5 h-[2px] bg-white rounded-full group-hover:w-4 transition-all duration-300 origin-right"></span>
                            <span className="w-5 h-[2px] bg-white rounded-full group-hover:w-6 transition-all duration-300 origin-right"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* --- Mobile Menu Overlay --- */}
            <div
                className={`fixed inset-0 bg-black/95 z-[1001] flex flex-col justify-center items-center transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <nav className="flex flex-col items-center gap-8">
                    {menuItems.map((item, i) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="font-['Syne'] text-4xl md:text-6xl font-extrabold uppercase text-white/60 hover:text-white transition-colors duration-300 tracking-tight"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-10 text-white/30 text-xs uppercase tracking-widest">
                    © {new Date().getFullYear()} Ahmed Kilany
                </div>
            </div>
        </>
    );
}
