"use client";
import {
  Instagram,
  GitHub,
  Twitter,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
import { GmailIcon as Gmail } from "../../../components/icons/gmail";

const HeroSection = () => {
  const socialHandles = [
    {
      name: "Github",
      link: "https://github.com/PRASSamin",
      icon: GitHub,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/imprassamin/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      link: "https://facebook.com/prassamin7/",
      icon: Facebook,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/prassamin78",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prassamin/",
      icon: LinkedIn,
    },
    {
      name: "Email",
      link: "mailto:prassamin@gmail.com",
      icon: Gmail,
    },
  ];

  return (
    <div className="flex flex-col items-start min-h-[calc(100vh-65px)] justify-center gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl lg:text-6xl font-black">
          PRAS{" "}
          <span className="tracking-tight inline from-[#9809eb] to-[#ff5277] bg-clip-text text-transparent bg-gradient-to-b">
            Samin
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl ">Developer</h2>
        <p className={`w-full lg:w-1/2 text-lg text-muted-foreground`}>
          I&apos;m a web developer fully focused on web and Python development. I
          specialize in crafting dynamic websites and applications using React,
          Next.js, Tailwind CSS, Django, and more. While I&apos;ve stepped away from
          Flutter, I&apos;m passionate about building modern, scalable, and engaging
          full-stack solutions. Follow along as I continue to grow in this
          field!
        </p>
      </div>
      <div className="relative p-[3px] rounded-sm transition-all duration-1000 group after:rounded-sm after:-z-10 after:absolute after:w-full after:inset-0 after:p-[3px] after:bg-gradient-to-r after:from-[#9809eb] after:to-[#f441a5]  before:absolute before:inset-0 before:m-auto before:rounded-sm before:-z-10 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-[#9809eb] before:to-[#f441a5] before:blur-lg before:active:blur-sm">
        <button
          onClick={() => {
            window.open("/Resume - PRASSamin.pdf", "_blank");
          }}
          className="text-md py-2.5 px-3 rounded-sm border-none bg-black text-white cursor-pointer shadow-[2px_2px_3px_#000000b4]"
        >
          Resume
        </button>
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        {socialHandles.map(({ name, link, icon: Icon }) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={name}>
            <Icon
              className={`text-muted-foreground hover:text-foreground ${
                name === "Email" && "w-7 h-7 grayscale hover:grayscale-0"
              }`}
            />
            <span className="sr-only">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
