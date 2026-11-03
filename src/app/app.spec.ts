import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    localStorage.removeItem('theme');
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio profile and projects', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Theo Cordella');
    expect(compiled.querySelector('.hero-role')?.textContent).toContain(
      'Desenvolvedor de software e soluções digitais.',
    );
    expect(compiled.querySelector('.desktop-nav a')?.textContent?.trim()).toBe('Início');
    expect(compiled.querySelector('.desktop-nav a')?.getAttribute('href')).toBe('#top');
    expect(compiled.querySelector('.orbit-ring')?.children).toHaveLength(4);
    expect(compiled.querySelector('#architecture')?.textContent).toContain('Arquitetura com propósito');
    expect(compiled.querySelectorAll('.project-card')).toHaveLength(6);
    expect(compiled.querySelector('.project-card h3')?.textContent).toContain('Portfólio Pessoal');
    expect(compiled.querySelector('.project-card a')?.getAttribute('href')).toBe('https://theocordella.com.br');
    expect(compiled.querySelectorAll('.project-card a')[1].getAttribute('href')).toBe(
      'https://github.com/mhlae/todolist-fullstack',
    );
    expect(compiled.querySelectorAll('.project-card a')[2].getAttribute('href')).toBe(
      'https://github.com/mhlae/cadastro-clientes',
    );
    expect(compiled.querySelector('#education')?.textContent).toContain('Engenharia de Software');
    expect(compiled.querySelectorAll('.education-card')).toHaveLength(3);
    expect(compiled.querySelector('#education')?.textContent).toContain('Ensino Superior');
    expect(compiled.querySelector('.skill-label')?.textContent).toContain('Tecnologias');
    expect(compiled.textContent).toContain('ChatGPT');
    expect(compiled.textContent).toContain('Claude');
    expect(compiled.textContent).toContain('DeepSeek');
    expect(compiled.textContent).toContain('Grok');
    expect(compiled.textContent).toContain('Gemini');
    expect(compiled.textContent).toContain('Gemini Notebook');
    expect(compiled.querySelector('.linux-note')?.textContent).toContain('Linux: mais de 3 anos');
    expect(compiled.querySelector('#contact .body-copy')?.textContent).toContain(
      'Estou disponível para início imediato, em oportunidades remotas ou presenciais em Santos/SP.',
    );
    expect(compiled.textContent).toContain('Instagram Pessoal');

    const englishButton = Array.from(compiled.querySelectorAll('.language-switcher button'))
      .find((button) => button.textContent?.trim() === 'en');
    englishButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(compiled.querySelector('#projects h2')?.textContent).toContain('Projects');
    expect(compiled.querySelector('h1')?.textContent).toContain('Theo Cordella');
    expect(compiled.querySelector('.hero-role')?.textContent).toContain(
      'Software developer and digital solutions specialist.',
    );
    expect(compiled.querySelector('.project-card h3')?.textContent).toContain('Personal Portfolio');
    expect(compiled.querySelector('.project-card .project-top')?.textContent).toContain('PORTFOLIO');

    const spanishButton = Array.from(compiled.querySelectorAll('.language-switcher button'))
      .find((button) => button.textContent?.trim() === 'es');
    spanishButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(compiled.querySelector('.hero-role')?.textContent).toContain(
      'Desarrollador de software y soluciones digitales.',
    );
    expect(compiled.querySelector('.desktop-nav a')?.textContent?.trim()).toBe('Inicio');
  });

  it('should restore and persist the selected theme', async () => {
    localStorage.setItem('theme', 'light');

    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(document.documentElement.dataset['theme']).toBe('light');

    const themeButton = fixture.nativeElement.querySelector('.theme-toggle') as HTMLButtonElement;
    themeButton.click();
    fixture.detectChanges();

    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
