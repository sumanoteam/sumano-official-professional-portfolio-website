/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant Brand Color System - Enhanced
        brand: {
          // Primary Colors - Deep Tech Blue (Trust, Stability)
          primary: '#1A3E8C',
          'primary-hover': '#142F6A',
          'primary-light': '#3B5BA8',
          'primary-dark': '#0F2A5C',
          
          // Highlight CTA Blue - Vibrant Tech Blue (Energy, Conversion)
          'cta-blue': '#1E50FF',
          'cta-blue-hover': '#163DCC',
          'cta-blue-light': '#4A7AFF',
          'cta-blue-dark': '#0F3BB8',
          
          // Gold Accent Colors - Premium Gold (Energy, Conversion)
          gold: '#BE9256',
          'gold-hover': '#A77E48',
          'gold-light': '#D4B584',
          'gold-dark': '#8B6F3F',
          'gold-focus': 'rgba(190, 146, 86, 0.4)',
          
          // Accent Colors - Electric Teal Green (Innovation, Success)
          accent: '#70EE9C',
          'accent-hover': '#5AD88A',
          'accent-light': '#8FF2B0',
          'accent-dark': '#4BCA7A',
          'accent-success': '#00C38E',
          
          // Text Colors - Enhanced Contrast System
          text: '#000000',                    // Pure black for maximum contrast
          'text-muted': '#64748B',            // Legacy muted - to be replaced
          'text-light': '#94A3B8',            // Legacy light - to be replaced
          'text-white': '#FFFFFF',            // White text for dark backgrounds
          
          // New Contrast-Safe Text Tokens for White Backgrounds
          'text-dark': '#111827',             // Deep charcoal for high contrast
          'text-base': '#1E293B',             // Slightly softened black
          'text-muted-enhanced': '#475569',   // Better contrast than #64748B
          'text-subtle': '#64748B',           // For very subtle text
          'text-light-enhanced': '#94A3B8',   // For disabled/placeholder text
          
          // Status Colors
          success: '#70EE9C',
          warning: '#F59E0B',
          error: '#E53935',
          info: '#3B82F6',
          
          // Background Colors
          bg: '#F8F9FA',
          'bg-white': '#FFFFFF',
          'bg-card': '#FFFFFF',
          
          // Border Colors
          border: '#E2E8F0',
          'border-focus': '#70EE9C',
          'border-light': '#F1F5F9',
        },
        // Text Color Utilities for Contrast
        textColor: {
          'on-light': 'var(--brand-text-dark)',      // High contrast for white/light backgrounds
          'on-dark': 'var(--color-text-white)',      // White text for dark backgrounds
          'muted-on-light': 'var(--brand-text-muted)', // Better contrast muted text
          'subtle-on-light': 'var(--brand-text-subtle)', // Subtle text for light backgrounds
        },
        // Keep some utility colors for borders, shadows, etc.
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}

