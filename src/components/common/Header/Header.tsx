import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES, NAVIGATION_ITEMS } from '../../../constants/routes';
import { CONFIG } from '../../../constants/config';
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { scrollToElement } from '../../../utils/scrollUtils';
import { Button } from '../../ui/Button/Button';
import { MobileMainNav } from '../MobileMainNav';
import { TechSolutionIcon } from '../../ui/TechSolutionIcon';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Services dropdown items
  const servicesItems = [
    { label: 'Web Development', sectionId: 'web-development' },
    { label: 'UI/UX Design', sectionId: 'ui-ux-design' },
    { label: 'Branding & Graphics', sectionId: 'branding-graphics' },
    { label: 'AI Integration', sectionId: 'ai-integration' },
    { label: 'IT Consultation', sectionId: 'it-consultation' }
  ];

  // Handle mouse enter with delay clear
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // 150ms delay to allow moving to dropdown
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Navigate to services page and scroll to section
  const navigateToService = (sectionId: string) => {
    // If we're already on the services page, just scroll to the section
    if (location.pathname === ROUTES.SERVICES) {
      scrollToElement(sectionId, 80);
    } else {
      // Navigate to services page first, then scroll after a short delay
      window.location.href = `${ROUTES.SERVICES}#${sectionId}`;
    }
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={ROUTES.HOME} className="flex items-center hover:no-underline">
              <div className="flex items-center justify-center">
                <TechSolutionIcon className="h-8 w-8 text-brand-cta-blue-light" />
              </div>
              <span className="ml-2 text-xl font-bold text-brand-primary hover:text-brand-primary">
                {CONFIG.APP.NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation and OMS Button */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {NAVIGATION_ITEMS.map((item) => {
                if (item.path === ROUTES.SERVICES) {
                  return (
                    <div 
                      key={item.path} 
                      className="relative" 
                      ref={dropdownRef}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                          location.pathname === item.path
                            ? 'text-brand-gold bg-brand-gold/10'
                            : 'text-gray-700 hover:text-brand-gold hover:bg-brand-gold/5'
                        }`}
                      >
                        {item.label}
                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Services Dropdown */}
                      {isServicesDropdownOpen && (
                        <>
                          {/* Invisible bridge to help with mouse movement */}
                          <div className="absolute top-full left-0 right-0 h-1 bg-transparent" />
                          <div className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-xl py-3 px-4 z-50 min-w-48">
                          <Link
                            to={ROUTES.SERVICES}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block w-full text-left px-3 py-2 text-sm font-semibold text-brand-gold hover:bg-brand-gold/10 rounded-md transition-colors duration-200 border-b border-brand-border mb-2"
                          >
                            View All Services
                          </Link>
                          {servicesItems.map((service) => (
                            <button
                              key={service.label}
                              onClick={() => navigateToService(service.sectionId)}
                              className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-brand-gold hover:bg-brand-gold/10 rounded-md transition-colors duration-200"
                            >
                              {service.label}
                            </button>
                          ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-brand-gold bg-brand-gold/10'
                        : 'text-gray-700 hover:text-brand-gold hover:bg-brand-gold/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* OMS Button */}
            <div className="relative">
              <Button
                variant="primary"
                size="sm"
                as="a"
                href={ROUTES.OMS}
                className="px-3 py-2"
              >
                OMS
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mobile-hamburger flex items-center z-50">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 p-3 rounded-md transition-colors duration-200 min-h-[48px] min-w-[48px] flex items-center justify-center relative"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileMainNav 
        isOpen={isMobileMenuOpen} 
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />
    </header>
  );
};
