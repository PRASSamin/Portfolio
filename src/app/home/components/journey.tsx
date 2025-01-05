import { ProjectType } from "@/types";

type Props = {
  totalProjects: string | number;
};

const JourneySection = ({ totalProjects }: Props) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h2 className="text-lg text-muted-foreground">My Journey So Far</h2>
      <div className="flex gap-3 w-full items-center justify-evenly ">
        <div className="flex items-center gap-3">
          <span className="text-5xl lg:text-6xl font-bold">
            {new Date().getFullYear() - 2020}
          </span>
          <span className="text-sm lg:text-base flex flex-col text-muted-foreground font-medium">
            YEARS OF <span>EXPERIENCE</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-5xl lg:text-6xl font-bold">
            {totalProjects}+
          </span>
          <span className="text-sm lg:text-base flex flex-col text-muted-foreground font-medium">
            PROJECTS
            <span>COMPLETED</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
