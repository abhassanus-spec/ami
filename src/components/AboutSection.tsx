import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: {
        de: 'Dr. Sarah Müller',
        en: 'Dr. Sarah Müller',
        ar: 'د. سارة مولر',
        tr: 'Dr. Sarah Müller',
      },
      role: {
        de: 'Leitende Ärztin',
        en: 'Lead Physician',
        ar: 'طبيبة رئيسية',
        tr: 'Baş Hekim',
      },
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg',
    },
    {
      name: {
        de: 'Maria Schmidt',
        en: 'Maria Schmidt',
        ar: 'ماريا شميت',
        tr: 'Maria Schmidt',
      },
      role: {
        de: 'Kosmetikerin',
        en: 'Aesthetician',
        ar: 'أخصائية تجميل',
        tr: 'Estetisyen',
      },
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    },
    {
      name: {
        de: 'Thomas Weber',
        en: 'Thomas Weber',
        ar: 'توماس ويبر',
        tr: 'Thomas Weber',
      },
      role: {
        de: 'Hautpflegespezialist',
        en: 'Skincare Specialist',
        ar: 'أخصائي العناية بالبشرة',
        tr: 'Cilt Bakım Uzmanı',
      },
      image: 'https://images.pexels.com/photos/7580270/pexels-photo-7580270.jpeg',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8961027/pexels-photo-8961027.jpeg"
                alt="Clinic interior"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-green-800/10 rounded-lg"></div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-semibold text-green-800">
              {language === 'de' ? 'Unsere Geschichte' : 
               language === 'en' ? 'Our Story' : 
               language === 'ar' ? 'قصتنا' : 
               'Hikayemiz'}
            </h3>
            <p className="text-gray-600">
              {language === 'de' ? 
                'Aljeroudy Aesthetikpraxis wurde mit dem Ziel gegründet, erstklassige ästhetische Behandlungen in einer warmen, einladenden Umgebung anzubieten. Unser Team aus erfahrenen Fachleuten ist bestrebt, personalisierte Behandlungspläne zu entwickeln, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.' : 
               language === 'en' ? 
                'Aljeroudy Aesthetics was founded with the goal of providing top-tier aesthetic treatments in a warm, inviting environment. Our team of experienced professionals is dedicated to developing personalized treatment plans tailored to your individual needs.' : 
               language === 'ar' ? 
                'تم تأسيس مركز الجرودي للتجميل بهدف تقديم علاجات تجميلية من الدرجة الأولى في بيئة دافئة ومرحبة. يكرس فريقنا من المحترفين ذوي الخبرة جهودهم لتطوير خطط علاجية مخصصة تناسب احتياجاتك الفردية.' : 
                'Aljeroudy Estetik, sıcak ve davetkar bir ortamda üst düzey estetik tedaviler sunma hedefiyle kuruldu. Deneyimli profesyonellerden oluşan ekibimiz, bireysel ihtiyaçlarınıza göre kişiselleştirilmiş tedavi planları geliştirmeye özen göstermektedir.'}
            </p>
            <p className="text-gray-600">
              {language === 'de' ? 
                'Mit modernster Technologie und einem Engagement für kontinuierliche Weiterbildung stellen wir sicher, dass wir immer die neuesten und effektivsten Behandlungen anbieten können, um Ihnen zu helfen, sich in Ihrer Haut wohlzufühlen und selbstbewusst in die Welt zu gehen.' : 
               language === 'en' ? 
                'With cutting-edge technology and a commitment to continuous education, we ensure we can always offer the latest and most effective treatments to help you feel comfortable in your skin and confident in the world.' : 
               language === 'ar' ? 
                'من خلال أحدث التقنيات والالتزام بالتعليم المستمر، نضمن دائمًا تقديم أحدث العلاجات وأكثرها فعالية لمساعدتك على الشعور بالراحة في بشرتك والثقة في العالم.' : 
                'Gelişmiş teknoloji ve sürekli eğitime olan bağlılığımızla, cildinizde kendinizi rahat hissetmenize ve dünyada güven duymanıza yardımcı olmak için her zaman en son ve en etkili tedavileri sunabildiğimizden emin oluyoruz.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-beige/10 rounded-lg">
                <div className="text-3xl font-bold text-green-800">10+</div>
                <div className="text-sm text-gray-600">
                  {language === 'de' ? 'Jahre Erfahrung' : 
                   language === 'en' ? 'Years Experience' : 
                   language === 'ar' ? 'سنوات خبرة' : 
                   'Yıllık Deneyim'}
                </div>
              </div>
              <div className="text-center p-4 bg-beige/10 rounded-lg">
                <div className="text-3xl font-bold text-green-800">5k+</div>
                <div className="text-sm text-gray-600">
                  {language === 'de' ? 'Zufriedene Kunden' : 
                   language === 'en' ? 'Happy Clients' : 
                   language === 'ar' ? 'زبائن سعداء' : 
                   'Mutlu Müşteriler'}
                </div>
              </div>
              <div className="text-center p-4 bg-beige/10 rounded-lg">
                <div className="text-3xl font-bold text-green-800">20+</div>
                <div className="text-sm text-gray-600">
                  {language === 'de' ? 'Behandlungsarten' : 
                   language === 'en' ? 'Treatment Types' : 
                   language === 'ar' ? 'أنواع العلاج' : 
                   'Tedavi Türleri'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-green-800 text-center mb-10">
            {language === 'de' ? 'Unser Team' : 
             language === 'en' ? 'Our Team' : 
             language === 'ar' ? 'فريقنا' : 
             'Ekibimiz'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-800/0 group-hover:bg-green-800/10 transition-colors duration-300 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-green-800">
                  {member.name[language]}
                </h4>
                <p className="text-gray-600">
                  {member.role[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;