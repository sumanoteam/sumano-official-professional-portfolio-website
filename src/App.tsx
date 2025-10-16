import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { TeamPage } from './pages/Team/TeamPage';
import { ServicesPage } from './pages/Services/ServicesPage';
import { PortfolioPage } from './pages/Portfolio/PortfolioPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { FileExplorerPage } from './pages/FileExplorer/FileExplorerPage';
import { DemoPage } from './pages/Demo/DemoPage';
import MagazinePage from './pages/Magazine/MagazinePage';
import { ErrorBoundary } from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/files" element={<FileExplorerPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
