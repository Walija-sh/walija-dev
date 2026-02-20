import { useCursorContext } from "./CursorContext";
import { socialLinks } from "./data";

const AboutSocials = () => {
  const { setVariant } = useCursorContext();

  return (
    <div className="flex items-center gap-5 text-2xl lg:text-3xl">
      {socialLinks.map(({ id, icon: Icon, url, label }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onMouseEnter={() => setVariant("hoverButton")}
          onMouseLeave={() => setVariant("default")}
          className="transition-transform duration-200 hover:scale-110"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default AboutSocials;