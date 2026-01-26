import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

// Premium page transition wrapper
export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1], // Heavy, cinematic cubic-bezier
            }}
        >
            {children}
        </motion.div>
    );
}
