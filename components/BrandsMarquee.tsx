import { motion } from "framer-motion";

const brands = [
    "/images/brands/Asset 1-8.png",
    "/images/brands/Asset 2-8.png",
    "/images/brands/Asset 4-8.png",
    "/images/brands/Asset 5-8.png",
    "/images/brands/Asset 7-8.png",
    "/images/brands/Asset 8-8.png",
];

// Extend the list to ensure it covers wide screens before duplication
// 3x repetitions = 18 logos per set, ensuring plenty of width.
const brandSet = [...brands, ...brands, ...brands];

export default function BrandsMarquee() {
    return (
        <section className="relative w-full bg-[#050505] pt-[32px] pb-[80px] overflow-hidden">
            {/* Gradient Fades for Smooth Entrance/Exit */}
            <div className="absolute top-0 left-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Moving Container - Animates exactly 50% of its width (one full set) */}
            <div className="flex select-none overflow-hidden">
                <motion.div
                    className="flex flex-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60, // Slower, smoother speed for the longer track
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Render Two Identical Sets for Seamless Handoff */}
                    <LogoSet />
                    <LogoSet />
                </motion.div>
            </div>
        </section>
    );
}

const LogoSet = () => (
    <div className="flex shrink-0 items-center">
        {brandSet.map((logo, index) => (
            <div
                key={`${index}-${logo}`}
                className="pr-16 md:pr-32 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
                <img
                    src={logo}
                    alt="Brand Logo"
                    className="h-10 md:h-14 w-auto object-contain max-w-[150px]"
                    style={{
                        filter: 'brightness(0) invert(1)',
                    }}
                />
            </div>
        ))}
    </div>
);
