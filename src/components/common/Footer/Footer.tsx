import React from 'react';
import { CONFIG } from '../../../constants/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">
                {CONFIG.APP.NAME}
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional tech company specializing in web development, mobile apps, 
              management systems, and custom diagnostic auditing for schools, businesses, 
              NGOs, and institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href={CONFIG.ROUTING.MAIN_WEBSITE_URL}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Main Website
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@sumano.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: Tech Hub, City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 {CONFIG.APP.NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
