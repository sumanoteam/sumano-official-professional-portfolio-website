// Portfolio related types
import { BaseEntity } from './common';

export interface Project extends BaseEntity {
  title: string;
  description: string;
  shortDescription: string;
  category: ProjectCategory;
  client: string;
  technologies: string[];
  features: string[];
  images: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  startDate: Date;
  endDate?: Date;
  status: ProjectStatus;
  teamMembers: string[];
  isFeatured: boolean;
  displayOrder: number;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isPrimary: boolean;
  order: number;
}

export type ProjectStatus = 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  primaryImage: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export interface Testimonial extends BaseEntity {
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  clientImage?: string;
  content: string;
  rating: number;
  projectId?: string;
  isActive: boolean;
  displayOrder: number;
}
