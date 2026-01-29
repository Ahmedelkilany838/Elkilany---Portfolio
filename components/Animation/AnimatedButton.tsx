import FluidButton from "../FluidButton";

interface AnimatedButtonProps {
  bg?: string;
}

export default function AnimatedButton({ bg }: AnimatedButtonProps) {
  return (
    <div className="inline-block">
      {/* @ts-ignore */}
      <FluidButton to="/contact">
        Get in touch
      </FluidButton>
    </div>
  );
}
