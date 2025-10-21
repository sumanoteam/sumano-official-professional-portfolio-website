import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlusIcon, 
  XMarkIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  SwatchIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { scrollToElement } from '../../../utils/scrollUtils';

export const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { id: 'web-development', icon: CodeBracketIcon, label: 'Web Dev' },
    { id: 'ui-ux-design', icon: PaintBrushIcon, label: 'UI/UX' },
    { id: 'branding-graphics', icon: SwatchIcon, label: 'Branding' },
    { id: 'ai-integration', icon: CpuChipIcon, label: 'AI' },
    { id: 'it-consultation', icon: WrenchScrewdriverIcon, label: 'IT' }
  ];

  const handleServiceClick = (serviceId: string) => {
    scrollToElement(serviceId, 80);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      {/* Service Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                onClick={() => handleServiceClick(service.id)}
                className="flex items-center gap-3 bg-white shadow-lg rounded-full px-4 py-3 text-gray-700 hover:bg-brand-gold hover:text-white transition-all duration-200 min-w-[120px]"
              >
                <service.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{service.label}</span>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-gold hover:bg-brand-gold-hover text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        aria-label="Toggle services menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <PlusIcon className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};
