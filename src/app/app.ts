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
    pt: { nav: ['Sobre', 'Projetos', 'Contato'], eyebrow: 'PORTFÓLIO PROFISSIONAL', title: 'Construindo soluções\ncom intenção.', intro: 'Sou Théo Cordella, desenvolvedor júnior focado em criar produtos digitais claros, úteis e bem construídos com Java e Angular.', projects: 'Ver projetos', contact: 'Vamos conversar', availability: 'Disponível para oportunidades', scroll: 'Role para explorar', focus: 'Meu foco atual', focusText: 'Full-stack Java + Angular', aboutLabel: '01 — Sobre mim', aboutTitle: 'Disciplina de quem ensina.\nCuriosidade de quem constrói.', aboutText: 'Minha jornada começou no Taekwondo e no suporte técnico. Hoje, levo a mesma disciplina, comunicação e organização para o desenvolvimento de software.', skillLabel: 'Tecnologias no radar', projectsLabel: '02 — Projetos em destaque', projectsTitle: 'Problemas reais,\nsoftware que resolve.', viewGithub: 'Ver no GitHub', contactLabel: '03 — Entre em contato', contactTitle: 'Tem um desafio?\nVamos conversar.', contactText: 'Estou aberto a oportunidades, colaborações e boas conversas sobre tecnologia.', email: 'Enviar e-mail' },
    en: { nav: ['About', 'Projects', 'Contact'], eyebrow: 'PROFESSIONAL PORTFOLIO', title: 'Building solutions\nwith intention.', intro: 'I am Théo Cordella, a junior developer focused on creating clear, useful digital products with Java and Angular.', projects: 'View projects', contact: "Let's talk", availability: 'Available for opportunities', scroll: 'Scroll to explore', focus: 'Current focus', focusText: 'Full-stack Java + Angular', aboutLabel: '01 — About me', aboutTitle: 'The discipline of a teacher.\nThe curiosity of a builder.', aboutText: 'My journey started in Taekwondo and technical support. Today, I bring the same discipline, communication and organization to software development.', skillLabel: 'Technologies on my radar', projectsLabel: '02 — Featured projects', projectsTitle: 'Real problems,\nsoftware that solves.', viewGithub: 'View on GitHub', contactLabel: '03 — Get in touch', contactTitle: 'Have a challenge?\nLet’s talk.', contactText: 'I am open to opportunities, collaborations and good conversations about technology.', email: 'Send email' },
    es: { nav: ['Sobre mí', 'Proyectos', 'Contacto'], eyebrow: 'PORTAFOLIO PROFESIONAL', title: 'Creando soluciones\ncon intención.', intro: 'Soy Théo Cordella, desarrollador junior enfocado en crear productos digitales claros y útiles con Java y Angular.', projects: 'Ver proyectos', contact: 'Hablemos', availability: 'Disponible para oportunidades', scroll: 'Desplázate para explorar', focus: 'Enfoque actual', focusText: 'Full-stack Java + Angular', aboutLabel: '01 — Sobre mí', aboutTitle: 'La disciplina de quien enseña.\nLa curiosidad de quien construye.', aboutText: 'Mi camino comenzó en el Taekwondo y el soporte técnico. Hoy llevo esa disciplina, comunicación y organización al desarrollo de software.', skillLabel: 'Tecnologías en el radar', projectsLabel: '02 — Proyectos destacados', projectsTitle: 'Problemas reales,\nsoftware que resuelve.', viewGithub: 'Ver en GitHub', contactLabel: '03 — Contacto', contactTitle: '¿Tienes un desafío?\nHablemos.', contactText: 'Estoy abierto a oportunidades, colaboraciones y buenas conversaciones sobre tecnología.', email: 'Enviar correo' },
  } as const;

  protected readonly skills = ['Java', 'Angular', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Linux'];

  protected toggleTheme(): void { this.isDark.update((value) => !value); }
  protected setLanguage(language: 'pt' | 'en' | 'es'): void { this.language.set(language); }
}
