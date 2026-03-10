

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useCursorContext } from "./CursorContext";
import SubHeaderMarquee from "./SubHeaderMarquee";
import { projects } from "./data.js";

const Projects = () => {
    const { setVariant } = useCursorContext();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
    id="projects"
      ref={containerRef}
      className="bg-black-1 text-white relative z-50 px-6 py-24 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">

        {/* Background Title */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="hidden lg:flex flex-col items-center justify-center absolute inset-0 pointer-events-none"
        >
         
           <SubHeaderMarquee text="Selected Works"/>
          <h3 className="text-[10vw] font-bold tracking-tighter uppercase text-white/5 leading-none">
            Projects
          </h3>
        </motion.div>

        {/* Header */}
        <div className="relative z-20 mb-24 lg:mb-32">
          
          <SubHeaderMarquee text="Portfolio" className="!max-w-[200px]"/>
          <h3 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Selected Works
          </h3>
        </div>

        {/* Projects */}
        <div className="space-y-10 relative z-20">
          {projects.map((project, idx) => {
            
            const isReverse = idx % 2 !== 0;

            return (
              <motion.div
                
                key={idx}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
              >

                {/* TEXT */}
                <motion.div
                   initial={{ opacity: 0,y:20 }}
  whileInView={{ opacity: 1,y:0 }}
   viewport={{ amount: 0.4 }}
                  className={`space-y-6 ${isReverse ? "lg:order-2" : ""}`}
                >
                  <p className="text-accent font-medium tracking-widest text-sm">
                    / {String(idx + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm uppercase tracking-widest text-white/50">
                    {project.type}
                  </p>

                  <p className="text-white/70 max-w-lg leading-relaxed">
                    {project.description}
                  </p>

                  {project.focus?.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      {project.focus.map((f, i) => (
                        <span
                          key={i}
                          className="text-[11px] uppercase tracking-wider text-white/50 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent/50" />
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4">
                    {project.links?.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                         onMouseEnter={ ()=>setVariant('hoverButton')}
                   onMouseLeave={ ()=>setVariant('default')}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}

                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                         onMouseEnter={ ()=>setVariant('hoverButton')}
                   onMouseLeave={ ()=>setVariant('default')}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-white hover:scale-110 transition"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  initial={{ rotate:isReverse?-10:10 , x: isReverse? -200:200 }}
  whileInView={{ rotate:0,x:0  }}
   viewport={{ amount: 0.4, once:true }}
                  className={`relative origin-center  ${isReverse ? "lg:order-1  " : " "}`}
                >
                  <div className="overflow-hidden aspect-video rounded-3xl border border-white/10 shadow-xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition duration-700"
                    />

                    {project.tech?.length > 0 && (
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur border border-white/10 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

