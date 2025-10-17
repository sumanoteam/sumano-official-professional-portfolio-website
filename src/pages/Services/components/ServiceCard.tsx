import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: () => ReactNode;
  image?: string;
  isReversed?: boolean;
  backgroundColor?: 'white' | 'gray';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  features,
  icon,
  image,
  isReversed = false,
  backgroundColor = 'white'
}) => {
  const bgClass = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section id={id} className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="h2 mb-4 flex items-center gap-2">
              {icon()}
              {title}
            </h2>
            
            <p className="body mb-4">
              {description}
            </p>
            
            <ul className="space-y-2 text-brand-dark/80">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-brand-teal">✅</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="btn btn-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {image ? (
              <img
                src={image}
                alt={`${title} illustration`}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <div className="w-full max-w-md mx-auto h-80 bg-gradient-to-br from-[#3b82f6]/10 to-[#22c55e]/10 rounded-2xl flex items-center justify-center">
                <div className="text-6xl text-[#3b82f6]/30">
                  {icon()}
                </div>
              </div>
            )}
          </motion.div>
        </div>
    </section>
  );
};
