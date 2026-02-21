import { useState, useEffect } from "react";
import AnimatedButton from "components/Animation/AnimatedButton";
import type { NavInterface } from "../../constants/index";
import { navItems } from "../../constants/index";
import { Link, useLocation } from "react-router";
import { Plus } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-5 relative z-20">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-white text-[clamp(5.5rem,16vw,20rem)] font-extrabold tracking-[-0.04em] leading-[0.85] mix-blend-exclusion font-['Syne'] flex items-start">
            KILANY
            <span className="text-[#ff4d29] text-[clamp(3rem,7vw,9rem)] leading-none mt-2 md:mt-4">*</span>
          </h1>
        </Link>

        <div className="flex items-center gap-12 lg:gap-24">
          {/* Links */}
          <div className="items-center gap-10 lg:gap-20 hidden lg:flex">
            {navItems.map((item: NavInterface) => {
              const active = isActive(item.href);
              return (
                <div key={item.href}>
                  <Link
                    to={item.href}
                    className={`cursor-pointer flex flex-row justify-start items-start gap-0.5 w-min h-min p-0 no-underline relative overflow-hidden  nav-link`}
                    style={{ opacity: active ? 1 : 0.5 }}
                  >
                    <div>
                      <div className="nav-text-line nav-text-line-1">
                        <p className="text-[20px] font-bold font-['Syne'] uppercase">{item.label}</p>
                      </div>
                      <div className="nav-text-line nav-text-line-2">
                        <p className="text-[20px] font-bold font-['Syne'] uppercase">{item.label}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold">{item.number}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* Action Button */}
          <div className="hidden lg:block">
            <AnimatedButton bg="#fff" />
          </div>
          {/* Mobile Icon */}
          <button
            className="lg:hidden bg-transparent border-none cursor-pointer p-2 z-100 text-white transition-opacity duration-200 hover:opacity-80 relative flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Plus
              className={`w-6 h-6 text-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45" : "rotate-0"
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 w-full h-fit bg-[#ff462e] overflow-y-auto transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-full"
          }`}
        onClick={toggleMobileMenu}
      >
        <div
          className="h-full min-h-[50vh] flex flex-col py-6 px-5 max-w-full box-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-12 w-full">
            {/* <Link to="/" className="block shrink-0" onClick={toggleMobileMenu}>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold">
                ELKILANY
                <span className="text-red-500">*</span>
              </h1>
            </Link> */}
          </div>

          <nav className="flex flex-col gap-0 flex-1 w-full">
            {navItems.map((item: NavInterface, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-6 text-white no-underline font-bold text-[28px] leading-tight transition-opacity duration-200 hover:opacity-90 ${index === navItems.length - 1
                    ? "border-b-0"
                    : "border-b border-white/15"
                    } ${active ? "opacity-100" : "opacity-90"}`}
                  onClick={toggleMobileMenu}
                >
                  <span className="inline-block">
                    {item.label}{" "}
                    <sup className="text-sm text-white/50 font-normal align-super">
                      {item.number}
                    </sup>
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mb-2 flex justify-start w-full">
            <AnimatedButton bg="#fff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
