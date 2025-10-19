import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  RocketLaunchIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CloudIcon
} from '@heroicons/react/24/outline';
import { TeamSection } from '../../components/team/TeamSection';
import { TEAM_MEMBERS } from '../../constants/team';
import { Container } from '../../components/layout/Container';
import { HeroBackground } from '../../components/ui/HeroBackground';
import { Button } from '../../components/ui/Button/Button';
import { HERO_BACKGROUNDS, HERO_HEIGHTS } from '../../constants/heroBackgrounds';
import { ROUTES } from '../../constants/routes';

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
      icon: <img src="/assets/icons/vue-logo.svg" alt="Vue.js" className="h-12 w-12 object-contain" />,
      color: 'text-green-400'
    },
    { 
      name: 'Angular', 
      icon: <img src="/assets/icons/angular-logo.svg" alt="Angular" className="h-12 w-12 object-contain" />,
      color: 'text-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroBackground
        backgroundImage={HERO_BACKGROUNDS.ABOUT.image}
        overlayOpacity={HERO_BACKGROUNDS.ABOUT.overlayOpacity}
        gradientFrom={HERO_BACKGROUNDS.ABOUT.gradientFrom}
        gradientTo={HERO_BACKGROUNDS.ABOUT.gradientTo}
        className={HERO_HEIGHTS.STANDARD}
      >
        <Container>
          <div className="text-center">
            <h1 className="h1 mb-6 text-white">About Sumano Tech Solution</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              We are a passionate team of developers, designers, and innovators dedicated to creating 
              exceptional digital experiences that drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`${ROUTES.ABOUT}#our-team`}
                className="btn-primary btn-lg"
              >
                Meet Our Team
              </Link>
              <Button variant="outline" size="lg" as="a" href={ROUTES.CONTACT} outlineColor="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </HeroBackground>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-brand-text-muted-enhanced text-enhanced-subtle">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="h2 mb-6">Our Story</h2>
              <div className="space-y-4 text-brand-text-base leading-relaxed text-enhanced-subtle">
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
            <div className="bg-brand-primary rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <RocketLaunchIcon className="h-16 w-16 text-brand-cta-blue-light mx-auto mb-4" />
                <h3 className="h3 mb-4 text-white">Our Mission</h3>
                <p className="text-white text-enhanced-subtle">
                  To empower businesses through innovative technology solutions that are not just 
                  functional, but transformative.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Our Team Section */}
      <TeamSection members={TEAM_MEMBERS} />

      {/* Values Section */}
      <div className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Our Values</h2>
            <p className="text-xl text-brand-text-muted-enhanced max-w-3xl mx-auto text-enhanced-subtle">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="h3 mb-3">{value.title}</h3>
                <p className="text-brand-text-base text-enhanced-subtle">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Technology Expertise */}
      <div className="py-16">
        <Container>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="h2 mb-4">Technology Expertise</h2>
            <p className="text-xl text-brand-text-muted-enhanced max-w-3xl mx-auto text-enhanced-subtle">
              We stay at the forefront of technology, mastering the tools and frameworks that power modern applications.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-gray-100 hover:border-brand-primary/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                {/* Icon Container with Enhanced Styling */}
                <motion.div 
                  className="flex justify-center mb-4 relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-brand-primary/10 group-hover:to-brand-accent/10 transition-all duration-500 shadow-md group-hover:shadow-lg">
                    {tech.icon}
                  </div>
                </motion.div>
                
                {/* Technology Name with Enhanced Typography */}
                <motion.span 
                  className={`text-base font-semibold ${tech.color} relative z-10 group-hover:text-brand-primary transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.name}
                </motion.span>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
        
      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">Why Choose Sumano?</h2>
            <p className="text-xl text-brand-text-muted-enhanced max-w-3xl mx-auto text-enhanced-subtle">
              We combine technical expertise with business acumen to deliver solutions that truly matter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="h3 mb-3">Global Perspective</h3>
              <p className="text-brand-text-base text-enhanced-subtle">
                We understand diverse markets and create solutions that work across different cultures and regions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="h3 mb-3">Proven Track Record</h3>
              <p className="text-brand-text-base text-enhanced-subtle">
                Our portfolio speaks for itself with successful projects across various industries and scales.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="h3 mb-3">Dedicated Support</h3>
              <p className="text-brand-text-base text-enhanced-subtle">
                We're not just developers; we're your long-term technology partners committed to your success.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-brand-cta-blue via-brand-primary to-brand-primary-dark text-white relative">
        <Container className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="h2 mb-6 text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="btn-primary btn-lg">
                Start a Project
              </button>
              <Button variant="outline" size="lg" outlineColor="ctaBlue" className="shadow-lg hover:shadow-xl">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

