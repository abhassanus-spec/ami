import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import services from '../data/services';
import { TimeSlot, BookingFormData } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';
import AuthModal from './AuthModal';

const generateTimeSlots = (selectedDate: string): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();

  // Define available time slots based on the day
  if ([1, 2, 4].includes(dayOfWeek)) { // Monday, Tuesday, Thursday
    const startTime = new Date(date.setHours(11, 30));
    const endTime = new Date(date.setHours(12, 15));
    let currentTime = startTime;

    while (currentTime <= endTime) {
      slots.push({
        id: `time-${currentTime.toTimeString()}`,
        time: currentTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
        available: true
      });
      currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
    }
  } else if (dayOfWeek === 6) { // Saturday
    const startTime = new Date(date.setHours(10, 15));
    const endTime = new Date(date.setHours(11, 45));
    let currentTime = startTime;

    while (currentTime <= endTime) {
      slots.push({
        id: `time-${currentTime.toTimeString()}`,
        time: currentTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
        available: true
      });
      currentTime = new Date(currentTime.getTime() + 15 * 60000); // Add 15 minutes
    }
  }

  return slots;
};

const BookingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    consent: false,
    voucherCode: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setTimeSlots(generateTimeSlots(date));
    setSelectedTime('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const sendVerificationCode = async () => {
    try {
      // Generate a random 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Store the code temporarily in the session
      sessionStorage.setItem('verificationCode', code);

      // Send SMS with the code
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-sms`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: formData.phone,
          message: `Your verification code for Aljeroudy Aesthetics booking is: ${code}`,
        }),
      });

      if (!response.ok) throw new Error('Failed to send verification code');
      
      setShowVerification(true);
    } catch (error) {
      console.error('Error sending verification code:', error);
      toast.error(t('booking.verification.sendError'));
    }
  };

  const verifyCode = () => {
    const storedCode = sessionStorage.getItem('verificationCode');
    if (verificationCode === storedCode) {
      handleSubmit();
      sessionStorage.removeItem('verificationCode');
    } else {
      toast.error(t('booking.verification.invalidCode'));
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    try {
      setIsSubmitting(true);

      // Get specialist based on service
      const specialist = selectedService === 'laser-hair' ? 'Yamama Aljairoudy' : 'Dr. Louay Aljairoudy';

      // Insert booking into Supabase
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          user_id: user?.id || null,
          service_id: selectedService,
          booking_date: selectedDate,
          booking_time: selectedTime,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes,
          consent_given: formData.consent,
          specialist: specialist,
          voucher_code: formData.voucherCode,
        })
        .select()
        .single();

      if (bookingError) throw bookingError;

      // Send notifications
      const notificationResponse = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-notifications`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          booking,
          type: 'confirmation',
        }),
      });

      if (!notificationResponse.ok) {
        throw new Error('Failed to send notifications');
      }

      toast.success(t('booking.success'));

      // Reset form
      setSelectedDate('');
      setSelectedService('');
      setSelectedTime('');
      setFormData({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: '',
        consent: false,
        voucherCode: '',
      });
      setCurrentStep(1);
      setShowVerification(false);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(t('booking.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isNextButtonDisabled = () => {
    if (currentStep === 1) {
      return !selectedService;
    } else if (currentStep === 2) {
      return !selectedDate || !selectedTime;
    }
    return false;
  };

  return (
    <section
      id="booking"
      className="py-20 bg-beige/20"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            {t('booking.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('booking.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-wrap">
            {/* Steps indicator */}
            <div className="w-full px-6 py-4 bg-green-800 text-white">
              <div className="flex justify-between items-center">
                <div className={`flex items-center ${currentStep >= 1 ? 'text-white' : 'text-white/50'}`}>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-2">1</span>
                  <span>{t('booking.service')}</span>
                </div>
                <div className="flex-1 h-px bg-white/30 mx-4"></div>
                <div className={`flex items-center ${currentStep >= 2 ? 'text-white' : 'text-white/50'}`}>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-2">2</span>
                  <span>{t('booking.date')}</span>
                </div>
                <div className="flex-1 h-px bg-white/30 mx-4"></div>
                <div className={`flex items-center ${currentStep >= 3 ? 'text-white' : 'text-white/50'}`}>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-2">3</span>
                  <span>{t('booking.name')}</span>
                </div>
              </div>
            </div>

            {/* Form content */}
            <div className="w-full p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      {t('booking.service')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            selectedService === service.id
                              ? 'border-green-800 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                          onClick={() => setSelectedService(service.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 mt-1 flex-shrink-0 ${
                                selectedService === service.id
                                  ? 'border-green-800 bg-green-800'
                                  : 'border-gray-400'
                              }`}
                            ></div>
                            <div>
                              <h4 className="font-medium text-green-800">
                                {service.title[language]}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {service.description[language]}
                              </p>
                              <div className="flex items-center justify-between mt-2 text-sm">
                                <span className="text-gray-500">{service.duration}</span>
                                <span className="font-semibold text-green-800">{service.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date and Time Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-4">
                        {t('booking.date')}
                      </h3>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => handleDateChange(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-4">
                        {t('booking.time')}
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.id}
                            type="button"
                            disabled={!slot.available}
                            className={`relative px-4 py-2 border rounded-md text-center transition-colors ${
                              selectedTime === slot.time
                                ? 'bg-green-800 text-white border-green-800'
                                : slot.available
                                ? 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
                                : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            }`}
                            onClick={() => slot.available && setSelectedTime(slot.time)}
                          >
                            <Clock className="inline-block mr-1" size={14} />
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      {t('booking.name')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('booking.name')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
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
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('booking.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="voucherCode" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('booking.voucherCode')}
                        </label>
                        <input
                          type="text"
                          id="voucherCode"
                          name="voucherCode"
                          value={formData.voucherCode}
                          onChange={handleInputChange}
                          placeholder={t('booking.voucherCodePlaceholder')}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('booking.notes')}
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <div className="md:col-span-2">
                        <label className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                          <span className="text-sm text-gray-600">
                            {language === 'de' ? (
                              'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzerklärung zu. Diese Einwilligung kann ich jederzeit widerrufen.'
                            ) : language === 'en' ? (
                              'I agree to the processing of my personal data according to the privacy policy. I can revoke this consent at any time.'
                            ) : language === 'ar' ? (
                              'أوافق على معالجة بياناتي الشخصية وفقًا لسياسة الخصوصية. يمكنني إلغاء هذه الموافقة في أي وقت.'
                            ) : (
                              'Kişisel verilerimin gizlilik politikasına göre işlenmesini kabul ediyorum. Bu izni istediğim zaman iptal edebilirim.'
                            )}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      {language === 'ar' ? <ArrowRight size={20} className="inline mr-2" /> : null}
                      {language === 'ar' ? null : <ArrowRight size={20} className="inline mr-2 rotate-180" />}
                      {language === 'de' ? 'Zurück' : language === 'en' ? 'Back' : language === 'ar' ? 'رجوع' : 'Geri'}
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={isNextButtonDisabled()}
                      className={`px-6 py-2 bg-green-800 text-white rounded-md transition-colors ${
                        isNextButtonDisabled()
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-green-700'
                      }`}
                    >
                      {language === 'de' ? 'Weiter' : language === 'en' ? 'Next' : language === 'ar' ? 'التالي' : 'İleri'}
                      {language === 'ar' ? <ArrowRight size={20} className="inline ml-2 rotate-180" /> : <ArrowRight size={20} className="inline ml-2" />}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-2 bg-green-800 text-white rounded-md transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                      }`}
                    >
                      {isSubmitting ? (
                        language === 'de' ? 'Wird gesendet...' :
                        language === 'en' ? 'Submitting...' :
                        language === 'ar' ? 'جاري الإرسال...' :
                        'Gönderiliyor...'
                      ) : (
                        t('booking.submit')
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {showVerification && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">{t('booking.verification.title')}</h3>
            <p className="mb-4">{t('booking.verification.description')}</p>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-4"
              placeholder={t('booking.verification.codePlaceholder')}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowVerification(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                {t('booking.verification.cancel')}
              </button>
              <button
                onClick={verifyCode}
                className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-700"
              >
                {t('booking.verification.verify')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;