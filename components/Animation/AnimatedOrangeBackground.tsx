import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedOrangeBackground() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="framer-1r7mfyr-container" style={{ height: "100%", width: "100%" }}>
      <section
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="framer-wfbzpg"
          data-framer-name="BG"
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              gap: 0,
              width: "100%",
              height: "50%",
              zIndex: 1,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                style={{
                  backgroundColor:
                    "var(--token-7ec95c0f-b04a-42ae-a158-91566b52197d, rgb(255, 70, 46))",
                  flex: "1 0 0",
                  height: "100%",
                  width: "100%",
                  transformOrigin: "0% 0%",
                }}
                initial={{ scaleX: 1 }}
                animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: 1.2,
                  delay: num * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              gap: 0,
              width: "100%",
              height: "50%",
              zIndex: 1,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                style={{
                  backgroundColor:
                    "var(--token-7ec95c0f-b04a-42ae-a158-91566b52197d, rgb(255, 70, 46))",
                  flex: "1 0 0",
                  height: "100%",
                  width: "100%",
                  transformOrigin: "0% 100%",
                }}
                initial={{ scaleY: 1 }}
                animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: 1.2,
                  delay: num * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            ))}
          </div>
          <div
            className="framer-1rd65x"
            data-framer-name="Top"
            style={{ opacity: 0, pointerEvents: "none", position: "absolute" }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={
                  [
                    "framer-12poifv",
                    "framer-suasue",
                    "framer-vwddjc",
                    "framer-12txtu3",
                    "framer-a8cb3s",
                  ][num - 1]
                }
                data-framer-name={num.toString()}
                style={{
                  backgroundColor:
                    "var(--token-7ec95c0f-b04a-42ae-a158-91566b52197d, rgb(255, 70, 46))",
                }}
              />
            ))}
          </div>
          <div
            className="framer-8evynv"
            data-framer-name="Bottom"
            style={{ opacity: 0, pointerEvents: "none", position: "absolute" }}
          >
            {[1, 2, 3, 4, 5,6].map((num) => (
              <div
                key={num}
                className={
                  [
                    "framer-1k184go",
                    "framer-lym23v",
                    "framer-1scw7fy",
                    "framer-su5piq",
                    "framer-bco44l",
                  ][num - 1]
                }
                data-framer-name={num.toString()}
                style={{
                  backgroundColor:
                    "var(--token-7ec95c0f-b04a-42ae-a158-91566b52197d, rgb(255, 70, 46))",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
