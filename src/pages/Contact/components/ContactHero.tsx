import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '../../../constants/contact';
import { scrollToElement } from '../../../utils/scrollUtils';
import { Container } from '../../../components/layout/Container';
import { HeroBackground } from '../../../components/ui/HeroBackground';
import { HERO_BACKGROUNDS, HERO_HEIGHTS } from '../../../constants/heroBackgrounds';

export const ContactHero: React.FC = () => {
  const handleCTAClick = () => {
    scrollToElement('contact-form', 80);
  };

  return (
    <HeroBackground
      backgroundImage={HERO_BACKGROUNDS.CONTACT.image}
      overlayOpacity={HERO_BACKGROUNDS.CONTACT.overlayOpacity}
      gradientFrom={HERO_BACKGROUNDS.CONTACT.gradientFrom}
      gradientTo={HERO_BACKGROUNDS.CONTACT.gradientTo}
      className={HERO_HEIGHTS.STANDARD}
    >
      <Container>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h1 mb-6 text-white"
          >
            {CONTACT_CONTENT.HERO.TITLE}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
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
              className="btn btn-primary px-8 py-4"
            >
              {CONTACT_CONTENT.HERO.CTA_TEXT}
            </button>
            <button
              onClick={() => scrollToElement('contact-details', 80)}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4"
            >
              Contact Information
            </button>
          </motion.div>
        </div>
      </Container>
    </HeroBackground>
  );
};
