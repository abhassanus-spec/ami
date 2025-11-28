import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

const NewsletterSignup: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Subscribe to newsletter
      const { error: newsletterError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          language,
          consent_given: true,
        });

      if (newsletterError) throw newsletterError;

      toast.success(t('newsletter.success'));
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error(t('newsletter.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-beige/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            {t('newsletter.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('newsletter.description')}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? t('newsletter.submitting') : t('newsletter.submit')}
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            {t('newsletter.terms')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;