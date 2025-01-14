"use client";
import { ProjectType } from "@/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BetterImage } from "@prass/betterimage/components";
import ExpandableText from "../../components/ReadMore";
import { GitHub, SlowMotionVideo } from "@mui/icons-material";

interface Props {
  projects: ProjectType[];
}

const ProjectPageView: React.FC<Props> = ({ projects }) => {
  return (
    <div className="my-8 min-h-[calc(100vh-45px-64px-(32px*2))] w-[calc(100vw-2rem)] lg:container mx-auto flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-4xl lg:text-6xl font-black leading-normal">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#9809eb] to-[#ff5277]">
            Project
          </span>
        </h1>
        <p className="text-muted-foreground text-center text-base lg:text-lg">
          A collection of projects that I have worked on
        </p>
      </div>
      {projects.length <= 0 ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {projects.map((project, i) => (
            <Card
              key={project.id}
              className="h-full flex flex-col justify-between"
            >
              <CardHeader className="p-4 h-full justify-between">
                <CardTitle className="flex items-center gap-2 relative min-h-56">
                  <BetterImage
                    className="rounded-md"
                    width={250}
                    height={250}
                    src={project.image}
                    alt={project.title}
                  />
                  <span
                    title="Category"
                    className="absolute top-2 right-2 bg-[#c869ff]/50 dark:bg-[#31004d]/50 text-white backdrop-blur px-2 py-1 rounded text-sm"
                  >
                    {project.category}
                  </span>
                  {i === 0 && (
                    <span className="absolute top-2 left-2 bg-lime-500/70 text-white backdrop-blur px-2 py-1 rounded text-sm">
                      New
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-md flex flex-col">
                  <h2 className="dark:text-white text-black">
                    {project.title}
                  </h2>
                  <ExpandableText
                    text={project?.description || ""}
                    maxLength={80}
                    className="text-muted-foreground dark:text-muted-foreground/50 text-sm"
                    expandButtonText="More"
                    collapseButtonText="Less"
                  />
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-1 items-center justify-between p-4 pt-0">
                {project?.link?.github && (
                  <Button
                    asChild
                    className="w-full bg-pink-700/50 hover:bg-pink-700/70 border-pink-600"
                    variant={"outline"}
                  >
                    <a
                      className="flex items-center"
                      target="_blank"
                      href={project.link.github}
                    >
                      <GitHub /> Github
                    </a>
                  </Button>
                )}
                {project?.link?.live && (
                  <Button
                    asChild
                    className="w-full bg-purple-700/30 hover:bg-purple-700/50 border-purple-600"
                    variant={"outline"}
                  >
                    <a
                      className="flex items-center"
                      target="_blank"
                      href={project.link.live}
                    >
                      <SlowMotionVideo /> Live
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

ProjectPageView.displayName = "ProjectPageView";

export default ProjectPageView;
