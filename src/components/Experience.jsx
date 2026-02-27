
import { motion, useScroll, useSpring, useTransform } from "motion/react"; 
import { useEffect, useRef, useState } from "react";
import SubHeaderMarquee from "./SubHeaderMarquee";
const experiences = [
  {
    title: "Freelance Web Developer",
    duration: "2023 — Present",
    company: "Independent",
    description: [
      "I began freelancing to apply theory to real-world problems — building practical web solutions for clients across different domains.",
      "Event and platform websites",
      "Landing and business sites",
    ],
  },
  {
    title: "Web Development Intern",
    duration: "Jul 2025 — Sep 2025",
    company: "OutSecure",
    description: [
      "Worked in a structured development environment contributing to frontend systems.",
      "Built responsive React components",
      "Worked in team workflow",
      "Delivered features under deadlines",
    ],
  },
];

const Experience = () => {
  const [isLargeScreen,setIsLargeScreen]=useState(window.innerWidth > 1024)
const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawcardsY = useTransform(scrollYProgress, [0,0.5, 1], ["300%",'0%', "-100%"]);
  const cardsY=useSpring(rawcardsY,{ stiffness: 120,damping:20 })

useEffect(() => {
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  handleResize(); 

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

 
  

  return (
    <section id="experience" ref={containerRef} className="bg-black-2 relative z-50 px-6 py-20 lg:py-32 text-white">
   <div className="max-w-7xl mx-auto relative">

        {/* floating header */}
        <motion.div 
          
          className="hidden lg:flex flex-col items-center justify-center absolute top-[50%] translate-y-[-50%] pointer-events-none left-0 w-full text-center "
        >
          
          <SubHeaderMarquee text="Professional Journey" className="!max-w-[250px]"/>
          <h3 className="text-[10vw] font-bold tracking-tighter uppercase  leading-none text-center  text-white">
            My Experience
          </h3>
        </motion.div>

        {/* Mobile Header (Standard) */}
        <div className="lg:hidden mb-12">
           <SubHeaderMarquee text="Professional Journey" className="!max-w-[200px]"/>
           <h3 className="text-4xl font-bold uppercase">My Experience</h3>
        </div>

        {/* Experience Timeline */}
      <motion.div
      style={{y:isLargeScreen?cardsY:0}}
      className="relative md:ml-0 flex flex-col gap-5">
  {experiences.map((exp, idx) => {
    // Determine side for large screens
    const isRight = idx % 2 === 0; // even → right, odd → left

    return (
      <motion.div
        key={idx}
        className={`relative cursor-pointer lg:max-w-[35%] ${
          isRight ? "lg:ml-auto" : "lg:mr-auto"
        }`}
        initial={{ opacity: 0, x: isRight ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
      >
        <motion.div
          
          className="group p-8 rounded-2xl bg-black-2/10 backdrop-blur-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:border-accent/30 transition-colors duration-500"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                {exp.title}
              </h3>
              <p className="text-gray-2 text-sm font-medium uppercase tracking-wide">
                {exp.company}
              </p>
            </div>
            <span className="text-sm font-semibold text-gray-1 ">
              {exp.duration}
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-3">
            {exp.description.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-2 text-sm leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {line.replace("• ", "")}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    );
  })}
</motion.div>

   </div>
      
    </section>
  );
};

export default Experience;