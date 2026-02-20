

import { motion } from "motion/react";

const PageLoader = () => {
  // Custom easing for a more "premium" feel
  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  return (
    <motion.div 
      className="fixed inset-0 z-[999999999999999999] flex pointer-events-none"
      exit={{ transition: { staggerChildren: 0.1 } }} // Staggers the exit of children
    >
      {/* Panel 1 */}
      <motion.div
        className="relative h-full w-full bg-accent origin-top"
        initial={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={transition}
      />
      
      <motion.div 
        className="absolute inset-0 flex items-center justify-center text-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold tracking-tighter">LOADING...</h1>
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
