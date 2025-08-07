'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download } from 'lucide-react';
import { services } from '@/lib/data';
import { Stat } from '@/types';

const descriptions = [
  "Passionate developer with a strong interest in building intuitive and engaging digital experiences. My journey in technology started during my college years, and since then, I've been committed to continuous learning and creating meaningful projects.",
  "While my main focus is developing modern frontend applications using React, Next.js, and TypeScript, I also enjoy exploring the creative side of technology—merging technical expertise with a good sense of visual design.",
] as string[];


const stats: Stat[] = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Completed' },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-28 relative overflow-hidden">      
      <div className="container px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Profile</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know about my background and the passion that fuels my work across technology, design, and digital innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-70" />
              <div className="relative w-30 aspect-square rounded-md overflow-hidden border border-border">                <Image 
                  src="/images/profile.jpeg" 
                  alt="Profile" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">About me</h3>
            {descriptions.map((desc, idx) => (
              <p className="text-muted-foreground mb-6" key={idx}>
                {desc}
              </p>
            ))}
            <div className="flex flex-wrap gap-6 mb-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h4 className="pl-1 font-bold text-lg">{stat.value}</h4>
                  <p className="pl-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/images/Resume Jason Saputra.pdf" download>
                  Download CV <Download className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the services I specialize in to help bring your digital vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}