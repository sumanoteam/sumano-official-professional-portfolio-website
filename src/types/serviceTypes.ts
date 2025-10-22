// Services related types
import { BaseEntity } from './common';

export interface Service extends BaseEntity {
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: ServiceCategory;
  features: string[];
  technologies: string[];
  pricing?: PricingInfo;
  isActive: boolean;
  displayOrder: number;
  imageUrl?: string;
  caseStudies?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  displayOrder: number;
}

export interface PricingInfo {
  type: 'fixed' | 'hourly' | 'project' | 'subscription';
  amount?: number;
  currency: string;
  description: string;
  features: string[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  technologies: string[];
}

export interface ServiceRequest {
  serviceId: string;
  clientName: string;
  email: string;
  company?: string;
  message: string;
  budget?: number;
  timeline?: string;
  requirements: string[];
}
