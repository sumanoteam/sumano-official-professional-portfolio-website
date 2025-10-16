// Application configuration

export const CONFIG = {
  APP: {
    NAME: 'Sumano Portfolio',
    VERSION: '1.0.0',
    DESCRIPTION: 'Professional portfolio website for Sumano team',
    AUTHOR: 'Sumano Team',
    WEBSITE: 'https://sumano.com'
  },
  
  API: {
    BASE_URL: process.env.REACT_APP_API_URL || 'https://api.sumano.com',
    TIMEOUT: parseInt(process.env.REACT_APP_API_TIMEOUT || '10000'),
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
  },
  
  ROUTING: {
    BASE_PATH: process.env.REACT_APP_BASE_PATH || '/portfolio',
    MAIN_WEBSITE_URL: process.env.REACT_APP_MAIN_WEBSITE_URL || 'https://sumano.com'
  },
  
  ANALYTICS: {
    GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GA_ID,
    MIXPANEL_TOKEN: process.env.REACT_APP_MIXPANEL_TOKEN,
    ENABLED: process.env.NODE_ENV === 'production'
  },
  
  FILE_SYSTEM: {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    THUMBNAIL_SIZE: { width: 300, height: 200 }
  },
  
  UI: {
    ANIMATION_DURATION: 300,
    DEBOUNCE_DELAY: 500,
    TOAST_DURATION: 5000,
    MODAL_ANIMATION_DURATION: 200
  },
  
  THEME: {
    PRIMARY_COLOR: '#1e3a8a',
    SECONDARY_COLOR: '#3b82f6',
    ACCENT_COLOR: '#dbeafe',
    SUCCESS_COLOR: '#10b981',
    WARNING_COLOR: '#f59e0b',
    ERROR_COLOR: '#ef4444',
    INFO_COLOR: '#06b6d4'
  }
} as const;

export const ENVIRONMENT = {
  DEVELOPMENT: process.env.NODE_ENV === 'development',
  PRODUCTION: process.env.NODE_ENV === 'production',
  TEST: process.env.NODE_ENV === 'test'
} as const;

