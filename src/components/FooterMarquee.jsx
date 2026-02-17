import { motion } from "motion/react";

const FooterMarquee = ({ref}) => {
  const textItems = [
    "SYEDA WALIJA HASSAN",
    "CREATIVE DEVELOPER",
    "INTERFACE • MOTION • EXPERIENCE",
    "BUILDING DIGITAL SYSTEMS",
  ];

  // duplicate for seamless loop
  const loopItems = [...textItems, ...textItems];

  return (
    <div ref={ref} className="bg-accent text-black overflow-hidden select-none absolute bottom-0 left-0 right-0 py-5 z-10">
      <motion.div
        className="flex gap-16 whitespace-nowrap font-bold 
                   text-4xl sm:text-5xl lg:text-[100px] xl:text-[180px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {loopItems.map((text, i) => (
          <span key={i} className="tracking-tight">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default FooterMarquee;
