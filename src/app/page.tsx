import HomeView from "./home/view";
import { db } from "@/lib/db";
import { PROJECTSERIALIZER } from "@/lib/serializers";

export default async function Home() {
  const projects = PROJECTSERIALIZER(
    await db.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  );
  const totalProjects = 200 + projects.length;

  return <HomeView totalProjects={totalProjects} projects={projects} />;
}
