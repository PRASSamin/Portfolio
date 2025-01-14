"use client";
import HeroSection from "./components/hero";
import ServiceSection from "./components/services";
import React from "react";
import JourneySection from "./components/journey";
import { ProjectType } from "@/types";
import ProjectSection from "./components/project";

type Props = {
  totalProjects: string | number;
  projects: ProjectType[];
};

const HomeView: React.FC<Props> = ({ totalProjects, projects }) => {
  return (
    <div
      className={`flex flex-col items-center w-[calc(100vw-2rem)] lg:container mx-auto`}
    >
      <HeroSection />
      <div className="flex flex-col gap-28 w-full">
        <ServiceSection />
        <JourneySection totalProjects={totalProjects} />
        <ProjectSection projects={projects} />
      </div>
    </div>
  );
};

export default HomeView;