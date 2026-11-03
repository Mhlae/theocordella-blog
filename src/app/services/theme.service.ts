import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  readonly isDark = signal(this.getInitialTheme());

  constructor() {
    this.applyTheme();
  }

  toggle(): void {
    this.setTheme(!this.isDark());
  }

  setTheme(isDark: boolean): void {
    this.isDark.set(isDark);
    this.applyTheme();
  }

  private getInitialTheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    try {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme === 'dark';
      }
    } catch (error) {
      console.warn('Unable to read the saved theme preference.', error);
    }

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  }

  private applyTheme(): void {
    const theme = this.isDark() ? 'dark' : 'light';
    this.document.documentElement.setAttribute('data-theme', theme);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      window.localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Unable to save the theme preference.', error);
    }
  }
}
