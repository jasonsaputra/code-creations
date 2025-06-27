'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Download } from 'lucide-react';
import { services } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent z-10" />
      
      <div className="container px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer.
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
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border">
                <Image 
                  src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg" 
                  alt="Profile" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
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
            <h3 className="text-2xl font-bold mb-4">Creative Web Developer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate web developer with over 5 years of experience creating innovative digital solutions. 
              My journey in tech began when I built my first website at 15, and I've been hooked ever since.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in building modern web applications using React, Next.js, and TypeScript. 
              My approach combines technical excellence with creative problem-solving to deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg">5+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">50+</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">20+</h4>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" download>
                  Download CV <Download className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Services */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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