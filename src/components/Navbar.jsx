import React, { useState } from 'react'
import { motion } from "motion/react";
import RollingText from './RollingText';
import { useCursorContext } from './CursorContext';
import { socialLinks } from './data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {setVariant} =useCursorContext();
   

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu icon animation variants
  const topBarVariants = {
    open: { rotate: 45, y: 8 },
    closed: { rotate: 0, y: 0 }
  };

  const middleBarVariants = {
    open: { opacity: 0, x: -10 },
    closed: { opacity: 1, x: 0 }
  };

  const bottomBarVariants = {
    open: { rotate: -45, y: -12 },
    closed: { rotate: 0, y: 0 }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 overflow-y-auto no-scrollbar z-1000000    px-6 py-4  ${isOpen ? 'bottom-0 lg:bottom-auto backdrop-blur-3xl bg-black-2/40':''}`}>
       {/* Gradient blur overlay */}
  <div 
    className={`absolute top-0 left-0 right-0 w-full h-full -z-10 ${isOpen ? 'hidden':''}`}
    style={{
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      mask: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
      WebkitMask: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }}
  />
  
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* left */}
                   <RollingText
                
  text='Walija.dev'
  className=" text-[16px] lg:text-[20px] leading-none font-bold hover:text-accent transition-all duration-100 ease-in uppercase"
/>
          
          {/* Right - Menu Icon */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.div
              variants={topBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className=" w-12 h-1 bg-white/80 group-hover:bg-accent transition-colors"
            />
            <motion.div
              variants={middleBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-12 h-1 bg-white/80 group-hover:bg-accent transition-colors"
            />
            <motion.div
              variants={bottomBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className=" w-12 h-1 bg-white/80 group-hover:bg-accent transition-colors"
            />
          </button>
        </div>
      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20, maxHeight:'0px' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none",
          maxHeight: isOpen ? "1000px" : "0px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=""
      >
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col  gap-6 lg:flex-row lg:justify-between lg:items-end">
          <nav className="flex flex-col gap-y-6 text-4xl lg:text-5xl font-bold tracking-tight uppercase">
            {["HOME", "ABOUT ME", "Experience", "Projects", "CONTACT"].map(
              (item, i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white/80 hover:text-accent transition group relative overflow-hidden"
                  onClick={toggleMenu}
                >
                  
                   
                  <RollingText
  text={item}
  className=" text-4xl lg:text-5xl leading-none "
/>
                </motion.a>
              )
            )}
          </nav>

          {/* Contact Info - Similar to footer style */}
          <div className="mt-16 pt-8 lg:mt-0 lg:pt-0">
            <p className="text-white/50 text-sm mb-4">Get in touch</p>
            <a 
              href="mailto:walijash@gmail.com" 
              className="text-white/80 hover:text-accent transition text-lg inline-block"
            >
              walijash@gmail.com
            </a>
            
            {/* Social Icons - Matching footer style */}
            <div className="flex items-center gap-6 text-lg mt-6">
             
               {socialLinks.map(({ id, icon: Icon, url, label }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                     onMouseEnter={() => setVariant("hoverButton")}
                        onMouseLeave={() => setVariant("default")}
                    className="text-white/50 hover:text-accent transition"
                  >
                    <Icon />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
      </nav>

    </>
  )
}

export default Navbar