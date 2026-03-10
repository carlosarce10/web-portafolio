import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactForm } from '../utils/validations';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent]           = useState(false);
  const [sendError, setSendError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactForm) => {
    setSendError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    data.name,
          email:   data.email,
          message: data.message,
          title:   `Mensaje de ${data.name}`,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      reset();
    } catch {
      setSendError(t('contact.errorBody'));
    }
  };

  return (
    <section className="section section--alt">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section__title">{t('contact.title')}</h2>

          <form className="c-form" onSubmit={handleSubmit(onSubmit)} noValidate>

            {sent && (
              <div className="c-form__success">
                <span>✓</span>
                <span>{t('contact.successTitle')} — {t('contact.successBody')}</span>
              </div>
            )}

            {sendError && (
              <span className="c-form__error" style={{ marginBottom: '1rem', display: 'block' }}>
                {sendError}
              </span>
            )}

            <div className="c-form__group">
              <label className="c-form__label" htmlFor="name">
                {t('contact.namePlaceholder')}
              </label>
              <input
                id="name"
                className={`c-form__input${errors.name ? ' c-form__input--error' : ''}`}
                placeholder={t('contact.namePlaceholder')}
                {...register('name')}
              />
              {errors.name && <span className="c-form__error">{errors.name.message}</span>}
            </div>

            <div className="c-form__group">
              <label className="c-form__label" htmlFor="email">
                {t('contact.emailPlaceholder')}
              </label>
              <input
                id="email"
                type="email"
                className={`c-form__input${errors.email ? ' c-form__input--error' : ''}`}
                placeholder={t('contact.emailPlaceholder')}
                {...register('email')}
              />
              {errors.email && <span className="c-form__error">{errors.email.message}</span>}
            </div>

            <div className="c-form__group">
              <label className="c-form__label" htmlFor="message">
                {t('contact.messagePlaceholder')}
              </label>
              <textarea
                id="message"
                className={`c-form__textarea${errors.message ? ' c-form__textarea--error' : ''}`}
                placeholder={t('contact.messagePlaceholder')}
                rows={6}
                {...register('message')}
              />
              {errors.message && <span className="c-form__error">{errors.message.message}</span>}
            </div>

            <Button type="submit" full disabled={isSubmitting || sent}>
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
