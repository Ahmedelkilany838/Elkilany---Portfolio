import { useEffect, useState } from "react";

interface CursorPosition {
    x: number;
    y: number;
    visible: boolean;
}

export default function GlobalCursor() {
    const [cursor, setCursor] = useState<CursorPosition>({
        x: 0,
        y: 0,
        visible: false, // Start hidden until first mouse move
    });

    useEffect(() => {
        // Detect touch devices - if touch, don't show custom cursor
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (window.matchMedia("(pointer: coarse)").matches));
        };

        if (isTouchDevice()) return;

        const handleMouseMove = (event: MouseEvent) => {
            setCursor({
                x: event.clientX,
                y: event.clientY,
                visible: true,
            });
        };

        const handleMouseLeave = () => {
            setCursor((prev) => ({ ...prev, visible: false }));
        };

        const handleMouseEnter = () => {
            setCursor((prev) => ({ ...prev, visible: true }));
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <div
            className={`space-layout-cursor-dot${cursor.visible ? " space-layout-cursor-dot--visible" : ""
                }`}
            style={{
                transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
            }}
        />
    );
}
