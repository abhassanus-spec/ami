import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import AiChatbox from './components/AiChatbox';

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
            <Hero />
            <ServicesSection />
            <AboutSection />
            <BookingForm />
            <NewsletterSignup />
            <ContactSection />
            <Footer />
            <AiChatbox />
            <Toaster position="top-center" />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;