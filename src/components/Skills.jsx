import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";


const icons=[
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
]
const skills =[...icons,...icons] ;

const Skills = () => {
  return (
    <section className="bg-white relative z-100   py-10  lg:py-12 xl:py-14 grid gap-5 overflow-x-hidden">


<div className="max-w-7xl mx-auto ">
    {/* <h2 className="font-bold uppercase text-2xl lg:text-4xl xl:text-6xl mb-10 text-black-1 text-center px-5 lg:px-8">My Skills</h2> */}
      {/* Carousel Container */}
      <div className="overflow-hidden relative bg-black-1 py-8 -rotate-2 scale-x-110">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }} // move left
          transition={{
            repeat: Infinity,
            duration: 15,      // full scroll duration
            ease: "linear",    // continuous smooth
          }}
        >
          {/* Double the array for infinite feel */}
          {[...skills, ...skills].map((SkillIcon, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-white text-6xl"
            >
              <SkillIcon />
            </div>
          ))}
        </motion.div>
      </div>
</div>
    </section>
  );
};

export default Skills;
