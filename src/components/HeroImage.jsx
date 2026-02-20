import { useEffect, useRef } from 'react';
import { useCursorContext } from './CursorContext';
import {motion} from 'motion/react'

const HeroImage = ({ className = "" }) => {
  const containerRef = useRef(null);
  const { setVariant } = useCursorContext();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`}
      style={{ "--x": "50%", "--y": "50%" }}
      onMouseEnter={() => setVariant('hoverImage')}
      onMouseLeave={() => setVariant('default')}
    >
      <img
        src='/images/me.png'
        alt=""
        className="w-full h-full object-cover object-top block"
      />
      <img
        src='/images/animatedMe.png'
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none reveal-mask"
      />
    </motion.div>
  );
};

export default HeroImage;
