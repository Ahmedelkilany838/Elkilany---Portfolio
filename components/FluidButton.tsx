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
    // rounded-[4px], px-10 (40px), py-[18px] (18px)
    const geometry = "rounded-[4px] px-10 py-[18px] flex items-center justify-center whitespace-nowrap w-fit";

    // 2. Interaction & Animation
    // transition-all duration-300 ease-out group relative overflow-hidden cursor-pointer
    const behavior = "group relative overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer";

    // 3. Variant Styling
    // Default (Outline): Border 1px solid white/20. Hover: bg-[#ff4d29] border-[#ff4d29].
    // Primary (Filled): bg-[#ff4d29] border-[#ff4d29]. Hover: brightness/shift? Or strictly solid orange.
    // User: "Main CTA... should be pre-filled... All other... outlined."
    // User: "Hover State: Background shifts to a solid #ff4d29". (Applied to Outline).
    // Primary Hover: Keep consistent. Maybe lighten slightly to show interaction?
    const outlineStyles = "bg-transparent border border-white/20 hover:border-[#ff4d29] text-white";
    // Slide effect for Outline
    const slideEffect = "before:absolute before:inset-0 before:bg-[#ff4d29] before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]";

    const primaryStyles = "bg-[#ff4d29] border border-[#ff4d29] text-white hover:bg-[#ff3300] hover:border-[#ff3300]"; // Simple hover for primary

    const variantClasses = variant === 'primary'
        ? primaryStyles
        : `${outlineStyles} ${slideEffect}`;

    const baseClasses = `${geometry} ${behavior} ${variantClasses} ${className}`;

    // 4. Typography
    // Syne Bold, Uppercase, 14px (text-sm), tracking 0.05em
    const textClasses = "relative z-10 font-['Syne'] font-bold uppercase tracking-[0.05em] text-sm text-white group-hover:text-white transition-colors duration-300";

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
