import { motion } from "motion/react";
import { useState } from "react";
import { useCursorContext } from "./CursorContext";

const PrimaryButton = ({
  as = "a",                 
  href = "#",
  onClick,
  text = "View Resume",
  className = "",
  target = "_self",
  rel,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
    const { setVariant } = useCursorContext();

  const Component = as === "button" ? "button" : "a";

  // Split text into characters
  const chars = text.split("");



  return (
    <Component
      href={as === "a" ? href : undefined}
      onClick={as === "button" ? onClick : undefined}
      target={target}
      rel={rel}
      className={`
        relative inline-block overflow-hidden rounded-lg
        bg-accent text-white font-semibold uppercase text-[14px] lg:text-[16px] leading-none
        px-10 py-4 select-none hover:px-8 transition-all duration-75 ease-in
        ${className}
      `}
      onMouseEnter={() => {
        setHovered(true)
        setVariant('hoverButton')
      }}
      onMouseLeave={() => {
        setHovered(false)
         setVariant('default')
      }}
      {...props}
    >
     <span className="flex">
  {chars.map((char, i) => (
    <span
      key={i}
      className="relative inline-block overflow-hidden h-[1em]"
    >
      <motion.span
        className="flex flex-col"
        animate={{
          y: hovered ? "-1em" : "0%",
        }}
        transition={{
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
          delay: i * 0.035, // wave left → right
        }}
      >
        {/* TOP TEXT */}
        <span className="block leading-none">
          {char === " " ? "\u00A0" : char}
        </span>

        {/* BOTTOM TEXT (hover) */}
        <span className="block leading-none">
          {char === " " ? "\u00A0" : char}
        </span>
      </motion.span>
    </span>
  ))}
</span>

    </Component>
  );
};

export default PrimaryButton;
