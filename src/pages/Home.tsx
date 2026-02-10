import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/img/yo.png';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="hero">
        <div>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.title')}{' '}
            <span className="hero__title--em">Carlos Arce</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 500 }}>
              {t('home.role')}
            </h2>
          </motion.div>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.div
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Button onClick={() => (location.href = '/projects')}>{t('home.ctaProjects')}</Button>
            <Button variant="secondary" onClick={() => alert(t('home.ctaDownload'))}>
              {t('home.download')}
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ display: 'grid', placeItems: 'center' }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
        </motion.div>
      </div>

      <Container>
        <motion.div
          className="card"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Experience />
          <Education />

          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ marginTop: 0 }}>{t('home.pitchTitle')}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {t('home.pitchBody')}
            </p>
            <Button onClick={() => (location.href = '/contact')}>{t('home.pitchCta')}</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}