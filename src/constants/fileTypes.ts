// File type configurations

import { FileTypeConfig } from '@/types/fileSystem';

export const FILE_TYPES: Record<string, FileTypeConfig> = {
  // Team Documents
  'team-profile': {
    extension: '.profile',
    mimeType: 'application/json',
    icon: 'UserIcon',
    color: '#3b82f6',
    category: 'document'
  },
  'team-resume': {
    extension: '.pdf',
    mimeType: 'application/pdf',
    icon: 'DocumentTextIcon',
    color: '#ef4444',
    category: 'document'
  },
  'team-bio': {
    extension: '.bio',
    mimeType: 'text/plain',
    icon: 'BookOpenIcon',
    color: '#10b981',
    category: 'document'
  },
  
  // Company Documents
  'company-overview': {
    extension: '.company',
    mimeType: 'application/json',
    icon: 'BuildingOfficeIcon',
    color: '#8b5cf6',
    category: 'document'
  },
  'services': {
    extension: '.services',
    mimeType: 'application/json',
    icon: 'CogIcon',
    color: '#f59e0b',
    category: 'document'
  },
  'portfolio': {
    extension: '.portfolio',
    mimeType: 'application/json',
    icon: 'BriefcaseIcon',
    color: '#06b6d4',
    category: 'document'
  },
  
  // Media Files
  'team-photo': {
    extension: '.jpg',
    mimeType: 'image/jpeg',
    icon: 'PhotoIcon',
    color: '#ec4899',
    category: 'image'
  },
  'project-screenshot': {
    extension: '.png',
    mimeType: 'image/png',
    icon: 'CameraIcon',
    color: '#84cc16',
    category: 'image'
  },
  'company-logo': {
    extension: '.svg',
    mimeType: 'image/svg+xml',
    icon: 'TagIcon',
    color: '#f97316',
    category: 'image'
  },
  
  // Contact & Communication
  'contact-info': {
    extension: '.contact',
    mimeType: 'application/json',
    icon: 'PhoneIcon',
    color: '#14b8a6',
    category: 'document'
  },
  'social-links': {
    extension: '.social',
    mimeType: 'application/json',
    icon: 'ShareIcon',
    color: '#6366f1',
    category: 'document'
  }
};

export const FILE_ICONS: Record<string, string> = {
  folder: 'FolderIcon',
  file: 'DocumentIcon',
  image: 'PhotoIcon',
  video: 'VideoCameraIcon',
  audio: 'SpeakerWaveIcon',
  code: 'CodeBracketIcon',
  pdf: 'DocumentTextIcon',
  word: 'DocumentTextIcon',
  excel: 'TableCellsIcon',
  powerpoint: 'PresentationChartBarIcon',
  zip: 'ArchiveBoxIcon',
  default: 'DocumentIcon'
};

export const FILE_COLORS = {
  folder: '#6b7280',
  document: '#3b82f6',
  image: '#ec4899',
  video: '#8b5cf6',
  audio: '#f59e0b',
  code: '#10b981',
  pdf: '#ef4444',
  default: '#6b7280'
};
