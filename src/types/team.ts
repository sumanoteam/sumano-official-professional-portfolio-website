export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    email?: string;
    github?: string;
    twitter?: string;
  };
  resumeContent: {
    education: string[];
    experience: string[];
    skills: string[];
    achievements: string[];
    certifications: string[];
    contact?: {
      email: string;
      phone: string;
      location: string;
    };
    projects?: string[];
    leadership?: string[];
    softSkills?: string[];
    references?: string;
  };
}

export interface TeamSectionProps {
  members: TeamMember[];
}