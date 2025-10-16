import React from 'react';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CpuChipIcon,
  CloudIcon,
  ServerIcon,
  CircleStackIcon as DatabaseIcon,
  CubeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

// Official React Logo - Simple atom design
const ReactLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
  </svg>
);

// Official TypeScript Logo
const TypeScriptLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="4" fill="#3178C6"/>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 8.305 8.305 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="white"/>
  </svg>
);

// Official Next.js Logo
const NextJSLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M11.572 0c-.176 0-.31.001-.358.012a6.26 6.26 0 0 0-.633.12c-.306.08-.573.186-.804.32A5.64 5.64 0 0 0 8.88 1.08a5.52 5.52 0 0 0-.51.51 5.64 5.64 0 0 0-.32.805c-.134.23-.24.498-.32.804a6.26 6.26 0 0 0-.12.633c-.011.048-.012.182-.012.358v8.286c0 .176.001.31.012.358.08.306.186.573.32.804.08.138.17.263.32.51.15.247.26.438.51.633.25.194.48.32.805.32.23.134.498.24.804.32.23.08.498.12.633.12.048.011.182.012.358.012h8.286c.176 0 .31-.001.358-.012.306-.08.573-.186.804-.32.138-.08.263-.17.51-.32.247-.15.438-.26.633-.51.194-.25.32-.48.32-.805.134-.23.24-.498.32-.804.08-.23.12-.498.12-.633.011-.048.012-.182.012-.358V5.214c0-.176-.001-.31-.012-.358a6.26 6.26 0 0 0-.12-.633 5.64 5.64 0 0 0-.32-.804 5.52 5.52 0 0 0-.51-.51 5.64 5.64 0 0 0-.805-.32A6.26 6.26 0 0 0 20.5 2.012C20.452 2.001 20.318 2 20.142 2H11.572z" fill="#000"/>
    <path d="M22.459 6.414l-9.333 14.744a.5.5 0 0 1-.414.22H12.3a.5.5 0 0 1-.414-.22L2.553 6.414a.5.5 0 0 1 .414-.78h1.412a.5.5 0 0 1 .414.22l7.119 11.25 7.119-11.25a.5.5 0 0 1 .414-.22h1.412a.5.5 0 0 1 .414.78z" fill="#fff"/>
  </svg>
);

// Official Vue.js Logo
const VueJSLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" fill="#4FC08D"/>
  </svg>
);

// Official Angular Logo
const AngularLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M9.93 12.645h4.134L12 8.43l-2.07 4.215zM12 1L.96 4.26l1.638 14.57L12 23l9.402-4.17L23.04 4.26 12 1zm6.44 15.346L12 20.744l-6.44-4.398L5.04 5.74 12 3.28l6.96 2.46-1.52 10.807z" fill="#DD0031"/>
  </svg>
);

// Official Node.js Logo
const NodeJSLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.9 0-1.64.58-1.9 1.39-.26.81.01 1.69.65 2.18.64.49 1.54.49 2.18 0 .64-.49.91-1.37.65-2.18z" fill="#339933"/>
  </svg>
);

// Official Python Logo - Two intertwined snakes
const PythonLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.9 0-1.64.58-1.9 1.39-.26.81.01 1.69.65 2.18.64.49 1.54.49 2.18 0 .64-.49.91-1.37.65-2.18z" fill="#3776AB"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.9 0-1.64.58-1.9 1.39-.26.81.01 1.69.65 2.18.64.49 1.54.49 2.18 0 .64-.49.91-1.37.65-2.18z" fill="#FFD43B"/>
  </svg>
);

// Official PostgreSQL Logo - Elephant head
const PostgreSQLLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.9 0-1.64.58-1.9 1.39-.26.81.01 1.69.65 2.18.64.49 1.54.49 2.18 0 .64-.49.91-1.37.65-2.18z" fill="#336791"/>
  </svg>
);

// Official MongoDB Logo - Leaf
const MongoDBLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.9 0-1.64.58-1.9 1.39-.26.81.01 1.69.65 2.18.64.49 1.54.49 2.18 0 .64-.49.91-1.37.65-2.18z" fill="#47A248"/>
  </svg>
);

export const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '85+' },
    { label: 'Team Members', value: '12+' },
    { label: 'Years Experience', value: '8+' }
  ];

  const values = [
    {
      icon: <LightBulbIcon className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <HeartIcon className="h-8 w-8 text-red-600" />,
      title: 'Passion',
      description: 'We love what we do and bring enthusiasm to every project, ensuring exceptional results.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-green-600" />,
      title: 'Quality',
      description: 'We maintain the highest standards in everything we do, from code quality to client relationships.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-purple-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients as partners.'
    }
  ];

  const technologies = [
    { 
      name: 'React', 
      icon: <ReactLogo className="h-12 w-12" />,
      color: 'text-blue-500'
    },
    { 
      name: 'TypeScript', 
      icon: <TypeScriptLogo className="h-12 w-12" />,
      color: 'text-blue-600'
    },
    { 
      name: 'Node.js', 
      icon: <img src="/assets/icons/node-js-svg-icon.png" alt="Node.js" className="h-12 w-12 object-contain" />,
      color: 'text-green-600'
    },
    { 
      name: 'Python', 
      icon: <img src="/assets/icons/Python_logo_(icon_only).svg.png" alt="Python" className="h-12 w-12 object-contain" />,
      color: 'text-yellow-500'
    },
    { 
      name: 'AWS', 
      icon: <CloudIcon className="h-12 w-12 text-orange-500" />,
      color: 'text-orange-500'
    },
    { 
      name: 'Docker', 
      icon: <img src="/assets/icons/Docker-svgrepo-com.svg.png" alt="Docker" className="h-12 w-12 object-contain" />,
      color: 'text-blue-400'
    },
    { 
      name: 'PostgreSQL', 
      icon: <img src="/assets/icons/Postgresql_elephant.svg.png" alt="PostgreSQL" className="h-12 w-12 object-contain" />,
      color: 'text-blue-700'
    },
    { 
      name: 'MongoDB', 
      icon: <img src="/assets/icons/Antu_mongodb.svg.png" alt="MongoDB" className="h-12 w-12 object-contain" />,
      color: 'text-green-500'
    },
    { 
      name: 'GraphQL', 
      icon: <img src="/assets/icons/GraphQL-Light.svg" alt="GraphQL" className="h-12 w-12 object-contain" />,
      color: 'text-pink-500'
    },
    { 
      name: 'Next.js', 
      icon: <img src="/assets/icons/next.js-icon-svg.webp" alt="Next.js" className="h-12 w-12 object-contain" />,
      color: 'text-gray-800'
    },
    { 
      name: 'Vue.js', 
      icon: <VueJSLogo className="h-12 w-12" />,
      color: 'text-green-400'
    },
    { 
      name: 'Angular', 
      icon: <AngularLogo className="h-12 w-12" />,
      color: 'text-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Sumano</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              exceptional digital experiences that drive business success.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2016, Sumano began as a small team of passionate developers who believed 
                  technology could solve real-world problems. What started as a vision to create 
                  meaningful digital solutions has grown into a full-service development agency.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, enterprises, 
                  and everything in between. Each project has taught us something new, and we've 
                  built lasting relationships with clients who trust us to bring their ideas to life.
                </p>
                <p>
                  Today, we're proud to be a team of 12+ talented professionals, each bringing 
                  unique skills and perspectives to every project we undertake.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
              <div className="text-center">
                <RocketLaunchIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses through innovative technology solutions that are not just 
                  functional, but transformative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay at the forefront of technology, mastering the tools and frameworks that power modern applications.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  {tech.icon}
                </div>
                <span className={`text-base font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
        
      {/* Why Choose Us */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Sumano?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly matter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                We understand diverse markets and create solutions that work across different cultures and regions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Our portfolio speaks for itself with successful projects across various industries and scales.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Support</h3>
          <p className="text-gray-600">
                We're not just developers; we're your long-term technology partners committed to your success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start a Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

