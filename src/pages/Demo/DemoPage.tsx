import React from 'react';
import { FileExplorer } from '../../components/file-explorer/FileExplorer';
import { FileSystemNode } from '../../types/fileSystem';

// Demo file system data
const demoFileSystem: FileSystemNode[] = [
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
          }
        ]
      }
    ]
  }
];

export const DemoPage: React.FC = () => {
  const handleFileOpen = (fileId: string) => {
    console.log('File opened:', fileId);
    alert(`File opened: ${fileId}`);
  };

  return (
    <div className="h-screen">
      <div className="bg-gray-100 p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-900">File Explorer Demo</h1>
        <p className="text-gray-600">Click on files to preview them, double-click to open in tabs</p>
      </div>
      <div className="h-full">
        <FileExplorer 
          initialFiles={demoFileSystem}
          onFileOpen={handleFileOpen}
        />
      </div>
    </div>
  );
};
