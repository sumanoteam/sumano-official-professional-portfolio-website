import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project.
          </p>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600">
            This page is under development. We'll have a contact form here soon.
          </p>
        </div>
      </div>
    </div>
  );
};

