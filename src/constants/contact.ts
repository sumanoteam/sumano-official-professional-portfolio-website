// Contact page constants and content

export const CONTACT_CONTENT = {
  HERO: {
    TITLE: "Get in touch — let's build something great.",
    SUBTITLE: "Tell us about your project and we'll propose the right solution. Fast replies and thoughtful planning.",
    CTA_TEXT: "Start Your Project"
  },
  
  FORM: {
    TITLE: "Send us a message",
    SUBTITLE: "Fill out the form below and we'll get back to you within 24-48 hours.",
    FIELDS: {
      FIRST_NAME: {
        LABEL: "First Name",
        PLACEHOLDER: "Enter your first name",
        REQUIRED: true
      },
      LAST_NAME: {
        LABEL: "Last Name",
        PLACEHOLDER: "Enter your last name",
        REQUIRED: true
      },
      EMAIL: {
        LABEL: "Email",
        PLACEHOLDER: "Enter your email address",
        REQUIRED: true
      },
      PHONE: {
        LABEL: "Phone",
        PLACEHOLDER: "Enter your phone number",
        REQUIRED: true
      },
      COUNTRY: {
        LABEL: "Country",
        PLACEHOLDER: "Select your country",
        REQUIRED: false,
        OPTIONS: [
          { value: '', label: 'Select your country' },
          { value: 'gambia', label: 'Gambia' },
          { value: 'senegal', label: 'Senegal' },
          { value: 'ghana', label: 'Ghana' },
          { value: 'nigeria', label: 'Nigeria' },
          { value: 'other', label: 'Other' }
        ]
      },
      COMPANY: {
        LABEL: "Company (Optional)",
        PLACEHOLDER: "Enter your company name",
        REQUIRED: false
      },
      SUBJECT: {
        LABEL: "Subject",
        PLACEHOLDER: "What's this about?",
        REQUIRED: true
      },
      MESSAGE: {
        LABEL: "Message",
        PLACEHOLDER: "Tell us about your project, goals, and any specific requirements...",
        REQUIRED: true,
        MIN_LENGTH: 20
      },
      BUDGET: {
        LABEL: "Budget Range (Optional)",
        PLACEHOLDER: "Select your budget range",
        REQUIRED: false,
        OPTIONS: [
          { value: '', label: 'Select budget range' },
          { value: 'under-20k', label: 'Under $20,000' },
          { value: '20k-50k', label: '$20,000 - $50,000' },
          { value: '50k-100k', label: '$50,000 - $100,000' },
          { value: '100k-plus', label: '$100,000+' },
          { value: 'discuss', label: 'Let\'s discuss' }
        ]
      },
      HONEYPOT: {
        NAME: "website",
        LABEL: "Website (Leave blank)"
      }
    },
    SUBMIT_BUTTON: "Send Message",
    SUBMITTING_BUTTON: "Sending...",
    SUCCESS_MESSAGE: "Thanks — we've received your message. A member of the Sumano team will reply within 24–48 hours.",
    ERROR_MESSAGE: "Something went wrong. Please try again or email us at sumanoteam@gmail.com"
  },
  
  DETAILS: {
    TITLE: "Get in touch",
    SUBTITLE: "We're here to help and answer any questions you might have.",
    INFO: {
      EMAIL: "sumanoteam@gmail.com",
      WHATSAPP: {
        PRIMARY: "+2203127212",
        SECONDARY: "+2203234633",
        MESSAGE: "Hello! I'm interested in your services. Can we discuss my project?"
      },
      ADDRESS: "Serrekunda, Banjul, The Gambia",
      HOURS: "Mon–Fri, 09:00–17:00 GMT"
    }
  },
  
  MAP: {
    TITLE: "Our Location",
    SUBTITLE: "Visit us at our office in The Gambia",
    PLACEHOLDER_TEXT: "Interactive map coming soon"
  },
  
  SOCIAL: {
    TITLE: "Follow us",
    LINKS: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/company/sumano",
        icon: "linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/sumano_tech",
        icon: "twitter"
      },
      {
        name: "GitHub",
        url: "https://github.com/sumanoteam/sumano-official-professional-portfolio-website",
        icon: "github"
      }
    ]
  }
} as const;

export const FORM_VALIDATION = {
  NAME: {
    REQUIRED: "Name is required",
    MIN_LENGTH: "Name must be at least 2 characters",
    MAX_LENGTH: "Name must be less than 100 characters"
  },
  EMAIL: {
    REQUIRED: "Email is required",
    INVALID: "Please enter a valid email address"
  },
  SUBJECT: {
    REQUIRED: "Subject is required",
    MIN_LENGTH: "Subject must be at least 5 characters",
    MAX_LENGTH: "Subject must be less than 200 characters"
  },
  MESSAGE: {
    REQUIRED: "Message is required",
    MIN_LENGTH: "Message must be at least 20 characters",
    MAX_LENGTH: "Message must be less than 2000 characters"
  }
} as const;

export const CONTACT_ENDPOINTS = {
  SEND_MESSAGE: '/api/contact/send',
  EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
} as const;
