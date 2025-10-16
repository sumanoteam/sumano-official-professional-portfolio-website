import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '../../../constants/contact';
import { scrollToElement } from '../../../utils/scrollUtils';

export const ContactHero: React.FC = () => {
  const handleCTAClick = () => {
    scrollToElement('contact-form', 80);
  };

  return (
    <section className="bg-gradient-to-r from-[#234E70] to-[#3b82f6] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            {CONTACT_CONTENT.HERO.TITLE}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {CONTACT_CONTENT.HERO.SUBTITLE}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F5A623] hover:bg-[#E0951A] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {CONTACT_CONTENT.HERO.CTA_TEXT}
            </button>
            <button
              onClick={() => scrollToElement('contact-details', 80)}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#234E70] font-semibold rounded-lg transition-all duration-300"
            >
              Contact Information
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
