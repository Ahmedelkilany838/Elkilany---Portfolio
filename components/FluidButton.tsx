import React from "react";
import { Link } from "react-router";
import { cn } from "lib/utils"; // Assuming utils exists, or use simple string concat if not. I'll stick to string concat or consistent usage.

interface FluidButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    className?: string; // allow overrides but base styles dominate
    variant?: 'primary' | 'outline';
}

export default function FluidButton({
    children,
    to,
    onClick,
    className = "",
    variant = 'outline',
}: FluidButtonProps) {

    // 1. Unified Geometry & Shape
    // rounded-full, custom responsive padding
    const geometry = "rounded-full px-12 py-[22px] md:px-14 md:py-[26px] flex items-center justify-center whitespace-nowrap w-fit shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:scale-105";

    // 2. Interaction & Animation
    // transition-all duration-300 ease-out group relative overflow-hidden cursor-none
    const behavior = "group relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-none";

    // 3. Variant Styling
    // Default (Outline): Border 1px solid white/20. Hover: bg-[#ff4d29] border-[#ff4d29].
    const outlineStyles = "bg-transparent border border-white/20 hover:bg-[#ff4d29] hover:border-[#ff4d29] text-white";
    // Slide effect for Outline
    const slideEffect = ""; // Removed complex slide effect for cleaner interaction, or keep if preferred. User asked for "Unified Design System... premium". Simple fade is often more premium. I'll stick to simple hover for now as per "Visual Highlights".

    // Primary: White background, Black text -> Hover: Orange background, White text.
    const primaryStyles = "bg-white text-black border border-white hover:bg-[#ff4d29] hover:text-white hover:border-[#ff4d29]";

    const variantClasses = variant === 'primary'
        ? primaryStyles
        : outlineStyles;

    const baseClasses = `${geometry} ${behavior} ${variantClasses} ${className}`;

    // 4. Typography
    // Applying global Syne font alias and adjusting sizes
    const textClasses = "relative z-10 font-['Syne'] font-extrabold uppercase tracking-[0.08em] text-sm md:text-lg transition-colors duration-300";

    const content = <span className={textClasses}>{children}</span>;

    if (to) {
        return (
            <Link to={to} className={baseClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {content}
        </button>
    );
}
