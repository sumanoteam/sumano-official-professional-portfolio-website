import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '../../../constants/contact';
import { sendContactMessage, validateContactForm, ContactFormData } from '../../../services/contact';
import { Button } from '../../../components/ui/Button/Button';

interface FormErrors {
  [key: string]: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    honeypot: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const result = await sendContactMessage(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(CONTACT_CONTENT.FORM.SUCCESS_MESSAGE);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          budget: '',
          honeypot: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || CONTACT_CONTENT.FORM.ERROR_MESSAGE);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(CONTACT_CONTENT.FORM.ERROR_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8"
      id="contact-form"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#234E70] mb-2">
          {CONTACT_CONTENT.FORM.TITLE}
        </h2>
        <p className="text-gray-600">
          {CONTACT_CONTENT.FORM.SUBTITLE}
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div 
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
          role="alert"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {submitMessage}
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div 
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
          role="alert"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {submitMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {CONTACT_CONTENT.FORM.FIELDS.NAME.LABEL}
            {CONTACT_CONTENT.FORM.FIELDS.NAME.REQUIRED && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.NAME.PLACEHOLDER}
            className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-colors ${
              errors.name ? 'border-red-300' : 'border-gray-300'
            }`}
            {...(errors.name && { 'aria-invalid': 'true' })}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {CONTACT_CONTENT.FORM.FIELDS.EMAIL.LABEL}
            {CONTACT_CONTENT.FORM.FIELDS.EMAIL.REQUIRED && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.EMAIL.PLACEHOLDER}
            className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-colors ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            {...(errors.email && { 'aria-invalid': 'true' })}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            {CONTACT_CONTENT.FORM.FIELDS.COMPANY.LABEL}
            {!CONTACT_CONTENT.FORM.FIELDS.COMPANY.REQUIRED && <span className="text-gray-500 ml-1">(Optional)</span>}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.COMPANY.PLACEHOLDER}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-colors"
            disabled={isSubmitting}
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {CONTACT_CONTENT.FORM.FIELDS.SUBJECT.LABEL}
            {CONTACT_CONTENT.FORM.FIELDS.SUBJECT.REQUIRED && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.SUBJECT.PLACEHOLDER}
            className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-colors ${
              errors.subject ? 'border-red-300' : 'border-gray-300'
            }`}
            {...(errors.subject && { 'aria-invalid': 'true' })}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Budget Field */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            {CONTACT_CONTENT.FORM.FIELDS.BUDGET.LABEL}
            {!CONTACT_CONTENT.FORM.FIELDS.BUDGET.REQUIRED && <span className="text-gray-500 ml-1">(Optional)</span>}
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-colors"
            disabled={isSubmitting}
          >
            {CONTACT_CONTENT.FORM.FIELDS.BUDGET.OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {CONTACT_CONTENT.FORM.FIELDS.MESSAGE.LABEL}
            {CONTACT_CONTENT.FORM.FIELDS.MESSAGE.REQUIRED && <span className="text-red-500 ml-1">*</span>}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.MESSAGE.PLACEHOLDER}
            rows={6}
            className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623] transition-colors resize-vertical ${
              errors.message ? 'border-red-300' : 'border-gray-300'
            }`}
            {...(errors.message && { 'aria-invalid': 'true' })}
            aria-describedby={errors.message ? 'message-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/2000 characters
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-[#F5A623] hover:bg-[#E0951A] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {CONTACT_CONTENT.FORM.SUBMITTING_BUTTON}
              </div>
            ) : (
              CONTACT_CONTENT.FORM.SUBMIT_BUTTON
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
