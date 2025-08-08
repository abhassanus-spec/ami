import { Language } from '../types';

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': {
    de: 'Startseite',
    en: 'Home',
    ar: 'الرئيسية',
    tr: 'Ana Sayfa',
  },
  'nav.services': {
    de: 'Leistungen',
    en: 'Services',
    ar: 'الخدمات',
    tr: 'Hizmetler',
  },
  'nav.booking': {
    de: 'Termin Buchen',
    en: 'Book Appointment',
    ar: 'حجز موعد',
    tr: 'Randevu Al',
  },
  'nav.about': {
    de: 'Über Uns',
    en: 'About Us',
    ar: 'من نحن',
    tr: 'Hakkımızda',
  },
  'nav.contact': {
    de: 'Kontakt',
    en: 'Contact',
    ar: 'اتصل بنا',
    tr: 'İletişim',
  },
  
  // Hero Section
  'hero.title': {
    de: 'Willkommen bei Aljeroudy Aesthetikpraxis',
    en: 'Welcome to Aljeroudy Aesthetics',
    ar: 'مرحبًا بكم في مركز الجرودي للتجميل',
    tr: 'Aljeroudy Estetik\'e Hoş Geldiniz',
  },
  'hero.subtitle': {
    de: 'Professionelle ästhetische Behandlungen für Ihr Wohlbefinden',
    en: 'Professional aesthetic treatments for your well-being',
    ar: 'علاجات تجميلية احترافية لصحتك',
    tr: 'Sağlığınız için profesyonel estetik tedaviler',
  },
  'hero.cta': {
    de: 'Termin Vereinbaren',
    en: 'Book Appointment',
    ar: 'حجز موعد',
    tr: 'Randevu Al',
  },
  
  // Services Section
  'services.title': {
    de: 'Unsere Leistungen',
    en: 'Our Services',
    ar: 'خدماتنا',
    tr: 'Hizmetlerimiz',
  },
  'services.subtitle': {
    de: 'Entdecken Sie unser umfangreiches Angebot an Behandlungen',
    en: 'Discover our comprehensive range of treatments',
    ar: 'اكتشف مجموعتنا الشاملة من العلاجات',
    tr: 'Kapsamlı tedavi yelpazemizi keşfedin',
  },
  
  // Booking Section
  'booking.title': {
    de: 'Termin Buchen',
    en: 'Book an Appointment',
    ar: 'حجز موعد',
    tr: 'Randevu Al',
  },
  'booking.subtitle': {
    de: 'Wählen Sie einen passenden Termin für Ihre Behandlung',
    en: 'Choose a suitable time for your treatment',
    ar: 'اختر وقتًا مناسبًا لعلاجك',
    tr: 'Tedaviniz için uygun bir zaman seçin',
  },
  'booking.service': {
    de: 'Behandlung',
    en: 'Service',
    en: 'Service',
    ar: 'الخدمة',
    tr: 'Hizmet',
  },
  'booking.date': {
    de: 'Datum',
    en: 'Date',
    ar: 'التاريخ',
    tr: 'Tarih',
  },
  'booking.time': {
    de: 'Uhrzeit',
    en: 'Time',
    ar: 'الوقت',
    tr: 'Zaman',
  },
  'booking.name': {
    de: 'Name',
    en: 'Name',
    ar: 'الاسم',
    tr: 'İsim',
  },
  'booking.email': {
    de: 'E-Mail',
    en: 'Email',
    ar: 'البريد الإلكتروني',
    tr: 'E-posta',
  },
  'booking.phone': {
    de: 'Telefon',
    en: 'Phone',
    ar: 'الهاتف',
    tr: 'Telefon',
  },
  'booking.notes': {
    de: 'Anmerkungen',
    en: 'Notes',
    ar: 'ملاحظات',
    tr: 'Notlar',
  },
  'booking.submit': {
    de: 'Termin Bestätigen',
    en: 'Confirm Appointment',
    ar: 'تأكيد الموعد',
    tr: 'Randevuyu Onayla',
  },
  'booking.verification.title': {
    de: 'Bestätigungscode',
    en: 'Verification Code',
    ar: 'رمز التحقق',
    tr: 'Doğrulama Kodu',
  },
  'booking.verification.description': {
    de: 'Bitte geben Sie den Code ein, den Sie per SMS erhalten haben',
    en: 'Please enter the code you received via SMS',
    ar: 'يرجى إدخال الرمز الذي تلقيته عبر الرسائل القصيرة',
    tr: 'Lütfen SMS ile aldığınız kodu girin',
  },
  'booking.verification.codePlaceholder': {
    de: 'Code eingeben',
    en: 'Enter code',
    ar: 'أدخل الرمز',
    tr: 'Kodu girin',
  },
  'booking.verification.verify': {
    de: 'Überprüfen',
    en: 'Verify',
    ar: 'تحقق',
    tr: 'Doğrula',
  },
  'booking.verification.cancel': {
    de: 'Abbrechen',
    en: 'Cancel',
    ar: 'إلغاء',
    tr: 'İptal',
  },
  'booking.verification.invalidCode': {
    de: 'Ungültiger Code',
    en: 'Invalid code',
    ar: 'رمز غير صالح',
    tr: 'Geçersiz kod',
  },
  'booking.verification.sendError': {
    de: 'Fehler beim Senden des Codes',
    en: 'Error sending code',
    ar: 'خطأ في إرسال الرمز',
    tr: 'Kod gönderme hatası',
  },
  
  // Footer
  'footer.rights': {
    de: 'Alle Rechte vorbehalten',
    en: 'All rights reserved',
    ar: 'جميع الحقوق محفوظة',
    tr: 'Tüm hakları saklıdır',
  },
  'footer.privacy': {
    de: 'Datenschutz',
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية',
    tr: 'Gizlilik Politikası',
  },
  'footer.terms': {
    de: 'AGB',
    en: 'Terms of Service',
    ar: 'شروط الخدمة',
    tr: 'Kullanım Şartları',
  },
  
  // About
  'about.title': {
    de: 'Über Uns',
    en: 'About Us',
    ar: 'من نحن',
    tr: 'Hakkımızda',
  },
  'about.subtitle': {
    de: 'Lernen Sie unser Team und unsere Philosophie kennen',
    en: 'Get to know our team and philosophy',
    ar: 'تعرف على فريقنا وفلسفتنا',
    tr: 'Ekibimizi ve felsefemizi tanıyın',
  },
  
  // Contact
  'contact.title': {
    de: 'Kontakt',
    en: 'Contact',
    ar: 'اتصل بنا',
    tr: 'İletişim',
  },
  'contact.subtitle': {
    de: 'Wir freuen uns, von Ihnen zu hören',
    en: 'We would love to hear from you',
    ar: 'يسعدنا أن نسمع منك',
    tr: 'Sizden haber almak isteriz',
  },
  'contact.address': {
    de: 'Adresse',
    en: 'Address',
    ar: 'العنوان',
    tr: 'Adres',
  },
  'contact.phone': {
    de: 'Telefon',
    en: 'Phone',
    ar: 'الهاتف',
    tr: 'Telefon',
  },
  'contact.email': {
    de: 'E-Mail',
    en: 'Email',
    ar: 'البريد الإلكتروني',
    tr: 'E-posta',
  },
  'contact.hours': {
    de: 'Öffnungszeiten',
    en: 'Opening Hours',
    ar: 'ساعات العمل',
    tr: 'Çalışma Saatleri',
  },
  'contact.message': {
    de: 'Nachricht',
    en: 'Message',
    ar: 'رسالة',
    tr: 'Mesaj',
  },
  'contact.send': {
    de: 'Senden',
    en: 'Send',
    ar: 'إرسال',
    tr: 'Gönder',
  },
  
  // Newsletter
  'newsletter.title': {
    de: 'Newsletter abonnieren und 10€ sparen',
    en: 'Subscribe to newsletter and save €10',
    ar: 'اشترك في النشرة الإخبارية ووفر 10 يورو',
    tr: 'Bültene abone olun ve 10€ tasarruf edin',
  },
  'newsletter.description': {
    de: 'Erhalten Sie einen 10€ Gutschein für Ihre erste Behandlung',
    en: 'Get a €10 voucher for your first treatment',
    ar: 'احصل على قسيمة بقيمة 10 يورو لعلاجك الأول',
    tr: 'İlk tedaviniz için 10€ indirim kuponu alın',
  },
  'newsletter.emailPlaceholder': {
    de: 'Ihre E-Mail-Adresse',
    en: 'Your email address',
    ar: 'عنوان بريدك الإلكتروني',
    tr: 'E-posta adresiniz',
  },
  'newsletter.submit': {
    de: 'Abonnieren',
    en: 'Subscribe',
    ar: 'اشترك',
    tr: 'Abone ol',
  },
  'newsletter.submitting': {
    de: 'Wird verarbeitet...',
    en: 'Processing...',
    ar: 'جاري المعالجة...',
    tr: 'İşleniyor...',
  },
  'newsletter.success': {
    de: 'Vielen Dank! Ihr Gutscheincode wurde per E-Mail gesendet.',
    en: 'Thank you! Your voucher code has been sent via email.',
    ar: 'شكرا لك! تم إرسال رمز القسيمة عبر البريد الإلكتروني.',
    tr: 'Teşekkürler! İndirim kodunuz e-posta ile gönderildi.',
  },
  'newsletter.error': {
    de: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    en: 'An error occurred. Please try again later.',
    ar: 'حدث خطأ. يرجى المحاولة مرة أخرى لاحقا.',
    tr: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
  },
  'newsletter.terms': {
    de: 'Mit der Anmeldung stimmen Sie dem Erhalt unseres Newsletters zu. Sie können sich jederzeit abmelden.',
    en: 'By signing up, you agree to receive our newsletter. You can unsubscribe at any time.',
    ar: 'بالتسجيل، أنت توافق على تلقي نشرتنا الإخبارية. يمكنك إلغاء الاشتراك في أي وقت.',
    tr: 'Kaydolarak bültenimizi almayı kabul etmiş olursunuz. İstediğiniz zaman abonelikten çıkabilirsiniz.',
  },
  'booking.voucherCode': {
    de: 'Gutscheincode (optional)',
    en: 'Voucher code (optional)',
    ar: 'رمز القسيمة (اختياري)',
    tr: 'İndirim kodu (isteğe bağlı)',
  },
  'booking.voucherCodePlaceholder': {
    de: 'Gutscheincode eingeben',
    en: 'Enter voucher code',
    ar: 'أدخل رمز القسيمة',
    tr: 'İndirim kodunu girin',
  },
};

export default translations;