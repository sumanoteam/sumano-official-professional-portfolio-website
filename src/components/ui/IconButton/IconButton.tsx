import React from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  ariaLabel
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-poppins font-medium
    rounded-lg
    transition-all duration-300 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-brand-primary to-brand-primary-hover
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
    `,
    secondary: `
      bg-gradient-to-r from-brand-gold to-brand-gold-hover
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-1 hover:brightness-110
    `,
    outline: `
      bg-transparent
      border-2 border-white
      text-white
      hover:bg-white hover:text-brand-gold
      shadow-md hover:shadow-lg
    `
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  const content = (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-label={ariaLabel || label}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel || label}
    >
      {content}
    </button>
  );
};

