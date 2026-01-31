import { useTranslation } from 'react-i18next';

function Notices() {
  const { t } = useTranslation();

  return (
    <section id="notices" className="section notices-section">
      <div className="section-header">
        <h2>{t('notices.title')}</h2>
        <p>{t('notices.subtitle')}</p>
      </div>
      <div className="notice-list">
        <article className="notice-card">
          <p className="notice-date">2079-12-15</p>
          <h3>{t('notices.notice1_title')}</h3>
          <p>{t('notices.notice1_desc')}</p>
        </article>
        <article className="notice-card">
          <p className="notice-date">2079-11-02</p>
          <h3>{t('notices.notice2_title')}</h3>
          <p>{t('notices.notice2_desc')}</p>
        </article>
        <article className="notice-card">
          <p className="notice-date">2079-10-20</p>
          <h3>{t('notices.notice3_title')}</h3>
          <p>{t('notices.notice3_desc')}</p>
        </article>
      </div>
    </section>
  )
}

export default Notices

