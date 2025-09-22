import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactForm } from '../utils/validations';

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactForm) => {
  await new Promise((r) => setTimeout(r, 800));
  alert(`Enviado: ${JSON.stringify(data, null, 2)}`);
  reset();
};

  return (
    <section className="section section--alt">
      <Container>
        <h2 className="section__title">Contacto</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <input placeholder="Tu nombre" {...register('name')} className={errors.name ? 'error' : ''} />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <input placeholder="Tu email" type="email" {...register('email')} className={errors.email ? 'error' : ''} />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <textarea placeholder="Tu mensaje" rows="6" {...register('message')} className={errors.message ? 'error' : ''}></textarea>
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>
          <Button type="submit" full disabled={isSubmitting}>
            {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
          </Button>
        </form>
      </Container>
    </section>
  );
}
