"use client";

import { experiences } from "@/lib/data/experience";
import FadeIn from "@/components/animations/FadeIn";
import { Building2, MapPin, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                <span className="text-muted-foreground">{"$ git log "}</span>
                --career
              </h2>
              <p className="text-muted-foreground font-mono text-sm">
                {"/* Professional journey and experience */"}
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <FadeIn key={exp.id} delay={0.1 + index * 0.2}>
                  <div className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0">
                    {/* Commit Hash Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    {/* Git Commit Style */}
                    <div className="bg-surface border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      {/* Commit Header */}
                      <div className="font-mono text-sm mb-4">
                        <p className="text-secondary">
                          commit {exp.id.substring(0, 7)}{" "}
                          <span className="text-primary">(HEAD -&gt; career)</span>
                        </p>
                        <p className="text-muted-foreground mt-1">
                          Author: Sylvan Loves &lt;developer@x-interactive.nl&gt;
                        </p>
                        <p className="text-muted-foreground">
                          Date: {formatDate(exp.startDate)}
                          {exp.endDate ? ` - ${formatDate(exp.endDate)}` : " - Present"}
                        </p>
                      </div>

                      {/* Commit Message */}
                      <div className="border-t border-border pt-4">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          feat: {exp.title}
                        </h3>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-foreground/80 text-sm">
                              <span className="text-primary mr-2">+</span>
                              {desc}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-code-bg border border-border rounded text-xs font-mono text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Git Log Footer */}
            <FadeIn delay={0.5}>
              <div className="mt-8 p-4 bg-surface/50 border border-border rounded-lg">
                <p className="font-mono text-sm text-muted-foreground">
                  <span className="text-primary">$</span> git log --pretty=format:
                  <span className="text-secondary">&quot;%h - %s (%cr)&quot;</span>
                  <br />
                  <span className="text-muted-foreground/50">
                    {"//"} Showing {experiences.length} commit{experiences.length !== 1 ? "s" : ""}
                  </span>
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
