import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const AboutSocials = () => {
  const links = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:youremail@example.com",
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center gap-5 text-2xl lg:text-3xl">
      {links.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="transition-transform duration-200 hover:scale-110"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default AboutSocials;
