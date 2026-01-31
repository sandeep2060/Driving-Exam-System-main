import { useTranslation } from 'react-i18next';

function Process() {
  const { t } = useTranslation();

  const steps = [
    { title: t('process.step1_title'), desc: t('process.step1_desc') },
    { title: t('process.step2_title'), desc: t('process.step2_desc') },
    { title: t('process.step3_title'), desc: t('process.step3_desc') },
    { title: t('process.step4_title'), desc: t('process.step4_desc') },
    { title: t('process.step5_title'), desc: t('process.step5_desc') },
    { title: t('process.step6_title'), desc: t('process.step6_desc') },
  ];

  return (
    <section id="process" className="section process-section">
      <div className="section-header">
        <h2>{t('process.title')}</h2>
        <p>{t('process.subtitle')}</p>
      </div>
      <ol className="stepper">
        {steps.map((step, index) => (
          <li key={index}>
            <span className="step-number">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Process

