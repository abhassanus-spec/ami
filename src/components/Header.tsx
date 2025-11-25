import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { NavItem } from '../types';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLegalPage = location.pathname !== '/';

  const navItems: NavItem[] = [
    {
      label: {
        de: 'Startseite',
        en: 'Home',
        ar: 'الرئيسية',
        tr: 'Ana Sayfa',
      },
      href: '#home',
    },
    {
      label: {
        de: 'Leistungen',
        en: 'Services',
        ar: 'الخدمات',
        tr: 'Hizmetler',
      },
      href: '#services',
    },
    {
      label: {
        de: 'Über Uns',
        en: 'About',
        ar: 'من نحن',
        tr: 'Hakkımızda',
      },
      href: '#about',
    },
    {
      label: {
        de: 'Termin Buchen',
        en: 'Book Appointment',
        ar: 'حجز موعد',
        tr: 'Randevu Al',
      },
      href: '#booking',
    },
    {
      label: {
        de: 'Kontakt',
        en: 'Contact',
        ar: 'اتصل بنا',
        tr: 'İletişim',
      },
      href: '#contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLegalPage || isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo isScrolled={isLegalPage || isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isLegalPage && navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isLegalPage || isScrolled ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-beige'
                }`}
              >
                {item.label[language]}
              </a>
            ))}
            {isLegalPage && (
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isLegalPage || isScrolled ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-beige'
                }`}
              >
                {language === 'de' ? '← Zurück zur Startseite' :
                 language === 'en' ? '← Back to Home' :
                 language === 'ar' ? '→ العودة للرئيسية' :
                 '← Ana Sayfaya Dön'}
              </Link>
            )}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <button
              onClick={toggleMobileMenu}
              className={`ml-2 p-2 rounded-md ${isLegalPage || isScrolled ? 'text-green-800' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {!isLegalPage && navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-green-800 hover:text-beige font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label[language]}
            </a>
          ))}
          {isLegalPage && (
            <Link
              to="/"
              className="text-green-800 hover:text-beige font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {language === 'de' ? '← Zurück zur Startseite' :
               language === 'en' ? '← Back to Home' :
               language === 'ar' ? '→ العودة للرئيسية' :
               '← Ana Sayfaya Dön'}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;