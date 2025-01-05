export type ProjectType = {
  id: number;
  title: string;
  description?: string;
  image: string;
  link: {
    github?: string;
    live?: string;
  };
  category: string;
};
