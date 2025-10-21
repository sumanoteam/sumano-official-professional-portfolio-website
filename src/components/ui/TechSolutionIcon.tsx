import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

interface TechSolutionIconProps {
  className?: string;
}

export const TechSolutionIcon: React.FC<TechSolutionIconProps> = ({ 
  className = "h-8 w-8" 
}) => {
  return (
    <RocketLaunchIcon className={className} />
  );
};
