import React from 'react';
import { FileIcon } from '../../ui/FileIcon';
import { FileSystemNode } from '../../../types/fileSystem';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface FileTreeProps {
  nodes: FileSystemNode[];
  selectedFiles: string[];
  expandedFolders: string[];
  onFileSelect: (fileId: string) => void;
  onFolderToggle: (folderId: string) => void;
  onFileDoubleClick: (fileId: string) => void;
}

interface FileTreeNodeProps {
  node: FileSystemNode;
  level: number;
  selectedFiles: string[];
  expandedFolders: string[];
  onFileSelect: (fileId: string) => void;
  onFolderToggle: (folderId: string) => void;
  onFileDoubleClick: (fileId: string) => void;
}

const FileTreeNode: React.FC<FileTreeNodeProps> = ({
  node,
  level,
  selectedFiles,
  expandedFolders,
  onFileSelect,
  onFolderToggle,
  onFileDoubleClick
}) => {
  const isExpanded = expandedFolders.includes(node.id);
  const isSelected = selectedFiles.includes(node.id);
  const hasChildren = node.children && node.children.length > 0;

  const handleClick = () => {
    if (node.type === 'folder') {
      onFolderToggle(node.id);
    } else {
      onFileSelect(node.id);
    }
  };

  const handleDoubleClick = () => {
    if (node.type === 'file') {
      onFileDoubleClick(node.id);
    }
  };

  return (
    <div>
      <div
        className={`file-tree-item ${isSelected ? 'selected' : ''}`}
        style={{ paddingLeft: `${level * 20 + 12}px` }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        {node.type === 'folder' && (
          <div className="flex-shrink-0 mr-2">
            {hasChildren ? (
              isExpanded ? (
                <ChevronDownIcon className="w-4 h-4" />
              ) : (
                <ChevronRightIcon className="w-4 h-4" />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </div>
        )}
        
        <FileIcon 
          type={node.type === 'folder' ? 'folder' : node.name.split('.').pop() || 'file'}
          size="sm"
          className="mr-2 flex-shrink-0"
        />
        
        <span className="truncate flex-1" title={node.name}>
          {node.name}
        </span>
      </div>

      {node.type === 'folder' && isExpanded && hasChildren && (
        <div>
          {node.children!.map((child) => (
            <FileTreeNode
              key={child.id}
              node={child}
              level={level + 1}
              selectedFiles={selectedFiles}
              expandedFolders={expandedFolders}
              onFileSelect={onFileSelect}
              onFolderToggle={onFolderToggle}
              onFileDoubleClick={onFileDoubleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({
  nodes,
  selectedFiles,
  expandedFolders,
  onFileSelect,
  onFolderToggle,
  onFileDoubleClick
}) => {
  return (
    <div className="file-tree bg-gray-50 border-r border-gray-200 w-64 h-full overflow-y-auto">
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Files</h3>
        <div className="space-y-1">
          {nodes.map((node) => (
            <FileTreeNode
              key={node.id}
              node={node}
              level={0}
              selectedFiles={selectedFiles}
              expandedFolders={expandedFolders}
              onFileSelect={onFileSelect}
              onFolderToggle={onFolderToggle}
              onFileDoubleClick={onFileDoubleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
