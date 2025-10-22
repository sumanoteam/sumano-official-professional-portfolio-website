import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// Using simple SVG icons instead of react-icons to avoid TypeScript issues
import { ServiceHero } from './components/ServiceHero';
import { ServiceCard } from './components/ServiceCard';
import { FloatingActionButton } from './components/FloatingActionButton';
import { scrollToElement } from '../../utils/scrollUtils';
import { Container } from '../../components/layout/Container';
import { Button } from '../../components/ui/Button/Button';
import { ROUTES } from '../../constants/routes';
import { SERVICES_DATA, ServiceDetails } from '../../constants/services';

export const ServicesPage: React.FC = () => {

  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        // Wait a bit for the page to render, then scroll
        setTimeout(() => {
          scrollToElement(elementId, 80);
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes (in case user navigates with hash)
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  // Use detailed services data from constants
  const servicesData = SERVICES_DATA;

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <ServiceHero />
      
      {/* Services Sections */}
      {servicesData.map((service: ServiceDetails, index: number) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          icon={service.icon}
          image={service.image}
          backgroundColor={index % 2 === 0 ? 'white' : 'gray'}
          isReversed={index % 2 === 1}
          serviceDetails={service}
        />
      ))}
      
      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white text-center"
      >
        <Container>
          <h3 className="h2 mb-4 text-white">Ready to Bring Your Ideas to Life?</h3>
          <p className="text-xl text-white/90 mb-8">Let's collaborate to turn your vision into a high-performing digital experience.</p>
          <Button
            variant="primary"
            size="lg"
            as="a"
            href={`${ROUTES.CONTACT}#contact-form`}
          >
            Get in Touch
          </Button>
        </Container>
      </motion.section>
      
      {/* Floating Action Button for Mobile */}
      <FloatingActionButton />
    </div>
  );
};

