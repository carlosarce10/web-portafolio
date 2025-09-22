import React from 'react';
import Container from '../components/ui/Container';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';

type Skill = {
  name: string;
  level: number;
  icon: string; // URL del icono (puedes cambiar por tus logos)
  bg?: string;
};

const skills: Skill[] = [
  { name: 'TypeScript', level: 95, icon: 'https://placehold.co/64x64?text=TS', bg: 'rgba(37,99,235,.15)' },
  { name: 'React', level: 90, icon: 'https://placehold.co/64x64?text=RE', bg: 'rgba(14,165,233,.15)' },
  { name: 'Vue', level: 88, icon: 'https://placehold.co/64x64?text=VU', bg: 'rgba(16,185,129,.15)' },
  { name: 'Node.js', level: 82, icon: 'https://placehold.co/64x64?text=NO', bg: 'rgba(34,197,94,.15)' },
  { name: 'CSS/SCSS', level: 90, icon: 'https://placehold.co/64x64?text=CS', bg: 'rgba(244,114,182,.15)' },
  { name: 'PostgreSQL', level: 76, icon: 'https://placehold.co/64x64?text=PG', bg: 'rgba(99,102,241,.15)' },
];

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const { t } = useTranslation();

  return (
    <section className="section section--alt">
      <Container>
        <h2 className="section__title">{t('skills.title')}</h2>
        <div ref={ref} className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card" style={{ background: 'rgba(255 255 255 / .05)' }}>
              <div className="skill-card__icon" style={{ background: s.bg }}>
                <img src={s.icon} alt={s.name} width={40} height={40} />
              </div>
              <div className="skill-card__meta">
                <div className="skill-card__name">{s.name}</div>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__fill"
                    style={{ width: isIntersecting ? `${s.level}%` : '0%' }}
                  />
                </div>
                <small style={{ color: 'var(--text-secondary)' }}>{s.level}%</small>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}