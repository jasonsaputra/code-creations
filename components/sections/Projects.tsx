'use client';

import { motion } from 'framer-motion';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { WebProjects } from '../ui/projects/web-project';
import { DesignProjects } from '../ui/projects/design-project';
import { AppWindowIcon, CodeIcon } from "lucide-react"

export function Projects() {  
  return (
    <section id="projects" className="py-16 md:py-28 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>

          <Tabs defaultValue="web" className="w-full mt-8" >
            <TabsList className="bg-muted p-1 rounded-full shadow-md mb-8">
              <TabsTrigger
                value="web"
                className="px-4 py-2 rounded-full font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                <CodeIcon className="w-4 h-4 mr-2" />
                Web Projects
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="px-4 py-2 rounded-full font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
              >
                <AppWindowIcon className="w-4 h-4 mr-2" />
                Design Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web" className="mt-6">
              <div className="text-center text-muted-foreground"><WebProjects /></div>
            </TabsContent>
            <TabsContent value="design" className="mt-6">
              <div className="text-center text-muted-foreground"><DesignProjects /></div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}