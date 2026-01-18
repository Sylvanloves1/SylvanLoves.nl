import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "State Management",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "PHP",
      "Symfony",
      "MySQL",
      "REST API",
      "Express",
      "Authentication",
      "Database Design",
    ],
  },
  {
    name: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Composer",
      "AI",
      "npm / yarn",
      "CI/CD",
      "Agile",
    ],
  },
  {
    name: "Currently Learning",
    skills: [
      "Advanced TypeScript",
      "System Architecture",
      "Performance Optimization",
    ],
  },
];

// Alternative format for JSON-style visualization
export const skillsAsCode = `const skills = {
  frontend: [
    "React", "React Native", "Next.js",
    "TypeScript", "Tailwind CSS", "HTML5", "CSS3"
  ],
  backend: [
    "Node.js", "PHP", "Symfony", "MySQL",
    "REST API", "Express"
  ],
  tools: [
    "Git", "Docker", "Composer", "AI",
    "CI/CD", "Agile"
  ]
};`;
