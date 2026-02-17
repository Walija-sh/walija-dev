import React, { useState } from 'react'
import { motion } from "motion/react";
import {  FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import RollingText from './RollingText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className={`fixed top-0 left-0 right-0 z-1000000 ${isOpen? 'bg-black-2/10 backdrop-blur-2xl':''} px-6 py-4 `}>
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          {/* Logo/Name */}
            {/* <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm overflow-hidden">
              <img src="/images/me.png" className="w-full h-full object-top object-cover" alt="Z" />
            </div>
          */}

          
          {/* Right - Menu Icon */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <motion.div
              variants={topBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 lg:w-12 lg:h-1 bg-white/80 group-hover:bg-accent transition-colors"
            />
            <motion.div
              variants={middleBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 lg:w-12 lg:h-1 bg-white/80 group-hover:bg-accent transition-colors"
            />
            <motion.div
              variants={bottomBarVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-0.5 lg:w-12 lg:h-1 bg-white/80 group-hover:bg-accent transition-colors"
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
          <nav className="flex flex-col gap-y-6 text-4xl lg:text-5xl font-bold tracking-tight">
            {["HOME", "ABOUT ME", "PROJECTS", "PLAYGROUND", "CONTACT"].map(
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
              href="mailto:contact@zayla.com" 
              className="text-white/80 hover:text-accent transition text-lg inline-block"
            >
              contact@zayla.com
            </a>
            
            {/* Social Icons - Matching footer style */}
            <div className="flex items-center gap-6 text-lg mt-6">
              <a href="#" className="text-white/50 hover:text-accent transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      </nav>

    </>
  )
}

export default Navbar