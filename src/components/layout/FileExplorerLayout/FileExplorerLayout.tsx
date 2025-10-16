import React from 'react';
import { FileExplorer } from '../../file-explorer/FileExplorer';
import { FileSystemNode } from '../../../types/fileSystem';

interface FileExplorerLayoutProps {
  children?: React.ReactNode;
  initialFiles?: FileSystemNode[];
}

// Sample file system data for demonstration
const sampleFileSystem: FileSystemNode[] = [
  {
    id: 'root',
    name: 'Sumano Portfolio',
    type: 'folder',
    icon: 'folder',
    path: '/',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    children: [
      {
        id: 'about-folder',
        name: 'About Us',
        type: 'folder',
        icon: 'folder',
        path: '/about',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        children: [
          {
            id: 'company-overview',
            name: 'company-overview.json',
            type: 'file',
            icon: 'company-overview',
            path: '/about/company-overview.json',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 2048,
              lastModified: new Date('2024-01-01'),
              description: 'Company overview and mission statement'
            }
          }
        ]
      },
      {
        id: 'team-folder',
        name: 'Our Team',
        type: 'folder',
        icon: 'folder',
        path: '/team',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        children: [
          {
            id: 'john-doe-profile',
            name: 'john-doe.profile',
            type: 'file',
            icon: 'team-profile',
            path: '/team/john-doe.profile',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 1024,
              lastModified: new Date('2024-01-01'),
              description: 'John Doe - Senior Developer profile'
            }
          },
          {
            id: 'jane-smith-profile',
            name: 'jane-smith.profile',
            type: 'file',
            icon: 'team-profile',
            path: '/team/jane-smith.profile',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 1024,
              lastModified: new Date('2024-01-01'),
              description: 'Jane Smith - Project Manager profile'
            }
          },
          {
            id: 'team-photo',
            name: 'team-photo.jpg',
            type: 'file',
            icon: 'team-photo',
            path: '/team/team-photo.jpg',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 2048000,
              lastModified: new Date('2024-01-01'),
              description: 'Team group photo'
            }
          }
        ]
      },
      {
        id: 'services-folder',
        name: 'Services',
        type: 'folder',
        icon: 'folder',
        path: '/services',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        children: [
          {
            id: 'web-development',
            name: 'web-development.services',
            type: 'file',
            icon: 'services',
            path: '/services/web-development.services',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 1536,
              lastModified: new Date('2024-01-01'),
              description: 'Web development services information'
            }
          },
          {
            id: 'mobile-apps',
            name: 'mobile-apps.services',
            type: 'file',
            icon: 'services',
            path: '/services/mobile-apps.services',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 1536,
              lastModified: new Date('2024-01-01'),
              description: 'Mobile app development services'
            }
          }
        ]
      },
      {
        id: 'portfolio-folder',
        name: 'Portfolio',
        type: 'folder',
        icon: 'folder',
        path: '/portfolio',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        children: [
          {
            id: 'project-1',
            name: 'ecommerce-platform.portfolio',
            type: 'file',
            icon: 'portfolio',
            path: '/portfolio/ecommerce-platform.portfolio',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 3072,
              lastModified: new Date('2024-01-01'),
              description: 'E-commerce platform project showcase'
            }
          },
          {
            id: 'project-screenshot',
            name: 'project-screenshot.png',
            type: 'file',
            icon: 'project-screenshot',
            path: '/portfolio/project-screenshot.png',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 1024000,
              lastModified: new Date('2024-01-01'),
              description: 'Project screenshot'
            }
          }
        ]
      },
      {
        id: 'contact-folder',
        name: 'Contact',
        type: 'folder',
        icon: 'folder',
        path: '/contact',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        children: [
          {
            id: 'contact-info',
            name: 'contact-info.contact',
            type: 'file',
            icon: 'contact-info',
            path: '/contact/contact-info.contact',
            createdAt: new Date('2024-01-01'),
            updatedAt: new Date('2024-01-01'),
            metadata: {
              size: 512,
              lastModified: new Date('2024-01-01'),
              description: 'Contact information and details'
            }
          }
        ]
      }
    ]
  }
];

export const FileExplorerLayout: React.FC<FileExplorerLayoutProps> = ({ 
  children,
  initialFiles = sampleFileSystem
}) => {
  const handleFileOpen = (fileId: string) => {
    console.log('File opened:', fileId);
    // Here you would typically navigate to the appropriate page or open a modal
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-hidden">
        <FileExplorer 
          initialFiles={initialFiles}
          onFileOpen={handleFileOpen}
        />
      </div>
      {children}
    </div>
  );
};
