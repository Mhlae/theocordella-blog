export interface Project {
  key: number;
  technologies: string;
  url: string | null;
  github: boolean;
}

export const projects: Project[] = [
  {
    key: 0,
    technologies: 'Angular · TypeScript · SCSS',
    url: 'https://theocordella.com.br',
    github: false,
  },
  {
    key: 1,
    technologies: 'Node.js · Express · MySQL · Docker',
    url: 'https://github.com/mhlae/todolist-fullstack',
    github: true,
  },
  {
    key: 2,
    technologies: 'Node.js · Express · SQLite · React',
    url: 'https://github.com/mhlae/cadastro-clientes',
    github: true,
  },
  {
    key: 3,
    technologies: 'React · JavaScript',
    url: 'https://shirleysemijoias.vercel.app',
    github: false,
  },
  {
    key: 4,
    technologies: 'React · JavaScript',
    url: 'https://onyxstack.theocordella.com.br',
    github: false,
  },
  {
    key: 5,
    technologies: 'Docker · Linux',
    url: null,
    github: false,
  },
];
