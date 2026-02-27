import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import PrimaryButton from './PrimaryButton';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiVercel, SiFramer, SiMongodb, SiExpress, SiDotnet } from "react-icons/si";
import SubHeaderMarquee from './SubHeaderMarquee';

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Express", icon: <SiExpress />, color: "#000000" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JS", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "Vercel", icon: <SiVercel />, color: "#000000" },
  { name: "Motion", icon: <SiFramer />, color: "#FFFFFF" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
];

const Skills = () => {
  const ref = useRef(null);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [containerSize, setContainerSize] = useState(400); // Default

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // Update container size dynamically (responsive)
  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        const width = Math.min(Math.max(ref.current.offsetWidth, 300), 600); // clamp 300–600
        setContainerSize(width);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const radiusOuter = containerSize / 2.2;
  const radiusInner = containerSize / 3.5;

  const half = Math.ceil(skills.length / 2);
  const outerSkills = skills.slice(0, half);
  const innerSkills = skills.slice(half);

  // Automatic active skill cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill(prev => {
        const currentIndex = skills.findIndex(s => s.name === prev.name);
        return skills[(currentIndex + 1) % skills.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className='bg-black-2 text-white relative z-50 overflow-hidden mt-[-70px]'
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 lg:pt-32 grid gap-5 items-center">

        {/* Left Side: Content */}
        <div className="grid gap-6 lg:text-center items-center justify-center">
          <div className="">

          <SubHeaderMarquee text="TOOLS THAT POWER MY WORK" className="!max-w-[150px] lg:mx-auto" />
          <h2 className="font-bold uppercase text-3xl lg:text-5xl xl:text-7xl">My Skills</h2>
          </div>
          <p className="text-[16px] lg:text-[18px] text-gray-400 leading-relaxed max-w-xl">
            I specialize in the MERN stack and modern software architecture.
            My technical toolkit is focused on building scalable, high-performance
            applications with a strong emphasis on clean code and user experience.
          </p>
          <PrimaryButton as='a' href='#contact' text='Contact Me' className='w-fit mx-auto' />
        </div>

        {/* Right Side: Circular Orbit */}
        <div className="relative flex items-center justify-center max-w-[400px] min-h-[400px]  aspect-square my-20 mx-auto lg:my-30">
          {/* Inner Active Skill Display */}
          <motion.div
            key={activeSkill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-20 text-center flex flex-col items-center gap-2"
          >
            <div
              className="text-2xl lg:text-8xl p-3 lg:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              style={{ color: activeSkill.color }}
            >
              {activeSkill.icon}
            </div>
            <h3 className="text-xl font-bold mt-2">{activeSkill.name}</h3>
          </motion.div>

          {/* Orbit Circles */}
          <div
            className="absolute border border-white/5 rounded-full"
            style={{ width: containerSize, height: containerSize }}
          />
          <div
            className="absolute border border-white/10 rounded-full"
            style={{ width: containerSize * 0.7, height: containerSize * 0.7 }}
          />

          {/* Icons on Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            {/* Outer Orbit */}
            {outerSkills.map((skill, i) => {
              const angle = (i / outerSkills.length) * (2 * Math.PI);
              const x = Math.cos(angle) * radiusOuter;
              const y = Math.sin(angle) * radiusOuter;

              return (
                <motion.div
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(skill)}
                  style={{ x, y }}
                  className="absolute cursor-pointer p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="text-2xl lg:text-3xl text-white">{skill.icon}</div>
                </motion.div>
              );
            })}

            {/* Inner Orbit */}
            {innerSkills.map((skill, i) => {
              const angle = (i / innerSkills.length) * (2 * Math.PI) + Math.PI / innerSkills.length; // offset for zigzag
              const x = Math.cos(angle) * radiusInner;
              const y = Math.sin(angle) * radiusInner;

              return (
                <motion.div
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(skill)}
                  style={{ x, y }}
                  className="absolute cursor-pointer p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="text-2xl lg:text-3xl text-white">{skill.icon}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;