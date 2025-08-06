'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SkillCategory } from '@/types';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Skills() {
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState<SkillCategory>('all');
  const { theme } = useTheme();

  const filteredSkills = skills.filter(
    skill => category === 'all' || skill.category?.includes(category)
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-28 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies that I rely on to code, create, and collaborate.
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => {
            const logo = (() => {
              if (!mounted) return skill.logo;
            
              if (skill.name === 'Github') {
                return theme === 'dark' ? '/images/github-white.svg' : '/images/github.svg';
              }
              if (skill.name === 'Notion') {
                return theme === 'dark' ? '/images/notion-white.svg' : '/images/notion.svg';
              }
              return skill.logo;
            })();

            return (
              <div
                key={skill.name}
                className="group rounded-xl p-[2px] transition-all duration-300 bg-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-600"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-[10px] p-6 flex flex-col items-center h-full transition-all duration-300 group-hover:shadow-xl"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4">
                    <Image
                      src={logo}
                      alt={skill.name}
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-center">{skill.name}</h3>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}