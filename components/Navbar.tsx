import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, X, Menu } from "lucide-react";
import FluidButton from "./FluidButton";

// Menu items
const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/works" },
    { label: "Services", path: "/services" },
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
            {/* Fixed Navbar */}
            <nav className={`fixed top-0 left-0 w-full px-4 md:px-8 py-6 z-[1000] flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>

                {/* Logo */}
                <div className="z-[1002]">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <h1 className="font-extrabold font-['Syne'] tracking-tighter uppercase text-white whitespace-nowrap leading-none text-3xl md:text-4xl">
                            KILANY
                        </h1>
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 z-[1002]">
                    {/* Let's Talk Button - Standardized */}
                    <div className="hidden md:block origin-right">
                        <FluidButton to="/contact" variant="outline">
                            Let's Talk
                        </FluidButton>
                    </div>

                    {/* Menu Button - Standardized Shape */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-[4px] text-white hover:bg-[#ff4d29] hover:border-[#ff4d29] transition-colors duration-300 bg-black/50 backdrop-blur-sm"
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/95 z-[1001] flex flex-col justify-center items-center transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <nav className="flex flex-col items-center gap-8">
                    {menuItems.map((item, i) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-4xl md:text-6xl font-extrabold uppercase text-white hover:text-[#ff4d29] transition-colors duration-300 font-['Syne']"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-10 text-white/30 text-xs uppercase tracking-widest font-['Syne']">
                    © {new Date().getFullYear()} Ahmed Kilany
                </div>
            </div>
        </>
    );
}
