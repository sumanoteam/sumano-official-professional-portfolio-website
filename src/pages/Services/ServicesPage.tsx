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

  // Services data following DRY principles
  const servicesData = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We craft fast, secure, and scalable web applications using modern frameworks like React, Next.js, and Node.js. Our solutions are built for performance and designed for growth.',
      features: [
        'Responsive UI/UX design',
        'SEO-friendly architecture',
        'API & Database integration',
        'Performance optimization',
        'Cross-browser compatibility',
        'Mobile-first approach'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      icon: () => (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 3a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V3zM6 5v10h12V5H6zm2 2h8v6H8V7z"/>
        </svg>
      )
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'We create intuitive and engaging user experiences that drive conversions and user satisfaction. Our designs are based on user research and industry best practices.',
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'Visual design & branding',
        'Usability testing',
        'Design system creation',
        'Accessibility compliance'
      ],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      icon: () => (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
        </svg>
      )
    },
    {
      id: 'branding-graphics',
      title: 'Branding & Graphics',
      description: 'We help establish your brand identity through compelling visual design, logo creation, and comprehensive brand guidelines that resonate with your target audience.',
      features: [
        'Logo design & identity',
        'Brand guidelines',
        'Marketing materials',
        'Social media graphics',
        'Print design',
        'Brand strategy consultation'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: () => (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      id: 'ai-integration',
      title: 'AI Integration & Automation',
      description: 'We integrate artificial intelligence and automation solutions to streamline your business processes, improve efficiency, and provide intelligent insights.',
      features: [
        'AI-powered chatbots',
        'Process automation',
        'Machine learning models',
        'Data analysis & insights',
        'Predictive analytics',
        'Custom AI solutions'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: () => (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 'it-consultation',
      title: 'IT Consultation & Maintenance',
      description: 'We provide comprehensive IT consulting services to help you make informed technology decisions and maintain your systems for optimal performance.',
      features: [
        'Technology strategy',
        'System architecture review',
        'Security assessments',
        'Performance monitoring',
        '24/7 technical support',
        'Infrastructure optimization'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: () => (
        <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <ServiceHero />
      
      {/* Services Sections */}
      {servicesData.map((service, index) => (
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
            href={ROUTES.CONTACT}
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

