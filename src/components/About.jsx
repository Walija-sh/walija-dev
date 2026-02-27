import React from 'react'
import PrimaryButton from './PrimaryButton'
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import HeroImage from './HeroImage';
import { MdWavingHand } from "react-icons/md";
import AboutSocials from './AboutSocials';
import SubHeaderMarquee from './SubHeaderMarquee';

const About = () => {
    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"], 
    // when About enters → when it reaches top
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]); 
  return (
    <motion.section
    ref={ref}
    id=''
      style={{ y }}
    className='bg-white text-black-1 relative z-100'>
      <div className="max-w-7xl mx-auto px-5 py-10 lg:px-8 lg:py-16 xl:py-25 grid gap-5 lg:grid-cols-2 items-center ">

        {/* content */}
        <div className="grid gap-5">
          <div className="">
            <SubHeaderMarquee text="ALWAYS LEARNING • ALWAYS BUILDING" className="!max-w-[200px]"/>
            <h2 className="font-bold uppercase text-2xl lg:text-4xl xl:text-6xl">About me</h2>
          </div>
            <p className="text-[16px] lg:text-[17px] xl:text-[18px] text-black-2 font-medium">
              
                I didn’t start with the goal of becoming a developer — I started with curiosity about how digital products actually work. That curiosity slowly turned into building, experimenting, and improving. <br />
Today, I’m a MERN stack developer and Software Engineering student at UET Taxila (CGPA 3.96). I focus on building responsive, structured, and practical web applications that are easy to use and easy to maintain. <br />
            </p>
            <AboutSocials/>
          
          <PrimaryButton as='a' href='#contact' text='Contact Me' className='w-fit' />
        </div>
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
                className='relative w-full max-w-[300px] mx-auto  z-10 hidden lg:block'>
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

      </div>
       
    </motion.section>
  )
}

export default About