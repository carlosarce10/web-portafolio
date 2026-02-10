export type Project = {
  id: number;
  i18nKey: string;
  tags: string[];
  github?: string;
  link?: string;
  img: string;
};

export const projects: Project[] = [
  {
    id: 1,
    i18nKey: 'p1',
    tags: ['Vue 2', 'TypeScript', 'Frontend'],
    github: 'https://github.com/carlosarce10/vue-front-test',
    img: 'https://placehold.co/600x400/1a1a1a/FFF?text=Vue+TS',
  },
  {
    id: 2,
    i18nKey: 'p2',
    tags: ['Vue 3', 'Game', 'Frontend'],
    link: 'https://65b98bff2c9f7d57b130374e--pokemongame-using-vue3.netlify.app/',
    img: 'https://placehold.co/600x400/1a1a1a/FFF?text=PokeGame',
  },
  {
    id: 3,
    i18nKey: 'p3',
    tags: ['React', 'Hooks', 'CRUD'],
    link: 'https://carlosarce10-veterinaria-citas.netlify.app/',
    img: 'https://placehold.co/600x400/1a1a1a/FFF?text=Veterinaria',
  },
  {
    id: 4,
    i18nKey: 'p4',
    tags: ['React', 'Hooks', 'Finance'],
    link: 'https://carlosarce10-control-gastos.netlify.app/',
    img: 'https://placehold.co/600x400/1a1a1a/FFF?text=Gastos',
  },
];
