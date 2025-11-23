import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import services from '../data/services';
import { Clock, Euro } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-gradient-to-b from-white via-green-50/30 to-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'smoothSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-green-900/10 to-transparent group-hover:from-green-900/30 transition-all duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4 leading-snug">
                  {service.title[language]}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description[language]}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-green-800" />
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center font-bold text-green-800 text-lg">
                    <Euro size={18} className="mr-1" />
                    <span>{service.price}</span>
                  </div>
                </div>
                <a
                  href="#booking"
                  className="block w-full text-center py-3.5 px-6 bg-green-800 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
                >
                  {language === 'de' ? 'Termin Buchen' : language === 'en' ? 'Book Now' : language === 'ar' ? 'احجز الآن' : 'Şimdi Rezervasyon Yap'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;