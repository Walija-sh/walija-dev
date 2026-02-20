import { motion } from "motion/react";
import { useEffect, useState } from "react";

const PageLoader = ({ loading }) => {
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    if (!loading) {
      setShowExit(true);
    }
  }, [loading]);

  return (
    <div className="fixed inset-0 z-[99999999999999] pointer-events-none">
      
      {/* Initial Cover */}
      {loading && (
        <motion.div
          className="absolute inset-0 bg-accent origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 1 }}
        />
      )}

      {/* Exit Animation */}
      {showExit && (
        <motion.div
          className="absolute inset-0 bg-accent origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default PageLoader;