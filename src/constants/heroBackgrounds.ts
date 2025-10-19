// Hero background images and configurations
// Using high-quality stock images of Black Americans in tech/professional settings

// Standardized hero section heights for consistency across all pages
export const HERO_HEIGHTS = {
  STANDARD: "py-20 lg:py-32", // Mobile: py-20, Desktop: py-32
} as const;

export const HERO_BACKGROUNDS = {
  HOME: {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    overlayOpacity: 0.8,
    gradientFrom: 'from-brand-primary',
    gradientTo: 'to-brand-secondary'
  },
  ABOUT: {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayOpacity: 0.85,
    gradientFrom: 'from-brand-primary',
    gradientTo: 'to-brand-secondary'
  },
  SERVICES: {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayOpacity: 0.82,
    gradientFrom: 'from-brand-primary',
    gradientTo: 'to-brand-secondary'
  },
  CONTACT: {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    overlayOpacity: 0.8,
    gradientFrom: 'from-brand-primary',
    gradientTo: 'to-brand-secondary'
  }
} as const;
