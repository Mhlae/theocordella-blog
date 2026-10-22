import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly isDark = signal(true);
  protected readonly language = signal<'pt' | 'en' | 'es'>('pt');

  protected readonly copy = {
    pt: {
      nav: ['Sobre', 'Projetos', 'Formação', 'Contato'],
      eyebrow: 'DESENVOLVEDOR DE SOFTWARE FULL-STACK',
      role: 'Desenvolvedor de Software Full-Stack',
      intro:
        'Desenvolvedor de software com experiência em aplicações full-stack usando React, Angular, Node.js e SQL. Construo projetos completos, do banco de dados à interface, com Git e GitHub.',
      projects: 'Ver projetos',
      contact: 'Vamos conversar',
      availability: 'Início imediato — remoto ou presencial em Santos/SP',
      location: 'SANTOS · SP',
      scroll: 'Role para explorar',
      aboutLabel: '01 — Sobre mim',
      aboutTitle: 'Tecnologia do banco de dados à interface.',
      aboutText:
        'Busco uma oportunidade de estágio ou posição júnior em Desenvolvimento de Software. Tenho experiência prática construindo aplicações full-stack, base sólida em Linux e Docker e mais de três anos usando diferentes distribuições Linux para instalação, configuração e resolução de problemas.',
      skillLabel: 'Tecnologias',
      skillGroups: ['Desenvolvimento', 'Banco de dados', 'Ferramentas e práticas', 'Infraestrutura', 'AI'],
      skillItems: [
        ['JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Express', 'APIs REST', 'SCSS / Sass'],
        ['SQL', 'MySQL', 'SQLite', 'Modelagem relacional'],
        ['Git', 'GitHub', 'VS Code', 'Insomnia', 'Scrum', 'Princípios SOLID'],
        [
          'Linux: Arch, Debian, Ubuntu, Mint, Zorin',
          'Docker: contêineres e volumes persistentes',
          'Redes: HTTP/HTTPS, TCP, DNS, SSH, curl',
        ],
        ['ChatGPT', 'Claude', 'DeepSeek', 'Grok', 'Gemini', 'Gemini Notebook'],
      ],
      linuxNote: 'Linux: mais de 3 anos de uso, incluindo instalação, configuração e resolução de problemas.',
      projectsLabel: '02 — Projetos em destaque',
      projectsTitle: 'Projetos',
      projectCategories: ['FULL-STACK', 'FULL-STACK', 'PORTFÓLIO', 'SITE', 'PLATAFORMA', 'HOMELAB'],
      projectNames: [
        'Sistema de Cadastro de Clientes',
        'To-Do List Full Stack',
        'Portfólio Pessoal',
        'Shirley Semijoias',
        'OnyxStack',
        'Nextcloud em Docker (HomeLab)',
      ],
      viewGithub: 'Ver no GitHub',
      visitSite: 'Visitar site',
      projectsDescriptions: [
        'Aplicação full-stack com API REST e CRUD completo, banco de dados relacional e interface em React.',
        'API REST com Node.js e Express, banco de dados MySQL em contêiner Docker e testes de endpoints com Insomnia.',
        'Site profissional com projetos, trajetória e oportunidades, desenvolvido e publicado.',
        'Site de catálogo e presença digital para uma marca de semijoias, publicado na Vercel.',
        'Plataforma web criada para apresentar uma experiência de software.',
        'Serviço auto-hospedado em contêiner, com volume para persistência de dados e acesso pela rede local.',
      ],
      educationLabel: '03 — Formação e idiomas',
      educationTitle: 'Aprendizado contínuo.',
      higherEducation: 'Ensino Superior',
      education: 'Engenharia de Software',
      studying: 'Cursando',
      courses: 'Cursos complementares',
      courseNames: [
        'SQL: Linguagem de Consulta Estruturada',
        'Contribuindo em um Projeto de Código Aberto no GitHub',
        'Desafios de Projetos: Crie um Portfólio Vencedor',
        'Java e Angular',
      ],
      courseProviders: ['Fundação Getúlio Vargas Online', 'Santander / DIO', 'Santander / DIO', 'Santander / DIO'],
      inProgress: 'Em andamento',
      languages: 'Idiomas',
      languageLevels: ['Intermediário (leitura técnica avançada)', 'Intermediário'],
      contactLabel: '04 — Entre em contato',
      contactTitle: 'Vamos conversar sobre sua oportunidade.',
      contactText:
        'Estou disponível para início imediato, em oportunidades remotas ou presenciais em Santos/SP.',
      email: 'Enviar e-mail',
      footer: 'DESENVOLVIMENTO FULL-STACK',
    },
    en: {
      nav: ['About', 'Projects', 'Education', 'Contact'],
      eyebrow: 'FULL-STACK SOFTWARE DEVELOPER',
      role: 'Full-Stack Software Developer',
      intro:
        'Software developer experienced in full-stack applications with React, Angular, Node.js, and SQL. I build complete projects, from database to interface, using Git and GitHub.',
      projects: 'View projects',
      contact: "Let's talk",
      availability: 'Available immediately — remote or on-site in Santos, Brazil',
      location: 'SANTOS · BRAZIL',
      scroll: 'Scroll to explore',
      aboutLabel: '01 — About me',
      aboutTitle: 'From database to interface.',
      aboutText:
        'I am looking for a software development internship or junior position. I have hands-on experience building full-stack applications, a solid foundation in Linux and Docker, and over three years of using different Linux distributions for installation, configuration, and troubleshooting.',
      skillLabel: 'Technologies',
      skillGroups: ['Development', 'Databases', 'Tools and practices', 'Infrastructure', 'AI'],
      skillItems: [
        ['JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Express', 'REST APIs', 'SCSS / Sass'],
        ['SQL', 'MySQL', 'SQLite', 'Relational modeling'],
        ['Git', 'GitHub', 'VS Code', 'Insomnia', 'Scrum', 'SOLID principles'],
        [
          'Linux: Arch, Debian, Ubuntu, Mint, Zorin',
          'Docker: containers and persistent volumes',
          'Networking: HTTP/HTTPS, TCP, DNS, SSH, curl',
        ],
        ['ChatGPT', 'Claude', 'DeepSeek', 'Grok', 'Gemini', 'Gemini Notebook'],
      ],
      linuxNote: 'Linux: 3+ years of use, including installation, configuration, and troubleshooting.',
      projectsLabel: '02 — Featured projects',
      projectsTitle: 'Projects',
      projectCategories: ['FULL-STACK', 'FULL-STACK', 'PORTFOLIO', 'WEBSITE', 'PLATFORM', 'HOMELAB'],
      projectNames: [
        'Customer Registration System',
        'Full-Stack To-Do List',
        'Personal Portfolio',
        'Shirley Semijoias',
        'OnyxStack',
        'Nextcloud on Docker (HomeLab)',
      ],
      viewGithub: 'View on GitHub',
      visitSite: 'Visit site',
      projectsDescriptions: [
        'Full-stack application with a complete CRUD REST API, relational database, and React interface.',
        'REST API with Node.js and Express, MySQL database in a Docker container, and endpoint testing with Insomnia.',
        'Professional website featuring projects, background, and opportunities, developed and published.',
        'Catalog and digital presence website for a jewelry brand, published on Vercel.',
        'Web platform built to showcase a software experience.',
        'Self-hosted containerized service with a persistent data volume and local network access.',
      ],
      educationLabel: '03 — Education and languages',
      educationTitle: 'Always learning.',
      higherEducation: 'Higher Education',
      education: 'Software Engineering',
      studying: 'In progress',
      courses: 'Additional courses',
      courseNames: [
        'SQL: Structured Query Language',
        'Contributing to an Open Source Project on GitHub',
        'Project Challenges: Create a Winning Portfolio',
        'Java and Angular',
      ],
      courseProviders: ['Fundação Getúlio Vargas Online', 'Santander / DIO', 'Santander / DIO', 'Santander / DIO'],
      inProgress: 'In progress',
      languages: 'Languages',
      languageLevels: ['Intermediate (advanced technical reading)', 'Intermediate'],
      contactLabel: '04 — Get in touch',
      contactTitle: "Let's talk about your opportunity.",
      contactText: 'Available to start immediately for remote or on-site opportunities in Santos, Brazil.',
      email: 'Send email',
      footer: 'FULL-STACK DEVELOPMENT',
    },
    es: {
      nav: ['Sobre mí', 'Proyectos', 'Formación', 'Contacto'],
      eyebrow: 'DESARROLLADOR DE SOFTWARE FULL-STACK',
      role: 'Desarrollador de Software Full-Stack',
      intro:
        'Desarrollador de software con experiencia en aplicaciones full-stack con React, Angular, Node.js y SQL. Creo proyectos completos, desde la base de datos hasta la interfaz, con Git y GitHub.',
      projects: 'Ver proyectos',
      contact: 'Hablemos',
      availability: 'Incorporación inmediata — remoto o presencial en Santos, Brasil',
      location: 'SANTOS · BRASIL',
      scroll: 'Desplázate para explorar',
      aboutLabel: '01 — Sobre mí',
      aboutTitle: 'De la base de datos a la interfaz.',
      aboutText:
        'Busco una oportunidad de prácticas o un puesto júnior en Desarrollo de Software. Tengo experiencia práctica creando aplicaciones full-stack, una base sólida en Linux y Docker, y más de tres años usando distintas distribuciones Linux para instalación, configuración y resolución de problemas.',
      skillLabel: 'Tecnologías',
      skillGroups: ['Desarrollo', 'Bases de datos', 'Herramientas y prácticas', 'Infraestructura', 'AI'],
      skillItems: [
        ['JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'Express', 'APIs REST', 'SCSS / Sass'],
        ['SQL', 'MySQL', 'SQLite', 'Modelado relacional'],
        ['Git', 'GitHub', 'VS Code', 'Insomnia', 'Scrum', 'Principios SOLID'],
        [
          'Linux: Arch, Debian, Ubuntu, Mint, Zorin',
          'Docker: contenedores y volúmenes persistentes',
          'Redes: HTTP/HTTPS, TCP, DNS, SSH, curl',
        ],
        ['ChatGPT', 'Claude', 'DeepSeek', 'Grok', 'Gemini', 'Gemini Notebook'],
      ],
      linuxNote: 'Linux: más de 3 años de uso, incluyendo instalación, configuración y resolución de problemas.',
      projectsLabel: '02 — Proyectos destacados',
      projectsTitle: 'Proyectos',
      projectCategories: ['FULL-STACK', 'FULL-STACK', 'PORTAFOLIO', 'SITIO WEB', 'PLATAFORMA', 'HOMELAB'],
      projectNames: [
        'Sistema de Registro de Clientes',
        'Lista de tareas Full Stack',
        'Portafolio Personal',
        'Shirley Semijoias',
        'OnyxStack',
        'Nextcloud en Docker (HomeLab)',
      ],
      viewGithub: 'Ver en GitHub',
      visitSite: 'Visitar sitio',
      projectsDescriptions: [
        'Aplicación full-stack con API REST y CRUD completo, base de datos relacional e interfaz en React.',
        'API REST con Node.js y Express, base de datos MySQL en un contenedor Docker y pruebas de endpoints con Insomnia.',
        'Sitio profesional con proyectos, trayectoria y oportunidades, desarrollado y publicado.',
        'Sitio de catálogo y presencia digital para una marca de joyería, publicado en Vercel.',
        'Plataforma web creada para presentar una experiencia de software.',
        'Servicio autoalojado en contenedor, con volumen para persistencia de datos y acceso por red local.',
      ],
      educationLabel: '03 — Formación e idiomas',
      educationTitle: 'Aprendizaje continuo.',
      higherEducation: 'Educación Superior',
      education: 'Ingeniería de Software',
      studying: 'En curso',
      courses: 'Cursos complementarios',
      courseNames: [
        'SQL: Lenguaje de Consulta Estructurada',
        'Contribuyendo a un Proyecto de Código Abierto en GitHub',
        'Desafíos de proyectos: crea un portafolio ganador',
        'Java y Angular',
      ],
      courseProviders: ['Fundação Getúlio Vargas Online', 'Santander / DIO', 'Santander / DIO', 'Santander / DIO'],
      inProgress: 'En curso',
      languages: 'Idiomas',
      languageLevels: ['Intermedio (lectura técnica avanzada)', 'Intermedio'],
      contactLabel: '04 — Contacto',
      contactTitle: 'Hablemos sobre tu oportunidad.',
      contactText: 'Disponible para incorporación inmediata en oportunidades remotas o presenciales en Santos, Brasil.',
      email: 'Enviar correo',
      footer: 'DESARROLLO FULL-STACK',
    },
  } as const;

  protected readonly projects = [
    {
      name: 'Sistema de Cadastro de Clientes',
      technologies: 'Node.js · Express · SQLite · React',
      url: 'https://github.com/mhla/cadastro-clientes',
      github: true,
    },
    {
      name: 'To-Do List Full Stack',
      technologies: 'Node.js · Express · MySQL · Docker',
      url: 'https://github.com/mhla/todolist-fullstack',
      github: true,
    },
    {
      name: 'Portfólio Pessoal',
      technologies: 'Angular · TypeScript · SCSS',
      url: 'https://theocordella.com.br',
      github: false,
    },
    {
      name: 'Shirley Semijoias',
      technologies: 'React · JavaScript',
      url: 'https://shirleysemijoias.vercel.app',
      github: false,
    },
    {
      name: 'OnyxStack',
      technologies: 'React · JavaScript',
      url: 'https://onyxstack.theocordella.com.br',
      github: false,
    },
    {
      name: 'Nextcloud em Docker (HomeLab)',
      technologies: 'Docker · Linux',
      url: '',
      github: false,
    },
  ];

  protected readonly courseIndexes = [0, 1, 2, 3];
  protected readonly languages = ['Inglês', 'Espanhol'];

  protected toggleTheme(): void {
    this.isDark.update((value) => !value);
  }

  protected setLanguage(language: 'pt' | 'en' | 'es'): void {
    this.language.set(language);
  }
}
