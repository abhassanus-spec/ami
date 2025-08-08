export type Language = 'de' | 'en' | 'ar' | 'tr';

export interface NavItem {
  label: Record<Language, string>;
  href: string;
}

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: string;
  price: string;
  image: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingFormData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  consent: boolean;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface Newsletter {
  email: string;
  consent: boolean;
  language: Language;
}