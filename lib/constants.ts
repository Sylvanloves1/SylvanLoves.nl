export const SITE_CONFIG = {
  name: "Sylvan Loves",
  title: "Sylvan Loves | Full Stack Developer",
  description:
    "Portfolio of Sylvan Loves, Full Stack Developer at X-Interactive specializing in React, Next.js, and modern web development.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sylvanloves.com",
  email: "info@sylvanloves.nl",
  location: "Emmen, Drenthe, Netherlands",
  role: "Full Stack Developer",
  company: "X-Interactive",
  companyUrl: "https://x-interactive.nl",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sylvanloves/",
  github: "https://github.com/sylvanloves", // Update with actual GitHub if available
  email: "mailto:info@sylvanloves.nl",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const TERMINAL_PROMPTS = {
  user: "sylvan",
  host: "x-interactive",
  get prompt() {
    return `${this.user}@${this.host}:~$`;
  },
};
