'use client';

import { motion, useInView, type Easing } from 'framer-motion';
import { useRef, type ReactNode, useEffect, useState } from 'react';

interface AnimatedElementProps {
  children?: ReactNode;
  appearId?: string;
  initial?: {
    opacity?: number;
    x?: number | string;
    y?: number | string;
    scale?: number;
    rotateY?: number;
  };
  animate?: {
    opacity?: number;
    x?: number | string;
    y?: number | string;
    scale?: number;
    rotateY?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: Easing | Easing[];
  };
  className?: string;
  style?: React.CSSProperties;
  immediate?: boolean; // For elements that should animate immediately (like navigation)
  [key: string]: any;
}

export default function AnimatedElement({
  children,
  appearId,
  initial,
  animate,
  transition,
  className,
  style,
  immediate = false,
  ...props
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: immediate ? '0px' : '-100px' });
  const [shouldAnimate, setShouldAnimate] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      // For immediate animations (like navigation), animate right away
      setShouldAnimate(true);
    }
  }, [immediate]);

  // Default animation based on initial style
  const defaultInitial = initial || { opacity: 0 };
  const defaultAnimate = animate || { opacity: 1, x: 0, y: 0, scale: 1, rotateY: 0 };

  // Determine if we should animate
  const willAnimate = immediate ? shouldAnimate : isInView;

  return (
    <motion.div
      ref={ref}
      initial={defaultInitial}
      animate={willAnimate ? defaultAnimate : defaultInitial}
      transition={transition || { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
      data-framer-appear-id={appearId}
      {...props}
    >
      {children}
    </motion.div>
  );
}
