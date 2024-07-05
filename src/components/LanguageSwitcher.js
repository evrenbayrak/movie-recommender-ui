import React from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import britishFlag from '../assets/british-enabled.png';
import britishDisabled from '../assets/british-disabled.png';

const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: ${({ isSelected }) => (isSelected ? '2px solid #FFD700' : 'none')};
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const FlagImage = styled.img`
  width: 24px;
  height: auto;
`;

const supportedLanguages = ['en', 'es', 'zh', 'ar', 'ru', 'fr', 'tr', 'it', 'de'];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const browserLang = navigator.language.split('-')[0];

  const handleLanguageSwitch = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage(browserLang);
      Cookies.remove('userLanguage');
    } else {
      i18n.changeLanguage('en');
      Cookies.set('userLanguage', 'en', { expires: 365 });
    }
  };

  // Check if the browser language is supported and not English
  const canSwitchToOriginal = supportedLanguages.includes(browserLang) && browserLang !== 'en';

  if (!canSwitchToOriginal) {
    return null;
  }

  return (
    <FlagButton onClick={handleLanguageSwitch} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {i18n.language === 'en' ? (
        <FlagImage src={britishFlag} alt="Switch to English" style={{ width: '24px', height: '24px' }} />
      ) : (
        <FlagImage src={britishDisabled} alt="Switch to Original Language" style={{ width: '24px', height: '24px' }} />
      )}
    </FlagButton>
  );
};

export default LanguageSwitcher;