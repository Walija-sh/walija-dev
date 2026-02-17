import { motion } from "motion/react";
import { useState, useRef, useLayoutEffect } from "react";

const RollingText = ({
  text = "",
  className = "",
  stagger = 0.035,
}) => {
  const [hovered, setHovered] = useState(false);
  const [height, setHeight] = useState(0);
  const measureRef = useRef(null);
  const GAP = 8;


  // Measure real text height (responsive safe)
  useLayoutEffect(() => {
    if (measureRef.current) {
      setHeight(measureRef.current.offsetHeight);
    }
  }, [text]);

  const chars = text.split("");

  return (
    <span
      className={`inline-block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hidden measurer */}
      <span
        ref={measureRef}
        className="absolute invisible pointer-events-none whitespace-nowrap"
      >
        {text}
      </span>

      <span className="flex">
        {chars.map((char, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ height }}
          >
            <motion.span
              className="flex flex-col gap-2"
              animate={{
                y: hovered ? -(height + GAP) : 0,
              }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
                delay: i * stagger,
              }}
            >
              {/* Original */}
              <span>{char === " " ? "\u00A0" : char}</span>

              {/* Hover clone */}
              <span>{char === " " ? "\u00A0" : char}</span>
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
};

export default RollingText;
