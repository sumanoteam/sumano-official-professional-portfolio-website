// Application routes

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TEAM: '/team',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  CONTACT: '/contact',
  
  // Team member routes
  TEAM_MEMBER: (id: string) => `/team/${id}`,
  
  // Service routes
  SERVICE: (id: string) => `/services/${id}`,
  
  // Portfolio routes
  PROJECT: (id: string) => `/portfolio/${id}`,
  
  // File explorer routes
  FILE_EXPLORER: '/files',
  FILE: (path: string) => `/files/${path}`,
} as const;

export const ROUTE_LABELS = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.ABOUT]: 'About Us',
  [ROUTES.TEAM]: 'Our Team',
  [ROUTES.SERVICES]: 'Services',
  [ROUTES.PORTFOLIO]: 'Portfolio',
  [ROUTES.CONTACT]: 'Contact',
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
    path: ROUTES.TEAM,
    label: ROUTE_LABELS[ROUTES.TEAM],
    icon: 'UsersIcon',
    description: 'Meet our talented team'
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

