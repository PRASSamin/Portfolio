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
import { EducationType } from "@/types";
import { GraduationCap } from "lucide-react";

type Props = {
  educations: EducationType[];
};

const EducationSection = ({ educations }: Props) => {
  return (
    <div data-section="education" className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-1 items-left">
        <h3
          data-type="title"
          className="text-left text-4xl lg:text-6xl font-semibold text-foreground"
        >
          Education
        </h3>
        <p
          data-type="description"
          className="text-muted-foreground text-sm lg:text-base text-left max-w-full md:max-w-[50%]"
        >
          A glimpse into my professional journey, highlighting key achievements
          and impactful experiences.
        </p>
      </div>
      <Timeline
        maxWidth={"max-w-full md:max-w-[500px]"}
        position="right"
        variant="outline"
        align="start"
      >
        {educations.map((edu: EducationType) => (
          <TimelineItem key={edu.id}>
            <TimelineIcon icon={<GraduationCap />} />
            <TimelineContent>
              <div className="flex flex-col gap-0.5">
                <TimelineTitle>{edu.school}</TimelineTitle>
                <TimelineRole>{edu.degree}</TimelineRole>
                <TimelinePeriod>{edu.period}</TimelinePeriod>
              </div>
              {edu.description && (
                <TimelineDescription>{edu.description}</TimelineDescription>
              )}
            </TimelineContent>
            <TimelineConnector />
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default EducationSection;
