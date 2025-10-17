// Application routes

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact',
  OMS: '/oms',
  
  // Team member routes
  TEAM_MEMBER: (id: string) => `/team/${id}`,
  
  // Service routes
  SERVICE: (id: string) => `/services/${id}`,
  
  // Portfolio routes
  PROJECT: (id: string) => `/portfolio/${id}`,
  
} as const;

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.ABOUT]: 'About Us',
  [ROUTES.SERVICES]: 'Services',
  [ROUTES.PORTFOLIO]: 'Portfolio',
  [ROUTES.CONTACT]: 'Contact',
  [ROUTES.OMS]: 'OMS',
} as const;

export const NAVIGATION_ITEMS = [
  {
    path: ROUTES.HOME,
    label: ROUTE_LABELS[ROUTES.HOME],
    icon: 'HomeIcon',
    description: 'Welcome to Sumano'
  },
  {
    path: ROUTES.ABOUT,
    label: ROUTE_LABELS[ROUTES.ABOUT],
    icon: 'BuildingOfficeIcon',
    description: 'Learn about our company'
  },
  {
    path: ROUTES.SERVICES,
    label: ROUTE_LABELS[ROUTES.SERVICES],
    icon: 'CogIcon',
    description: 'What we offer'
  },
  {
    path: ROUTES.PORTFOLIO,
    label: ROUTE_LABELS[ROUTES.PORTFOLIO],
    icon: 'BriefcaseIcon',
    description: 'Our work and projects'
  },
  {
    path: ROUTES.CONTACT,
    label: ROUTE_LABELS[ROUTES.CONTACT],
    icon: 'PhoneIcon',
    description: 'Get in touch with us'
  }
] as const;

