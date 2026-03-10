

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useCursorContext } from "./CursorContext";
import SubHeaderMarquee from "./SubHeaderMarquee";
const projects = [
 
{
  title: "Invoila",
  type: "Client & Invoice Management System",
  description: "A comprehensive MERN stack application for managing clients and invoices. Invoila allows users to organize client information, track invoice statuses (paid, unpaid, overdue), and manage payment methods. The system provides a clean dashboard for viewing all invoices with filtering capabilities, detailed client management with contact information, and customizable account settings including currency preferences and security options.",
  focus: [
    "Client Information Management",
    "Invoice Tracking & Status Filtering",
    "Payment Method Configuration",
    "Account & Security Settings"
  ],
  tech: [
    "React",
    "React Router",
    "React Context API",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB & Mongoose",
    "Vite"
  ],
  links: {
    repo: "https://github.com/Walija-sh/Invoila",
    live: "https://invoila-frontend.vercel.app/"
  },
  image: "/images/projects/invoila2.png"
},
{
  title: "Forever",
  type: "E-Commerce Platform (MERN)",
  description: "A full-stack e-commerce platform with separate customer-facing store and admin dashboard for product and order management.",
  focus: [
    "Product Catalog",
    "Admin Dashboard",
    "Inventory Management",
    "Filter & Sort System"
  ],
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "Tailwind CSS",
    "JWT Authentication",
    "REST API"
  ],
  links: {
    repo: "https://github.com/Walija-sh/Forever-Ecommerce-Mern",
    live: "https://forever-frontend-lime-rho.vercel.app"

    // {
    //   frontend: "https://forever-frontend-lime-rho.vercel.app",
    //   admin: "https://forever-admin-omega-red.vercel.app"
    // }
  },
  image: "/images/projects/forever.png"
},{
  title: "CozyChecklist",
  type: "Task Management MERN Application",
  description: "A calm and friendly task management web app with priority-based sorting and user authentication, featuring a cozy UI for managing daily tasks without pressure.",
  focus: [
    "Task Management",
    "Priority Filtering",
    "User Authentication",
    "Optimistic UI Updates"
  ],
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "JWT Authentication",
    "Tailwind CSS",
    "React Router",
    "Axios"
  ],
  links: {
    repo: "https://github.com/Walija-sh/COZYCHECKLIST_TODO_MERN",
    live: "https://cozychecklist-todo-mern.vercel.app"
  },
  image: "/images/projects/cozyChecklist.png",
},
{
  title: "MyDay",
  type: "Visual Daily Planner",
  "description": "A friendly, visual daily planner designed for autistic youth to build routines, reduce anxiety, and celebrate daily tasks with a gentle, clutter-free interface.",
  focus: [
    "Visual Routine Builder",
    "User Authentication",
    "Progress Tracking",
    "Minimalist UI"
  ],
  tech: [
    "React",
    "Firebase (Auth & Firestore)",
    "Redux",
    "Tailwind CSS"
  ],
  links: {
    repo: "https://github.com/Walija-sh/My-Day",
    live: "https://my-day-beige.vercel.app"
  },
  image: "/images/projects/myday.png"
},
{
  title: "YouTube Clone",
  type: "React Video Streaming Platform",
  description: "A responsive YouTube-inspired video platform that allows users to browse trending videos, search content, explore channels, and view detailed video information using real-time data from the YouTube Data API.",
  focus: [
    "Video Discovery & Search",
    "Dynamic Routing",
    "API Data Fetching",
    "Skeleton Loading UI",
    "State Management with Context API"
  ],
  tech: [
    "React",
    "React Router",
    "Context API",
    "YouTube Data API v3",
    "CSS"
  ],
  links: {
    repo: "https://github.com/Walija-sh/Youtube-Clone",
    live: "https://youtube-clone-nine-ivory.vercel.app/"
  },
  image: "/images/projects/youtube.png"
},
 {
  title: "Techzo",
  type: "E-commerce Product Platform",
  description: "Responsive e-commerce website simulating a real-world shopping experience with dynamic product interaction, cart management, and API-based product data.",
  focus: [
    "Responsive Design",
    "Cart Management",
    "API Integration",
    "DOM Manipulation",
    "LocalStorage Persistence"
  ],
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "DummyJSON API",
    "LocalStorage"
  ],
  links: {
    repo: "https://github.com/Walija-sh/Techzo-Ecommerce-Platform",
    live: "https://techzo-ecommerce-platform.vercel.app/"
  },
  image: "/images/projects/techzo.png"
},

{
  title: "Sizzling Spoon",
  type: "Restaurant Website with Interactive UI",
  description: "A visually appealing restaurant website built with React and Tailwind CSS, featuring a dynamic menu, cart functionality, search and filter options, smooth GSAP animations, and an intuitive user interface for an engaging food ordering experience.",
  focus: [
    "Menu Search & Filter",
    "Cart Management",
    "GSAP Animations",
    "Responsive Design",
    "State Management with Redux"
  ],
  tech: [
    "React",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Router",
    "GSAP",
    "Swiper.js"
  ],
  links: {
    repo: "https://github.com/Walija-sh/Sizzling-Spoon",
    live: "https://sizzling-spoon.vercel.app/"
  },
  image: "/images/projects/sizzling-spoon.png"
},

];
// add yt clone and rejouice
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

