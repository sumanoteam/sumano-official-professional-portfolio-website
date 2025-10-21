import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ROUTES, NAVIGATION_ITEMS } from '../../../constants/routes';
import { Button } from '../../ui/Button/Button';

interface MobileMainNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMainNav: React.FC<MobileMainNavProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            onClick={onToggle}
          />
          
          {/* Mobile Navigation Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-[70] md:hidden"
          >
            <div className="p-6 h-full flex flex-col pb-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-brand-gold">Menu</h3>
                <button
                  onClick={onToggle}
                  className="p-3 hover:bg-brand-gold/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  aria-label="Close navigation"
                >
                  <XMarkIcon className="w-6 h-6 text-brand-gold" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 space-y-2 overflow-y-auto">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onToggle}
                    className={`block w-full text-left px-4 py-4 rounded-lg transition-all duration-300 font-medium min-h-[48px] flex items-center transform hover:scale-[1.02] ${
                      location.pathname === item.path
                        ? 'bg-brand-gold/10 text-brand-gold border-l-4 border-brand-gold'
                        : 'text-gray-700 hover:text-brand-gold hover:bg-brand-gold/5 active:bg-brand-gold/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {location.pathname === item.path && (
                        <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>

              {/* CTA Section */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4 flex-shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  as="a"
                  href={ROUTES.CONTACT}
                  onClick={onToggle}
                  className="w-full bg-brand-gold hover:bg-brand-gold-hover text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </Button>
                
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={ROUTES.OMS}
                  onClick={onToggle}
                  className="w-full"
                >
                  OMS System
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
