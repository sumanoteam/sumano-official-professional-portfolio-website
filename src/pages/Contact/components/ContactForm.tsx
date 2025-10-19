import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '../../../constants/contact';
import { sendContactMessage, validateContactForm, ContactFormData } from '../../../services/contact';
import { Button } from '../../../components/ui/Button/Button';
import { FloatingLabelInput } from '../../../components/ui/FloatingLabelInput';
import { FloatingLabelSelect } from '../../../components/ui/FloatingLabelSelect';
import { FloatingLabelTextarea } from '../../../components/ui/FloatingLabelTextarea';

interface FormErrors {
  [key: string]: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
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
        <h2 className="h2 mb-2">
          {CONTACT_CONTENT.FORM.TITLE}
        </h2>
            <p className="text-brand-text-muted-enhanced text-enhanced-subtle">
              {CONTACT_CONTENT.FORM.SUBTITLE}
            </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div 
          className="mb-6 p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-lg text-brand-accent"
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

        {/* First Name and Last Name Fields - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FloatingLabelInput
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            label={CONTACT_CONTENT.FORM.FIELDS.FIRST_NAME.LABEL}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.FIRST_NAME.PLACEHOLDER}
            required={CONTACT_CONTENT.FORM.FIELDS.FIRST_NAME.REQUIRED}
            error={errors.firstName}
            disabled={isSubmitting}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            aria-invalid={!!errors.firstName}
          />
          
          <FloatingLabelInput
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            label={CONTACT_CONTENT.FORM.FIELDS.LAST_NAME.LABEL}
            placeholder={CONTACT_CONTENT.FORM.FIELDS.LAST_NAME.PLACEHOLDER}
            required={CONTACT_CONTENT.FORM.FIELDS.LAST_NAME.REQUIRED}
            error={errors.lastName}
            disabled={isSubmitting}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            aria-invalid={!!errors.lastName}
          />
        </div>

        {/* Email Field */}
        <FloatingLabelInput
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.EMAIL.LABEL}
          placeholder={CONTACT_CONTENT.FORM.FIELDS.EMAIL.PLACEHOLDER}
          required={CONTACT_CONTENT.FORM.FIELDS.EMAIL.REQUIRED}
          error={errors.email}
          disabled={isSubmitting}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />

        {/* Phone Field */}
        <FloatingLabelInput
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.PHONE.LABEL}
          placeholder={CONTACT_CONTENT.FORM.FIELDS.PHONE.PLACEHOLDER}
          required={CONTACT_CONTENT.FORM.FIELDS.PHONE.REQUIRED}
          error={errors.phone}
          disabled={isSubmitting}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          aria-invalid={!!errors.phone}
        />

        {/* Country Field */}
        <FloatingLabelSelect
          id="country"
          name="country"
          value={formData.country || ''}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.COUNTRY.LABEL}
          options={CONTACT_CONTENT.FORM.FIELDS.COUNTRY.OPTIONS || []}
          required={CONTACT_CONTENT.FORM.FIELDS.COUNTRY.REQUIRED}
          error={errors.country}
          disabled={isSubmitting}
          aria-describedby={errors.country ? 'country-error' : undefined}
          aria-invalid={!!errors.country}
        />

        {/* Company Field */}
        <FloatingLabelInput
          id="company"
          name="company"
          type="text"
          value={formData.company || ''}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.COMPANY.LABEL}
          placeholder={CONTACT_CONTENT.FORM.FIELDS.COMPANY.PLACEHOLDER}
          required={CONTACT_CONTENT.FORM.FIELDS.COMPANY.REQUIRED}
          error={errors.company}
          disabled={isSubmitting}
          aria-describedby={errors.company ? 'company-error' : undefined}
          aria-invalid={!!errors.company}
        />

        {/* Subject Field */}
        <FloatingLabelInput
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.SUBJECT.LABEL}
          placeholder={CONTACT_CONTENT.FORM.FIELDS.SUBJECT.PLACEHOLDER}
          required={CONTACT_CONTENT.FORM.FIELDS.SUBJECT.REQUIRED}
          error={errors.subject}
          disabled={isSubmitting}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          aria-invalid={!!errors.subject}
        />

        {/* Budget Field */}
        <FloatingLabelSelect
          id="budget"
          name="budget"
          value={formData.budget || ''}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.BUDGET.LABEL}
          options={CONTACT_CONTENT.FORM.FIELDS.BUDGET.OPTIONS || []}
          required={CONTACT_CONTENT.FORM.FIELDS.BUDGET.REQUIRED}
          error={errors.budget}
          disabled={isSubmitting}
          aria-describedby={errors.budget ? 'budget-error' : undefined}
          aria-invalid={!!errors.budget}
        />

        {/* Message Field */}
        <FloatingLabelTextarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          label={CONTACT_CONTENT.FORM.FIELDS.MESSAGE.LABEL}
          placeholder={CONTACT_CONTENT.FORM.FIELDS.MESSAGE.PLACEHOLDER}
          required={CONTACT_CONTENT.FORM.FIELDS.MESSAGE.REQUIRED}
          error={errors.message}
          disabled={isSubmitting}
          rows={6}
          maxLength={2000}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
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
