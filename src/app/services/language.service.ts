import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Language } from '../i18n/shared-copy';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  readonly current = signal<Language>(this.getInitialLanguage());

  constructor() {
    this.applyDocumentLanguage();
  }

  setLanguage(language: Language): void {
    this.current.set(language);
    this.applyDocumentLanguage();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      window.localStorage.setItem('language', language);
    } catch (error) {
      console.warn('Unable to save the language preference.', error);
    }
  }

  private getInitialLanguage(): Language {
    if (!isPlatformBrowser(this.platformId)) {
      return 'pt';
    }

    try {
      const savedLanguage = window.localStorage.getItem('language');
      if (savedLanguage === 'pt' || savedLanguage === 'en' || savedLanguage === 'es') {
        return savedLanguage;
      }
    } catch (error) {
      console.warn('Unable to read the saved language preference.', error);
    }

    return 'pt';
  }

  private applyDocumentLanguage(): void {
    this.document.documentElement.setAttribute(
      'lang',
      this.current() === 'pt' ? 'pt-BR' : this.current(),
    );
  }
}
