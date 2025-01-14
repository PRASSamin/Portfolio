import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { BetterImage } from "@prass/betterimage/components";
import ExpandableText from "../../../components/ReadMore";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { GitHub, SlowMotionVideo } from "@mui/icons-material";
import { ProjectType } from "@/types";

type Props = {
  projects: ProjectType[];
};

const ProjectSection: React.FC<Props> = ({ projects }) => {
  return (
    <div
      className={`flex flex-col gap-10 items-center mb-14`}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#000000] to-[#979797] dark:from-[#353535] dark:to-[#ffffff] !leading-normal">
          Projects
        </h2>
        <p className="text-muted-foreground">
          Here are some of the projects I have worked on.
        </p>
      </div>
      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent>
          {projects.slice(0, 4).map((project, i) => {
            return (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                key={project.id}
              >
                <Card className="h-full flex flex-col justify-between">
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
              </CarouselItem>
            );
          })}
          {projects.length > 4 && (
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4 m-auto">
              <Link className="hover:underline" href={"/projects"}>
                ALL PROJECTS
              </Link>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
};

export default ProjectSection;
