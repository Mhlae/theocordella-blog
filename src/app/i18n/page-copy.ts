import { Language } from './shared-copy';

export const pageCopy = {
  pt: {
    titles: {
      home: 'Théo Cordella',
      projects: 'Projetos | Théo Cordella',
      about: 'Sobre mim | Théo Cordella',
      studies: 'Estudos | Théo Cordella',
      contact: 'Contato | Théo Cordella',
      notFound: 'Página não encontrada | Théo Cordella',
    },
    descriptions: {
      home: 'Conheça Théo Cordella, desenvolvedor de software com foco em aplicações, infraestrutura e soluções digitais.',
      projects:
        'Projetos de desenvolvimento full-stack, aplicações web e infraestrutura criados por Théo Cordella.',
      about: 'Conheça Théo Cordella, estudante de Engenharia de Software, apaixonado por tecnologia e praticante e instrutor de taekwondo.',
      studies: 'Formação, tecnologias e certificados de Théo Cordella.',
      contact:
        'Entre em contato com Théo Cordella para conversar sobre oportunidades profissionais.',
      notFound: 'A página que você procura não foi encontrada.',
    },
    projects: {
      title: 'Projetos',
      label: 'Projetos e experiências',
      categories: ['PORTFÓLIO', 'FULL-STACK', 'FULL-STACK', 'SITE', 'PLATAFORMA', 'HOMELAB'],
      names: [
        'Portfólio Pessoal',
        'To-Do List Full Stack',
        'Sistema de Cadastro de Clientes',
        'Shirley Semijoias',
        'OnyxStack',
        'Nextcloud em Docker (HomeLab)',
      ],
      descriptions: [
        'Site profissional com projetos, trajetória e oportunidades, desenvolvido e publicado.',
        'API REST com Node.js e Express, banco de dados MySQL em contêiner Docker e testes de endpoints com Insomnia.',
        'Aplicação full-stack com API REST e CRUD completo, banco de dados relacional e interface em React.',
        'Site de catálogo e presença digital para uma marca de semijoias, publicado na Vercel.',
        'Plataforma web criada para apresentar uma experiência de software.',
        'Serviço auto-hospedado em contêiner, com volume para persistência de dados e acesso pela rede local.',
      ],
      viewGithub: 'Ver no GitHub',
      visitSite: 'Visitar site',
      architectureTitle: 'Arquitetura com propósito.',
      architectureText: 'Aplicações, orquestração e infraestrutura formam uma base confiável.',
      architectureMore: 'Conheça mais',
    },
    about: {
      title: 'Sobre mim',
      personalText:
        'Sou o Theo Cordella, tenho 18 anos e estudo Engenharia de Software na UNINTER. Desde pequeno, jogos e filmes com temas de tecnologia alimentam minha curiosidade. Hoje, me interesso especialmente por inteligência artificial e robôs. Na faculdade, gosto de resolver problemas e entender como as coisas são desenvolvidas.',
      journeyLabel: 'O que me trouxe até aqui',
      journey: [
        {
          title: 'A tecnologia entrou em cena',
          text: 'Desde pequeno, jogos e filmes com temas de tecnologia alimentam minha curiosidade.',
        },
        {
          title: 'Aprender de vários jeitos',
          text: 'Além da faculdade, faço cursos e bootcamps, pesquiso artigos e acompanho vídeos de pessoas experientes na área. Também comecei uma jornada de leitura de livros para continuar aprendendo.',
        },
        {
          title: 'Resolver problemas',
          text: 'Na Engenharia de Software, gosto de entender como as coisas são desenvolvidas e de encontrar soluções para os desafios.',
        },
        {
          title: 'Dez anos de taekwondo',
          text: 'Pratico taekwondo há 10 anos. Disciplina, cortesia, integridade, perseverança, autocontrole e espírito indomável são valores que levo comigo dentro e fora dos treinos.',
        },
        {
          title: 'Aprender também ensinando',
          text: 'Também dou aulas de taekwondo. Ensinar contribui muito para o meu desenvolvimento pessoal, e é especial acompanhar as crianças crescendo e aprendendo.',
        },
        {
          title: 'Curiosidade pelas pessoas',
          text: 'Gosto de conversar, conhecer coisas e pessoas novas e entender melhor como pensamos e aprendemos. Curiosidade, criatividade e responsabilidade são características que procuro levar para tudo o que faço.',
        },
      ],
      photoAlt: 'Foto de Théo Cordella',
      studiesLink: 'Ver meus estudos',
      contactLink: 'Falar comigo',
    },
    studies: {
      title: 'Estudos',
      formationTab: 'Formação',
      technologiesTab: 'Tecnologias',
      certificatesTab: 'Certificados',
      profileHeadline: 'Tecnologia do banco de dados à interface.',
      profileText:
        'Busco uma oportunidade de estágio ou posição júnior em Desenvolvimento de Software. Tenho experiência prática construindo aplicações full-stack, base sólida em Linux e Docker e mais de três anos usando diferentes distribuições Linux para instalação, configuração e resolução de problemas.',
      groups: [
        {
          title: 'Desenvolvimento',
          items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Angular',
            'Node.js',
            'Express',
            'APIs REST',
            'SCSS / Sass',
          ],
          note: '',
        },
        {
          title: 'Banco de dados',
          items: ['SQL', 'MySQL', 'SQLite', 'Modelagem relacional'],
          note: '',
        },
        {
          title: 'Ferramentas e práticas',
          items: ['Git', 'GitHub', 'VS Code', 'Insomnia', 'Scrum', 'Princípios SOLID'],
          note: '',
        },
        {
          title: 'Infraestrutura',
          items: [
            'Linux: Arch, Debian, Ubuntu, Mint, Zorin',
            'Docker: contêineres e volumes persistentes',
            'Redes: HTTP/HTTPS, TCP, DNS, SSH, curl',
          ],
          note: 'Linux: mais de 3 anos de uso, incluindo instalação, configuração e resolução de problemas.',
        },
        {
          title: 'AI',
          items: ['ChatGPT', 'Claude', 'DeepSeek', 'Grok', 'Gemini', 'Gemini Notebook'],
          note: '',
        },
      ],
      higherEducation: 'Ensino Superior',
      degree: 'Engenharia de Software',
      institution: 'Centro Universitário Internacional UNINTER',
      studying: 'Cursando',
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Inglês', level: 'Intermediário (leitura técnica avançada)' },
        { name: 'Espanhol', level: 'Intermediário' },
      ],
      coursesTitle: 'Cursos complementares',
      courses: [
        {
          name: 'SQL: Linguagem de Consulta Estruturada',
          provider: 'Fundação Getúlio Vargas Online',
          status: '',
        },
        {
          name: 'Contribuindo em um Projeto de Código Aberto no GitHub',
          provider: 'Santander / DIO',
          status: '',
        },
        {
          name: 'Desafios de Projetos: Crie Um Portfólio Vencedor',
          provider: 'Santander / DIO',
          status: '',
        },
        { name: 'Java e Angular', provider: 'Santander / DIO', status: 'Em andamento' },
      ],
      inProgress: 'Em andamento',
      certificatesEmpty: 'Certificados em breve',
      certificatesEmptyText:
        'Os certificados serão adicionados aqui assim que estiverem disponíveis.',
      certificateButton: 'Ver certificado',
    },
    contact: {
      title: 'Contato',
      headline: 'Vamos conversar sobre sua oportunidade.',
      text: 'Estou disponível para início imediato, em oportunidades remotas ou presenciais em Santos/SP.',
      emailButton: 'Enviar e-mail',
      links: ['E-mail', 'LinkedIn', 'Instagram Pessoal', 'Instagram Taekwondo', 'GitHub'],
    },
    notFound: {
      title: 'Página não encontrada',
      text: 'A página que você procura não foi encontrada.',
      returnHome: 'Voltar ao início',
    },
  },
  en: {
    titles: {
      home: 'Theo Cordella',
      projects: 'Projects | Theo Cordella',
      about: 'About me | Theo Cordella',
      studies: 'Studies | Theo Cordella',
      contact: 'Contact | Theo Cordella',
      notFound: 'Page not found | Theo Cordella',
    },
    descriptions: {
      home: 'Meet Theo Cordella, a software developer focused on applications, infrastructure, and digital solutions.',
      projects:
        'Full-stack development, web applications, and infrastructure projects by Theo Cordella.',
      about: 'Meet Theo Cordella, a Software Engineering student passionate about technology and a taekwondo practitioner and instructor.',
      studies: 'Education, technologies, and certificates of Theo Cordella.',
      contact: 'Get in touch with Theo Cordella to discuss professional opportunities.',
      notFound: 'The page you are looking for could not be found.',
    },
    projects: {
      title: 'Projects',
      label: 'Projects and experience',
      categories: ['PORTFOLIO', 'FULL-STACK', 'FULL-STACK', 'WEBSITE', 'PLATFORM', 'HOMELAB'],
      names: [
        'Personal Portfolio',
        'Full-Stack To-Do List',
        'Customer Registration System',
        'Shirley Semijoias',
        'OnyxStack',
        'Nextcloud on Docker (HomeLab)',
      ],
      descriptions: [
        'Professional website featuring projects, background, and opportunities, developed and published.',
        'REST API with Node.js and Express, MySQL database in a Docker container, and endpoint testing with Insomnia.',
        'Full-stack application with a complete CRUD REST API, relational database, and React interface.',
        'Catalog and digital presence website for a jewelry brand, published on Vercel.',
        'Web platform built to showcase a software experience.',
        'Self-hosted containerized service with a persistent data volume and local network access.',
      ],
      viewGithub: 'View on GitHub',
      visitSite: 'Visit site',
      architectureTitle: 'Purposeful architecture',
      architectureText:
        'Applications, orchestration, and infrastructure form a reliable foundation.',
      architectureMore: 'Learn more',
    },
    about: {
      title: 'About me',
      personalText:
        "I'm Theo Cordella, I'm 18, and I study Software Engineering at UNINTER. Since I was little, games and movies about technology have fueled my curiosity. These days, I'm especially interested in artificial intelligence and robots. At university, I enjoy solving problems and understanding how things are developed.",
      journeyLabel: 'What brought me here',
      journey: [
        {
          title: 'Technology took the stage',
          text: 'Since I was little, games and movies about technology have fueled my curiosity.',
        },
        {
          title: 'Learning in different ways',
          text: 'Alongside university, I take courses and bootcamps, read articles, and follow videos by experienced people in the field. I have also started a new journey of reading books to keep learning.',
        },
        {
          title: 'Solving problems',
          text: 'In Software Engineering, I enjoy understanding how things are developed and finding solutions to challenges.',
        },
        {
          title: 'Ten years of taekwondo',
          text: "I've practiced taekwondo for 10 years. Discipline, courtesy, integrity, perseverance, self-control, and indomitable spirit are values I carry with me on and off the mat.",
        },
        {
          title: 'Learning by teaching, too',
          text: 'I also teach taekwondo. Teaching contributes a lot to my personal growth, and it is special to watch the children grow and learn.',
        },
        {
          title: 'Curiosity about people',
          text: 'I enjoy talking, discovering new things and meeting new people, and better understanding how we think and learn. Curiosity, creativity, and responsibility are qualities I try to bring to everything I do.',
        },
      ],
      photoAlt: 'Photo of Théo Cordella',
      studiesLink: 'View my studies',
      contactLink: 'Get in touch',
    },
    studies: {
      title: 'Studies',
      formationTab: 'Education',
      technologiesTab: 'Technologies',
      certificatesTab: 'Certificates',
      profileHeadline: 'From database to interface.',
      profileText:
        'I am looking for a software development internship or junior position. I have hands-on experience building full-stack applications, a solid foundation in Linux and Docker, and over three years of using different Linux distributions for installation, configuration, and troubleshooting.',
      groups: [
        {
          title: 'Development',
          items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Angular',
            'Node.js',
            'Express',
            'REST APIs',
            'SCSS / Sass',
          ],
          note: '',
        },
        { title: 'Databases', items: ['SQL', 'MySQL', 'SQLite', 'Relational modeling'], note: '' },
        {
          title: 'Tools and practices',
          items: ['Git', 'GitHub', 'VS Code', 'Insomnia', 'Scrum', 'SOLID principles'],
          note: '',
        },
        {
          title: 'Infrastructure',
          items: [
            'Linux: Arch, Debian, Ubuntu, Mint, Zorin',
            'Docker: containers and persistent volumes',
            'Networking: HTTP/HTTPS, TCP, DNS, SSH, curl',
          ],
          note: 'Linux: 3+ years of use, including installation, configuration, and troubleshooting.',
        },
        {
          title: 'AI',
          items: ['ChatGPT', 'Claude', 'DeepSeek', 'Grok', 'Gemini', 'Gemini Notebook'],
          note: '',
        },
      ],
      higherEducation: 'Higher Education',
      degree: 'Software Engineering',
      institution: 'Centro Universitário Internacional UNINTER',
      studying: 'In progress',
      languagesTitle: 'Languages',
      languages: [
        { name: 'English', level: 'Intermediate (advanced technical reading)' },
        { name: 'Spanish', level: 'Intermediate' },
      ],
      coursesTitle: 'Additional courses',
      courses: [
        {
          name: 'SQL: Structured Query Language',
          provider: 'Fundação Getúlio Vargas Online',
          status: '',
        },
        {
          name: 'Contributing to an Open Source Project on GitHub',
          provider: 'Santander / DIO',
          status: '',
        },
        {
          name: 'Project Challenges: Create a Winning Portfolio',
          provider: 'Santander / DIO',
          status: '',
        },
        { name: 'Java and Angular', provider: 'Santander / DIO', status: 'In progress' },
      ],
      inProgress: 'In progress',
      certificatesEmpty: 'Certificates coming soon',
      certificatesEmptyText: 'Certificates will be added here as soon as they are available.',
      certificateButton: 'View certificate',
    },
    contact: {
      title: 'Contact',
      headline: "Let's talk about your opportunity.",
      text: 'Available to start immediately for remote or on-site opportunities in Santos, Brazil.',
      emailButton: 'Send email',
      links: ['Email', 'LinkedIn', 'Personal Instagram', 'Taekwondo Instagram', 'GitHub'],
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for could not be found.',
      returnHome: 'Back to home',
    },
  },
  es: {
    titles: {
      home: 'Theo Cordella',
      projects: 'Proyectos | Theo Cordella',
      about: 'Sobre mí | Theo Cordella',
      studies: 'Estudios | Theo Cordella',
      contact: 'Contacto | Theo Cordella',
      notFound: 'Página no encontrada | Theo Cordella',
    },
    descriptions: {
      home: 'Conoce a Theo Cordella, desarrollador de software enfocado en aplicaciones, infraestructura y soluciones digitales.',
      projects:
        'Proyectos de desarrollo full-stack, aplicaciones web e infraestructura creados por Theo Cordella.',
      about: 'Conoce a Theo Cordella, estudiante de Ingeniería de Software, apasionado por la tecnología y practicante e instructor de taekwondo.',
      studies: 'Formación, tecnologías y certificados de Theo Cordella.',
      contact: 'Contacta con Theo Cordella para conversar sobre oportunidades profesionales.',
      notFound: 'No se encontró la página que buscas.',
    },
    projects: {
      title: 'Proyectos',
      label: 'Proyectos y experiencia',
      categories: ['PORTAFOLIO', 'FULL-STACK', 'FULL-STACK', 'SITIO WEB', 'PLATAFORMA', 'HOMELAB'],
      names: [
        'Portafolio Personal',
        'Lista de tareas Full Stack',
        'Sistema de Registro de Clientes',
        'Shirley Semijoias',
        'OnyxStack',
        'Nextcloud en Docker (HomeLab)',
      ],
      descriptions: [
        'Sitio profesional con proyectos, trayectoria y oportunidades, desarrollado y publicado.',
        'API REST con Node.js y Express, base de datos MySQL en un contenedor Docker y pruebas de endpoints con Insomnia.',
        'Aplicación full-stack con API REST y CRUD completo, base de datos relacional e interfaz en React.',
        'Sitio de catálogo y presencia digital para una marca de joyería, publicado en Vercel.',
        'Plataforma web creada para presentar una experiencia de software.',
        'Servicio autoalojado en contenedor, con volumen para persistencia de datos y acceso por red local.',
      ],
      viewGithub: 'Ver en GitHub',
      visitSite: 'Visitar sitio',
      architectureTitle: 'Arquitectura con propósito',
      architectureText: 'Aplicaciones, orquestación e infraestructura forman una base confiable.',
      architectureMore: 'Conoce más',
    },
    about: {
      title: 'Sobre mí',
      personalText:
        'Soy Theo Cordella, tengo 18 años y estudio Ingeniería de Software en UNINTER. Desde pequeño, los videojuegos y las películas sobre tecnología alimentan mi curiosidad. Hoy me interesan especialmente la inteligencia artificial y los robots. En la universidad, disfruto resolver problemas y entender cómo se desarrollan las cosas.',
      journeyLabel: 'Lo que me trajo hasta aquí',
      journey: [
        {
          title: 'La tecnología entró en escena',
          text: 'Desde pequeño, los videojuegos y las películas sobre tecnología alimentan mi curiosidad.',
        },
        {
          title: 'Aprender de distintas maneras',
          text: 'Además de la universidad, hago cursos y bootcamps, leo artículos y sigo videos de personas con experiencia en el área. También he empezado una nueva etapa de lectura de libros para seguir aprendiendo.',
        },
        {
          title: 'Resolver problemas',
          text: 'En Ingeniería de Software, disfruto entender cómo se desarrollan las cosas y encontrar soluciones a los desafíos.',
        },
        {
          title: 'Diez años de taekwondo',
          text: 'Practico taekwondo desde hace 10 años. La disciplina, la cortesía, la integridad, la perseverancia, el autocontrol y el espíritu indomable son valores que me acompañan dentro y fuera del entrenamiento.',
        },
        {
          title: 'Aprender también enseñando',
          text: 'También doy clases de taekwondo. Enseñar contribuye mucho a mi desarrollo personal, y es especial acompañar a los niños mientras crecen y aprenden.',
        },
        {
          title: 'Curiosidad por las personas',
          text: 'Me gusta conversar, descubrir cosas nuevas, conocer gente y entender mejor cómo pensamos y aprendemos. Intento llevar la curiosidad, la creatividad y la responsabilidad a todo lo que hago.',
        },
      ],
      photoAlt: 'Foto de Théo Cordella',
      studiesLink: 'Ver mis estudios',
      contactLink: 'Hablemos',
    },
    studies: {
      title: 'Estudios',
      formationTab: 'Formación',
      technologiesTab: 'Tecnologías',
      certificatesTab: 'Certificados',
      profileHeadline: 'De la base de datos a la interfaz.',
      profileText:
        'Busco una oportunidad de prácticas o un puesto júnior en Desarrollo de Software. Tengo experiencia práctica creando aplicaciones full-stack, una base sólida en Linux y Docker, y más de tres años usando distintas distribuciones Linux para instalación, configuración y resolución de problemas.',
      groups: [
        {
          title: 'Desarrollo',
          items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Angular',
            'Node.js',
            'Express',
            'APIs REST',
            'SCSS / Sass',
          ],
          note: '',
        },
        {
          title: 'Bases de datos',
          items: ['SQL', 'MySQL', 'SQLite', 'Modelado relacional'],
          note: '',
        },
        {
          title: 'Herramientas y prácticas',
          items: ['Git', 'GitHub', 'VS Code', 'Insomnia', 'Scrum', 'Principios SOLID'],
          note: '',
        },
        {
          title: 'Infraestructura',
          items: [
            'Linux: Arch, Debian, Ubuntu, Mint, Zorin',
            'Docker: contenedores y volúmenes persistentes',
            'Redes: HTTP/HTTPS, TCP, DNS, SSH, curl',
          ],
          note: 'Linux: más de 3 años de uso, incluyendo instalación, configuración y resolución de problemas.',
        },
        {
          title: 'AI',
          items: ['ChatGPT', 'Claude', 'DeepSeek', 'Grok', 'Gemini', 'Gemini Notebook'],
          note: '',
        },
      ],
      higherEducation: 'Educación Superior',
      degree: 'Ingeniería de Software',
      institution: 'Centro Universitário Internacional UNINTER',
      studying: 'En curso',
      languagesTitle: 'Idiomas',
      languages: [
        { name: 'Inglés', level: 'Intermedio (lectura técnica avanzada)' },
        { name: 'Español', level: 'Intermedio' },
      ],
      coursesTitle: 'Cursos complementarios',
      courses: [
        {
          name: 'SQL: Lenguaje de Consulta Estructurada',
          provider: 'Fundação Getúlio Vargas Online',
          status: '',
        },
        {
          name: 'Contribuyendo a un Proyecto de Código Abierto en GitHub',
          provider: 'Santander / DIO',
          status: '',
        },
        {
          name: 'Desafíos de proyectos: crea un portafolio ganador',
          provider: 'Santander / DIO',
          status: '',
        },
        { name: 'Java y Angular', provider: 'Santander / DIO', status: 'En curso' },
      ],
      inProgress: 'En curso',
      certificatesEmpty: 'Certificados próximamente',
      certificatesEmptyText: 'Los certificados se añadirán aquí cuando estén disponibles.',
      certificateButton: 'Ver certificado',
    },
    contact: {
      title: 'Contacto',
      headline: 'Hablemos sobre tu oportunidad.',
      text: 'Disponible para incorporación inmediata en oportunidades remotas o presenciales en Santos, Brasil.',
      emailButton: 'Enviar correo',
      links: [
        'Correo electrónico',
        'LinkedIn',
        'Instagram personal',
        'Instagram Taekwondo',
        'GitHub',
      ],
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'No se encontró la página que buscas.',
      returnHome: 'Volver al inicio',
    },
  },
} as const;

export type PageCopy = (typeof pageCopy)[Language];
export type PageTitleKey = keyof PageCopy['titles'];
