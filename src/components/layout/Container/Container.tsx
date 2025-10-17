import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl mx-auto px-4 md:px-6',
    md: 'max-w-5xl mx-auto px-6 md:px-8',
    lg: 'max-w-7xl mx-auto px-6 md:px-10 lg:px-20',
    xl: 'max-w-8xl mx-auto px-6 md:px-12 lg:px-24',
    full: 'w-full px-4 md:px-6 lg:px-8'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
