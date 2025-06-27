import { CodeIcon, PenToolIcon, LayersIcon, GlobeIcon } from 'lucide-react';

export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TailwindCSS', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
  { name: 'PostgreSQL', level: 60, category: 'backend' },
  { name: 'UI/UX Design', level: 75, category: 'design' },
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'Git', level: 80, category: 'other' },
  { name: 'Docker', level: 60, category: 'other' },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and TypeScript',
    longDescription: 'This project is a fully featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration. Built with Next.js, TypeScript, and TailwindCSS for the frontend, with a Node.js backend and MongoDB database.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js'],
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects',
    longDescription: 'A collaborative task management application designed to help teams organize and track their work. Features include task creation, assignment, due dates, comments, file attachments, and real-time updates.',
    tags: ['React', 'Redux', 'Express', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'AI Image Generator',
    description: 'An application that generates images using AI',
    longDescription: 'This project leverages OpenAI\'s DALL-E API to generate images from text descriptions. Users can enter prompts and receive AI-generated images, which they can save and share with others. Built with React and Node.js.',
    tags: ['React', 'Node.js', 'OpenAI API', 'AWS'],
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-4',
    title: 'Personal Finance Dashboard',
    description: 'A dashboard for tracking personal finances and investments',
    longDescription: 'A comprehensive personal finance dashboard that helps users track expenses, income, investments, and financial goals. Features include data visualization, budget planning, and transaction categorization.',
    tags: ['Vue.js', 'Chart.js', 'Firebase', 'Tailwind'],
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg',
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern JavaScript frameworks like React and Next.js.',
    icon: CodeIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user experiences with a focus on usability and accessibility.',
    icon: PenToolIcon,
  },
  {
    title: 'Full Stack Development',
    description: 'Developing end-to-end solutions with integrated frontend and backend technologies.',
    icon: LayersIcon,
  },
  {
    title: 'Web Application Development',
    description: 'Building custom web applications tailored to specific business needs and requirements.',
    icon: GlobeIcon,
  },
];