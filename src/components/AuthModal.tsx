import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const { signIn, signUp } = useAuth();
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
      } else {
        await signUp(formData.email, formData.password, formData.name, formData.phone);
      }
      onClose();
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            {isLogin ? (
              language === 'de' ? 'Anmelden' :
              language === 'en' ? 'Sign In' :
              language === 'ar' ? 'تسجيل الدخول' :
              'Giriş Yap'
            ) : (
              language === 'de' ? 'Registrieren' :
              language === 'en' ? 'Sign Up' :
              language === 'ar' ? 'إنشاء حساب' :
              'Kayıt Ol'
            )}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'de' ? 'Name' :
                     language === 'en' ? 'Name' :
                     language === 'ar' ? 'الاسم' :
                     'İsim'}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'de' ? 'Telefon' :
                     language === 'en' ? 'Phone' :
                     language === 'ar' ? 'الهاتف' :
                     'Telefon'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'de' ? 'E-Mail' :
                 language === 'en' ? 'Email' :
                 language === 'ar' ? 'البريد الإلكتروني' :
                 'E-posta'}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'de' ? 'Passwort' :
                 language === 'en' ? 'Password' :
                 language === 'ar' ? 'كلمة المرور' :
                 'Şifre'}
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-800 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              {isLogin ? (
                language === 'de' ? 'Anmelden' :
                language === 'en' ? 'Sign In' :
                language === 'ar' ? 'تسجيل الدخول' :
                'Giriş Yap'
              ) : (
                language === 'de' ? 'Registrieren' :
                language === 'en' ? 'Sign Up' :
                language === 'ar' ? 'إنشاء حساب' :
                'Kayıt Ol'
              )}
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-800 hover:underline"
            >
              {isLogin ? (
                language === 'de' ? 'Noch kein Konto? Registrieren' :
                language === 'en' ? 'No account? Sign Up' :
                language === 'ar' ? 'ليس لديك حساب؟ سجل الآن' :
                'Hesabınız yok mu? Kayıt olun'
              ) : (
                language === 'de' ? 'Bereits ein Konto? Anmelden' :
                language === 'en' ? 'Already have an account? Sign In' :
                language === 'ar' ? 'لديك حساب؟ سجل دخولك' :
                'Zaten hesabınız var mı? Giriş yapın'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;