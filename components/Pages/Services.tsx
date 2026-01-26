import AnimatedButton from "components/Animation/AnimatedButton";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  badge?: string;
  dotsActive: number;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Strategy & Planning",
    description:
      "We start by understanding your vision and business goals. Through in-depth research and strategic planning, we define the core structure and key elements needed for your project.",
    badge: "FREE",
    dotsActive: 1,
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Our team crafts a visually stunning and functional design that aligns with your brand. We focus on responsive layouts, and high-performance development to ensure a smooth experience.",
    dotsActive: 2,
  },
  {
    number: "03",
    title: "Launch & Growth",
    description:
      "Once everything is tested and refined, we launch your project with precision. Post-launch, we provide ongoing support, updates, and strategies to help you scale and maximize results.",
    dotsActive: 3,
  },
];

const ProcessCard = ({ step }: { step: ProcessStep }) => {
  return (
    <div className="bg-[#eee] rounded-2xl p-6 flex flex-col gap-12 h-full">
      <div className="flex justify-between items-start mb-auto">
        <span className="text-3xl font-bold text-foreground/80">
          {step.number}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full transition-colors ${
                dot <= step.dotsActive ? "bg-red-500" : "bg-[#777]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-red-500 w-3 h-3 rounded"></span>
          <h3 className="font-bold text-[18px] text-foreground">
            {step.title}
          </h3>
          {step.badge && (
            <span className="px-3 py-1 text-xs font-bold bg-[#b3adad] text-black rounded-full">
              {step.badge}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col gap-10 px-6 py-12 md:px-12 lg:px-14">
      {/* Header */}
      <div className="flex justify-between items-center py-4 border-t border-border">
        <div className="flex items-center gap-2">
          <span className="bg-red-500 w-4 h-4 rounded"></span>
          <span className="text-[18px] text-black font-medium">
            Approach Style
          </span>
        </div>
        <span className="text-base font-bold text-black hidden sm:block">(CQ® — 02)</span>
        <span className="text-base font-bold text-black">©2026</span>
      </div>

      {/* Process Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {processSteps.map((step) => (
          <ProcessCard key={step.number} step={step} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
        <div>
          <AnimatedButton bg="#eee" />
        </div>

        <div className="space-y-0">
          <div className="py-6 border-y border-border">
            <div className="flex justify-between items-center">
              <span className="text-foreground ont-medium text-base">Strategy</span>
              <span className="text-muted-foreground">25%</span>
            </div>
          </div>
          <div className="py-6 border-b border-border">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium text-base">Design</span>
              <span className="text-muted-foreground">60%</span>
            </div>
          </div>
          <div className="py-6 border-b border-border">
            <div className="flex justify-between items-center">
              <span className="text-foreground ont-medium text-base">Launch</span>
              <span className="text-muted-foreground">100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
