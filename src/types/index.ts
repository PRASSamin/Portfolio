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
  createdAt: Date;
  updatedAt: Date;
};

export type ExperienceType = {
  id: number;
  company: string;
  role: string;
  description?: string;
  period: string;
  start: Date;
  end?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type EducationType = {
  id: number;
  school: string;
  degree: string;
  field: string;
  description?: string;
  period: string;
  start: Date;
  end?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type BlogType = {
  id: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};
