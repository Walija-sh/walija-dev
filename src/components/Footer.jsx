import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import { useLayoutEffect, useRef, useState } from "react";
import FooterMarquee from "./FooterMarquee";
import RollingText from "./RollingText";
import { socialLinks } from "./data";
import { useCursorContext } from "./CursorContext";

const Footer = () => {
   const { setVariant } = useCursorContext();
    const footerRef=useRef(null);
    const marqueeRef = useRef(null);
const [marqueeH, setMarqueeH] = useState(0);

    const { scrollYProgress } = useScroll({
  target: footerRef,
  offset: ["start end", "end end"], 
});


useLayoutEffect(() => {
  if (!marqueeRef.current) return;

  const measure = () => {
    setMarqueeH(marqueeRef.current.offsetHeight);
  };

  measure();

  const ro = new ResizeObserver(measure);
  ro.observe(marqueeRef.current);

  return () => ro.disconnect();
}, []);

const yRaw = useTransform(scrollYProgress, [0, 1], [0, -marqueeH]);

// smooth spring
const y = useSpring(yRaw, {
  stiffness: 120,
  damping: 20,
  mass: 0.6,
});


  return (
    <footer ref={footerRef} className="relative">
        <motion.div style={{ y }} className="bg-black-2 relative z-100 text-white px-6 py-16 lg:py-24 border-t border-white/10">
        
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Profile */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-black font-bold text-lg overflow-hidden">
                <img src="/images/me.png" className="w-full h-full object-top object-cover" alt="" />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-wide">
                  Walija
                </h3>
                <p className="text-white/50 text-sm uppercase tracking-widest">
                  Creative Developer
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Building thoughtful interfaces and motion-driven digital
              experiences with focus on clarity, structure, and interaction.
            </p>

            <PrimaryButton
              href="mailto:your@email.com"
            text="Email Me"
            />
          </div>

          {/* RIGHT — Navigation */}
          <nav className="flex flex-col gap-y-4 text-3xl lg:text-4xl font-bold tracking-tight">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  
                  className="text-white/80 hover:text-accent transition"
                >
                 
                  <RollingText
  text={item}
  className="text-3xl lg:text-4xl "
/>

                </a>
              )
            )}
          </nav>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">

          <p>© {new Date().getFullYear()} All rights reserved</p>

         <div className="flex items-center gap-6 text-lg">
  {socialLinks.map(({ id, icon: Icon, url, label }) => (
    <a
      key={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
       onMouseEnter={() => setVariant("hoverButton")}
          onMouseLeave={() => setVariant("default")}
      className="hover:text-accent transition"
    >
      <Icon />
    </a>
  ))}
</div>
        </div>
      </div>
        </motion.div>
        <FooterMarquee ref={marqueeRef}/>
    </footer>
  );
};

export default Footer;
