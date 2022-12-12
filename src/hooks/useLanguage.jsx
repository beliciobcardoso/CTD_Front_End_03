import { useContext, useState, createContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider(props) {
  const currentLanguageSaved = localStorage.getItem('currentLanguage');
  const [currentLanguage, setCurrentLanguage] = useState(
    currentLanguageSaved === null ? 'english' : currentLanguageSaved
  );
  const languagesAllowed = ['portuguese', 'english'];

  function changeCurrentLanguage(language) {
    const languageIsAllowed = languagesAllowed.includes(language);

    if (language !== currentLanguage && languageIsAllowed) {
      setCurrentLanguage(language);
      localStorage.setItem('currentLanguage', language);
    }
  }

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, changeCurrentLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}
