import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostListener, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type Language = 'pt' | 'en' | 'es';
type OrbitIcon = 'code' | 'user' | 'book' | 'mail';

interface OrbitLink {
  label: string;
  fragment: string;
  icon: OrbitIcon;
}

@Component({
  selector: 'app-hero',
  imports: [NgStyle, RouterLink],
  styleUrl: './hero.component.scss',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly language = input<Language>('pt');
  rotationAngle = 0;
  dragging = false;

  private startPointerAngle = 0;
  private startRotation = 0;
  private activePointerId: number | null = null;

  private readonly content: Record<Language, {
    badge: string;
    title: string;
    role: string;
    intro: string;
    projects: string;
    about: string;
    architecture: string;
    architectureText: string;
    learnMore: string;
    layerLabels: [string, string, string];
    orbit: OrbitLink[];
    dragHint: string;
  }> = {
    pt: {
      badge: 'Engenharia de Software',
      title: 'Theo Cordella',
      role: 'Desenvolvedor de software e soluções digitais.',
      intro: 'Desenvolvimento, infraestrutura e soluções inteligentes em perfeita harmonia.',
      projects: 'Ver projetos',
      about: 'Sobre mim',
      architecture: 'Arquitetura com propósito',
      architectureText: 'Soluções bem construídas conectam experiências, serviços e infraestrutura em uma base confiável.',
      learnMore: 'Conheça mais',
      layerLabels: ['Aplicações (Soluções)', 'Orquestração (APIs e Serviços)', 'Fundação (Infraestrutura)'],
      orbit: [
        { label: 'Projetos', fragment: 'projects', icon: 'code' },
        { label: 'Sobre Mim', fragment: 'about', icon: 'user' },
        { label: 'Estudos', fragment: 'estudos', icon: 'book' },
        { label: 'Contato', fragment: 'contact', icon: 'mail' },
      ],
      dragHint: 'Arraste para girar',
    },
    en: {
      badge: 'Software Engineering',
      title: 'Theo Cordella',
      role: 'Software developer and digital solutions specialist.',
      intro: 'Development, infrastructure, and intelligent solutions working in harmony.',
      projects: 'View projects',
      about: 'About me',
      architecture: 'Purposeful architecture',
      architectureText: 'Well-built solutions connect experiences, services, and infrastructure on a reliable foundation.',
      learnMore: 'Learn more',
      layerLabels: ['Applications (Solutions)', 'Orchestration (APIs & Services)', 'Foundation (Infrastructure)'],
      orbit: [
        { label: 'Projects', fragment: 'projects', icon: 'code' },
        { label: 'About me', fragment: 'about', icon: 'user' },
        { label: 'Studies', fragment: 'estudos', icon: 'book' },
        { label: 'Contact', fragment: 'contact', icon: 'mail' },
      ],
      dragHint: 'Drag to rotate',
    },
    es: {
      badge: 'Ingeniería de Software',
      title: 'Theo Cordella',
      role: 'Desarrollador de software y soluciones digitales.',
      intro: 'Desarrollo, infraestructura y soluciones inteligentes en perfecta armonía.',
      projects: 'Ver proyectos',
      about: 'Sobre mí',
      architecture: 'Arquitectura con propósito',
      architectureText: 'Las soluciones bien construidas conectan experiencias, servicios e infraestructura sobre una base confiable.',
      learnMore: 'Conoce más',
      layerLabels: ['Aplicaciones (Soluciones)', 'Orquestación (APIs y Servicios)', 'Fundación (Infraestructura)'],
      orbit: [
        { label: 'Proyectos', fragment: 'projects', icon: 'code' },
        { label: 'Sobre mí', fragment: 'about', icon: 'user' },
        { label: 'Estudios', fragment: 'estudos', icon: 'book' },
        { label: 'Contacto', fragment: 'contact', icon: 'mail' },
      ],
      dragHint: 'Arrastra para girar',
    },
  };

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  get copy() {
    return this.content[this.language()];
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
    if (!(target instanceof Element) || !target.closest('.orbit-ring') || target.closest('.orbit-button')) {
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
    return Math.atan2(y - (bounds.top + bounds.height / 2), x - (bounds.left + bounds.width / 2)) * (180 / Math.PI);
  }
}
