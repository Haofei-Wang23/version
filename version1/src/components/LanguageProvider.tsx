import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { localizedContent, type Language } from '../data/content';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  content: (typeof localizedContent)[Language];
};

const STORAGE_KEY = 'changmen-language';

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') {
      return saved;
    }

    const browserLanguage = window.navigator.language.toLowerCase();
    return browserLanguage.startsWith('zh') ? 'zh' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => (current === 'zh' ? 'en' : 'zh')),
    content: localizedContent[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
