import { motion } from "motion/react";

const Blob = ({ className, style, animate, transition }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    style={{
      background: "#4f7cff",
      filter: "blur(120px)",
      opacity: 0.35,
      ...style,
    }}
    animate={animate}
    transition={transition}
  />
);

const MeshGradientBg = () => {
  return (
    <div className="absolute inset-0 z-6 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <Blob
        className="w-[20vw] h-[20vw]"
        style={{ top: "-10%", left: "-10%" }}
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "10%", "25%", "0%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <Blob
        className="w-[35vw] h-[35vw]"
        style={{ bottom: "-15%", right: "-10%" }}
        animate={{
          x: ["0%", "-15%", "10%", "0%"],
          y: ["0%", "-20%", "5%", "0%"],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 */}
      <Blob
        className="w-[25vw] h-[25vw]"
        style={{ top: "40%", left: "35%" }}
        animate={{
          x: ["0%", "10%", "-20%", "0%"],
          y: ["0%", "-15%", "10%", "0%"],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MeshGradientBg;
