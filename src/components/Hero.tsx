import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen bg-green-800 overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3762892/pexels-photo-3762892.jpeg"
          alt="Beautiful woman with clear skin"
          className="w-full h-full object-cover object-center scale-105 animate-smooth-scale"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-green-800/40 to-green-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className={`max-w-4xl transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center px-8 py-4 bg-beige text-green-900 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-beige/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={22} className={`transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-2xl font-semibold text-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
            >
              <span>{t('hero.services')}</span>
              <ArrowRight size={22} className={`transition-transform duration-300 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 mr-2 group-hover:-translate-x-1' : 'ml-2'}`} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-2 h-2 bg-white/60 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;