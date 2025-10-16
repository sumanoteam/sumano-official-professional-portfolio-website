import React from 'react';
import { 
  FolderIcon,
  DocumentIcon,
  PhotoIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  TableCellsIcon,
  PresentationChartBarIcon,
  ArchiveBoxIcon,
  UserIcon,
  BuildingOfficeIcon,
  CogIcon,
  BriefcaseIcon,
  BookOpenIcon,
  CameraIcon,
  TagIcon,
  PhoneIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import { FILE_TYPES, FILE_ICONS } from '../../../constants/fileTypes';

interface FileIconProps {
  type: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap = {
  // Heroicons
  FolderIcon,
  DocumentIcon,
  PhotoIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  TableCellsIcon,
  PresentationChartBarIcon,
  ArchiveBoxIcon,
  UserIcon,
  BuildingOfficeIcon,
  CogIcon,
  BriefcaseIcon,
  BookOpenIcon,
  CameraIcon,
  TagIcon,
  PhoneIcon,
  ShareIcon
};

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

export const FileIcon: React.FC<FileIconProps> = ({ 
  type, 
  size = 'md', 
  className = '' 
}) => {
  const fileType = FILE_TYPES[type];
  const iconName = fileType?.icon || FILE_ICONS[type] || FILE_ICONS.default;
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || DocumentIcon;
  const color = fileType?.color || '#6b7280';

  return (
    <IconComponent 
      className={`${sizeClasses[size]} ${className}`}
      style={{ color }}
    />
  );
};
