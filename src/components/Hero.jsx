import React from 'react'
import PrimaryButton from './PrimaryButton'
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import HeroImage from './HeroImage';
import { MdWavingHand } from 'react-icons/md';
import MeshGradientBg from './MeshGradientBg';



const Hero = () => {
    const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
const rawsize = useTransform(scrollYProgress, [0, 0.25], [250, 50]);
const rawradius = useTransform(scrollYProgress, [0, 0.25], [16, 999]);

const size = useSpring(rawsize, { stiffness: 120, damping: 20 });
const radius = useSpring(rawradius, { stiffness: 120, damping: 20 });




  return (
    <section ref={ref}
    id='home'
    className='sticky top-[-50%] lg:top-[-20%] z-7 bg-black-2 min-h-screen  '>
      <MeshGradientBg/>
      <div className="max-w-7xl mx-auto  px-5 py-10 pt-40 lg:px-8 lg:py-16 xl:py-25 grid gap-5  ">

 {/* img container */}
                <motion.div
    animate={{
    y: [0, -14, 0],
    rotate: [0, 1.2, 0, -1.2, 0],
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 5,
    ease: "easeInOut",
    repeat: Infinity,
  }}
                className='relative w-full max-w-[300px] mx-auto  z-6 lg:hidden '>
                  {/* hi */}
                  <div className="bg-yellow-500 text-white rounded-full w-20 aspect-square flex items-center justify-center absolute -bottom-2 -left-10 z-20 ">
                    <div className="h-[24px] overflow-hidden text-2xl leading-none">
                      
                  <motion.div
  className="flex flex-col"
  animate={{ y: [0, -24, -24, 0, 0] }}
  transition={{
    duration: 6,              
    times: [0, 0.08, 0.5, 0.58, 1],
    ease: "easeInOut",
    repeat: Infinity,
  }}
>
   <p className="font-medium uppercase">Hi!</p>
   {/* Hand */}
  <motion.div
    className="origin-bottom"
    animate={{
      rotate: [0, 18, -12, 14, -8, 10, 0],   // natural wave sequence
    }}
    transition={{
      duration: 1.2,      // wave duration
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 4.8,   // 6s total - 1.2s wave → waves only when hand is up
    }}
  >
    <MdWavingHand className='-rotate-45' />
  </motion.div>

 
</motion.div>

                    </div>
                  </div>

                  {/* img */}
<div className="w-full  mx-auto rounded-xl overflow-hidden bg-linear-to-b from-accent-gradient to-accent  ">

  <HeroImage
    className="w-full h-full"
  />
</div>
</motion.div>

        {/* content */}
        <div className="grid gap-2 text-center items-center justify-items-center lg:gap-4 relative ">
              <div className="relative lg:h-[350px] flex items-center justify-center">
                
<h1 className='text-[32px] font-bold uppercase  text-balance lg:hidden relative'> MERN Stack Developer</h1>
 <h1 className="hidden lg:block font-bold uppercase  lg:text-9xl lg:text-black-2 text-balance relative">
    {"MERN Stack Developer".split("").map((char, i) => (
      <motion.span
        key={i}
        style={{
          color: useTransform(scrollYProgress, [0 + i*0.005, 0.1 + i*0.005], ["#000000", "#ffffff"])
        }}
      >
        {char}
      </motion.span>
    ))}
  </h1>
            </div>
           <div className='text-center grid gap-4 justify-items-center lg:max-w-[500px] lg:-mt-5 relative'> 
               <p className="text-[16px] text-gray-1 lg:text-white lg:text-xl font-medium capitalize">
                 I design and develop clean, responsive, and scalable web applications using the MERN stack — focused on real usability, performance, and maintainable code.
               </p>
             
          

            
          
            <PrimaryButton
  as="a"
  href="https://drive.google.com/file/d/10RMPcWMN5JjyteflG4yUpSKkptzemB7w/view"
  target="_blank"
  rel="noopener noreferrer"
  text="View Resume"
  
/>

           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero