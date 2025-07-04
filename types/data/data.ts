export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
};

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
};

export interface Stat {
  value: string;
  label: string;
};