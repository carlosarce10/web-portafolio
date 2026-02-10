import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Education() {
    const { t } = useTranslation();

    return (
        <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                {t('education.title')}
            </h3>
            <motion.div
                className="card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t('education.degree')}</h4>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)' }}>
                            {t('education.school')}
                        </p>
                    </div>
                    <span
                        style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '2rem',
                            background: 'rgba(255,255,255,0.1)',
                            fontSize: '0.85rem',
                            height: 'fit-content',
                        }}
                    >
                        {t('education.date')}
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
