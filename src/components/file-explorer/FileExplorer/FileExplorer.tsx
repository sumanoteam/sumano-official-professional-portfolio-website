import React, { useState, useCallback } from 'react';
import { FileTree } from '../FileTree';
import { FilePreview } from '../FilePreview';
import { FileTab } from '../FileTab';
import { FileSystemNode, FileTab as FileTabType, FileExplorerState } from '../../../types/fileSystem';

interface FileExplorerProps {
  initialFiles: FileSystemNode[];
  onFileOpen?: (fileId: string) => void;
}

export const FileExplorer: React.FC<FileExplorerProps> = ({ 
  initialFiles, 
  onFileOpen 
}) => {
  const [state, setState] = useState<FileExplorerState>({
    tabs: [],
    activeTab: null,
    fileTree: initialFiles,
    selectedFiles: [],
    expandedFolders: ['root'] // Start with root folder expanded
  });

  const handleFileSelect = useCallback((fileId: string) => {
    setState(prev => ({
      ...prev,
      selectedFiles: [fileId]
    }));
  }, []);

  const handleFolderToggle = useCallback((folderId: string) => {
    setState(prev => ({
      ...prev,
      expandedFolders: prev.expandedFolders.includes(folderId)
        ? prev.expandedFolders.filter(id => id !== folderId)
        : [...prev.expandedFolders, folderId]
    }));
  }, []);

  const findFileById = useCallback((nodes: FileSystemNode[], id: string): FileSystemNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findFileById(node.children, id);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const handleFileDoubleClick = useCallback((fileId: string) => {
    const file = findFileById(state.fileTree, fileId);
    if (!file || file.type === 'folder') return;

    // Check if file is already open in a tab
    const existingTab = state.tabs.find(tab => tab.path === file.path);
    if (existingTab) {
      setState(prev => ({
        ...prev,
        activeTab: existingTab.id
      }));
      return;
    }

    // Create new tab
    const newTab: FileTabType = {
      id: `tab-${Date.now()}`,
      name: file.name,
      path: file.path,
      isActive: true,
      isDirty: false,
      fileType: file.type
    };

    setState(prev => ({
      ...prev,
      tabs: prev.tabs.map(tab => ({ ...tab, isActive: false })).concat(newTab),
      activeTab: newTab.id
    }));

    onFileOpen?.(fileId);
  }, [state.fileTree, state.tabs, onFileOpen, findFileById]);

  const handleTabSelect = useCallback((tabId: string) => {
    setState(prev => ({
      ...prev,
      tabs: prev.tabs.map(tab => ({ ...tab, isActive: tab.id === tabId })),
      activeTab: tabId
    }));
  }, []);

  const handleTabClose = useCallback((tabId: string) => {
    setState(prev => {
      const newTabs = prev.tabs.filter(tab => tab.id !== tabId);
      const newActiveTab = newTabs.length > 0 
        ? newTabs[newTabs.length - 1].id 
        : null;

      return {
        ...prev,
        tabs: newTabs,
        activeTab: newActiveTab
      };
    });
  }, []);

  const handleFileOpen = useCallback((fileId: string) => {
    handleFileDoubleClick(fileId);
  }, [handleFileDoubleClick]);

  const getSelectedFile = () => {
    if (!state.activeTab) return null;
    const activeTab = state.tabs.find(tab => tab.id === state.activeTab);
    if (!activeTab) return null;
    return findFileById(state.fileTree, activeTab.path);
  };

  return (
    <div className="file-explorer h-full flex flex-col">
      {/* Tab Bar */}
      {state.tabs.length > 0 && (
        <div className="border-b border-gray-200 bg-gray-50 flex overflow-x-auto">
          {state.tabs.map(tab => (
            <FileTab
              key={tab.id}
              tab={tab}
              isActive={tab.isActive}
              onSelect={handleTabSelect}
              onClose={handleTabClose}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* File Tree Sidebar */}
        <FileTree
          nodes={state.fileTree}
          selectedFiles={state.selectedFiles}
          expandedFolders={state.expandedFolders}
          onFileSelect={handleFileSelect}
          onFolderToggle={handleFolderToggle}
          onFileDoubleClick={handleFileDoubleClick}
        />

        {/* File Preview */}
        <FilePreview
          file={getSelectedFile()}
          onOpenFile={handleFileOpen}
        />
      </div>
    </div>
  );
};
