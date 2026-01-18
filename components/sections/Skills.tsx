"use client";

import { Card } from "@/components/ui/Card";
import { skillCategories } from "@/lib/data/skills";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                <span className="text-muted-foreground">{"const "}</span>
                skills
                <span className="text-muted-foreground">{" = {"}</span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm">
                {"/* Technologies and tools I work with */"}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {skillCategories.map((category, categoryIndex) => (
                <FadeIn key={category.name} delay={0.1 + categoryIndex * 0.1}>
                  <Card className="h-full">
                    <div className="p-6">
                      {/* Category Name as Property */}
                      <h3 className="text-xl font-bold mb-4 font-mono">
                        <span className="text-secondary">{category.name.toLowerCase().replace(" ", "_")}</span>
                        <span className="text-muted-foreground">: [</span>
                      </h3>

                      {/* Skills as Array Items */}
                      <div className="flex flex-wrap gap-2 pl-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05,
                              duration: 0.3,
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            viewport={{ once: true }}
                          >
                            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-code-bg border border-border text-sm font-mono text-foreground hover:border-primary transition-colors cursor-default">
                              <span className="text-primary">&quot;</span>
                              {skill}
                              <span className="text-primary">&quot;</span>
                              {skillIndex < category.skills.length - 1 && (
                                <span className="text-muted-foreground">,</span>
                              )}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Closing Bracket */}
                      <p className="text-muted-foreground font-mono mt-4">
                        ]
                        {categoryIndex < skillCategories.length - 1 ? "," : ""}
                      </p>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>

            {/* Closing Brace */}
            <FadeIn delay={0.5}>
              <p className="text-muted-foreground font-mono text-2xl">{"}"}</p>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                {"// Continuously learning and expanding my toolkit"}
              </p>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
