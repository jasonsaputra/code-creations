import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

interface FooterLink {
  name: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/jasonsaputra',
    icon: Github,
    external: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jason-saputra/',
    icon: Linkedin,
    external: true,
  },
  {
    name: 'Email',
    href: 'mailto:jasonsaputra08@gmail.com',
    icon: Mail,
  },
];

const navigationLinks: FooterLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container px-4 py-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Code Creations</h3>
            <p className="text-muted-foreground max-w-xs">
              Personal portfolio showcasing web development skills, creative work, and featured projects
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}