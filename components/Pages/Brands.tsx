import InfiniteLoop from "components/Animation/InfiniteLoop";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import BrandsMobile from "./BrandsMobile";

const brands = Array.from({ length: 7 }, (_, idx) => ({
  img: `https://picsum.photos/600/400?${idx + 2}`,
}));

const fast = 20;
const slow = 50;

const Brands = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [duration, setDuration] = useState(fast);
  const [isFinish, setIsFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (!width) return;

    let controls;

    const finalPosition = -width / 2;

    if (isFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setIsFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls.stop();
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="w-full overflow-hidden sm:block hidden">
        <motion.div
          className="flex left-0 gap-4"
          ref={ref}
          style={{ x: xTranslation, width: "max-content" }}
          onHoverStart={() => {
            setIsFinish(true);
            setDuration(slow);
          }}
          onHoverEnd={() => {
            setIsFinish(true);
            setDuration(fast);
          }}
        >
          {[...brands, ...brands].map((item, idx) => (
            <InfiniteLoop key={idx} img={item.img} />
          ))}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden sm:hidden flex justify-center">
        <BrandsMobile />
      </div>
    </div>
  );
};

export default Brands;
