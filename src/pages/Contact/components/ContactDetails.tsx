import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { CONTACT_CONTENT } from '../../../constants/contact';

export const ContactDetails: React.FC = () => {
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: "Email",
      value: CONTACT_CONTENT.DETAILS.INFO.EMAIL,
      href: `mailto:${CONTACT_CONTENT.DETAILS.INFO.EMAIL}`,
      color: "text-[#1ABC9C]"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "Phone",
      value: CONTACT_CONTENT.DETAILS.INFO.PHONE,
      href: `tel:${CONTACT_CONTENT.DETAILS.INFO.PHONE.replace(/\s/g, '')}`,
      color: "text-[#F5A623]"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      label: "Address",
      value: CONTACT_CONTENT.DETAILS.INFO.ADDRESS,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_CONTENT.DETAILS.INFO.ADDRESS)}`,
      color: "text-[#234E70]"
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      label: "Business Hours",
      value: CONTACT_CONTENT.DETAILS.INFO.HOURS,
      href: null,
      color: "text-gray-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8"
      id="contact-details"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#234E70] mb-2">
          {CONTACT_CONTENT.DETAILS.TITLE}
        </h2>
        <p className="text-gray-600">
          {CONTACT_CONTENT.DETAILS.SUBTITLE}
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="flex items-start space-x-4"
          >
            <div className={`flex-shrink-0 ${item.color}`}>
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <dl>
                <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {item.label}
                </dt>
                <dd className="mt-1">
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-lg font-medium hover:underline transition-colors ${
                        item.label === 'Email' ? 'text-[#1ABC9C] hover:text-[#16A085]' :
                        item.label === 'Phone' ? 'text-[#F5A623] hover:text-[#E0951A]' :
                        item.label === 'Address' ? 'text-[#234E70] hover:text-[#1A3A52]' :
                        'text-gray-900'
                      }`}
                      target={item.label === 'Address' ? '_blank' : undefined}
                      rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-lg font-medium text-gray-900">
                      {item.value}
                    </span>
                  )}
                </dd>
              </dl>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Response Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-8 p-4 bg-[#F8FAFC] rounded-lg border border-gray-200"
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-[#1ABC9C] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">
              Quick Response
            </h3>
            <p className="text-sm text-gray-600">
              We typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="mt-4 p-4 bg-[#FEF3C7] rounded-lg border border-[#F59E0B]"
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-[#F59E0B] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-[#92400E]">
              Urgent Project?
            </h3>
            <p className="text-sm text-[#B45309]">
              For urgent matters, call us directly at{' '}
              <a 
                href={`tel:${CONTACT_CONTENT.DETAILS.INFO.PHONE.replace(/\s/g, '')}`}
                className="font-medium hover:underline"
              >
                {CONTACT_CONTENT.DETAILS.INFO.PHONE}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
