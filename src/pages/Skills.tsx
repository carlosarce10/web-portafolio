import Container from '../components/ui/Container';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true }) as {
    title: string;
    items: string[];
  }[];

  return (
    <section className="section section--alt">
      <Container>
        <h2 className="section__title">{t('skills.title')}</h2>

        <div className="c-skills">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="c-skills__group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
            >
              <h3 className="c-skills__category">{category.title}</h3>
              <div className="c-skills__tags">
                {category.items.map(skill => (
                  <span key={skill} className="c-skills__tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
