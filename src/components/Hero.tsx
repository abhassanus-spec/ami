import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

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
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-green-900/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{lineHeight: '1.2'}}
          >
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center px-6 py-3 bg-beige text-green-900 rounded-md font-medium transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight size={20} className={`transition-transform ml-2 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 rounded-md font-medium backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
            >
              <span>{t('hero.services')}</span>
              <ArrowRight size={20} className={`transition-transform ml-2 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;