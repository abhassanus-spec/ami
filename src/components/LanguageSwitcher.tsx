import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'tr', label: 'Türkçe' },
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 px-3 py-2 rounded-md bg-white/20 hover:bg-white/30 transition-colors duration-300"
        aria-label="Language selector"
      >
        <span className="text-sm font-medium">
          {languages.find((lang) => lang.code === language)?.label}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute right-0 mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
        <div className="py-1" role="menu" aria-orientation="vertical">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`block px-4 py-2 text-sm text-left w-full ${
                language === lang.code
                  ? 'bg-beige/20 text-green-800 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setLanguage(lang.code)}
              role="menuitem"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;