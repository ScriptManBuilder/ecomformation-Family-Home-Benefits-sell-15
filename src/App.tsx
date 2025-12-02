import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatWidget from './components/ChatWidget';
import SupportPage from './pages/SupportPage';
import DataSubjectRequestPage from './pages/DataSubjectRequestPage';
import ESignaturePage from './pages/ESignaturePage';
import CCPANoticePage from './pages/CCPANoticePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import DigitalProductsPage from './pages/DigitalProductsPage';
import DataProcessingPage from './pages/DataProcessingPage';
import EndUserTermsPage from './pages/EndUserTermsPage';
import MerchantDisclosurePage from './pages/MerchantDisclosurePage';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const HomePage: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <StatsSection />
    <CTASection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (e.g., /#contact)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/data-subject-request" element={<DataSubjectRequestPage />} />
        <Route path="/e-signature" element={<ESignaturePage />} />
        <Route path="/ccpa-notice" element={<CCPANoticePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/digital-products" element={<DigitalProductsPage />} />
        <Route path="/data-processing" element={<DataProcessingPage />} />
        <Route path="/end-user-terms" element={<EndUserTermsPage />} />
        <Route path="/merchant-disclosure" element={<MerchantDisclosurePage />} />
      </Routes>
      <ChatWidget />
    </AppContainer>
  );
}

export default App;
