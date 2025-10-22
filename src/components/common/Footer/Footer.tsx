import React from 'react';
import { CONFIG } from '../../../constants/config';
import { ROUTES } from '../../../constants/routes';
import { Container } from '../../layout/Container';
import { TechSolutionIcon } from '../../ui/TechSolutionIcon';
import { Button } from '../../ui/Button/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center">
                <TechSolutionIcon className="h-8 w-8 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">
                {CONFIG.APP.NAME}
              </span>
            </div>
            <p className="text-white mb-4 max-w-md">
              Professional tech company specializing in web development, mobile apps, 
              management systems, and custom diagnostic auditing for schools, businesses, 
              NGOs, and institutions.
            </p>
            <div className="flex space-x-4">
              <Button
                as="a"
                href={ROUTES.OMS}
                variant="secondary"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30"
              >
                Operational Management System
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white hover:text-brand-gold transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-white hover:text-brand-gold transition-colors duration-200">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-brand-gold transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-white hover:text-brand-gold transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href={ROUTES.OMS} className="text-white hover:text-brand-gold transition-colors duration-200">
                  OMS System
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <p className="text-white">Email: sumanoteam@gmail.com</p>
              <p className="text-white">Address: Serrekunda, Banjul, The Gambia</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="https://wa.me/2203127212?text=Hello! I'm interested in your services. Can we discuss my project?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white">&copy; 2025 {CONFIG.APP.NAME}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
