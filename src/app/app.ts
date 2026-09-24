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
    intro: 'Sou Théo Couto Cordella, 18 anos, estudante de Engenharia de Software na UNINTER. Escrevo sobre o que aprendo, mostro o que construo e busco minha primeira oportunidade como desenvolvedor.',
    projects: 'Ver projetos',
    contact: 'Vamos conversar',
    availability: 'Disponível para oportunidades',
    scroll: 'Role para explorar',
    focus: 'Meu foco atual',
    focusText: 'Front-end com ReactJS + JavaScript',
    aboutLabel: '01 — Sobre mim',
    aboutTitle: 'Sobre mim',
    aboutText: 'Comecei no Taekwondo em 2016 e sigo praticando até hoje — foi ali que aprendi autocontrole, disciplina e respeito. Levo esses mesmos valores para o código: constância, foco e respeito pelo processo de aprender. Estudo Engenharia de Software na UNINTER e uso Linux (Debian e ZorinOS) no dia a dia.',
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
    eyebrow: 'Theo Cordella',
    title: 'Learning in public,\nbuilding with purpose.',
    intro: 'I am Théo Couto Cordella, 18, Software Engineering student at UNINTER. I write about what I learn, show what I build, and I am looking for my first opportunity as a developer.',
    projects: 'View projects',
    contact: "Let's talk",
    availability: 'Available for opportunities',
    scroll: 'Scroll to explore',
    focus: 'Current focus',
    focusText: 'Front-end with ReactJS + JavaScript',
    aboutLabel: '01 — About me',
    aboutTitle: 'About me',
    aboutText: 'I started Taekwondo in 2016 and still practice today — that is where I learned self-control, discipline and respect. I bring those same values to code: consistency, focus and respect for the learning process. I study Software Engineering at UNINTER and use Linux (Debian and ZorinOS) every day.',
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
    eyebrow: 'Theo Cordella',
    title: 'Aprendiendo en público,\nconstruyendo con propósito.',
    intro: 'Soy Théo Couto Cordella, tengo 18 años y estudio Ingeniería de Software en UNINTER. Escribo sobre lo que aprendo, muestro lo que construyo y busco mi primera oportunidad como desarrollador.',
    projects: 'Ver proyectos',
    contact: 'Hablemos',
    availability: 'Disponible para oportunidades',
    scroll: 'Desplázate para explorar',
    focus: 'Enfoque actual',
    focusText: 'Front-end con ReactJS + JavaScript',
    aboutLabel: '01 — Sobre mí',
    aboutTitle: 'Sobre mí',
    aboutText: 'Empecé Taekwondo en 2016 y sigo practicando hoy — ahí aprendí autocontrol, disciplina y respeto. Llevo esos mismos valores al código: constancia, enfoque y respeto por el proceso de aprender. Estudio Ingeniería de Software en UNINTER y uso Linux (Debian y ZorinOS) a diario.',
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

  protected readonly skills = ['Java', 'Angular', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Linux'];

  protected toggleTheme(): void { this.isDark.update((value) => !value); }
  protected setLanguage(language: 'pt' | 'en' | 'es'): void { this.language.set(language); }
}
