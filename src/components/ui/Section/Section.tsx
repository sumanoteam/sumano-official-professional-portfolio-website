import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../layout/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'primary' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  animationDelay?: number;
  staggerDelay?: number;
}

export const Section: React.FC<SectionProps> = React.memo(({
  children,
  className = '',
  backgroundColor = 'white',
  padding = 'lg',
  id,
  animationDelay = 0,
  staggerDelay = 0.1
}) => {
  const getBackgroundClass = () => {
    switch (backgroundColor) {
      case 'white': return 'bg-white';
      case 'gray': return 'bg-gray-50';
      case 'primary': return 'bg-brand-primary';
      case 'transparent': return 'bg-transparent';
      default: return 'bg-white';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'sm': return 'py-8';
      case 'md': return 'py-12';
      case 'lg': return 'py-16';
      case 'xl': return 'py-20';
      default: return 'py-16';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: animationDelay
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={`${getBackgroundClass()} ${getPaddingClass()} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Container>
        {children}
      </Container>
    </motion.section>
  );
});

Section.displayName = 'Section';

