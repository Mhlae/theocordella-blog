import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
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
    expect(compiled.querySelector('.hero-meta')?.textContent).toContain('Início imediato');
    expect(compiled.querySelectorAll('.project-card')).toHaveLength(6);
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
    expect(compiled.querySelector('.project-card h3')?.textContent).toContain('Customer Registration System');
    expect(compiled.querySelector('.project-card .project-top')?.textContent).toContain('FULL-STACK');
  });
});
