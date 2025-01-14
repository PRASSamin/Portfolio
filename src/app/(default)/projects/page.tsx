import { db } from "@/lib/db";
import { metatag } from "@/lib/metatag";
import { PROJECTSERIALIZER } from "@/lib/serializers";
import ProjectPageView from "./view";

const ProjectPage = async () => {
  const projects = PROJECTSERIALIZER(
    await db.project.findMany({
      orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
    })
  );
  return <ProjectPageView projects={projects} />;
};

ProjectPage.displayName = "ProjectPage";

export default ProjectPage;

export const generateMetadata = async () => {
  return metatag({
    pageTitle: "Projects | PRAS Samin",
    robots: "index, follow",
  });
};
