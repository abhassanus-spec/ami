import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { AuthState, User } from '../types';
import { toast } from 'react-hot-toast';
import { useLanguage } from './LanguageContext';

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, phone: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
  });
  const { language } = useLanguage();

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setState({ user: session.user as User, loading: false });
      } else {
        setState({ user: null, loading: false });
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setState({ user: session.user as User, loading: false });
      } else {
        setState({ user: null, loading: false });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      toast.success(
        language === 'de' ? 'Erfolgreich angemeldet' :
        language === 'en' ? 'Successfully signed in' :
        language === 'ar' ? 'تم تسجيل الدخول بنجاح' :
        'Başarıyla giriş yapıldı'
      );
    } catch (error) {
      toast.error(
        language === 'de' ? 'Anmeldung fehlgeschlagen' :
        language === 'en' ? 'Failed to sign in' :
        language === 'ar' ? 'فشل تسجيل الدخول' :
        'Giriş başarısız'
      );
      throw error;
    }
  };

  const signUp = async (email: string, password: string, name: string, phone: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, phone },
        },
      });
      if (error) throw error;
      
      toast.success(
        language === 'de' ? 'Registrierung erfolgreich' :
        language === 'en' ? 'Successfully registered' :
        language === 'ar' ? 'تم التسجيل بنجاح' :
        'Başarıyla kaydolundu'
      );
    } catch (error) {
      toast.error(
        language === 'de' ? 'Registrierung fehlgeschlagen' :
        language === 'en' ? 'Failed to register' :
        language === 'ar' ? 'فشل التسجيل' :
        'Kayıt başarısız'
      );
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success(
        language === 'de' ? 'Erfolgreich abgemeldet' :
        language === 'en' ? 'Successfully signed out' :
        language === 'ar' ? 'تم تسجيل الخروج بنجاح' :
        'Başarıyla çıkış yapıldı'
      );
    } catch (error) {
      toast.error(
        language === 'de' ? 'Abmeldung fehlgeschlagen' :
        language === 'en' ? 'Failed to sign out' :
        language === 'ar' ? 'فشل تسجيل الخروج' :
        'Çıkış başarısız'
      );
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};