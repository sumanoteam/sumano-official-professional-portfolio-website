// Brand color constants for consistent usage across the application
export const BRAND_COLORS = {
  // Primary brand navy
  PRIMARY: '#234E70',
  PRIMARY_LIGHT: '#3B6B8F',
  PRIMARY_DARK: '#1A3A52',
  
  // Secondary / action color (warm energy)
  SECONDARY: '#F5A623',
  SECONDARY_LIGHT: '#F7B84D',
  SECONDARY_DARK: '#E0951A',
  
  // Accent / success
  ACCENT: '#1ABC9C',
  ACCENT_LIGHT: '#4DD4B8',
  ACCENT_DARK: '#16A085',
  
  // Neutral text colors
  TEXT_PRIMARY: '#475569',
  TEXT_SECONDARY: '#64748B',
  TEXT_LIGHT: '#94A3B8',
  
  // Background colors
  BACKGROUND_WHITE: '#FFFFFF',
  BACKGROUND_LIGHT: '#F8FAFC',
  BACKGROUND_GRAY: '#F1F5F9',
  
  // Status colors
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
  
  // Border colors
  BORDER_LIGHT: '#E2E8F0',
  BORDER_MEDIUM: '#CBD5E1',
  BORDER_DARK: '#94A3B8',
} as const;

// Tailwind color mappings for easy usage
export const TAILWIND_COLORS = {
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554'
  },
  secondary: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617'
  },
  accent: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16'
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
