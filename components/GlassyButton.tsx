import { motion } from "framer-motion";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import WavyText from "./WavyText";

interface GlassyButtonProps {
    children: React.ReactNode;
    to?: string;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

export default function GlassyButton({ children, to, className, onClick, icon }: GlassyButtonProps) {

    const content = (
        <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 text-sm font-medium text-white transition-all duration-300 group-hover:bg-[#ff4d29] group-hover:border-[#ff4d29] shadow-none group-hover:shadow-[0_0_25px_rgba(255,77,41,0.5)]">
            {/* Subtle Shine Overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

            {icon && <span className="text-white/90 group-hover:text-white transition-colors">{icon}</span>}

            <span className="relative z-20 uppercase tracking-widest text-xs md:text-sm font-bold text-white drop-shadow-lg">
                {typeof children === 'string' ? <WavyText text={children} /> : children}
            </span>
        </span>
    );

    const sharedClasses = cn(
        "relative group cursor-pointer overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#ff4d29] focus:ring-offset-2 focus:ring-offset-slate-50 mt-12", // Added mt-12 for spacing logic if applicable globally, but better to do it in usage or strictly enforce user's "Unified Button Spacing" rule here or in usage. User said "Ensure every button... has exactly 48px". Doing it here might break layout if button is not at the bottom. But "START A PROJECT" is usually standalone. I will check usage later.
        className
    );

    const border = (
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    );

    if (to) {
        return (
            <Link
                to={to}
                onClick={onClick}
                className={sharedClasses}
            >
                {border}
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={sharedClasses}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            {border}
            {content}
        </motion.button>
    );
}
