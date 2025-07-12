'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-2xl"
          transition={{ type: 'spring', damping: 50 }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          transition={{ type: 'spring', damping: 50 }}
        />
      </div>
      
      {/* Content */}
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-lg md:text-xl text-primary font-medium mb-4">Hi there, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Jason Saputra</span>
              {/* <span className="block mt-2">Web Developer</span> */}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Build digital solutions by blending technology with creative thinking — transforming ideas into engaging experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button> */}
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Scroll indicator moved below buttons and made relative */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center mt-10"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-5 w-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}