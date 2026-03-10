import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Education() {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: '3rem' }}>
      <h3 className="c-section-heading">{t('education.title')}</h3>
      <motion.div
        className="c-education-card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h4 className="c-education-card__degree">{t('education.degree')}</h4>
          <p className="c-education-card__school">{t('education.school')}</p>
        </div>
        <span className="c-education-card__badge">{t('education.date')}</span>
      </motion.div>
    </div>
  );
}
