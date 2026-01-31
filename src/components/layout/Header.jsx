import { useTranslation } from 'react-i18next';

function Header({ onLoginClick, onSignupClick }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="site-header">
      <div className="header-left">
        <div className="gov-mark">
          <span className="gov-emblem">🇳🇵</span>
          <div>
            <p className="gov-eyebrow">{t('header.gov_nepal')}</p>
            <p className="gov-title">{t('header.ministry')}</p>
          </div>
        </div>
        <p className="portal-name">{t('header.dotm')}</p>
      </div>

      <nav className="site-nav">
        <a href="#home">{t('header.home')}</a>
        <a href="#about">{t('header.about')}</a>
        <a href="#rules">{t('header.rules')}</a>
        <a href="#apply">{t('header.apply')}</a>
        <a href="#exam">{t('header.exam')}</a>
        <a href="#contact">{t('header.contact')}</a>
      </nav>

      <div className="header-cta">
        <div className="language-toggle">
          <button
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
            className={`lang-btn ${i18n.language === 'np' ? 'active' : ''}`}
            onClick={() => changeLanguage('np')}
          >
            नेप
          </button>
        </div>
        <button
          type="button"
          className="primary-btn small"
          onClick={onLoginClick}
        >
          {t('header.login')}
        </button>
      </div>
    </header>
  )
}

export default Header

