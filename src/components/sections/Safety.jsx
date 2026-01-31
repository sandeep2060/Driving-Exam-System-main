import { useTranslation } from 'react-i18next';

function Safety() {
  const { t } = useTranslation();

  return (
    <section id="safety" className="section safety-section">
      <div className="section-header">
        <h2>{t('safety.title')}</h2>
        <p>{t('safety.subtitle')}</p>
      </div>
      <div className="icon-grid">
        <article className="icon-card">
          <div className="icon-circle">🚦</div>
          <h3>{t('safety.signals_title')}</h3>
          <p>{t('safety.signals_desc')}</p>
        </article>
        <article className="icon-card">
          <div className="icon-circle">🪖</div>
          <h3>{t('safety.helmet_title')}</h3>
          <p>{t('safety.helmet_desc')}</p>
        </article>
        <article className="icon-card">
          <div className="icon-circle">📏</div>
          <h3>{t('safety.speed_title')}</h3>
          <p>{t('safety.speed_desc')}</p>
        </article>
        <article className="icon-card">
          <div className="icon-circle">🛣️</div>
          <h3>{t('safety.lane_title')}</h3>
          <p>{t('safety.lane_desc')}</p>
        </article>
        <article className="icon-card">
          <div className="icon-circle">🚸</div>
          <h3>{t('safety.zebra_title')}</h3>
          <p>{t('safety.zebra_desc')}</p>
        </article>
        <article className="icon-card">
          <div className="icon-circle">🚫</div>
          <h3>{t('safety.alcohol_title')}</h3>
          <p>{t('safety.alcohol_desc')}</p>
        </article>
      </div>
    </section>
  )
}

export default Safety

