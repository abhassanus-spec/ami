import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 bg-beige/10"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              {language === 'de' ? 'Kontaktinformationen' : 
               language === 'en' ? 'Contact Information' : 
               language === 'ar' ? 'معلومات الاتصال' : 
               'İletişim Bilgileri'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-green-800">
                    {t('contact.address')}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    Am Schultenhof 4<br />
                    45141 Essen<br />
                    Deutschland
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-green-800">
                    {t('contact.phone')}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+49123456789" className="hover:text-green-800 transition-colors">
                      +49 123 456 789
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-green-800">
                    {t('contact.email')}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@aesthetik-praxis-essen.de" className="hover:text-green-800 transition-colors">
                      info@aesthetik-praxis-essen.de
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-green-800">
                    {language === 'de' ? 'Folgen Sie uns' :
                     language === 'en' ? 'Follow us' :
                     language === 'ar' ? 'تابعنا' :
                     'Bizi takip edin'}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    <a 
                      href="https://www.instagram.com/aljeroudy.aesthetik/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green-800 transition-colors"
                    >
                      @aljeroudy.aesthetik
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-medium text-green-800">
                    {t('contact.hours')}
                  </h4>
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>
                      {language === 'de' ? 'Montag - Freitag: 9:00 - 18:00' : 
                       language === 'en' ? 'Monday - Friday: 9:00 AM - 6:00 PM' : 
                       language === 'ar' ? 'الاثنين - الجمعة: ٩:٠٠ ص - ٦:٠٠ م' : 
                       'Pazartesi - Cuma: 9:00 - 18:00'}
                    </p>
                    <p>
                      {language === 'de' ? 'Samstag: 10:00 - 14:00' : 
                       language === 'en' ? 'Saturday: 10:00 AM - 2:00 PM' : 
                       language === 'ar' ? 'السبت: ١٠:٠٠ ص - ٢:٠٠ م' : 
                       'Cumartesi: 10:00 - 14:00'}
                    </p>
                    <p>
                      {language === 'de' ? 'Sonntag: Geschlossen' : 
                       language === 'en' ? 'Sunday: Closed' : 
                       language === 'ar' ? 'الأحد: مغلق' : 
                       'Pazar: Kapalı'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              {language === 'de' ? 'Schreiben Sie uns' : 
               language === 'en' ? 'Send us a Message' : 
               language === 'ar' ? 'أرسل لنا رسالة' : 
               'Bize Mesaj Gönderin'}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('booking.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'de' ? 'Betreff' : 
                   language === 'en' ? 'Subject' : 
                   language === 'ar' ? 'الموضوع' : 
                   'Konu'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39756.99501996424!2d7.0257142087672245!3d51.45344032413515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2b796673a67%3A0x427f28131547e10!2sEssen%2C%20Germany!5e0!3m2!1sen!2sus!4v1717087698316!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;