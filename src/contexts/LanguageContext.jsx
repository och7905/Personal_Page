import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'kr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (keys) => {
        const keyArray = keys.split('.');
        let value = translations[language];
        for (const key of keyArray) {
            if (value === undefined) break;
            value = value[key];
        }
        return value || keys;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
