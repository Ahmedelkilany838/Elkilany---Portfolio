import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { X } from "lucide-react";
import { DEFAULT_CONFIG } from "lib/siteConfig";
import { navLinks, siteProfile } from "data/site";

const colors = DEFAULT_CONFIG.colors;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    return (
        <>
            {/* ── Scrolled backdrop ── */}
            <div
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled ? 'h-[80px] backdrop-blur-xl border-b shadow-sm' : 'h-0'
                    }`}
                style={{
                    backgroundColor: isScrolled
                        ? (colors.navBg === 'transparent'
                            ? 'rgba(0,0,0,0.4)'
                            : colors.navBg)
                        : 'transparent',
                    borderColor: 'var(--site-border, rgba(255,255,255,0.05))',
                }}
            />

            {/* ── Logo ── */}
            <div className={`fixed z-[1002] left-4 md:left-8 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled ? 'top-6' : 'top-4 md:top-6'
                }`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <h1
                        className={`font-['Syne'] font-extrabold tracking-tighter uppercase whitespace-nowrap leading-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isScrolled ? 'text-2xl md:text-4xl' : 'text-[clamp(2.5rem,9vw,10rem)]'
                            }`}
                        style={{ color: 'var(--site-text-primary, #ffffff)' }}
                    >
                        {siteProfile.displayName}
                    </h1>
                </Link>
            </div>

            {/* ── Right actions ── */}
            <div className="fixed top-6 right-4 md:right-8 z-[1002] flex items-center gap-3">
                {/* Let's Talk button */}
                <div className="hidden md:block origin-right">
                    <Link
                        to="/contact"
                        className="font-['Syne'] flex items-center justify-center rounded-full px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 backdrop-blur-sm cursor-none"
                        style={{
                            color: 'var(--site-text-primary, #ffffff)',
                            border: '1px solid var(--site-button-border, rgba(255,255,255,0.2))',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.2)';
                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--site-button-border, rgba(255,255,255,0.2))';
                        }}
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Hamburger toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="group relative w-[48px] h-[48px] flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 backdrop-blur-sm cursor-none"
                    style={{
                        color: 'var(--site-text-primary, #ffffff)',
                        border: '1px solid var(--site-button-border, rgba(255,255,255,0.2))',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.2)';
                    }}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <div className="flex flex-col gap-[5px]">
                            <span className="w-5 h-[2px] rounded-full group-hover:w-4 transition-all duration-300 origin-right" style={{ backgroundColor: 'var(--site-text-primary, #fff)' }} />
                            <span className="w-5 h-[2px] rounded-full group-hover:w-6 transition-all duration-300 origin-right" style={{ backgroundColor: 'var(--site-text-primary, #fff)' }} />
                        </div>
                    )}
                </button>
            </div>

            {/* ── Mobile Menu Overlay ── */}
            <div
                className={`fixed inset-0 z-[1001] flex flex-col justify-center items-center transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                style={{ backgroundColor: 'var(--site-menu-overlay-bg, rgba(0,0,0,0.95))' }}
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-['Syne'] text-4xl md:text-6xl font-extrabold uppercase tracking-tight transition-colors duration-300"
                            style={{ color: 'var(--site-text-secondary, rgba(255,255,255,0.6))' }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = 'var(--site-text-primary, #fff)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = 'var(--site-text-secondary, rgba(255,255,255,0.6))';
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div
                    className="absolute bottom-10 text-xs uppercase tracking-widest"
                    style={{ color: 'var(--site-text-muted, rgba(255,255,255,0.3))' }}
                >
                    © {new Date().getFullYear()} Ahmed Kilany
                </div>
            </div>
        </>
    );
}
