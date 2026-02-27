"use client";

import { motion } from "motion/react";

const SubHeaderMarquee = ({
  text = "",
  speed = 25,
  className=''
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap mb-4 max-w-[300px] ${className}`}>
      <motion.div
        className="flex gap-1 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <h2
            key={i}
            className="text-xs font-bold tracking-[0.3em] uppercase text-accent flex items-center gap-1"
          >
           <p>{text} </p> <span className="w-1 aspect-square rounded-full bg-accent h-1 inline-block"></span>
          </h2>
        ))}

        {[...Array(2)].map((_, i) => (
          <h2
            key={i}
            className="text-xs font-bold tracking-[0.3em] uppercase text-accent flex items-center gap-1"
          >
            <p>{text} </p>
            <span className="w-1 aspect-square rounded-full bg-accent h-1 inline-block"></span>
          </h2>
        ))}
      </motion.div>
    </div>
  );
};

export default SubHeaderMarquee;