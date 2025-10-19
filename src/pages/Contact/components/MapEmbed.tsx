import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { CONTACT_CONTENT } from '../../../constants/contact';

export const MapEmbed: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8"
    >
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-[#234E70] mb-2">
          {CONTACT_CONTENT.MAP.TITLE}
        </h3>
        <p className="text-gray-600 text-sm">
          {CONTACT_CONTENT.MAP.SUBTITLE}
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer group">
        {/* Placeholder Map Image or iframe would go here */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
          <div className="text-center">
            <MapPinIcon className="h-12 w-12 text-blue-600 mx-auto mb-3 group-hover:text-blue-700 transition-colors duration-300" />
            <p className="text-blue-700 font-medium mb-2 group-hover:text-blue-800 transition-colors duration-300">
              {CONTACT_CONTENT.MAP.PLACEHOLDER_TEXT}
            </p>
            <p className="text-sm text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
              {CONTACT_CONTENT.DETAILS.INFO.ADDRESS}
            </p>
          </div>
        </div>
        
        {/* Overlay with Google Maps link */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_CONTENT.DETAILS.INFO.ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#234E70] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1A3A52] transform hover:scale-105"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Map Instructions */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-blue-900">
              Getting Here
            </h4>
            <p className="text-sm text-blue-700 mt-1">
              Click the map above to open directions in Google Maps, or use the address provided above for navigation.
            </p>
          </div>
        </div>
      </div>

      {/* Alternative Map Embed (commented out - uncomment when ready to use) */}
      {/*
      <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(CONTACT_CONTENT.DETAILS.INFO.ADDRESS)}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sumano Office Location"
        />
      </div>
      */}
    </motion.div>
  );
};
