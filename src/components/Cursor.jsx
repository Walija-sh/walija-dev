// src/components/CustomCursor.jsx
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useCursorContext } from './CursorContext';

const Cursor = () => {
  const { cursorVariant } = useCursorContext();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  // Reference to HeroImage anime layer
  const heroImageRef = useRef(null);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: '#4f7cff',
      border: 'none',
      borderRadius: '100%',
      boxShadow: 'none',
    },
    hoverText: {
    scale: 3, // bigger for text reveal
    backgroundColor: '#000',
    borderRadius: '50%',
    boxShadow: '0 0 20px rgba(238,255,0,0.3)',

    // this is important: mask effect will follow cursor
  },
  hoverButton: {
    scale: 3, // bigger for text reveal
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border:'1px solid #4f7cff',
    boxShadow: '0 0 20px rgba(238,255,0,0.3)',
    // this is important: mask effect will follow cursor
  },
    hoverImage: {
      scale: 0,
      backgroundColor: '#4f7cff',
      border: 'none',
      borderRadius: '50%',
      boxShadow: '0 0 20px rgba(238,255,0,0.5)',
      // Animate HeroImage anime layer as well
      onUpdate: () => {
        if (heroImageRef.current) {
          animate(
            heroImageRef.current,
            { scale: 1.05, filter: 'saturate(1.3) contrast(1.2) brightness(1.1)' },
            { duration: 0.3 }
          );
        }
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

const cursorClass =
    cursorVariant === 'hoverText'
      ? 'mix-blend-difference'
      : '';
  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none   mix    z-99990 w-6 h-6 ${cursorClass}`}
        style={{ translateX: cursorX, translateY: cursorY }}
        animate={cursorVariant}
        variants={variants}
      />
      {/* Hidden ref for HeroImage animation */}
      <div ref={heroImageRef} style={{ display: 'none' }} />
    </>
  );
};

export default Cursor;
