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
    nav: ['Sobre', 'Projetos', 'Contato'],
    eyebrow: 'DIÁRIO DE UM DEV JÚNIOR',
    title: 'Theo Cordella',
    intro: 'Sou Théo Cordella, tenho 18 anos e estudo Engenharia de Software. Esse site é para eu mostrar um pouco sobre minha jornada pessoal e profissional. Estou em busca de oportunidades.',
    projects: 'Ver projetos',
    contact: 'Vamos conversar',
    availability: 'Disponível para oportunidades',
    scroll: 'Role para explorar',
    focus: 'Meu foco atual',
    focusText: 'Front-end com ReactJS + JavaScript',
    aboutLabel: '01 — Sobre mim',
    aboutTitle: 'Sobre mim',
    aboutText: 'Desde criança sempre gostei de desenvolvimento, mas quando comecei queria fazer jogos no Roblox (kkkkkkk), portanto hoje estudo Engenharia de Software na UNINTER. Meu objetivo é ser um desenvolvedor FullStack, mas com ênfase em backend, por gostar muito da parte de lógica. Agora estou me aprofundando no estudo de JavaScript e Python pela demanda maior de mercado, portanto estou cursando um bootcamp de Java e Angular — por isso o site está em Java e Angular, para me acostumar com o framework e a linguagem de programação. Treino Taekwondo desde 2016 e isso me moldou para ser quem sou hoje. Graças ao Taekwondo, aos meus pais e à minha família aprendi sobre autocontrole, disciplina, respeito e hierarquia, e muito mais, e hoje dou aula de Taekwondo na escola onde cresci: Alessandro Fernandes Taekwondo.',
    skillLabel: 'Tecnologias que uso',
    projectsLabel: '02 — Projetos em destaque',
    projectsTitle: 'Problemas reais,\nsoftware que resolve.',
    viewGithub: 'Ver no GitHub',
    contactLabel: '03 — Entre em contato',
    contactTitle: 'Tem uma vaga ou um projeto?\nVamos conversar.',
    contactText: 'Estou em busca da minha primeira oportunidade como dev. Aceito colaborações, freelas e boas conversas sobre tecnologia.',
    email: 'Enviar e-mail',
  },
  en: {
    nav: ['About', 'Projects', 'Contact'],
    eyebrow: 'JUNIOR DEV DIARY',
    title: 'Theo Cordella',
    intro: 'I am Théo Cordella, 18 years old and studying Software Engineering. This site is for me to show a little about my personal and professional journey. I am looking for opportunities.',
    projects: 'View projects',
    contact: "Let's talk",
    availability: 'Available for opportunities',
    scroll: 'Scroll to explore',
    focus: 'Current focus',
    focusText: 'Front-end with ReactJS + JavaScript',
    aboutLabel: '01 — About me',
    aboutTitle: 'About me',
    aboutText: 'Since I was a child I always liked development, but when I started I wanted to make games on Roblox (hahaha), so today I study Software Engineering at UNINTER. My goal is to be a FullStack developer, but with an emphasis on backend, because I really enjoy the logic side. Right now I am deepening my studies in JavaScript and Python due to higher market demand, so I am taking a Java and Angular bootcamp — that is why this site is in Java and Angular, to get used to the framework and programming language. I have practiced Taekwondo since 2016 and that shaped me into who I am today. Thanks to Taekwondo, my parents and my family I learned about self-control, discipline, respect and hierarchy, and much more, and today I teach Taekwondo at the school where I grew up: Alessandro Fernandes Taekwondo.',
    skillLabel: 'Technologies I use',
    projectsLabel: '02 — Featured projects',
    projectsTitle: 'Real problems,\nsoftware that solves.',
    viewGithub: 'View on GitHub',
    contactLabel: '03 — Get in touch',
    contactTitle: 'Got a job or a project?\nLet’s talk.',
    contactText: 'I am looking for my first opportunity as a developer. Open to collaborations, freelance work and good conversations about tech.',
    email: 'Send email',
  },
  es: {
    nav: ['Sobre mí', 'Proyectos', 'Contacto'],
    eyebrow: 'DIARIO DE UN DEV JUNIOR',
    title: 'Theo Cordella',
    intro: 'Soy Théo Cordella, tengo 18 años y estudio Ingeniería de Software. Este sitio es para mostrar un poco sobre mi trayectoria personal y profesional. Estoy en busca de oportunidades.',
    projects: 'Ver proyectos',
    contact: 'Hablemos',
    availability: 'Disponible para oportunidades',
    scroll: 'Desplázate para explorar',
    focus: 'Enfoque actual',
    focusText: 'Front-end con ReactJS + JavaScript',
    aboutLabel: '01 — Sobre mí',
    aboutTitle: 'Sobre mí',
    aboutText: 'Desde niño siempre me gustó el desarrollo, pero cuando empecé quería hacer juegos en Roblox (jajaja), por eso hoy estudio Ingeniería de Software en UNINTER. Mi objetivo es ser un desarrollador FullStack, pero con énfasis en backend, porque me gusta mucho la parte de lógica. Ahora estoy profundizando en el estudio de JavaScript y Python por la mayor demanda del mercado, por eso estoy cursando un bootcamp de Java y Angular — por eso el sitio está en Java y Angular, para acostumbrarme al framework y al lenguaje de programación. Practico Taekwondo desde 2016 y eso me moldeó para ser quien soy hoy. Gracias al Taekwondo, a mis padres y a mi familia aprendí sobre autocontrol, disciplina, respeto y jerarquía, y mucho más, y hoy doy clases de Taekwondo en la escuela donde crecí: Alessandro Fernandes Taekwondo.',
    skillLabel: 'Tecnologías que uso',
    projectsLabel: '02 — Proyectos destacados',
    projectsTitle: 'Problemas reales,\nsoftware que resuelve.',
    viewGithub: 'Ver en GitHub',
    contactLabel: '03 — Contacto',
    contactTitle: '¿Tienes una vacante o un proyecto?\nHablemos.',
    contactText: 'Busco mi primera oportunidad como desarrollador. Abierto a colaboraciones, freelas y buenas conversaciones sobre tecnología.',
    email: 'Enviar correo',
  },
} as const;

  protected readonly skills = ['Python', 'JavaScript', 'NodeJS', 'ReactJS', 'Vite', 'Linux'];

  protected toggleTheme(): void { this.isDark.update((value) => !value); }
  protected setLanguage(language: 'pt' | 'en' | 'es'): void { this.language.set(language); }
}
