export interface Experience {
    company: string;
    role: string;
    period: string;
    achievements: string[];
    techStack: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    repoUrl?: string;
  }
  
  export interface UserProfile {
    jobtitle: string;
    headline: string;
    bio: string;
    email: string;
    skills: { category: string; items: string[] }[];
    experiences: Experience[];
    projects: Project[];
  }

  export interface QuoteServiceOption {
    id: string;
    name: string;
    basePrice: number;
    description: string;
  }