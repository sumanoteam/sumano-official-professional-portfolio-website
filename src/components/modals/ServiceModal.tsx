import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button/Button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: () => React.ReactElement;
    image?: string;
    detailedDescription: string;
    process: string[];
    benefits: string[];
    technologies: string[];
    pricing: {
      starting: string;
      includes: string[];
    };
  };
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    {service.icon()}
                  </div>
                  <div>
                    <h2 className="h2 text-white">{service.title}</h2>
                    <p className="text-white/90 text-sm">Comprehensive Service Details</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="h3 mb-3 text-brand-primary">Service Overview</h3>
                    <p className="text-brand-text-base leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="h3 mb-3 text-brand-primary">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-brand-text-base"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="h3 mb-3 text-brand-primary">Our Process</h3>
                    <div className="space-y-3">
                      {service.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-brand-text-base"
                        >
                          <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <span>{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h3 className="h3 mb-3 text-brand-primary">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-brand-text-base"
                        >
                          <ArrowRightIcon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="h3 mb-3 text-brand-primary">Technologies We Use</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 py-1 bg-brand-accent/10 text-brand-accent-dark rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="h3 mb-3 text-brand-primary">Pricing</h3>
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-brand-primary">{service.pricing.starting}</span>
                      <span className="text-brand-text-muted-enhanced ml-2">starting price</span>
                    </div>
                    <ul className="space-y-1 text-sm text-brand-text-muted-enhanced">
                      {service.pricing.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-brand-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <p className="text-sm text-brand-text-muted-enhanced">
                Ready to get started? Let's discuss your project requirements.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="md"
                  onClick={onClose}
                  outlineColor="primary"
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={`/contact#contact-form`}
                >
                  Start Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
