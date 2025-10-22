import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { scrollToElement } from '../../../utils/scrollUtils';

interface MobileServicesNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileServicesNav: React.FC<MobileServicesNavProps> = ({ isOpen, onToggle }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const servicesItems = useMemo(() => [
    { id: 'web-development', label: 'Web Development' },
    { id: 'ui-ux-design', label: 'UI/UX Design' },
    { id: 'branding-graphics', label: 'Branding & Graphics' },
    { id: 'ai-integration', label: 'AI Integration' },
    { id: 'it-consultation', label: 'IT Consultation' }
  ], []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = servicesItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(servicesItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [servicesItems]);

  const handleServiceClick = (serviceId: string) => {
    scrollToElement(serviceId, 80);
    onToggle();
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="md:hidden fixed top-4 right-4 z-[80] bg-brand-gold text-white p-4 rounded-lg shadow-lg hover:bg-brand-gold-hover transition-all duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center"
        aria-label="Toggle services navigation"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[75] md:hidden"
              onClick={onToggle}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[85] md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-brand-gold">Our Services</h3>
                  <button
                    onClick={onToggle}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close services navigation"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {servicesItems.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className={`w-full text-left px-4 py-4 rounded-lg transition-all duration-300 min-h-[48px] flex items-center transform hover:scale-[1.02] ${
                        activeSection === service.id
                          ? 'bg-brand-gold text-white shadow-md'
                          : 'text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold active:bg-brand-gold/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{service.label}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${
                          activeSection === service.id ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      scrollToElement('web-development', 80);
                      onToggle();
                    }}
                    className="w-full bg-brand-gold hover:bg-brand-gold-hover text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
