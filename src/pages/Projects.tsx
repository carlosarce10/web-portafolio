import React from 'react';
import Container from '../components/ui/Container';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projects';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <Container>
        <h2 className="section__title">{t('nav.projects')}</h2>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}