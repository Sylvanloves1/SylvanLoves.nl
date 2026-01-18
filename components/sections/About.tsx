import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { education, certifications } from "@/lib/data/education";
import FadeIn from "@/components/animations/FadeIn";
import { Award, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                <span className="text-muted-foreground">{"// "}</span>
                About Me
              </h2>
              <p className="text-muted-foreground font-mono text-sm">
                {"/* Learn more about my background and journey */"}
              </p>
            </div>

            {/* Personal Narrative */}
            <FadeIn delay={0.1}>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-foreground/90 leading-relaxed">
                  I&apos;m a <span className="text-primary font-semibold">driven Full Stack Developer</span>{" "}
                  with a solid foundation in both front-end and back-end development. Currently
                  working at <span className="text-primary font-semibold">X-Interactive</span> in the
                  Netherlands, I specialize in building innovative digital solutions that solve real-world
                  problems.
                </p>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  My journey into development started during my education at Drenthe College, where I
                  discovered my passion for creating elegant, user-friendly applications. Since then,
                  I&apos;ve been constantly learning and adapting to new technologies, always seeking
                  creative ways to tackle technical challenges.
                </p>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  <span className="font-mono text-sm text-muted-foreground">
                    {"// What drives me:"}
                  </span>
                  <br />
                  Building solutions that make a difference, collaborating with talented teams, and
                  continuously expanding my technical expertise.
                </p>
              </div>
            </FadeIn>

            {/* Education Timeline */}
            <FadeIn delay={0.2}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <FadeIn key={edu.id} delay={0.3 + index * 0.1}>
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="text-lg">{edu.institution}</CardTitle>
                            <span className="text-sm text-muted-foreground font-mono">
                              {edu.startDate.substring(0, 4)} - {edu.endDate.substring(0, 4)}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-primary font-semibold mb-2">
                            {edu.degree}
                            {edu.field && ` - ${edu.field}`}
                          </p>
                          {edu.description && (
                            <p className="text-muted-foreground text-sm">{edu.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Certifications */}
            <FadeIn delay={0.5}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-secondary" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <FadeIn key={cert.id} delay={0.6 + index * 0.1}>
                      <Card className="border-l-4 border-l-secondary">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <CardTitle className="text-lg">{cert.name}</CardTitle>
                            <span className="text-sm text-muted-foreground font-mono">
                              {cert.issuer} • {cert.issueDate}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">{cert.description}</p>
                        </CardContent>
                      </Card>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
