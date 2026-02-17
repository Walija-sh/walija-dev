

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
const projects = [
  {
    title: "YouTube Clone",
    type: "MERN / React System",
    description: "Built to understand real-time data handling and scalable frontend structure.",
    focus: ["Data flow", "UI structure", "Performance"],
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    links: { repo: "#", live: "#" },
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Katakomben",
    type: "Event Website",
    description: "Interactive event platform built with motion and animation-focused UI.",
    focus: ["UX", "Motion", "Responsive UI"],
    tech: ["Framer Motion", "Next.js", "GSAP"],
    links: { repo: "#", live: "#" },
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Securist",
    type: "Security Landing Page",
    description: "Clean, trust-focused landing page designed for clarity and structure.",
    focus: ["Layout", "UI clarity", "Performance"],
    tech: ["React", "Tailwind", "TypeScript"],
    links: { repo: "#", live: "#" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Renoventra",
    type: "Multi-Service Website",
    description: "Structured website supporting multiple service domains.",
    focus: ["Navigation", "Structure", "Usability"],
    tech: ["React", "Tailwind CSS", "Framer"],
    links: { repo: "#", live: "#" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  }
];

const Projects = () => {
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
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-accent/70 mb-4">
            Selected Works
          </h2>
          <h3 className="text-[10vw] font-bold tracking-tighter uppercase text-white/5 leading-none">
            Projects
          </h3>
        </motion.div>

        {/* Header */}
        <div className="relative z-20 mb-24 lg:mb-32">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-2">
            Portfolio
          </h2>
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
                  <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-700"
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

