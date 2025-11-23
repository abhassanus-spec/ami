import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const BookingSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    title: {
      de: 'Termin vereinbaren',
      en: 'Book Appointment',
      ar: 'حجز موعد',
      tr: 'Randevu Al',
    },
    subtitle: {
      de: 'Kontaktieren Sie uns direkt für eine persönliche Beratung',
      en: 'Contact us directly for a personal consultation',
      ar: 'اتصل بنا مباشرة للحصول على استشارة شخصية',
      tr: 'Kişisel danışmanlık için bize doğrudan ulaşın',
    },
    callTitle: {
      de: 'Anrufen',
      en: 'Call Us',
      ar: 'اتصل بنا',
      tr: 'Bizi Arayın',
    },
    callDescription: {
      de: 'Sprechen Sie direkt mit unserem Team',
      en: 'Speak directly with our team',
      ar: 'تحدث مباشرة مع فريقنا',
      tr: 'Ekibimizle doğrudan konuşun',
    },
    whatsappTitle: {
      de: 'WhatsApp',
      en: 'WhatsApp',
      ar: 'واتساب',
      tr: 'WhatsApp',
    },
    whatsappDescription: {
      de: 'Schnelle Antwort per Chat',
      en: 'Quick response via chat',
      ar: 'استجابة سريعة عبر الدردشة',
      tr: 'Sohbet yoluyla hızlı yanıt',
    },
    availability: {
      de: 'Öffnungszeiten',
      en: 'Opening Hours',
      ar: 'ساعات العمل',
      tr: 'Çalışma Saatleri',
    },
    hours: {
      de: 'Mo, Di, Do: 11:30 - 18:15 | Sa: 10:15 - 13:45',
      en: 'Mon, Tue, Thu: 11:30 - 18:15 | Sat: 10:15 - 13:45',
      ar: 'الإثنين، الثلاثاء، الخميس: 11:30 - 18:15 | السبت: 10:15 - 13:45',
      tr: 'Pzt, Sal, Per: 11:30 - 18:15 | Cmt: 10:15 - 13:45',
    },
  };

  const phoneNumber = '+491234567890'; // Replace with actual phone
  const whatsappNumber = '491234567890'; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    language === 'de'
      ? 'Hallo, ich möchte gerne einen Termin vereinbaren.'
      : language === 'en'
      ? 'Hello, I would like to book an appointment.'
      : language === 'ar'
      ? 'مرحبا، أود حجز موعد.'
      : 'Merhaba, bir randevu almak istiyorum.'
  );

  return (
    <section
      id="booking"
      className="relative py-32 bg-gradient-to-br from-green-50 via-white to-beige-50 overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 tracking-tight">
            {content.title[language]}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {content.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-800/5 to-green-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-800 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {content.callTitle[language]}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {content.callDescription[language]}
              </p>
              <div className="text-green-800 font-semibold text-lg">
                {phoneNumber}
              </div>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-green-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {content.whatsappTitle[language]}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {content.whatsappDescription[language]}
              </p>
              <div className="text-green-600 font-semibold text-lg">
                {whatsappNumber}
              </div>
            </div>
          </a>
        </div>

        {/* Opening Hours */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-800/10">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-green-800 mr-3" />
              <h3 className="text-xl font-semibold text-green-800">
                {content.availability[language]}
              </h3>
            </div>
            <p className="text-center text-gray-700 text-lg">
              {content.hours[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
