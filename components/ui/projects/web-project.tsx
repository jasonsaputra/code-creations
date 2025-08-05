'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { webProjects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function WebProjects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const currentProject = webProjects.find(p => p.id === selectedProject);
  
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {webProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="group-hover:scale-105 transition-transform duration-500 object-cover"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button onClick={() => setSelectedProject(project.id)}>
                  View Details
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {/* <div className="flex gap-4">
                {project.github && (
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {currentProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{currentProject.title}</DialogTitle>
              <DialogDescription>{currentProject.description}</DialogDescription>
            </DialogHeader>
            
            <div className="relative h-64 md:h-96 rounded-md overflow-hidden my-4">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-contain"
              />
            </div>
            
            <p className="text-muted-foreground mb-3">
              {currentProject.longDescription}
            </p>
            
            {/* <div className="flex gap-4 justify-end">
              {currentProject.github && (
                <Button variant="outline" asChild>
                  <Link href={currentProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View Code
                  </Link>
                </Button>
              )}
              {currentProject.link && (
                <Button asChild>
                  <Link href={currentProject.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit Project
                  </Link>
                </Button>
              )}
            </div> */}
          </DialogContent>
        )}
      </Dialog>
    </React.Fragment>
  );
}