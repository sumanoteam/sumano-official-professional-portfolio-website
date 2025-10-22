import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface FeatureListProps {
  features: string[];
  className?: string;
  icon?: React.ReactNode;
  animationDelay?: number;
  maxFeatures?: number;
  showMoreText?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  className = '',
  icon,
  animationDelay = 0,
  maxFeatures,
  showMoreText = 'more features'
}) => {
  const displayFeatures = maxFeatures ? features.slice(0, maxFeatures) : features;
  const remainingCount = maxFeatures ? features.length - maxFeatures : 0;

  return (
    <ul className={`space-y-2 text-brand-text-muted-enhanced text-enhanced-subtle ${className}`}>
      {displayFeatures.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: animationDelay + (index * 0.1) }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          {icon || <CheckCircleIcon className="w-4 h-4 text-brand-accent flex-shrink-0" />}
          <span>{feature}</span>
        </motion.li>
      ))}
      {remainingCount > 0 && (
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: animationDelay + (displayFeatures.length * 0.1) }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-brand-text-subtle"
        >
          <span className="text-brand-accent">+</span>
          <span>+{remainingCount} {showMoreText}</span>
        </motion.li>
      )}
    </ul>
  );
};

