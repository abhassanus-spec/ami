import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import services from '../data/services';
import { Clock, Euro } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="services"
      className="py-20 bg-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {service.title[language]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description[language]}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center font-semibold text-green-800">
                    <Euro size={16} className="mr-1" />
                    <span>{service.price}</span>
                  </div>
                </div>
                <a
                  href="#booking"
                  className="mt-4 block w-full text-center py-2 px-4 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  {t('booking.book')}
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