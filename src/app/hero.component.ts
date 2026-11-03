import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from './i18n/shared-copy';
import { LanguageService } from './services/language.service';

type OrbitIcon = 'code' | 'user' | 'book' | 'mail';

interface OrbitLink {
  label: string;
  path: string;
  icon: OrbitIcon;
}

@Component({
  selector: 'app-hero',
  imports: [NgStyle, RouterLink],
  styleUrl: './hero.component.scss',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly language = inject(LanguageService);
  rotationAngle = 0;
  dragging = false;

  private startPointerAngle = 0;
  private startRotation = 0;
  private activePointerId: number | null = null;

  private readonly content: Record<
    Language,
    {
      badge: string;
      title: string;
      role: string;
      intro: string;
      projects: string;
      about: string;
      orbit: OrbitLink[];
      dragHint: string;
      orbitLabel: string;
    }
  > = {
    pt: {
      badge: 'Engenharia de Software',
      title: 'Theo Cordella',
      role: 'Desenvolvedor de software e soluções digitais.',
      intro:
        'Desenvolvedor de software com experiência em aplicações full-stack usando React, Angular, Node.js e SQL. Construo projetos completos, do banco de dados à interface, com Git e GitHub.',
      projects: 'Ver projetos',
      about: 'Sobre mim',
      orbit: [
        { label: 'Projetos', path: '/projects', icon: 'code' },
        { label: 'Sobre Mim', path: '/about-me', icon: 'user' },
        { label: 'Estudos', path: '/studies', icon: 'book' },
        { label: 'Contato', path: '/contact', icon: 'mail' },
      ],
      dragHint: 'Arraste para girar',
      orbitLabel: 'Atalhos de navegação. Arraste para girar.',
    },
    en: {
      badge: 'Software Engineering',
      title: 'Theo Cordella',
      role: 'Software developer and digital solutions specialist.',
      intro:
        'Software developer experienced in full-stack applications with React, Angular, Node.js, and SQL. I build complete projects, from database to interface, using Git and GitHub.',
      projects: 'View projects',
      about: 'About me',
      orbit: [
        { label: 'Projects', path: '/projects', icon: 'code' },
        { label: 'About me', path: '/about-me', icon: 'user' },
        { label: 'Studies', path: '/studies', icon: 'book' },
        { label: 'Contact', path: '/contact', icon: 'mail' },
      ],
      dragHint: 'Drag to rotate',
      orbitLabel: 'Navigation shortcuts. Drag to rotate.',
    },
    es: {
      badge: 'Ingeniería de Software',
      title: 'Theo Cordella',
      role: 'Desarrollador de software y soluciones digitales.',
      intro:
        'Desarrollador de software con experiencia en aplicaciones full-stack con React, Angular, Node.js y SQL. Creo proyectos completos, desde la base de datos hasta la interfaz, con Git y GitHub.',
      projects: 'Ver proyectos',
      about: 'Sobre mí',
      orbit: [
        { label: 'Proyectos', path: '/projects', icon: 'code' },
        { label: 'Sobre mí', path: '/about-me', icon: 'user' },
        { label: 'Estudios', path: '/studies', icon: 'book' },
        { label: 'Contacto', path: '/contact', icon: 'mail' },
      ],
      dragHint: 'Arrastra para girar',
      orbitLabel: 'Accesos directos. Arrastra para girar.',
    },
  };

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  get copy() {
    return this.content[this.language.current()];
  }

  get ringStyle(): Record<string, string> {
    return { transform: `rotate(${this.rotationAngle}deg)` };
  }

  get counterRotationStyle(): Record<string, string> {
    return { transform: `rotate(${-this.rotationAngle}deg)` };
  }

  @HostListener('document:pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    const target = event.target;
    if (
      !(target instanceof Element) ||
      !target.closest('.orbit-ring') ||
      target.closest('.orbit-button')
    ) {
      return;
    }

    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    const ring = this.host.nativeElement.querySelector<HTMLElement>('.orbit-ring');
    if (!ring) {
      return;
    }

    const bounds = ring.getBoundingClientRect();
    this.startPointerAngle = this.pointerAngle(event.clientX, event.clientY, bounds);
    this.startRotation = this.rotationAngle;
    this.activePointerId = event.pointerId;
    this.dragging = true;
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.dragging || event.pointerId !== this.activePointerId) {
      return;
    }

    const ring = this.host.nativeElement.querySelector<HTMLElement>('.orbit-ring');
    if (!ring) {
      return;
    }

    const bounds = ring.getBoundingClientRect();
    const currentAngle = this.pointerAngle(event.clientX, event.clientY, bounds);
    this.rotationAngle = (this.startRotation + currentAngle - this.startPointerAngle + 360) % 360;
  }

  @HostListener('document:pointerup', ['$event'])
  @HostListener('document:pointercancel', ['$event'])
  onPointerEnd(event: PointerEvent): void {
    if (event.pointerId === this.activePointerId) {
      this.dragging = false;
      this.activePointerId = null;
    }
  }

  private pointerAngle(x: number, y: number, bounds: DOMRect): number {
    return (
      Math.atan2(y - (bounds.top + bounds.height / 2), x - (bounds.left + bounds.width / 2)) *
      (180 / Math.PI)
    );
  }
}
