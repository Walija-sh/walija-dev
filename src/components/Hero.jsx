import React from 'react'
import PrimaryButton from './PrimaryButton'
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import HeroImage from './HeroImage';



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
    className='sticky top-[-50%] z-5 bg-black-2 min-h-screen  '>
      <div className="max-w-7xl mx-auto px-5 py-10 lg:px-8 lg:py-16 xl:py-25 grid gap-5  ">

        {/* img */}
        
        <div className="w-full max-w-[250px] mx-auto rounded-xl overflow-hidden bg-linear-to-b from-accent-gradient to-accent lg:hidden relative ">
  <HeroImage
    className="w-full h-full"
  />
</div>

        {/* content */}
        <div className="grid gap-2 text-center items-center justify-items-center lg:gap-4 relative ">
              <div className="relative lg:h-[350px] flex items-center justify-center">
                {/*img  */}
              <motion.div
  style={{
    width: size,
    height: size,
    borderRadius: radius,
  }}
  layout
  className="hidden lg:block overflow-hidden bg-linear-to-b from-accent-gradient to-accent absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  z-6"
>
   <HeroImage
    className="w-full h-full"
  />
</motion.div>
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