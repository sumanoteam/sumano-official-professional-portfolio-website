import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { PortfolioPage } from './pages/Portfolio/PortfolioPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { OMSPage } from './pages/OMS/OMSPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/oms" element={<OMSPage />} />
          </Routes>
        </MainLayout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
