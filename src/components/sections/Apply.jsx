import { useTranslation } from 'react-i18next';
import AuthCard from '../auth/AuthCard'

function Apply({ user, authView, setAuthView, onProfileHydrate, applySectionRef, onOpenResetModal }) {
  const { t } = useTranslation();

  return (
    <section id="apply" ref={applySectionRef} className="section apply-section">
      <div className="section-header">
        <h2>{t('apply_section.title')}</h2>
        <p>{t('apply_section.subtitle')}</p>
      </div>

      <div className="apply-grid">
        <div className="apply-info">
          <h3>{t('apply_section.info_title')}</h3>
          <p>{t('apply_section.info_desc')}</p>
          <ul className="bullet-list">
            {t('apply_section.info_list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <AuthCard
          user={user}
          authView={authView}
          setAuthView={setAuthView}
          onProfileHydrate={onProfileHydrate}
          onOpenResetModal={onOpenResetModal}
        />
      </div>
    </section>
  )
}

export default Apply

