export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  client: string;
  year: number;
  status: 'completed' | 'in-progress' | 'coming-soon';
}

export const portfolioProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with modern technologies, featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.',
    shortDescription: 'Full-stack e-commerce platform with real-time features',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    features: [
      'Real-time inventory tracking',
      'Secure payment processing',
      'Advanced analytics dashboard',
      'Mobile-responsive design',
      'Admin management panel'
    ],
    liveUrl: 'https://demo-ecommerce.sumano.com',
    githubUrl: 'https://github.com/sumano/ecommerce-platform',
    client: 'TechCorp Inc.',
    year: 2024,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    description: 'A comprehensive healthcare management system designed for hospitals and clinics, featuring patient records, appointment scheduling, and telemedicine capabilities.',
    shortDescription: 'Complete healthcare management solution',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    category: 'Healthcare',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'Docker'],
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Telemedicine integration',
      'Prescription management',
      'Analytics and reporting'
    ],
    liveUrl: 'https://healthcare.sumano.com',
    client: 'MediCare Hospital',
    year: 2024,
    status: 'completed'
  },
  {
    id: '3',
    title: 'Educational Learning Platform',
    description: 'An interactive online learning platform with video streaming, quizzes, progress tracking, and collaborative features for educational institutions.',
    shortDescription: 'Interactive online learning platform',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    category: 'Education',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Vercel', 'Stripe'],
    features: [
      'Video streaming and recording',
      'Interactive quizzes and assignments',
      'Progress tracking',
      'Discussion forums',
      'Certificate generation'
    ],
    liveUrl: 'https://learn.sumano.com',
    client: 'EduTech University',
    year: 2023,
    status: 'completed'
  },
  {
    id: '4',
    title: 'Financial Analytics Dashboard',
    description: 'A sophisticated financial analytics dashboard providing real-time market data, portfolio tracking, and predictive analytics for investment firms.',
    shortDescription: 'Real-time financial analytics dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'FinTech',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    features: [
      'Real-time market data',
      'Portfolio performance tracking',
      'Predictive analytics',
      'Risk assessment tools',
      'Custom reporting'
    ],
    liveUrl: 'https://finance.sumano.com',
    client: 'InvestPro Capital',
    year: 2023,
    status: 'completed'
  },
  {
    id: '5',
    title: 'Smart City IoT Platform',
    description: 'An Internet of Things platform for smart city management, integrating traffic monitoring, environmental sensors, and citizen services.',
    shortDescription: 'IoT platform for smart city management',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    category: 'IoT',
    technologies: ['React', 'Python', 'MQTT', 'InfluxDB', 'Kubernetes'],
    features: [
      'Real-time sensor monitoring',
      'Traffic flow optimization',
      'Environmental data tracking',
      'Citizen service portal',
      'Predictive maintenance'
    ],
    liveUrl: 'https://smartcity.sumano.com',
    client: 'City of Innovation',
    year: 2024,
    status: 'in-progress'
  },
  {
    id: '6',
    title: 'AI-Powered Chatbot Platform',
    description: 'A comprehensive chatbot platform with natural language processing, multi-channel support, and advanced analytics for customer service automation.',
    shortDescription: 'AI-powered customer service chatbot',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    category: 'AI/ML',
    technologies: ['React', 'Python', 'TensorFlow', 'OpenAI', 'Docker'],
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Sentiment analysis',
      'Conversation analytics',
      'Custom training models'
    ],
    liveUrl: 'https://chatbot.sumano.com',
    client: 'ServicePro Inc.',
    year: 2024,
    status: 'coming-soon'
  }
];

