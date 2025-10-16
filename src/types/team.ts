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
  };
}

export interface TeamSectionProps {
  members: TeamMember[];
}