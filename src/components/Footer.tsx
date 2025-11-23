import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-green-800 text-white pt-12 pb-6"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="mb-4 bg-white inline-block p-2 rounded-md">
              <Logo />
            </div>
            <p className="text-beige/80 mb-4">
              {language === 'de' ? 'Professionelle ästhetische Behandlungen für Ihr Wohlbefinden' : 
               language === 'en' ? 'Professional aesthetic treatments for your well-being' : 
               language === 'ar' ? 'علاجات تجميلية احترافية لصحتك' : 
               'Sağlığınız için profesyonel estetik tedaviler'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-beige transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-beige transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-beige transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-beige">
              {language === 'de' ? 'Schnelllinks' : 
               language === 'en' ? 'Quick Links' : 
               language === 'ar' ? 'روابط سريعة' : 
               'Hızlı Bağlantılar'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Startseite' : 
                   language === 'en' ? 'Home' : 
                   language === 'ar' ? 'الرئيسية' : 
                   'Ana Sayfa'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Leistungen' : 
                   language === 'en' ? 'Services' : 
                   language === 'ar' ? 'الخدمات' : 
                   'Hizmetler'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Über Uns' : 
                   language === 'en' ? 'About Us' : 
                   language === 'ar' ? 'من نحن' : 
                   'Hakkımızda'}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Termin Buchen' : 
                   language === 'en' ? 'Book Appointment' : 
                   language === 'ar' ? 'حجز موعد' : 
                   'Randevu Al'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-beige">
              {language === 'de' ? 'Leistungen' : 
               language === 'en' ? 'Services' : 
               language === 'ar' ? 'الخدمات' : 
               'Hizmetler'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Gesichtsbehandlungen' : 
                   language === 'en' ? 'Facial Treatments' : 
                   language === 'ar' ? 'علاجات الوجه' : 
                   'Yüz Tedavileri'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Botox Behandlungen' : 
                   language === 'en' ? 'Botox Treatments' : 
                   language === 'ar' ? 'علاجات البوتوكس' : 
                   'Botoks Tedavileri'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Dermal Filler' : 
                   language === 'en' ? 'Dermal Fillers' : 
                   language === 'ar' ? 'الحشوات الجلدية' : 
                   'Dermal Dolgu'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Laserbehandlungen' : 
                   language === 'en' ? 'Laser Treatments' : 
                   language === 'ar' ? 'علاجات الليزر' : 
                   'Lazer Tedavileri'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-beige">
              {language === 'de' ? 'Rechtliches' :
               language === 'en' ? 'Legal' :
               language === 'ar' ? 'قانوني' :
               'Yasal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Impressum' :
                   language === 'en' ? 'Imprint' :
                   language === 'ar' ? 'بصمة' :
                   'Künye'}
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Datenschutz' :
                   language === 'en' ? 'Privacy' :
                   language === 'ar' ? 'الخصوصية' :
                   'Gizlilik'}
                </Link>
              </li>
              <li>
                <Link to="/cookie-richtlinie" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Cookie-Richtlinie' :
                   language === 'en' ? 'Cookie Policy' :
                   language === 'ar' ? 'سياسة ملفات تعريف الارتباط' :
                   'Çerez Politikası'}
                </Link>
              </li>
              <li>
                <Link to="/bildnachweise" className="hover:text-beige transition-colors">
                  {language === 'de' ? 'Bildnachweise' :
                   language === 'en' ? 'Image Credits' :
                   language === 'ar' ? 'اعتمادات الصور' :
                   'Resim Kredileri'}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                  className="hover:text-beige transition-colors text-left"
                >
                  {language === 'de' ? 'Cookie-Einstellungen' :
                   language === 'en' ? 'Cookie Settings' :
                   language === 'ar' ? 'إعدادات ملفات تعريف الارتباط' :
                   'Çerez Ayarları'}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} Aljeroudy Aesthetikpraxis. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;