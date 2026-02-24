import { useEffect, useRef, useState } from "react";

export default function GlobalCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const position = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });
    const isVisible = useRef(false);

    const [viewMode, setViewMode] = useState(false);

    useEffect(() => {
        // Optimization: Check for touch devices to avoid running this logic at all
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        if (isTouch) return;

        // Forcefully hide the OS cursor everywhere
        const style = document.createElement("style");
        style.innerHTML = "* { cursor: none !important; }";
        document.head.appendChild(style);

        const cursor = cursorRef.current;
        if (!cursor) return;

        let currentViewMode = false;

        const onMouseMove = (e: MouseEvent) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;

            const targetElement = e.target as HTMLElement;
            const viewHover = targetElement.closest("[data-cursor-view]");
            const shouldHide = targetElement.closest("[data-hide-cursor]");

            // Handle visibility for hide cursor tags
            if (shouldHide && !viewHover) {
                cursor.style.opacity = "0";
                isVisible.current = false;
            } else {
                if (!isVisible.current || cursor.style.opacity === "0") {
                    isVisible.current = true;
                    cursor.style.opacity = "1";
                }
            }

            if (viewHover && !currentViewMode) {
                currentViewMode = true;
                setViewMode(true);
            } else if (!viewHover && currentViewMode) {
                currentViewMode = false;
                setViewMode(false);
            }
        };

        const onMouseLeave = () => {
            isVisible.current = false;
            cursor.style.opacity = "0";
            if (currentViewMode) {
                currentViewMode = false;
                setViewMode(false);
            }
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
            // Higher ease = faster/snappier. 0.45 is snappy but still smooth.
            const ease = 0.45;

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

    // Minimal initial render with smooth dynamic classes.
    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 flex items-center justify-center overflow-hidden transition-all duration-[250ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${viewMode
                ? "w-[90px] h-[90px] bg-[#151515]/50 backdrop-blur-md border border-white/10 rounded-full mix-blend-normal"
                : "w-5 h-5 bg-white rounded-full mix-blend-difference border-transparent backdrop-blur-none"
                }`}
            style={{
                willChange: "transform, width, height",
                boxShadow: viewMode ? "none" : "0 0 10px rgba(255, 255, 255, 0.3)"
            }}
        >
            <span
                className={`font-['Syne'] text-white text-[13px] font-bold tracking-[0.1em] uppercase transition-opacity duration-[200ms] whitespace-nowrap ${viewMode ? "opacity-100 delay-[50ms]" : "opacity-0"
                    }`}
            >
                View
            </span>
        </div>
    );
}
