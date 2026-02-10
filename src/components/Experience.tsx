import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Experience() {
    const { t } = useTranslation();

    const jobs = ['ikusi', 'taag', 'tdm', 'exos'];

    return (
        <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>
                {t('experience.title')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {jobs.map((job, index) => (
                    <motion.div
                        key={job}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            borderLeft: '2px solid var(--primary)',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                        }}
                    >
                        {/* Dot indicador */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '-6px',
                                top: '0',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: 'var(--primary)',
                            }}
                        />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>
                                {t(`experience.jobs.${job}.role`)}
                            </h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 500 }}>
                                    {t(`experience.jobs.${job}.company`)}
                                </span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                    {t(`experience.jobs.${job}.date`)}
                                </span>
                            </div>
                            <p style={{ margin: '0.5rem 0 0', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                                {t(`experience.jobs.${job}.desc`)}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
