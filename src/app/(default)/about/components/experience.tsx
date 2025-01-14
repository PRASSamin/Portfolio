"use client";
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineTitle,
  TimelinePeriod,
  TimelineRole,
  TimelineDescription,
  TimelineConnector,
} from "@/app/components/timeline";
import { BriefcaseBusinessIcon as Briefcase } from "lucide-react";
import { ExperienceType } from "@/types";

type Props = {
  experiences: ExperienceType[];
};

const ExperienceSection = ({ experiences }: Props) => {
  return (
    <div data-section="experience" className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-1 items-left">
        <h3
          data-type="title"
          className="text-left text-4xl lg:text-6xl font-semibold text-foreground"
        >
          Experience
        </h3>
        <p
          data-type="description"
          className="text-muted-foreground text-sm lg:text-base text-left max-w-full md:max-w-[50%]"
        >
          A brief overview of my academic milestones and achievements that
          define my expertise.
        </p>
      </div>
      <Timeline
        maxWidth={"max-w-full md:max-w-[500px]"}
        position="right"
        variant="outline"
        align="start"
      >
        {experiences.map((exp: ExperienceType) => (
          <TimelineItem key={exp.id}>
            <TimelineIcon icon={<Briefcase />} />
            <TimelineContent>
              <div className="flex flex-col gap-0.5">
                <TimelineTitle>{exp.company}</TimelineTitle>
                <TimelineRole>{exp.role}</TimelineRole>
                <TimelinePeriod>{exp.period}</TimelinePeriod>
              </div>
              {exp.description && (
                <TimelineDescription>{exp.description}</TimelineDescription>
              )}
            </TimelineContent>
            <TimelineConnector />
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceSection;
