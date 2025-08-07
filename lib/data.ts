import { Project, Service, Skill } from '@/types';
import { CodeIcon, PenToolIcon, GlobeIcon } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'React', level: 99, category: ['frontend'], logo: '/images/react-icon.svg' },
  { name: 'Next.js', level: 99, category: ['frontend', 'backend'], logo: '/images/next-js.svg' },
  { name: 'JavaScript', level: 99, category: ['frontend', 'backend'], logo: '/images/javascript.svg' },
  { name: 'Tailwind CSS', level: 99, category: ['frontend'], logo: '/images/tailwind-css.svg' },
  { name: 'TypeScript', level: 99, category: ['frontend', 'backend'], logo: '/images/typescript.svg' },
  { name: 'HTML5', level: 99, category: ['frontend'], logo: '/images/html-5.svg' },
  { name: 'CSS3', level: 99, category: ['frontend'], logo: '/images/css-3.svg' },
  { name: 'Mantine', level: 99, category: ['frontend'], logo: '/images/mantine.svg' },

  { name: 'Figma', level: 99, category: ['design'], logo: '/images/figma.svg' },
  { name: 'Adobe Photoshop', level: 99, category: ['design'], logo: '/images/adobe-photoshop.svg' },
  { name: 'Canva', level: 99, category: ['design'], logo: '/images/canva.svg' },

  { name: 'BitBucket', level: 99, category: ['other'], logo: '/images/bit-bucket.svg' },
  { name: 'Visual Studio Code', level: 99, category: ['other'], logo: '/images/vs-code.svg' },
  { name: 'Source Tree', level: 99, category: ['other'], logo: '/images/source-tree.svg' },
  { name: 'Github', level: 99, category: ['other'], logo: '/images/github-white.svg' },
  { name: 'Postman', level: 99, category: ['other'], logo: '/images/postman.svg' },
  { name: 'Jenkins', level: 99, category: ['other'], logo: '/images/jenkins.svg' },
  { name: 'Notion', level: 99, category: ['other'], logo: '/images/notion-white.svg' },
  { name: 'Wordpress', level: 99, category: ['other'], logo: '/images/wordpress.svg' },
  { name: 'Bubble', level: 99, category: ['other'], logo: '/images/bubble.svg' },
  { name: 'Adobe Premier Pro', level: 99, category: ['other'], logo: '/images/adobe-premiere-pro.svg' },
];

export const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive and interactive user interfaces using modern web technologies like React and Next.js—focused on performance, accessibility, and seamless interaction.',
    icon: CodeIcon,
  },
  {
    title: 'Design & Creativity',
    description: 'Designing intuitive, visually engaging digital experiences with user-centered thinking. Ensuring usability, clarity, and aesthetic consistency across platforms.',
    icon: PenToolIcon,
  },
  {
    title: 'Web Application Development',
    description: 'Building custom web applications tailored to specific business needs and requirements.',
    icon: GlobeIcon,
  },
];

export const webProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Cranium Property',
    description: 'A responsive property listing website',
    longDescription: 'A responsive property listing website built using ReactJS, designed to display property information effectively and provide a seamless user experience',
    tags: ['React', 'Redux', 'CSS', 'PostgreSQL'],
    image: '/images/property-listing.png',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'AnimeVerse',
    description: 'A simple website for discovering and watching anime online',
    longDescription: 'AnimeVerse is a user-friendly platform that allows users to browse, search, and watch anime shows. The website provides an organized anime catalog, detailed show pages, and a smooth viewing experience—similar to common anime streaming sites.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Phosphor Icons', 'Lucide React'],
    image: '/images/animeverse.png',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'Vehicle Management System',
    description: 'A CMS for managing vehicle listings and bookings by partners',
    longDescription: 'A modern and efficient CMS designed for partner businesses to manage vehicle listings, bookings, and other essential details for the user-facing rental platform. Built with React.js, Tailwind CSS, and enhanced by the DaisyUI component library.',
    tags: ['React', 'PostgreSQL', 'Tailwind CSS', 'Daisy UI'],
    image: '/images/ezdrive-cms.png',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-4',
    title: 'EZDrive',
    description: 'A web app for browsing, searching, and booking rental vehicles',
    longDescription: 'A user friendly web application designed for customers to browse, search, and book vehicles for rent. Built with React.js and MUI for a sleek and modern.',
    tags: ['React', 'Redux', 'PostgreSQL', 'MUI'],
    image: '/images/ezdrive.png',
    link: 'https://example.com',
    github: 'https://github.com',
  },
];

export const designProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Instagram Feeds',
    description: 'Social media designs for esports and gaming content',
    longDescription: 'A collection of Instagram feed designs created for an event organizer.Each design was crafted to maintain visual consistency and appeal to the gaming audience.',
    tags: ['Adobe Photoshop'],
    image: '/images/feeds.jpg',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'Certificate',
    description: 'Custom achievement certificate design',
    longDescription: 'A digital certificate design. The layout emphasizes clarity, modern aesthetics, and branding consistency.',
    tags: ['Adobe Photoshop'],
    image: '/images/e-certificate.png',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-3',
    title: 'Astaga Logo Design',
    description: 'Logo design for a brand.',
    longDescription:'A modern logo created for "ASTAGA". The design combines sharp lines and aggressive angles to convey energy and strength.',
    tags: ['Adobe Illustrator'],
    image: '/images/astaga-logo.jpg',
    link: 'https://example.com',
    github: 'https://github.com',
  },
];
