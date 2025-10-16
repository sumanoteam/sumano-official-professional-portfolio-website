import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Sumano
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Professional tech company specializing in web development, mobile apps, 
            management systems, and custom diagnostic auditing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={ROUTES.TEAM}
              className="btn btn-primary bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Meet Our Team
            </Link>
            <Link
              to={ROUTES.PORTFOLIO}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            >
              View Our Work
            </Link>
            <Link
              to="/files"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            >
              📁 Browse Files
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions for modern businesses and institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Web Development
              </h3>
              <p className="text-gray-600">
                Custom websites, web applications, and management systems tailored to your needs.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mobile Apps
              </h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                System Auditing
              </h3>
              <p className="text-gray-600">
                Comprehensive diagnostic auditing for websites, mobile apps, and systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link
            to={ROUTES.CONTACT}
            className="btn btn-primary px-8 py-3 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};
