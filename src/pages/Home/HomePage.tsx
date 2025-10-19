import React from 'react';
import { ROUTES } from '../../constants/routes';
import { Container } from '../../components/layout/Container';
import { HeroBackground } from '../../components/ui/HeroBackground';
import { Button } from '../../components/ui/Button/Button';
import { HERO_BACKGROUNDS, HERO_HEIGHTS } from '../../constants/heroBackgrounds';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBackground
        backgroundImage={HERO_BACKGROUNDS.HOME.image}
        overlayOpacity={HERO_BACKGROUNDS.HOME.overlayOpacity}
        gradientFrom={HERO_BACKGROUNDS.HOME.gradientFrom}
        gradientTo={HERO_BACKGROUNDS.HOME.gradientTo}
        className={HERO_HEIGHTS.STANDARD}
      >
        <Container className="text-center">
          <h1 className="h1 mb-6 text-white">
            Welcome to Sumano Tech Solution
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional tech company specializing in web development, mobile apps, 
            management systems, and custom diagnostic auditing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" as="a" href={`${ROUTES.ABOUT}#our-team`}>
              Meet Our Team
            </Button>
            <Button variant="outline" size="lg" as="a" href={ROUTES.PORTFOLIO} outlineColor="ctaBlue">
              View Our Work
            </Button>
            <Button variant="outline" size="lg" as="a" href={ROUTES.SERVICES} outlineColor="ctaBlue">
              Our Services
            </Button>
          </div>
        </Container>
      </HeroBackground>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-brand-text-muted-enhanced max-w-2xl mx-auto text-enhanced-subtle">
              We provide comprehensive technology solutions for modern businesses and institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="h3 mb-2">
                Web Development
              </h3>
              <p className="body">
                Custom websites, web applications, and management systems tailored to your needs.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="h3 mb-2">
                Mobile Apps
              </h3>
              <p className="body">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="h3 mb-2">
                System Auditing
              </h3>
              <p className="body">
                Comprehensive diagnostic auditing for websites, mobile apps, and systems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <Container size="md" className="text-center">
          <h2 className="h2 mb-4 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Button variant="primary" size="lg" as="a" href={ROUTES.CONTACT}>
            Get In Touch
          </Button>
        </Container>
      </section>
    </div>
  );
};
