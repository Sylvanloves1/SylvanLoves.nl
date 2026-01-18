export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  proficiency?: number; // 1-100
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
