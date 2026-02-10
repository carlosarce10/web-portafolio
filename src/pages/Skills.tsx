import React from 'react';
import Container from '../components/ui/Container';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Core',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Node.js']
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Vue 2', 'Vue 3', 'React', 'Express', 'Bootstrap', 'Vuetify', 'Tailwind', 'Semantic UI', 'Quasar']
  },
  {
    title: 'State & Data',
    items: ['Vuex', 'Pinia', 'Context API', 'Axios', 'Ajax', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Trello', 'Postman', 'Figma']
  }
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="section section--alt">
      <Container>
        <h2 className="section__title">{t('skills.title')}</h2>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.items.map(skill => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-card)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}