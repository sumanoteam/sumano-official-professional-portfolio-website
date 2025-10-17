// Contact form submission service

import { CONTACT_ENDPOINTS } from '../constants/contact';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  company?: string;
  subject: string;
  message: string;
  budget?: string;
  honeypot?: string; // Should be empty for legitimate submissions
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}

// EmailJS integration (if configured)
const sendViaEmailJS = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    // Check if EmailJS is configured
    if (!CONTACT_ENDPOINTS.EMAILJS_SERVICE_ID || !CONTACT_ENDPOINTS.EMAILJS_TEMPLATE_ID || !CONTACT_ENDPOINTS.EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS configuration missing');
    }

    // Dynamic import to avoid bundling EmailJS if not needed
    const emailjs = await import('@emailjs/browser');

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      country: formData.country || 'Not provided',
      company: formData.company || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      budget: formData.budget || 'Not specified',
      to_name: 'Sumano Team'
    };

    await emailjs.send(
      CONTACT_ENDPOINTS.EMAILJS_SERVICE_ID,
      CONTACT_ENDPOINTS.EMAILJS_TEMPLATE_ID,
      templateParams,
      CONTACT_ENDPOINTS.EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Message sent successfully via EmailJS'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send message via EmailJS');
  }
};

// Server endpoint integration
const sendViaServer = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    const response = await fetch(CONTACT_ENDPOINTS.SEND_MESSAGE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Server error:', error);
    throw new Error('Failed to send message via server');
  }
};

// Formspree integration (alternative)
const sendViaFormspree = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;
    if (!formspreeEndpoint) {
      throw new Error('Formspree endpoint not configured');
    }

    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.status}`);
    }

    return {
      success: true,
      message: 'Message sent successfully via Formspree'
    };
  } catch (error) {
    console.error('Formspree error:', error);
    throw new Error('Failed to send message via Formspree');
  }
};

// Main contact form submission function
export const sendContactMessage = async (formData: ContactFormData): Promise<ContactResponse> => {
  // Check for honeypot spam detection
  if (formData.honeypot && formData.honeypot.trim() !== '') {
    console.warn('Honeypot field filled - potential spam');
    return {
      success: false,
      message: 'Invalid submission detected'
    };
  }

  // Validate required fields
  if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
    return {
      success: false,
      message: 'Please fill in all required fields'
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return {
      success: false,
      message: 'Please enter a valid email address'
    };
  }

  // Try different submission methods in order of preference
  const methods = [
    { name: 'EmailJS', fn: () => sendViaEmailJS(formData) },
    { name: 'Formspree', fn: () => sendViaFormspree(formData) },
    { name: 'Server', fn: () => sendViaServer(formData) }
  ];

  for (const method of methods) {
    try {
      const result = await method.fn();
      console.log(`Message sent successfully via ${method.name}`);
      return result;
    } catch (error) {
      console.warn(`Failed to send via ${method.name}:`, error);
      // Continue to next method
    }
  }

  // If all methods fail, return error
  return {
    success: false,
    message: 'Unable to send message. Please try again later or contact us directly at hello@sumano.tech'
  };
};

// Form validation utilities
export const validateContactForm = (formData: ContactFormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  // First Name validation
  if (!formData.firstName || formData.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  } else if (formData.firstName.length > 50) {
    errors.firstName = 'First name must be less than 50 characters';
  }

  // Last Name validation
  if (!formData.lastName || formData.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  } else if (formData.lastName.length > 50) {
    errors.lastName = 'Last name must be less than 50 characters';
  }

  // Email validation
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!formData.phone || formData.phone.trim().length < 10) {
    errors.phone = 'Phone number must be at least 10 characters';
  } else if (formData.phone.length > 20) {
    errors.phone = 'Phone number must be less than 20 characters';
  }

  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters';
  } else if (formData.subject.length > 200) {
    errors.subject = 'Subject must be less than 200 characters';
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters';
  } else if (formData.message.length > 2000) {
    errors.message = 'Message must be less than 2000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
