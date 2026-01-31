import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </div>
      <div className="three-column">
        <article className="info-card">
          <h3>{t('about.apply_title')}</h3>
          <p>{t('about.apply_desc')}</p>
        </article>
        <article className="info-card">
          <h3>{t('about.scheduling_title')}</h3>
          <p>{t('about.scheduling_desc')}</p>
        </article>
        <article className="info-card">
          <h3>{t('about.updates_title')}</h3>
          <p>{t('about.updates_desc')}</p>
        </article>
      </div>
    </section>
  )
}

export default About

