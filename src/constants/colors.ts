// Vibrant Brand Color System - Enhanced for Sumano Tech Solution
export const BRAND_COLORS = {
  // Primary Colors - Deep Tech Blue (Trust, Stability)
  PRIMARY: '#1A3E8C',
  PRIMARY_HOVER: '#142F6A',
  PRIMARY_LIGHT: '#3B5BA8',
  PRIMARY_DARK: '#0F2A5C',
  
  // Highlight CTA Blue - Vibrant Tech Blue (Energy, Conversion)
  CTA_BLUE: '#1E50FF',
  CTA_BLUE_HOVER: '#163DCC',
  CTA_BLUE_LIGHT: '#4A7AFF',
  CTA_BLUE_DARK: '#0F3BB8',
  
  // Accent Colors - Electric Teal Green (Innovation, Success)
  ACCENT: '#70EE9C',
  ACCENT_HOVER: '#5AD88A',
  ACCENT_LIGHT: '#8FF2B0',
  ACCENT_DARK: '#4BCA7A',
  ACCENT_SUCCESS: '#00C38E',
  
  // Text Colors - Enhanced Contrast System
  TEXT_PRIMARY: '#000000',                    // Pure black for maximum contrast
  TEXT_SECONDARY: '#64748B',                  // Legacy muted - to be replaced
  TEXT_LIGHT: '#94A3B8',                      // Legacy light - to be replaced
  TEXT_WHITE: '#FFFFFF',                      // White text for dark backgrounds
  
  // New Contrast-Safe Text Tokens for White Backgrounds
  TEXT_DARK: '#111827',                       // Deep charcoal for high contrast
  TEXT_BASE: '#1E293B',                       // Slightly softened black
  TEXT_MUTED_ENHANCED: '#475569',             // Better contrast than #64748B
  TEXT_SUBTLE: '#64748B',                     // For very subtle text
  TEXT_LIGHT_ENHANCED: '#94A3B8',             // For disabled/placeholder text
  
  // Status Colors
  SUCCESS: '#70EE9C',
  WARNING: '#F59E0B',
  ERROR: '#E53935',
  INFO: '#3B82F6',
  
  // Background Colors
  BACKGROUND_WHITE: '#FFFFFF',
  BACKGROUND_LIGHT: '#F8F9FA',
  BACKGROUND_CARD: '#FFFFFF',
  
  // Border Colors
  BORDER_LIGHT: '#E2E8F0',
  BORDER_FOCUS: '#70EE9C',
  BORDER_MEDIUM: '#CBD5E1',
  BORDER_DARK: '#94A3B8',
} as const;

// Tailwind color mappings for easy usage - New Brand System
export const TAILWIND_COLORS = {
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#1A3E8C',  // Main primary color
    600: '#142F6A',  // Primary hover
    700: '#0F2A5C',  // Primary dark
    800: '#0A1F47',
    900: '#051432',
    950: '#020A1C'
  },
      secondary: {
        50: '#F8F9FA',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#000000'   // Main secondary color (black)
      },
      // Enhanced Text Colors for Better Contrast
      text: {
        dark: '#111827',        // Deep charcoal for high contrast
        base: '#1E293B',        // Slightly softened black
        'muted-enhanced': '#475569',  // Better contrast than #64748B
        subtle: '#64748B',      // For very subtle text
        'light-enhanced': '#94A3B8',  // For disabled/placeholder text
        white: '#FFFFFF',       // White text for dark backgrounds
      },
  accent: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#8FF2B0',  // Accent light
    500: '#70EE9C',  // Main accent color
    600: '#5AD88A',  // Accent hover
    700: '#4BCA7A',  // Accent dark
    800: '#3BB86A',
    900: '#2BA65A',
    950: '#1B8C4A'
  }
} as const;

// Font family constants
export const FONT_FAMILIES = {
  HEADING: ['Poppins', 'system-ui', 'sans-serif'],
  BODY: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
  MONO: ['JetBrains Mono', 'monospace']
} as const;

// Spacing constants
export const SPACING = {
  SECTION_PADDING: 'py-16 md:py-20',
  CONTAINER_PADDING: 'px-4 sm:px-6 lg:px-8',
  CARD_PADDING: 'p-6',
  BUTTON_PADDING: 'px-6 py-3',
  INPUT_PADDING: 'px-4 py-3',
} as const;

// Border radius constants
export const BORDER_RADIUS = {
  CARD: 'rounded-xl',
  INPUT: 'rounded-md',
  BUTTON: 'rounded-lg',
  SMALL: 'rounded-sm',
} as const;
