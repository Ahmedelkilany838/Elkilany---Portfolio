import { useState, useEffect, useCallback } from "react";
import { cn } from "@/../lib/utils";

interface Logo {
  name: string;
  icon: React.ReactNode;
}

const logos: Logo[] = [
  {
    name: "Basel",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-foreground"
      >
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Vertex",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-foreground"
      >
        <polygon
          points="12,2 22,20 2,20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Orbital",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-foreground"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Nexus",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-foreground"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Prism",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-foreground"
      >
        <path
          d="M12 3L3 21h18L12 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 3v18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Helix",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-foreground"
      >
        <path
          d="M6 3v18M18 3v18M6 12h12M6 6h12M6 18h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const BrandsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 400);
    },
    [isTransitioning]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, goToSlide]);

  return (
    <div className="flex flex-col items-center gap-6 w-full py-12">
      <div className="relative w-full max-w-[90%] h-40 bg-gray-100/5 border border-white/10 shadow-md rounded-lg flex items-center justify-center backdrop-blur-sm">
        <div className="relative w-full h-full overflow-hidden">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={cn(
                "absolute inset-0 flex items-center justify-center gap-3 transition-all duration-400 ease-out",
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              )}
            >
              {logo.icon}
              <span className="text-xl font-semibold tracking-tight text-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full bg-[#686464] transition-all duration-300 ease-out cursor-pointer",
              index === currentIndex && "bg-[#FF462E] scale-110"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsMobile;
