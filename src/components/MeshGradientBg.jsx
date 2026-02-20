import { motion } from "motion/react";

const Blob = ({ className, style, animate, transition }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    style={{
      background: "#4f7cff",
      filter: "blur(90px)",
      opacity: 0.35,
      willChange: "transform",
      ...style,
    }}
    animate={animate}
    transition={transition}
  />
);

const MeshGradientBg = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <Blob
        className="w-[30vw] h-[30vw]"
        style={{ top: "-15%", left: "-15%" }}
        animate={{
          x: ["0%", "60%", "-60%", "0%"],
          y: ["0%", "50%", "80%", "0%"],
          scale: [1, 1.25, 0.9, 1],
          rotate: [0, 30, -20, 0],
          opacity: [0.35, 0.45, 0.3, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <Blob
        className="w-[40vw] h-[40vw]"
        style={{ bottom: "-20%", right: "-15%" }}
        animate={{
          x: ["0%", "-50%", "40%", "0%"],
          y: ["0%", "-40%", "30%", "0%"],
          scale: [1, 0.85, 1.3, 1],
          rotate: [0, -25, 15, 0],
          opacity: [0.35, 0.3, 0.45, 0.35],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 */}
      <Blob
        className="w-[28vw] h-[28vw]"
        style={{ top: "35%", left: "40%" }}
        animate={{
          x: ["0%", "40%", "-50%", "0%"],
          y: ["0%", "-30%", "40%", "0%"],
          scale: [1, 1.2, 0.85, 1],
          rotate: [0, 20, -15, 0],
          opacity: [0.35, 0.4, 0.3, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MeshGradientBg;