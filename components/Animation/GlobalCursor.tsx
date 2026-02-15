import { useEffect, useRef } from "react";

export default function GlobalCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const position = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const isVisible = useRef(false);

    useEffect(() => {
        // Optimization: Check for touch devices to avoid running this logic at all
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;

            if (!isVisible.current) {
                isVisible.current = true;
                cursor.style.opacity = "1";
            }
        };

        const onMouseLeave = () => {
            isVisible.current = false;
            cursor.style.opacity = "0";
        };

        const onMouseEnter = () => {
            isVisible.current = true;
            cursor.style.opacity = "1";
        };

        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);

        let rafId: number;

        const animate = () => {
            // LERPing (Linear Interpolation) for smoothness
            // The 0.15 factor determines the "weight". Higher = faster/snappier, Lower = slower/smoother.
            // 0.2 is a good balance for "premium" but responsive.
            const ease = 0.2;

            position.current.x += (target.current.x - position.current.x) * ease;
            position.current.y += (target.current.y - position.current.y) * ease;

            if (cursor) {
                cursor.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // Minimal initial render. No state updates.
    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0 transition-opacity duration-300"
            style={{
                willChange: "transform",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
            }}
        />
    );
}
