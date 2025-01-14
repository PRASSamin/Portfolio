import {
  Gmail,
  Cheers,
  Discord,
  Football,
  Plane,
  Music,
  Gamepad,
  ClapperBoard,
} from "../../../components/icons";
import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import ProgrammerAnimation from "../../../components/ProgrammerAnim";

const AboutMeSection = async () => {
  const Interests: {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    className?: string;
  }[] = [
    {
      name: "Movie",
      icon: ClapperBoard,
      className: "dark:bg-red-700 bg-red-700/60 border-red-700/90",
    },
    {
      name: "Music",
      icon: Music,
      className: "dark:bg-green-700 bg-green-700/60 border-green-700/90",
    },
    {
      name: "Gaming",
      icon: Gamepad,
      className: "dark:bg-blue-700 bg-blue-700/60 border-blue-700/90",
    },
    {
      name: "Conversation",
      icon: Discord,
      className: "dark:bg-indigo-700 bg-indigo-700/60 border-indigo-700/90",
    },
    {
      name: "Travel",
      icon: Plane,
      className: "dark:bg-orange-700 bg-orange-700/60 border-orange-700/90",
    },
    {
      name: "Football",
      icon: Football,
      className: "dark:bg-fuchsia-700 bg-fuchsia-700/60 border-fuchsia-700/90",
    },
    {
      name: "Heartfelt moments",
      icon: Cheers,
      className: "dark:bg-rose-700 bg-rose-700/60 border-rose-700/90",
    },
  ];

  return (
    <div data-section="aboutme" className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-1 items-cetner">
        <h3
          data-type="title"
          className="text-center text-4xl lg:text-6xl font-semibold text-foreground"
        >
          <span className="from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
            About
          </span>{" "}
          Me
        </h3>
        <p
          data-type="description"
          className="text-muted-foreground text-sm lg:text-base text-center"
        >
          Discover who I am, my story, and what inspires my journey through life
          and work.
        </p>
      </div>
      <div
        data-type="content"
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        <div className="flex flex-col gap-5 justify-center">
          <p>
            I&apos;m a web developer fully focused on web and Python development. I
            specialize in crafting dynamic websites and applications using{" "}
            <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>Django</strong>, and more.
            While I&apos;ve stepped away from Flutter, I&apos;m passionate about building
            modern, scalable, and engaging full-stack solutions. Follow along as
            I continue to grow in this field!
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 font-medium">
              <User size={24} />
              <Link href="/">
                <h1>PRAS Samin</h1>
              </Link>
            </div>
            <div className="flex gap-3 font-medium">
              <Gmail className="grayscale" size={24} />
              <Link
                aria-label="Email PRAS Samin"
                href="mailto:prassamin@gmail.com"
              >
                <h2>prassamin@gmail.com</h2>
              </Link>
            </div>
            <div className="flex gap-3 font-medium">
              <WhatsApp />
              <Link
                aria-label="Contact PRAS Samin"
                href={`/wa/${encodeURIComponent("Hello There")}`}
              >
                +880 1322-122109
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">My Interests</h2>
            <div className="flex flex-wrap gap-3">
              {Interests.map(({ name, icon: Icon, className }, index) => (
                <div
                  key={index}
                  className={cn(`rounded-full border`, className)}
                >
                  <span className="flex items-center gap-2 bg-transparent dark:bg-black/75 dark:backdrop-blur px-4 py-1 rounded-full capitalize font-medium">
                    <Icon />
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ProgrammerAnimation />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
