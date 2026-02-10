import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { useTranslation } from 'react-i18next';

export type Project = {
  id: number;
  i18nKey: string;
  img: string;
  tags: string[];
  link?: string;
  github?: string;
};

type Props = { project: Project; delay?: number };

export default function ProjectCard({ project, delay = 0 }: Props) {
  const { t } = useTranslation();
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });

  function onMove(e: React.MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const ry = (px - 0.5) * 2; // -1..1
    const rx = (0.5 - py) * 2; // -1..1
    const max = 6; // deg
    setTilt({ rx: rx * max, ry: ry * max });
  }

  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <motion.article
      ref={cardRef}
      className="card"
      style={{ transform: `translateZ(0) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={project.img}
          alt={t(`projects.${project.i18nKey}.title`)}
          style={{ width: '100%', height: 200, objectFit: 'cover', transform: 'translateZ(20px)' }}
        />
        <div
          className="card__overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,255,255,.08)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255,255,255,.25)',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            transition: 'opacity .25s',
          }}
        >
          {project.link && (
            <Button onClick={() => window.open(project.link, '_blank')} variant="primary" size="sm">
              Demo
            </Button>
          )}
          {project.github && (
            <Button onClick={() => window.open(project.github, '_blank')} variant="secondary" size="sm">
              GitHub
            </Button>
          )}
        </div>
      </div>

      <div style={{ padding: '1rem 1.2rem' }}>
        <h3 style={{ margin: '0 0 .4rem' }}>{t(`projects.${project.i18nKey}.title`)}</h3>
        <p style={{ color: 'var(--text-secondary)', margin: '0 0 .8rem' }}>
          {t(`projects.${project.i18nKey}.desc`)}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: 'var(--primary)',
                color: '#fff',
                borderRadius: 20,
                padding: '.2rem .6rem',
                fontSize: 12,
                transform: 'translateZ(30px)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .card:hover .card__overlay { opacity: 1; }
      `}</style>
    </motion.article>
  );
}