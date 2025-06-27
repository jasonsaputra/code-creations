'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

export function Skills() {
  const [category, setCategory] = useState<SkillCategory>('all');
  
  const filteredSkills = skills.filter(
    skill => category === 'all' || skill.category === category
  );
  
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'frontend', 'backend', 'design', 'other'] as SkillCategory[]).map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{skill.name}</h3>
                <Badge variant={
                  skill.category === 'frontend' ? 'default' :
                  skill.category === 'backend' ? 'secondary' :
                  skill.category === 'design' ? 'outline' : 'default'
                }>
                  {skill.category}
                </Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}