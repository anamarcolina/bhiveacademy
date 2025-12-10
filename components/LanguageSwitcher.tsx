import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt' as const, label: 'PT' },
    { code: 'en' as const, label: 'EN' },
    { code: 'es' as const, label: 'ES' },
  ];

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg dark:bg-white/5 light:bg-gray-200 dark:border-white/10 light:border-gray-300 border">
      <Globe className="w-4 h-4 text-orange-400" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'pt' | 'en' | 'es')}
        className="bg-transparent text-sm font-medium dark:text-white light:text-gray-900 cursor-pointer outline-none dark:hover:text-orange-400 light:hover:text-orange-500 transition-colors"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="dark:bg-[#121212] light:bg-white dark:text-white light:text-gray-900">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};
