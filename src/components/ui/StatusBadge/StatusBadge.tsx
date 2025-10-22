import React from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

type StatusType = 'completed' | 'in-progress' | 'coming-soon' | 'error' | 'warning';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = '',
  showIcon = true,
  size = 'md'
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
        return {
          icon: <CheckCircleIcon className="w-4 h-4" />,
          text: 'Completed',
          bgColor: 'bg-green-100',
          textColor: 'text-green-700',
          iconColor: 'text-green-500'
        };
      case 'in-progress':
        return {
          icon: <ClockIcon className="w-4 h-4" />,
          text: 'In Progress',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-700',
          iconColor: 'text-yellow-500'
        };
      case 'coming-soon':
        return {
          icon: <ExclamationTriangleIcon className="w-4 h-4" />,
          text: 'Coming Soon',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-700',
          iconColor: 'text-blue-500'
        };
      case 'error':
        return {
          icon: <XCircleIcon className="w-4 h-4" />,
          text: 'Error',
          bgColor: 'bg-red-100',
          textColor: 'text-red-700',
          iconColor: 'text-red-500'
        };
      case 'warning':
        return {
          icon: <ExclamationTriangleIcon className="w-4 h-4" />,
          text: 'Warning',
          bgColor: 'bg-orange-100',
          textColor: 'text-orange-700',
          iconColor: 'text-orange-500'
        };
      default:
        return {
          icon: <CheckCircleIcon className="w-4 h-4" />,
          text: 'Unknown',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-700',
          iconColor: 'text-gray-500'
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'md':
        return 'px-3 py-1 text-sm';
      case 'lg':
        return 'px-4 py-2 text-base';
      default:
        return 'px-3 py-1 text-sm';
    }
  };

  const config = getStatusConfig();
  const sizeClasses = getSizeClasses();

  return (
    <div className={`
      inline-flex items-center gap-2
      ${config.bgColor}
      ${config.textColor}
      ${sizeClasses}
      rounded-full font-medium
      ${className}
    `}>
      {showIcon && (
        <span className={config.iconColor}>
          {config.icon}
        </span>
      )}
      <span>{config.text}</span>
    </div>
  );
};

