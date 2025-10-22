import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/layout/Container';
import { HeroBackground } from '../../components/ui/HeroBackground';
import { HERO_BACKGROUNDS, HERO_HEIGHTS } from '../../constants/heroBackgrounds';
import { 
  UserGroupIcon, 
  ClockIcon, 
  ChartBarIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const OMSPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Create mailto link to send email to sumanoteam@gmail.com
      const subject = encodeURIComponent('OMS Early Access Request');
      const body = encodeURIComponent(`Hello Sumano Team,\n\nI'm interested in early access to your OMS platform.\n\nEmail: ${email}\n\nPlease notify me when the platform becomes available.\n\nThank you!`);
      const mailtoLink = `mailto:sumanoteam@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink);
      setIsSubmitted(true);
    }
  };

  const features = [
    {
      icon: <UserGroupIcon className="h-8 w-8 text-brand-teal" />,
      title: 'Employee Management',
      description: 'Comprehensive employee profiles, organizational charts, and role management.'
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-brand-orange" />,
      title: 'Time & Attendance',
      description: 'Track work hours, manage schedules, and monitor attendance patterns.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-brand-navy" />,
      title: 'Performance Analytics',
      description: 'Detailed reports and insights to optimize workforce productivity.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-brand-teal" />,
      title: 'Workflow Automation',
      description: 'Streamline HR processes with automated workflows and approvals.'
    }
  ];

  const benefits = [
    'Reduce administrative overhead by 60%',
    'Improve employee satisfaction scores',
    'Ensure compliance with labor regulations',
    'Real-time insights and reporting',
    'Seamless integration with existing systems',
    'Mobile-first design for remote teams'
  ];

  return (
    <>
      <Helmet>
        <title>OMS - Operational Management System | Sumano Tech Solution</title>
        <meta 
          name="description" 
          content="Our comprehensive SaaS HR management system designed to streamline operations, improve efficiency, and enhance employee experience. Coming soon!" 
        />
        <meta 
          name="keywords" 
          content="HR management system, operational management, SaaS, employee management, workforce optimization, Sumano Tech Solution" 
        />
      </Helmet>
      
      <main className="min-h-screen">
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
              <h1 className="h1 mb-6 text-white">Operational Management System</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                A comprehensive SaaS HR management platform designed to streamline operations, 
                improve efficiency, and enhance employee experience across your organization.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-brand-teal/20 backdrop-blur-sm rounded-full border border-brand-teal/30">
                <ClockIcon className="h-5 w-5 text-brand-teal mr-2" />
                <span className="text-brand-teal font-medium">Coming Soon</span>
              </div>
            </div>
          </Container>
        </HeroBackground>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">Powerful Features for Modern HR</h2>
              <p className="text-xl text-brand-dark/80 max-w-3xl mx-auto">
                Our OMS platform combines cutting-edge technology with user-friendly design 
                to deliver a comprehensive solution for all your HR management needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="h3 mb-3">{feature.title}</h3>
                  <p className="text-brand-dark/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-brand-light">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="h2 mb-6">Why Choose Our OMS Platform?</h2>
                <p className="text-lg text-brand-dark/80 mb-8">
                  Transform your HR operations with our intelligent, cloud-based solution 
                  that adapts to your organization's unique needs and grows with your business.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-dark/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl p-8 text-white">
                <h3 className="h3 mb-4 text-white">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Join our waiting list to be among the first to experience the future of HR management.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-brand-teal rounded-full mr-3"></div>
                    <span className="text-sm">Early access for beta users</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-brand-orange rounded-full mr-3"></div>
                    <span className="text-sm">Exclusive pricing for early adopters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-brand-teal rounded-full mr-3"></div>
                    <span className="text-sm">Priority support and onboarding</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Coming Soon CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white">
          <Container className="text-center">
            <h2 className="h2 mb-4 text-white">Be the First to Experience OMS</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're putting the finishing touches on our revolutionary HR management platform. 
              Sign up for updates and be notified when we launch.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                required
              />
              <button 
                type="submit"
                className="btn-primary flex items-center justify-center"
                disabled={!email}
              >
                {isSubmitted ? 'Email Opened!' : 'Notify Me'}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            </form>
            <p className="text-sm text-white/70 mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};
