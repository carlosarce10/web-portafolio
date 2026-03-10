import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/img/yo.png';
import cvEs from '../assets/Curriculum.pdf';
import cvEn from '../assets/Curriculum_EN.pdf';
import Experience from '../components/Experience';
import Education from '../components/Education';

function HighlightsList() {
  const { t } = useTranslation();
  const items = t('home.highlights', { returnObjects: true }) as string[];

  return (
    <div className="c-highlights">
      <h4 className="c-highlights__title">{t('home.highlightsTitle')}</h4>
      <ul className="c-highlights__list">
        {items.map((item, i) => (
          <li key={item} className="c-highlights__item">
            <span className="c-highlights__number">{String(i + 1).padStart(2, '0')}</span>
            <p className="c-highlights__text">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const navigate    = useNavigate();
  const isEs        = i18n.language.startsWith('es');

  const handleDownloadCV = () => {
    const url      = isEs ? cvEs : cvEn;
    const filename = isEs ? 'Carlos_Arce_CV_ES.pdf' : 'Carlos_Arce_CV_EN.pdf';
    const link     = document.createElement('a');
    link.href      = url;
    link.download  = filename;
    link.click();
  };

  return (
    <section className="section">
      {/* ── Hero ────────────────────────────────────── */}
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

          <motion.h2
            className="hero__role"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {t('home.role')}
          </motion.h2>

          <motion.div
            className="hero__subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* key={i18n.language} fuerza re-mount al cambiar idioma */}
            <TypeAnimation
              key={i18n.language}
              sequence={[t('home.subtitle'), 1000]}
              wrapper="p"
              speed={80}
              repeat={0}
              cursor={false}
            />
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Button onClick={() => navigate('/projects')}>{t('home.ctaProjects')}</Button>
            <Button variant="secondary" onClick={handleDownloadCV}>
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
            <img
              src={avatar}
              alt="Carlos Arce — Frontend Engineer"
              loading="eager"
              decoding="async"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
      </div>

      {/* ── Contenido principal ─────────────────────── */}
      <Container>
        <motion.div
          className="c-content-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <HighlightsList />
          <Experience />
          <Education />

          <div className="c-pitch">
            <h3 className="c-pitch__title">{t('home.pitchTitle')}</h3>
            <p className="c-pitch__body">{t('home.pitchBody')}</p>
            <Button onClick={() => navigate('/contact')}>{t('home.pitchCta')}</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
