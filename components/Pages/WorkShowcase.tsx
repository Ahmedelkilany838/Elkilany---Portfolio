import { useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */
const showcaseItems = [
    { id: 1, image: "/images/1 v2.jpg" },
    { id: 2, image: "/images/Artboard 7-100.jpg" },
    { id: 3, image: "/images/Logo.jpg" },
    { id: 4, image: "/images/Artboard 1 copy 4-100.jpg" },
];

// Repeat for seamless loop
const duplicatedItems = [
    ...showcaseItems,
    ...showcaseItems,
    ...showcaseItems,
    ...showcaseItems,
    ...showcaseItems,
    ...showcaseItems,
];

/* ──────────────────── MAIN COMPONENT ──────────────────────── */
export default function WorkShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const offsetRef = useRef(0);
    const [winW, setWinW] = useState(1440);
    const [mounted, setMounted] = useState(false);

    // Responsive Settings
    const baseCardWidth = 350;
    const gap = 40;  // Spacing between cards
    const cardWidth = mounted ? Math.min(baseCardWidth, winW * 0.3) : baseCardWidth;
    const itemFullWidth = cardWidth + gap;
    const totalContentWidth = duplicatedItems.length * itemFullWidth;

    useEffect(() => {
        setMounted(true);
        setWinW(window.innerWidth);
        const onResize = () => setWinW(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    /* ─────── Animation Loop ─────── */
    useAnimationFrame((_time, delta) => {
        if (!containerRef.current || !mounted) return;

        // Auto-scroll speed
        const speed = 30; // pixels per second
        offsetRef.current -= (speed * delta) / 1000;

        // Infinite Loop Reset
        const singleSetWidth = showcaseItems.length * itemFullWidth;
        // Adjust reset logic to be seamless
        if (Math.abs(offsetRef.current) >= singleSetWidth) {
            offsetRef.current += singleSetWidth;
        }

        // Apply Offset
        // We move the container, but we also need to calc rotation per card based on screen position
        containerRef.current.style.transform = `translateX(${offsetRef.current}px)`;

        const viewportCenter = winW / 2;

        for (let i = 0; i < cardRefs.current.length; i++) {
            const card = cardRefs.current[i];
            if (!card) continue;

            // Calculate card's real center position on screen
            // The card's left position is: i * itemFullWidth
            // The global offset is: offsetRef.current
            const currentX = (i * itemFullWidth) + offsetRef.current;
            const cardCenter = currentX + (cardWidth / 2);

            // Distance from center (-1 to 1 range roughly)
            // Normalized: 0 = center, -1 = left edge, 1 = right edge
            const dist = (cardCenter - viewportCenter) / (winW * 0.6);

            // Clamp distance for calculations
            const clampedDist = Math.max(-1.5, Math.min(1.5, dist));

            /* --- THE MATCHING EFFECT --- */
            // Screenshot analysis:
            // 1. Edges are LARGER (Scale up)
            // 2. Edges are ROTATED inwards (Rotate Y)

            // Rotation: Left items rotate facing right (+), Right items rotate facing left (-)
            const rotateY = clampedDist * -45; // Max 45deg rotation

            // Scale: Abs distance calculates how far from center. 
            // 0 (Center) -> Scale 1
            // 1 (Edges) -> Scale 1.25
            const scale = 1 + (Math.abs(clampedDist) * 0.35);

            // Z-Index: Center needs to be behind? Or edges in front?
            // In CSS 3D, closer items (scaled up) naturally appear in front if z-axis is used.
            // Let's force z-index for cleanliness
            // const zIndex = Math.floor(Math.abs(clampedDist) * 100);

            // Apply Styles
            card.style.transform = `
                perspective(1000px)
                rotateY(${rotateY}deg)
                scale(${scale})
            `;

            // Optional: Fade edges slightly
            // card.style.opacity = Math.abs(clampedDist) > 1.2 ? "0.5" : "1";
        }
    });

    const setCardRef = useCallback(
        (index: number) => (el: HTMLDivElement | null) => {
            cardRefs.current[index] = el;
        },
        []
    );

    return (
        <section className="relative w-full h-[80vh] bg-[#050505] overflow-hidden flex items-center justify-center">

            {/* 3D Container */}
            <div
                ref={containerRef}
                className="flex items-center will-change-transform ml-[50vw]" // Start from center-ish
                style={{
                    gap: `${gap}px`,
                    // Initial shift to center the first item roughly if needed, 
                    // but the loop handles it.
                }}
            >
                {duplicatedItems.map((item, i) => (
                    <div
                        key={`${item.id}-concave-${i}`}
                        ref={setCardRef(i)}
                        className="relative flex-shrink-0"
                        style={{
                            width: `${cardWidth}px`,
                            aspectRatio: "3/4",
                        }}
                    >
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                            <img
                                src={item.image}
                                alt="Portfolio Work"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                draggable={false}
                            />
                            {/* Glossy Overlay for 3D realism */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Vignette / Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-[20vw] bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[20vw] bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        </section>
    );
}
