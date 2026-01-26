import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface AnimatedButtonProps {
  bg?: string;
}

export default function AnimatedButton({ bg }: AnimatedButtonProps) {
  return (
    <Link
      to="./contact"
      className={`relative overflow-hidden bg-[${bg}] rounded-[50px] px-0.5 py-0.5 shadow-none cursor-pointer inline-block group`}
      style={{ willChange: "auto", backgroundColor: bg }}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 left-2 h-11  bg-[#ff462e] rounded-[35px] w-11 group-hover:w-[calc(100%-15px)] transition-all duration-300 ease-out"
      />
      <div
        className="absolute left-2 top-1/2 bg-[#ff462e] -translate-y-1/2 w-10 h-10 rounded-[35px] overflow-hidden z-10"
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
        >
          <ArrowRight
            className="absolute w-5 h-5 text-white transition-all duration-300 group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:opacity-0"
          />
          <ArrowRight
            className="absolute w-5 h-5 text-white translate-y-6 -translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="relative flex items-center">
        <div
          className="absolute left-14 transition-all duration-300 group-hover:-translate-y-3 group-hover:opacity-0"
        >
          <p className="text-black font-medium whitespace-nowrap px-2 py-3 text-base">
            Get in touch
          </p>
        </div>
        <div
          className="translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ml-8"
        >
          <p className="text-white font-medium whitespace-nowrap px-6 py-3 text-base">
            Get in touch
          </p>
        </div>
      </div>
    </Link>
  );
}
