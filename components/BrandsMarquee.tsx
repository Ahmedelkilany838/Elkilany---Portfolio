import { motion } from "framer-motion";

const brands = [
    "/images/brands/Asset 1-8.png",
    "/images/brands/Asset 2-8.png",
    "/images/brands/Asset 4-8.png",
    "/images/brands/Asset 5-8.png",
    "/images/brands/Asset 7-8.png",
    "/images/brands/Asset 8-8.png",
];

export default function BrandsMarquee() {
    return (
        <section className="relative w-full bg-black pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-y border-white/5">
            {/* Gradient Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

            {/* Infinite Marquee */}
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-20 md:gap-32 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {/* Duplicate brands 4 times for seamless loop */}
                    {[1, 2, 3, 4].map((set) => (
                        <div key={set} className="flex gap-20 md:gap-32 items-center">
                            {brands.map((logo, index) => (
                                <div
                                    key={`${set}-${index}`}
                                    className="relative group"
                                >
                                    {/* Logo with white filter */}
                                    <img
                                        src={logo}
                                        alt={`Brand ${index + 1}`}
                                        className="h-16 md:h-20 w-auto object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
                                        style={{
                                            filter: 'brightness(0) invert(1)',
                                            maxWidth: '200px'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
