import React from 'react';
import { FileSystemNode } from '../../../types/fileSystem';
import { FileIcon } from '../../ui/FileIcon';
import { 
  CalendarIcon, 
  ClockIcon, 
  DocumentTextIcon,
  UserIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CogIcon,
  BriefcaseIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

interface FilePreviewProps {
  file: FileSystemNode | null;
  onOpenFile: (fileId: string) => void;
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const getFileTypeIcon = (fileType: string) => {
  const iconMap = {
    'team-profile': UserIcon,
    'team-resume': DocumentTextIcon,
    'team-bio': DocumentTextIcon,
    'company-overview': BuildingOfficeIcon,
    'services': CogIcon,
    'portfolio': BriefcaseIcon,
    'contact-info': PhoneIcon,
    'team-photo': UserIcon,
    'project-screenshot': UserIcon,
    'company-logo': UserIcon,
    'social-links': UsersIcon
  };
  
  return iconMap[fileType as keyof typeof iconMap] || DocumentTextIcon;
};

export const FilePreview: React.FC<FilePreviewProps> = ({ file, onOpenFile }) => {
  if (!file) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FileIcon type="file" size="lg" className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No file selected</h3>
          <p className="text-gray-500">Select a file from the tree to preview its contents</p>
        </div>
      </div>
    );
  }

  const FileTypeIcon = getFileTypeIcon(file.name.split('.')[0]);

  return (
    <div className="flex-1 bg-white">
      {/* File Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center">
          <FileIcon 
            type={file.type === 'folder' ? 'folder' : file.name.split('.').pop() || 'file'}
            size="md"
            className="mr-3"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900">{file.name}</h2>
            <p className="text-sm text-gray-500">
              {file.type === 'folder' ? 'Folder' : 'File'} • 
              {file.metadata?.lastModified && ` Modified ${formatDate(file.metadata.lastModified)}`}
            </p>
          </div>
          <button
            onClick={() => onOpenFile(file.id)}
            className="btn btn-primary"
          >
            Open
          </button>
        </div>
      </div>

      {/* File Content */}
      <div className="p-6">
        {file.type === 'folder' ? (
          <div className="text-center py-12">
            <FileTypeIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Folder</h3>
            <p className="text-gray-500">
              {file.children?.length || 0} items
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* File Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <CalendarIcon className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Created:</span>
                  <span className="ml-2 text-gray-900">
                    {formatDate(file.createdAt)}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <ClockIcon className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Modified:</span>
                  <span className="ml-2 text-gray-900">
                    {file.metadata?.lastModified ? formatDate(file.metadata.lastModified) : 'Unknown'}
                  </span>
                </div>
                {file.metadata?.size && (
                  <div className="flex items-center text-sm">
                    <DocumentTextIcon className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Size:</span>
                    <span className="ml-2 text-gray-900">
                      {formatFileSize(file.metadata.size)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* File Description */}
            {file.metadata?.description && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Description</h4>
                <p className="text-sm text-gray-600">{file.metadata.description}</p>
              </div>
            )}

            {/* File Content Preview */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Preview</h4>
              <div className="bg-gray-50 rounded-lg p-4 border">
                <FileTypeIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 text-center">
                  {file.name} content preview will be displayed here
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
