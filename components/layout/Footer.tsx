import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">portfolio<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-xs">
              A creative developer focused on building beautiful and functional web experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="mailto:hello@example.com" className="hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}