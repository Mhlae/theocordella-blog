import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, TitleStrategy } from '@angular/router';
import { Language, sharedCopy } from './i18n/shared-copy';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  private readonly titleStrategy = inject(TitleStrategy);
  protected readonly languageService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);
  protected readonly languageOptions: Language[] = ['pt', 'en', 'es'];

  protected get copy() {
    return sharedCopy[this.languageService.current()];
  }

  protected setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
    this.titleStrategy.updateTitle(this.router.routerState.snapshot);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }
}
