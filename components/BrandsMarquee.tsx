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
        <section className="relative w-full bg-[#050505] pt-[40px] pb-[140px] px-[8%] border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
                    {brands.map((logo, index) => (
                        <div key={index} className="opacity-40 hover:opacity-100 transition-opacity duration-300">
                            <img
                                src={logo}
                                alt={`Brand ${index + 1}`}
                                className="h-12 md:h-16 w-auto object-contain"
                                style={{
                                    filter: 'brightness(0) invert(1)',
                                    maxWidth: '160px'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
