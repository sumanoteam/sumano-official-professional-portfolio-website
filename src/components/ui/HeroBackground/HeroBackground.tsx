import React from 'react';

interface HeroBackgroundProps {
  children: React.ReactNode;
  backgroundImage: string;
  overlayOpacity?: number;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  children,
  backgroundImage,
  overlayOpacity = 0.7,
  className = '',
  gradientFrom = 'from-brand-navy',
  gradientTo = 'to-brand-navyHover'
}) => {
  return (
    <section className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Overlay with opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(35, 78, 112, ${overlayOpacity})`, // brand-navy with opacity
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
