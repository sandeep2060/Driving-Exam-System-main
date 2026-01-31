import { useTranslation } from 'react-i18next';

function Rules() {
    const { t } = useTranslation();

    return (
        <section id="rules" className="section rules-section">
            <div className="section-header">
                <p className="eyebrow">{t('rules.subtitle')}</p>
                <h2>{t('rules.title')}</h2>
            </div>

            <div className="three-column">
                <div className="info-card">
                    <div className="icon-circle">🎂</div>
                    <h3>{t('rules.age.title')}</h3>
                    <ul className="bullet-list">
                        <li>{t('rules.age.two_wheeler')}</li>
                        <li>{t('rules.age.four_wheeler')}</li>
                        <li>{t('rules.age.heavy')}</li>
                    </ul>
                </div>

                <div className="info-card">
                    <div className="icon-circle">📄</div>
                    <h3>{t('rules.documents.title')}</h3>
                    <ul className="bullet-list">
                        <li>{t('rules.documents.citizenship')}</li>
                        <li>{t('rules.documents.blood_group')}</li>
                        <li>{t('rules.documents.application')}</li>
                    </ul>
                </div>

                <div className="info-card">
                    <div className="icon-circle">🎖️</div>
                    <h3>{t('rules.exam_process.title')}</h3>
                    <ul className="bullet-list">
                        <li>{t('rules.exam_process.written')}</li>
                        <li>{t('rules.exam_process.trial')}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Rules;
