// File system related types
import { BaseEntity } from './common';

export type FileType = 'folder' | 'file';
export type FileCategory = 'document' | 'image' | 'video' | 'audio' | 'code' | 'other';

export interface FileSystemNode extends BaseEntity {
  name: string;
  type: FileType;
  icon: string;
  path: string;
  children?: FileSystemNode[];
  metadata?: FileMetadata;
}

export interface FileMetadata {
  size?: number;
  lastModified?: Date;
  permissions?: string[];
  mimeType?: string;
  description?: string;
}

export interface FileTypeConfig {
  extension: string;
  mimeType: string;
  icon: string;
  color: string;
  category: FileCategory;
}

export interface FileAction {
  id: string;
  label: string;
  icon: string;
  action: (file: FileSystemNode) => void;
  disabled?: boolean;
}

export interface FileTab {
  id: string;
  name: string;
  path: string;
  isActive: boolean;
  isDirty: boolean;
  fileType: FileType;
}

export interface FileExplorerState {
  tabs: FileTab[];
  activeTab: string | null;
  fileTree: FileSystemNode[];
  selectedFiles: string[];
  expandedFolders: string[];
}
