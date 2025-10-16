// Team member related types
import { BaseEntity } from './common';

export interface TeamMember extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  bio: string;
  profileImage: string;
  coverImage?: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  resumeUrl?: string;
  isActive: boolean;
  displayOrder: number;
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'twitter' | 'instagram' | 'facebook' | 'website';
  url: string;
  username?: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'technical' | 'soft' | 'language' | 'tool';
  yearsOfExperience?: number;
}

export interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  technologies: string[];
  isCurrent: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  achievements: string[];
  isCurrent: boolean;
}

export interface TeamMemberCard {
  id: string;
  name: string;
  position: string;
  profileImage: string;
  skills: string[];
  bio: string;
  socialLinks: SocialLink[];
}
