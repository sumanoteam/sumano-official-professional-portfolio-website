import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { CONTACT_CONTENT } from '../../../constants/contact';
import { WhatsAppButton } from '../../../components/ui/WhatsAppButton';

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

      {/* WhatsApp Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl text-white"
      >
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Message Us on WhatsApp
        </h3>
        <p className="text-white/90 mb-4">
          Get instant responses and discuss your project with our team
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <WhatsAppButton
            phoneNumber={CONTACT_CONTENT.DETAILS.INFO.WHATSAPP.PRIMARY}
            message={CONTACT_CONTENT.DETAILS.INFO.WHATSAPP.MESSAGE}
            variant="secondary"
            size="md"
            className="flex-1"
          >
            Primary Contact
          </WhatsAppButton>
          <WhatsAppButton
            phoneNumber={CONTACT_CONTENT.DETAILS.INFO.WHATSAPP.SECONDARY}
            message={CONTACT_CONTENT.DETAILS.INFO.WHATSAPP.MESSAGE}
            variant="outline"
            size="md"
            className="flex-1"
          >
            Alternative Contact
          </WhatsAppButton>
        </div>
      </motion.div>

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
            <p className="text-sm text-[#B45309] mb-3">
              For urgent matters, message us on WhatsApp for immediate response
            </p>
            <WhatsAppButton
              phoneNumber={CONTACT_CONTENT.DETAILS.INFO.WHATSAPP.PRIMARY}
              message="URGENT: I need immediate assistance with my project"
              variant="primary"
              size="sm"
            >
              Urgent WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
