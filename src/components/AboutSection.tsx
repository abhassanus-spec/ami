import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-white via-beige-50/30 to-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-2">
            <div className="relative group flex items-center justify-center p-8">
              <img
                src="/sdasd copy.png"
                alt="Aljeroudy Aesthetikpraxis Logo"
                className="w-full max-w-md h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-3xl font-bold text-green-800">
              {language === 'de' ? 'Unsere Geschichte' : 
               language === 'en' ? 'Our Story' : 
               language === 'ar' ? 'قصتنا' : 
               'Hikayemiz'}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {language === 'de' ?
                'Aljeroudy Aesthetikpraxis wurde mit dem Ziel gegründet, erstklassige ästhetische Behandlungen in einer warmen, einladenden Umgebung anzubieten. Unser Team aus erfahrenen Fachleuten ist bestrebt, personalisierte Behandlungspläne zu entwickeln, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.' :
               language === 'en' ?
                'Aljeroudy Aesthetics was founded with the goal of providing top-tier aesthetic treatments in a warm, inviting environment. Our team of experienced professionals is dedicated to developing personalized treatment plans tailored to your individual needs.' :
               language === 'ar' ?
                'تم تأسيس مركز الجرودي للتجميل بهدف تقديم علاجات تجميلية من الدرجة الأولى في بيئة دافئة ومرحبة. يكرس فريقنا من المحترفين ذوي الخبرة جهودهم لتطوير خطط علاجية مخصصة تناسب احتياجاتك الفردية.' :
                'Aljeroudy Estetik, sıcak ve davetkar bir ortamda üst düzey estetik tedaviler sunma hedefiyle kuruldu. Deneyimli profesyonellerden oluşan ekibimiz, bireysel ihtiyaçlarınıza göre kişiselleştirilmiş tedavi planları geliştirmeye özen göstermektedir.'}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {language === 'de' ? 
                'Mit modernster Technologie und einem Engagement für kontinuierliche Weiterbildung stellen wir sicher, dass wir immer die neuesten und effektivsten Behandlungen anbieten können, um Ihnen zu helfen, sich in Ihrer Haut wohlzufühlen und selbstbewusst in die Welt zu gehen.' : 
               language === 'en' ? 
                'With cutting-edge technology and a commitment to continuous education, we ensure we can always offer the latest and most effective treatments to help you feel comfortable in your skin and confident in the world.' : 
               language === 'ar' ? 
                'من خلال أحدث التقنيات والالتزام بالتعليم المستمر، نضمن دائمًا تقديم أحدث العلاجات وأكثرها فعالية لمساعدتك على الشعور بالراحة في بشرتك والثقة في العالم.' : 
                'Gelişmiş teknoloji ve sürekli eğitime olan bağlılığımızla, cildinizde kendinizi rahat hissetmenize ve dünyada güven duymanıza yardımcı olmak için her zaman en son ve en etkili tedavileri sunabildiğimizden emin oluyoruz.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-6 bg-gradient-to-br from-beige-50 to-beige-100/50 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-green-800 mb-2">10+</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === 'de' ? 'Jahre Erfahrung' : 
                   language === 'en' ? 'Years Experience' : 
                   language === 'ar' ? 'سنوات خبرة' : 
                   'Yıllık Deneyim'}
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-green-800 mb-2">5k+</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === 'de' ? 'Zufriedene Kunden' : 
                   language === 'en' ? 'Happy Clients' : 
                   language === 'ar' ? 'زبائن سعداء' : 
                   'Mutlu Müşteriler'}
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-beige-50 to-beige-100/50 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-green-800 mb-2">20+</div>
                <div className="text-sm font-medium text-gray-600">
                  {language === 'de' ? 'Behandlungsarten' : 
                   language === 'en' ? 'Treatment Types' : 
                   language === 'ar' ? 'أنواع العلاج' : 
                   'Tedavi Türleri'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Info Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
            {language === 'de' ? 'Unser Team' :
             language === 'en' ? 'Our Team' :
             language === 'ar' ? 'فريقنا' :
             'Ekibimiz'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-beige-100 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-green-800 mb-3">
                Dr. Louay Aljeroudy
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {language === 'de' ?
                  'Verantwortlich für Botox, Filler und alle ästhetischen Behandlungen in unserer Praxis.' :
                 language === 'en' ?
                  'Responsible for Botox, Fillers and all aesthetic treatments in our practice.' :
                 language === 'ar' ?
                  'المسؤول عن البوتوكس والفيلر وجميع العلاجات التجميلية في عيادتنا.' :
                  'Kliniğimizdeki Botoks, Dolgu ve tüm estetik tedavilerden sorumludur.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-beige-100 hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-green-800 mb-3">
                Yamama Aljeroudy
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {language === 'de' ?
                  'Expertin für Laser-Haarentfernung und alle Laser-Behandlungen.' :
                 language === 'en' ?
                  'Expert in Laser Hair Removal and all laser treatments.' :
                 language === 'ar' ?
                  'خبيرة في إزالة الشعر بالليزر وجميع علاجات الليزر.' :
                  'Lazer Epilasyon ve tüm lazer tedavilerinde uzman.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;