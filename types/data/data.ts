export type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

export interface Skill {
  name: string;
  logo: string;
  level?: number;
  category?: string[];
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