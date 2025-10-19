import React from 'react';
import { Button } from '../../components/ui/Button/Button';
import { Container } from '../../components/layout/Container';

export const ButtonTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg py-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="h1 mb-4">Vibrant Button System Test</h1>
          <p className="text-brand-text-muted text-xl">
            Testing all button variants with vibrant gradients and effects
          </p>
        </div>

        {/* Button Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Primary Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Primary Buttons</h3>
            <div className="space-y-3">
              <Button variant="primary" size="sm">Small Primary</Button>
              <Button variant="primary" size="md">Medium Primary</Button>
              <Button variant="primary" size="lg">Large Primary</Button>
              <Button variant="primary" disabled>Disabled Primary</Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Secondary Buttons</h3>
            <div className="space-y-3">
              <Button variant="secondary" size="sm">Small Secondary</Button>
              <Button variant="secondary" size="md">Medium Secondary</Button>
              <Button variant="secondary" size="lg">Large Secondary</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
            </div>
          </div>

          {/* Accent Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Accent Buttons</h3>
            <div className="space-y-3">
              <Button variant="accent" size="sm">Small Accent</Button>
              <Button variant="accent" size="md">Medium Accent</Button>
              <Button variant="accent" size="lg">Large Accent</Button>
              <Button variant="accent" disabled>Disabled Accent</Button>
            </div>
          </div>

          {/* Outline Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Outline Buttons</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" outlineColor="ctaBlue">Small Outline</Button>
              <Button variant="outline" size="md" outlineColor="ctaBlue">Medium Outline</Button>
              <Button variant="outline" size="lg" outlineColor="ctaBlue">Large Outline</Button>
              <Button variant="outline" disabled outlineColor="ctaBlue">Disabled Outline</Button>
            </div>
          </div>

          {/* Success Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Success Buttons</h3>
            <div className="space-y-3">
              <Button variant="success" size="sm">Small Success</Button>
              <Button variant="success" size="md">Medium Success</Button>
              <Button variant="success" size="lg">Large Success</Button>
              <Button variant="success" disabled>Disabled Success</Button>
            </div>
          </div>

          {/* Warning Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Warning Buttons</h3>
            <div className="space-y-3">
              <Button variant="warning" size="sm">Small Warning</Button>
              <Button variant="warning" size="md">Medium Warning</Button>
              <Button variant="warning" size="lg">Large Warning</Button>
              <Button variant="warning" disabled>Disabled Warning</Button>
            </div>
          </div>

          {/* Error Buttons */}
          <div className="space-y-4">
            <h3 className="h3 text-brand-primary">Error Buttons</h3>
            <div className="space-y-3">
              <Button variant="error" size="sm">Small Error</Button>
              <Button variant="error" size="md">Medium Error</Button>
              <Button variant="error" size="lg">Large Error</Button>
              <Button variant="error" disabled>Disabled Error</Button>
            </div>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="h2 mb-6 text-center">Real-world Button Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="h3 text-brand-primary">Call-to-Action Section</h3>
              <div className="space-y-3">
                <Button variant="primary" size="lg" className="w-full">
                  Get Started Now
                </Button>
                <Button variant="outline" size="lg" outlineColor="ctaBlue" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="h3 text-brand-primary">Form Actions</h3>
              <div className="space-y-3">
                <Button variant="success" size="md" className="w-full">
                  Save Changes
                </Button>
                <Button variant="warning" size="md" className="w-full">
                  Reset Form
                </Button>
                <Button variant="error" size="md" className="w-full">
                  Delete Item
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Test */}
        <div className="mt-16 bg-brand-primary text-white rounded-xl p-8">
          <h2 className="h2 mb-6 text-center text-white">Responsive Button Test</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="md">
              Mobile First
            </Button>
            <Button variant="outline" size="md" outlineColor="primary">
              Responsive Design
            </Button>
            <Button variant="success" size="md">
              Touch Friendly
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
