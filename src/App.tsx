import React from 'react';
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
            <HeroElegant />
            <ServicesSection />
            <AboutSection />
            <BookingSection />
            <NewsletterSignup />
            <ContactSection />
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