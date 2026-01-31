import { useTranslation } from 'react-i18next';

function Exam() {
  const { t } = useTranslation();

  return (
    <section id="exam" className="section exam-section">
      <div className="section-header">
        <h2>{t('exam.title')}</h2>
        <p>{t('exam.subtitle')}</p>
      </div>
      <div className="two-column">
        <article className="info-card">
          <h3>{t('exam.written_title')}</h3>
          <ul className="bullet-list">
            {t('exam.written_list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="info-card">
          <h3>{t('exam.trial_title')}</h3>
          <ul className="bullet-list">
            {t('exam.trial_list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Exam

