import { format } from "date-fns";

export const PROJECTSERIALIZER = (projects: any) => {
  return projects.map((project: any) => {
    return {
      id: project.id,
      title: project.title,
      description: project?.description,
      image: project.image,
      category: project.category,
      link: {
        github: project?.github,
        live: project?.live,
      },
      createdAt: project.createdAt
        ? format(project.createdAt, "yyyy-MM-dd")
        : null,
      updatedAt: project.updatedAt
        ? format(project.updatedAt, "yyyy-MM-dd")
        : null,
    };
  });
};
