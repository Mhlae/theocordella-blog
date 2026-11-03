import { TestBed } from '@angular/core/testing';
import { Router, TitleStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { certificates } from './pages/studies/certificates';
import { SiteTitleStrategy } from './site-title.strategy';

describe('Portfolio routes and shared layout', () => {
  beforeEach(async () => {
    localStorage.removeItem('theme');
    localStorage.removeItem('language');

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
        { provide: TitleStrategy, useClass: SiteTitleStrategy },
      ],
    }).compileComponents();
  });

  it('redirects the root to home and renders only the hero on Home', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/home');
    expect(compiled.querySelector('.site-header')).toBeTruthy();
    expect(compiled.querySelector('.site-footer')).toBeTruthy();
    expect(compiled.querySelector('.hero h1')?.textContent?.trim()).toBe('Theo Cordella');
    expect(compiled.querySelector('.architecture-card')).toBeNull();
    expect(compiled.querySelector('.featured-projects')).toBeNull();
    expect(compiled.querySelector('.desktop-nav')).toBeNull();
    expect(compiled.querySelector('.header-contact')).toBeNull();
    expect(compiled.querySelector('.brand svg')).toBeNull();
    expect(compiled.querySelector('.brand')?.textContent?.trim()).toBe('Théo Cordella');
    expect(compiled.querySelector('.back-home')?.classList).toContain('home-active');
    expect(compiled.querySelector('.back-home')?.getAttribute('aria-hidden')).toBe('true');
    expect(compiled.querySelectorAll('.orbit-button')).toHaveLength(4);
    expect(document.title).toBe('Théo Cordella');
  });

  it('renders all six projects and omits the HomeLab action link', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/projects');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.projects-page .project-card');
    expect(cards).toHaveLength(6);
    expect(compiled.querySelector('.back-home')?.getAttribute('href')).toBe('/home');
    expect(compiled.querySelector('.project-architecture h2')?.textContent).toContain(
      'Arquitetura com propósito',
    );
    expect(compiled.querySelector('.architecture-link')?.getAttribute('href')).toBe(
      '/studies?tab=technologies',
    );
    expect(compiled.querySelector('.architecture-layers')).toBeNull();
    expect(compiled.textContent).not.toContain('Orquestração');
    expect(compiled.textContent).not.toContain('Fundação');
    expect(cards[0].classList).toContain('project-card-primary');
    expect(cards[0].textContent).toContain('Portfólio Pessoal');
    expect(cards[1].textContent).toContain('To-Do List Full Stack');
    expect(cards[3].textContent).toContain('Shirley Semijoias');
    expect(cards[4].textContent).toContain('OnyxStack');
    expect(cards[5].textContent).toContain('Nextcloud em Docker (HomeLab)');
    expect(cards[5].querySelector('a')).toBeNull();
    for (const link of compiled.querySelectorAll('.projects-page .project-card a')) {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener');
    }
    expect(document.title).toBe('Projetos | Théo Cordella');
  });

  it('renders the personal about page with a translated photo fallback and route actions', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/about-me');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const portrait = compiled.querySelector('.portrait-frame img') as HTMLImageElement;
    expect(compiled.querySelector('.about-page h1')?.textContent).toBe('Sobre mim');
    expect(compiled.textContent).toContain(
      'Sou o Théo. Estudo Engenharia de Software na UNINTER e continuo aprendendo por fora, de forma autodidata, construindo projetos e estudando por conta própria.',
    );
    expect(compiled.textContent).not.toContain('Busco uma oportunidade de estágio');
    expect(compiled.querySelector('.back-home')?.getAttribute('href')).toBe('/home');
    expect(portrait.getAttribute('src')).toBe('/images/theo.png');
    expect(portrait.getAttribute('alt')).toBe('Foto de Théo Cordella');
    expect(portrait.getAttribute('width')).toBe('480');
    expect(portrait.getAttribute('height')).toBe('600');
    expect(portrait.getAttribute('loading')).toBe('eager');
    expect(portrait.getAttribute('fetchpriority')).toBe('high');
    expect(compiled.querySelector('.profile-actions a')?.getAttribute('href')).toBe('/studies');
    expect(compiled.querySelectorAll('.profile-actions a')[1].getAttribute('href')).toBe(
      '/contact',
    );
    expect(compiled.querySelector('.technology-section')).toBeNull();
    portrait.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(compiled.querySelector('.photo-placeholder')?.textContent).toContain('TC');
  });

  it('shows education, technology, and certificate tabs with URL and keyboard navigation', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/studies');
    await fixture.whenStable();
    fixture.detectChanges();

    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('[role="tab"]')).toHaveLength(3);
    expect(compiled.querySelector('#education-tab')?.getAttribute('aria-selected')).toBe('true');
    expect(compiled.querySelector('.degree-card')?.textContent).toContain('Engenharia de Software');
    expect(compiled.querySelector('.degree-card')?.textContent).toContain('UNINTER');
    expect(compiled.querySelectorAll('.study-list li')).toHaveLength(6);
    expect(compiled.textContent).toContain('Java e Angular');
    expect(compiled.textContent).toContain('Em andamento');
    expect(compiled.querySelector('.studies-intro h2')?.textContent).toBe(
      'Tecnologia do banco de dados à interface.',
    );

    const educationTab = compiled.querySelector('#education-tab') as HTMLAnchorElement;
    educationTab.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/studies?tab=technologies');
    expect(compiled.querySelector('#technologies-tab')?.getAttribute('aria-selected')).toBe('true');
    expect(compiled.querySelectorAll('.technology-card')).toHaveLength(5);
    expect(compiled.textContent).toContain(
      'Linux: mais de 3 anos de uso, incluindo instalação, configuração e resolução de problemas.',
    );

    const technologyTab = compiled.querySelector('#technologies-tab') as HTMLAnchorElement;
    technologyTab.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(router.url).toBe('/studies?tab=education');
    expect(
      fixture.nativeElement.querySelector('#education-tab')?.getAttribute('aria-selected'),
    ).toBe('true');

    await router.navigateByUrl('/studies?tab=certificates');
    await fixture.whenStable();
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#certificates-tab')?.getAttribute('aria-selected')).toBe('true');
    const certificateLinks = compiled.querySelectorAll('.certificate-card a');
    expect(certificates).toHaveLength(13);
    expect(certificateLinks).toHaveLength(13);
    const certificateDateRanks = certificates.map(({ date }) => {
      const exactDate = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date);
      if (exactDate) {
        return Date.UTC(Number(exactDate[3]), Number(exactDate[2]) - 1, Number(exactDate[1]));
      }

      const monthDate = /^Outubro\/(\d{4})$/.exec(date);
      if (monthDate) {
        return Date.UTC(Number(monthDate[1]), 9);
      }

      throw new Error(`Unsupported certificate date: ${date}`);
    });
    expect(certificateDateRanks).toEqual([...certificateDateRanks].sort((a, b) => b - a));
    for (const link of certificateLinks) {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener');
      expect(link.getAttribute('href')).toContain('/Certificados/');
    }
    expect(compiled.querySelector('.certificate-card')?.textContent).toContain(
      'Intensivão de Claude',
    );
    expect(compiled.querySelector('.certificate-card')?.textContent).toContain('29/10/2026');
    expect(compiled.querySelector('.certificate-card')?.textContent).toContain('8 h');
    expect(compiled.querySelector('.degree-card')).toBeNull();
  });

  it('renders contact channels, localized route titles, and a not-found return link', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/contact');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.email-button')?.getAttribute('href')).toBe(
      'mailto:theocordella@proton.me',
    );
    expect(compiled.querySelectorAll('.contact-links a')).toHaveLength(5);
    expect(compiled.textContent).toContain('Instagram Pessoal');
    expect(compiled.textContent).toContain('Instagram Taekwondo');
    for (const link of compiled.querySelectorAll('.contact-links a[target="_blank"]')) {
      expect(link.getAttribute('rel')).toBe('noopener');
    }
    expect(document.title).toBe('Contato | Théo Cordella');

    await router.navigateByUrl('/missing');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.not-found-page a')?.getAttribute('href')).toBe(
      '/home',
    );
    expect(document.title).toBe('Página não encontrada | Théo Cordella');
  });

  it('uses route links for navigation and has no legacy anchor navigation', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/home');
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')?.tagName).toBe('SPAN');
    expect(compiled.querySelector('.back-home')?.classList).toContain('home-active');
    expect(compiled.querySelector('.action-primary')?.getAttribute('href')).toBe('/projects');
    expect(compiled.querySelector('.action-secondary')?.getAttribute('href')).toBe('/about-me');
    expect(compiled.querySelectorAll('.orbit-button')).toHaveLength(4);
    expect(
      Array.from(compiled.querySelectorAll('.orbit-button'), (link) => link.getAttribute('href')),
    ).toEqual(['/projects', '/about-me', '/studies', '/contact']);
    expect(compiled.querySelector('.architecture-copy a')).toBeNull();
    expect(compiled.querySelector('.featured-projects')).toBeNull();
    expect(compiled.querySelectorAll('a[href^="#"]')).toHaveLength(0);
    expect(compiled.querySelectorAll('.anchor-alias')).toHaveLength(0);
    expect(compiled.querySelector('.site-footer a')).toBeNull();
  });

  it('persists language and updates route copy, title, and description', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/projects');
    await fixture.whenStable();
    fixture.detectChanges();

    const englishButton = fixture.nativeElement.querySelector(
      '.language-switcher button[aria-label="Inglês"]',
    ) as HTMLButtonElement;
    englishButton.click();
    fixture.detectChanges();

    expect(localStorage.getItem('language')).toBe('en');
    expect(fixture.nativeElement.querySelector('.projects-page h1')?.textContent?.trim()).toBe(
      'Projects',
    );
    expect(document.title).toBe('Projects | Theo Cordella');
    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Full-stack development',
    );

    await router.navigateByUrl('/studies');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.study-tabs')?.textContent).toContain('Education');
    expect(localStorage.getItem('language')).toBe('en');

    (
      fixture.nativeElement.querySelector(
        '.language-switcher button:nth-child(3)',
      ) as HTMLButtonElement
    ).click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.study-tabs')?.textContent).toContain('Formación');
    expect(document.title).toBe('Estudios | Theo Cordella');
    expect(document.documentElement.lang).toBe('es');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Formación, tecnologías',
    );
  });

  it('restores and persists the selected theme', async () => {
    localStorage.setItem('theme', 'light');

    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    const themeButton = fixture.nativeElement.querySelector('.theme-toggle') as HTMLButtonElement;
    themeButton.click();
    fixture.detectChanges();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    await router.navigateByUrl('/projects');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
