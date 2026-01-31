import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>
      <div className="contact-grid">
        <div>
          <h3>{t('contact.dotm')}</h3>
          <p>{t('contact.ministry')}</p>
          <p>{t('contact.location')}</p>
          <p>{t('contact.phone')}</p>
          <p>{t('contact.email')}</p>
        </div>
        <div>
          <h3>{t('contact.online_title')}</h3>
          <ul className="bullet-list">
            {t('contact.online_list', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact

