import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { scrollToElement } from '../../../utils/scrollUtils';
import { Container } from '../../../components/layout/Container';
import { HeroBackground } from '../../../components/ui/HeroBackground';
import { Button } from '../../../components/ui/Button/Button';
import { HERO_BACKGROUNDS, HERO_HEIGHTS } from '../../../constants/heroBackgrounds';

export const ServiceHero: React.FC = () => {
  return (
    <HeroBackground
      backgroundImage={HERO_BACKGROUNDS.SERVICES.image}
      overlayOpacity={HERO_BACKGROUNDS.SERVICES.overlayOpacity}
      gradientFrom={HERO_BACKGROUNDS.SERVICES.gradientFrom}
      gradientTo={HERO_BACKGROUNDS.SERVICES.gradientTo}
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
            Innovative Solutions for Modern Businesses
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We build experiences that empower your brand through design, code, and technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={`${ROUTES.CONTACT}#contact-form`}
              className="btn-primary btn-lg"
            >
              Let's Work Together
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToElement('web-development', 80)}
              outlineColor="gold"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </Container>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-brand-teal/20 rounded-full blur-xl"
      />
    </HeroBackground>
  );
};
