"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SkillCategory } from "@/types";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Skills() {
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState<SkillCategory>("all");
  const { theme } = useTheme();

  const filteredSkills = skills.filter(
    (skill) => category === "all" || skill.category?.includes(category),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-28 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies that I rely on to code, create, and
            collaborate.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(
            ["all", "frontend", "backend", "design", "other"] as SkillCategory[]
          ).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
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

              if (skill.name === "Github") {
                return theme === "dark"
                  ? "/images/github-white.svg"
                  : "/images/github.svg";
              }

              if (skill.name === "Notion") {
                return theme === "dark"
                  ? "/images/notion-white.svg"
                  : "/images/notion.svg";
              }

              return skill.logo;
            })();

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.01,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative"
              >
                {/* Glow */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  className="
                    absolute
                    -inset-1
                    rounded-2xl
                    blur-2xl
                    opacity-5
                    group-hover:opacity-40
                    transition-all
                    duration-100
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#8B5CF6, #FFFFFF,#60A5FA,#3B82F6)",
                  }}
                />

                {/* Rainbow Border */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    relative
                    rounded-2xl
                    p-[2px]
                    overflow-hidden
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,#FF003C, #FF6B00, #FFD500, #00FF85, #00A2FF)",
                    backgroundSize: "300% 300%",
                  }}
                >
                  {/* Content */}
                  <div
                    className="
                      rounded-[14px]
                      bg-card/95
                      backdrop-blur-md
                      px-5
                      py-8
                      flex
                      flex-col
                      items-center
                      justify-center
                      min-h-[170px]
                      transition-all
                      duration-100
                    "
                  >
                    <div className="w-14 h-14 flex items-center justify-center mb-4">
                      <Image
                        src={logo}
                        alt={skill.name}
                        width={50}
                        height={50}
                        className="
                          w-full
                          h-full
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
