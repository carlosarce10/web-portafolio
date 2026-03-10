import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const jobTags: Record<string, string[]> = {
  ikusi:     ['Vue 3', 'Composition API', 'Pinia', 'Vite', 'Vuetify 3', 'GitHub', 'Scrum', 'IA Tools'],
  taag:      ['Vue 2', 'Vuetify', 'Vuex', 'Vue Router', 'Axios', 'i18n', 'Figma', 'Postman'],
  tdm:       ['Vue 2', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Clean Architecture', 'MVC', 'Bitbucket'],
  exos:      ['Quasar', 'Vue', 'Vuelidate', 'Axios', 'Scrum', 'Trello', 'GitHub'],
  freelance: ['Figma', 'Branding', 'IA Generativa', 'Identidad Visual', 'Diseño Publicitario'],
};

const jobs = ['ikusi', 'taag', 'tdm', 'exos', 'freelance'] as const;

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="c-section-heading">{t('experience.title')}</h3>

      <div className="c-timeline">
        {jobs.map((job, index) => (
          <motion.div
            key={job}
            className="c-timeline__item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="c-timeline__dot">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="c-timeline__card">
              <div className="c-timeline__header">
                <h4 className="c-timeline__role">
                  {t(`experience.jobs.${job}.role`)}
                </h4>
                <span className="c-timeline__date">
                  {t(`experience.jobs.${job}.date`)}
                </span>
              </div>

              <p className="c-timeline__company">
                {t(`experience.jobs.${job}.company`)}
              </p>

              <p className="c-timeline__desc">
                {t(`experience.jobs.${job}.desc`)}
              </p>

              <div className="c-timeline__tags">
                {jobTags[job].map(tag => (
                  <span key={tag} className="c-timeline__tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
