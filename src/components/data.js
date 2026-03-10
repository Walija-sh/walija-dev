import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export const socialLinks = [
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/Walija-sh",
    label: "GitHub",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/syeda-walija-hassan-150ab5255/",
    label: "LinkedIn",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/walija._.hassan/",
    label: "Instagram",
  },
  {
    id: "email",
    icon: FaEnvelope,
    url: "mailto:walijash@gmail.com",
    label: "Email",
  },
];

export const projects = [
 
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

export const experiences = [
  {
    title: "Freelance Web Developer",
    duration: "2023 — Present",
    company: "Independent",
    description: [
      "Built responsive websites and landing pages for events and businesses.",
      "Focused on clean UI, performance, and modern frontend practices.",
      "Continuously expanding into full-stack development."
    ],
  },
  {
    title: "Web Development Intern",
    duration: "Jul 2025 — Sep 2025",
    company: "OutSecure",
    description: [
      "Completed multiple individual projects using JavaScript, React, Firebase, and the MERN stack.",
      "Built a JavaScript eCommerce interface and a React invoice management system.",
      "Developed a Firebase-powered visual day planner for autistic users.",
      "Attended technical sessions and applied modern development workflows."
    ],
  },
];
