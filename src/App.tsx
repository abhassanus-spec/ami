import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import HeroElegant from './components/HeroElegant';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import AiChatbox from './components/AiChatbox';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import CookieConsentBanner from './components/CookieConsentBanner';
import CookieSettingsButton from './components/CookieSettingsButton';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import CookieRichtlinie from './pages/CookieRichtlinie';
import Bildnachweise from './pages/Bildnachweise';

function HomePage() {
  return (
    <>
      <HeroElegant />
      <ServicesSection />
      <AboutSection />
      <BookingSection />
      <NewsletterSignup />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AuthProvider>
          <Helmet>
            <title>Aljeroudy Aesthetics - Professional Aesthetic Treatments</title>
            <meta name="description" content="Professional aesthetic treatments in Essen. Book your appointment for Botox, fillers, laser treatments and more." />
          </Helmet>
          <div className="min-h-screen bg-white font-sans">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/cookie-richtlinie" element={<CookieRichtlinie />} />
              <Route path="/bildnachweise" element={<Bildnachweise />} />
            </Routes>
            <Footer />
            <AiChatbox />
            <WhatsAppButton />
            <CallButton />
            <CookieConsentBanner />
            <CookieSettingsButton />
            <Toaster position="top-center" />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;