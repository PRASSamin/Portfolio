import {
  Instagram,
  X,
  GitHub,
  LinkedIn,
  Facebook,
  WhatsApp,
  Telegram,
} from "@mui/icons-material";
import { Discord } from "../../../components/icons";
import Link from "next/link";

const SocialSection = () => {
  const socialHandles = [
    {
      name: "Github",
      icon: GitHub,
      link: "https://github.com/PRASSamin",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com/imprassamin/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com/prassamin7/",
    },
    {
      name: "Twitter",
      icon: X,
      link: "https://twitter.com/prassamin78",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/in/prassamin/",
    },
    {
      name: "Whatsapp",
      icon: WhatsApp,
      link: `/wa/${encodeURIComponent("Hello There")}`,
    },
    {
      name: "Telegram",
      icon: Telegram,
      link: "https://t.me/prassamin",
    },
    {
      name: "Discord",
      icon: Discord,
      link: "https://discord.gg/JF9uCS3Sy8",
    },
  ];

  return (
    <div data-section="social" className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-1 items-center">
        <h3
          data-type="title"
          className="text-center text-4xl lg:text-6xl font-semibold text-foreground"
        >
          Explore{" "}
          <span className="tracking-tight inline bg-clip-text text-transparent bg-gradient-to-b from-[#6FEE8D] to-[#17c964]">
            My
          </span>{" "}
          Online{" "}
          <span className="tracking-tight inline  bg-clip-text text-transparent bg-gradient-to-b  from-[#FF705B] to-[#FFB457]">
            Nexus
          </span>
        </h3>
        <p
          data-type="description"
          className="text-muted-foreground text-sm lg:text-base text-center"
        >
          Discover my presence across platforms and explore a world of
          creativity and inspiration.
        </p>
      </div>
      <div className="flex flex-wrap select-none items-center justify-center gap-4">
        {socialHandles.map((handle) => (
          <Link
            key={handle.name}
            href={handle.link}
            target="_blank"
            className="flex flex-col w-[105px] aspect-square items-center justify-center p-4 bg-background/50 backdrop-blur border border-border/40 rounded-md gap-2 hover:bg-muted dark:hover:bg-background hover:scale-105 transition-all duration-300"
          >
            <handle.icon size={24} fontSize="medium" />
            <span className="text-sm text-foreground font-medium">
              {handle.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
