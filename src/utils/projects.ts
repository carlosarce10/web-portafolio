import type { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce React',
    description: 'Tienda online con carrito, pagos y panel admin.',
    image: 'https://placehold.co/600x360',
    technologies: ['React', 'Zustand', 'Stripe', 'Node'],
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel con gráficos y tiempo real.',
    image: 'https://placehold.co/600x360',
    technologies: ['Vue', 'D3', 'WebSocket'],
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'App Móvil',
    description: 'React Native para gestión de tareas.',
    image: 'https://placehold.co/600x360',
    technologies: ['React Native', 'Expo', 'Firebase'],
    demo: '#',
    github: '#',
  },
];
