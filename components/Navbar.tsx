import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, X, Menu } from "lucide-react";

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
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Fixed Navbar */}
            <nav className={`fixed top-0 left-0 w-full px-4 md:px-8 py-6 z-[1000] flex items-start justify-between transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>

                {/* Logo */}
                <div className="z-[1002]">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <h1 className="font-black font-['Oswald'] tracking-tighter uppercase text-white whitespace-nowrap leading-none text-3xl md:text-4xl">
                            KILANY
                        </h1>
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 z-[1002]">
                    {/* Let's Talk Button */}
                    <Link
                        to="/contact"
                        className="hidden md:flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight className="w-3 h-3" />
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 bg-black/50 backdrop-blur-sm"
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
                            className="text-4xl md:text-6xl font-black uppercase text-white hover:text-[#ff4d29] transition-colors duration-300 font-['Oswald']"
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
