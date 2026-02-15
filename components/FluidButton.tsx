import React from "react";
import { Link } from "react-router";

interface FluidButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    className?: string;
    fillColor?: string;
}

export default function FluidButton({
    children,
    to,
    onClick,
    className = "",
}: FluidButtonProps) {

    const baseClasses = `group relative overflow-hidden rounded-full border border-white/30 bg-black/20 backdrop-blur-sm px-10 py-4 md:px-12 md:py-5 transition-all duration-300 hover:border-[#ff4d29] hover:bg-white/5 cursor-pointer flex items-center justify-center whitespace-nowrap w-fit ${className}`;

    // Style update: Simple text color change on hover
    const textClasses = "text-white font-black uppercase tracking-widest text-base md:text-lg group-hover:text-[#ff4d29] transition-colors duration-300";

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
