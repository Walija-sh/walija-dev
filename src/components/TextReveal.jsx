import { motion } from "motion/react";

const TextReveal = ({ children, delay = 0, className }) => {
  // Split text by lines
  const lines = children.split("\n");

  return (
    <div className={`flex flex-col gap-1 ${className || ""}`}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.1, // stagger lines
              ease: "easeOut",
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
