import HomeView from "./home/view";
import { db } from "@/lib/db";
import { PROJECTSERIALIZER } from "@/lib/serializers";
import { metatag } from "@/lib/metatag";

export default async function Home() {
  const projects = PROJECTSERIALIZER(
    await db.project.findMany({
      orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
    })
  );
  const totalProjects = 200 + projects.length;
  return <HomeView totalProjects={totalProjects} projects={projects} />;
}

Home.DisplayName = "Home";

export const generateMetadata = () => {
  return metatag({
    pageTitle: "Home | PRAS Samin",
    robots: "index, follow",
  });
};
