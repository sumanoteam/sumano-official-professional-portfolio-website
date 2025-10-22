import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactHero } from './components/ContactHero';
import { ContactForm } from './components/ContactForm';
import { ContactDetails } from './components/ContactDetails';
import { MapEmbed } from './components/MapEmbed';
import { SocialLinks } from './components/SocialLinks';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact — Sumano | Modern web & AI solutions</title>
        <meta 
          name="description" 
          content="Contact Sumano for web, UX and AI solutions. Request a consultation or project quote." 
        />
        <meta property="og:title" content="Contact — Sumano" />
        <meta 
          property="og:description" 
          content="Contact Sumano for web, UX and AI solutions. Request a consultation or project quote." 
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact — Sumano" />
        <meta 
          name="twitter:description" 
          content="Contact Sumano for web, UX and AI solutions. Request a consultation or project quote." 
        />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <ContactHero />
        
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Contact Form - Left on desktop, top on mobile */}
              <ContactForm />
              
              {/* Contact Details and Map - Right on desktop, bottom on mobile */}
              <div className="space-y-6">
                <ContactDetails />
                <MapEmbed />
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      
    </>
  );
};

