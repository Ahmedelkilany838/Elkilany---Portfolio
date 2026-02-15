import MarqueeTitle from "components/Animation/MarqueeTitle";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "CMO, TechFlow",
        text: "Ahmed transformed our brand identity completely. The visual system he created wasn't just beautiful—it was strategic. Our conversion rates increased by 40% within the first month of the rebrand.",
        highlight: "40% Increase in Conversions"
    },
    {
        name: "David Chen",
        role: "Founder, Zenith",
        text: "I've worked with many designers, but Elkilany is in a league of his own. His understanding of motion and typography created a digital experience that feels alive. Absolute mastery.",
        highlight: "World-Class Execution"
    },
    {
        name: "Marcus Thorne",
        role: "Director, Apex Media",
        text: "We needed a high-end, cinematic web presence. Ahmed delivered exactly that. The site is fast, fluid, and visually stunning. He's not just a designer; he's a visual engineer.",
        highlight: "Cinematic & High-End"
    }
];

export default function Testimonials() {
    return (
        <section className="relative w-full bg-black py-32 px-6 md:px-12 border-t border-white/10">

            <MarqueeTitle text="CLIENT WORDS" number="06" className="mb-24" />

            <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col justify-between border-l border-white/20 pl-8 py-4 hover:border-[#ff4d29] transition-colors duration-500 group">

                        <div className="mb-8">
                            <div className="flex gap-1 mb-6 text-[#ff4d29]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <h4 className="text-white font-bold text-xl md:text-2xl mb-2 tracking-tight">
                                "{review.highlight}"
                            </h4>
                            <p className="text-white/60 text-lg leading-relaxed font-light">
                                {review.text}
                            </p>
                        </div>

                        <div>
                            <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:bg-[#ff4d29] transition-colors" />
                            <h5 className="text-white font-bold uppercase tracking-wider text-sm">
                                {review.name}
                            </h5>
                            <span className="text-white/40 text-xs font-mono uppercase tracking-widest">
                                {review.role}
                            </span>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}
