import React from 'react';
import { FileIcon } from '../../ui/FileIcon';
import { FileTab as FileTabType } from '../../../types/fileSystem';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface FileTabProps {
  tab: FileTabType;
  isActive: boolean;
  onSelect: (tabId: string) => void;
  onClose: (tabId: string) => void;
}

export const FileTab: React.FC<FileTabProps> = ({
  tab,
  isActive,
  onSelect,
  onClose
}) => {
  const handleClick = () => {
    onSelect(tab.id);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(tab.id);
  };

  return (
    <div
      className={`file-tab ${isActive ? 'active' : ''} group flex items-center`}
      onClick={handleClick}
    >
      <FileIcon 
        type={tab.fileType === 'folder' ? 'folder' : tab.name.split('.').pop() || 'file'}
        size="sm"
        className="mr-2 flex-shrink-0"
      />
      <span className="truncate max-w-32" title={tab.name}>
        {tab.name}
      </span>
      {tab.isDirty && (
        <div className="w-2 h-2 bg-orange-500 rounded-full ml-2 flex-shrink-0" />
      )}
      <button
        onClick={handleClose}
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-200 rounded"
        aria-label={`Close ${tab.name}`}
      >
        <XMarkIcon className="w-3 h-3" />
      </button>
    </div>
  );
};
