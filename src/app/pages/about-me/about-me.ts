import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pageCopy } from '../../i18n/page-copy';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-me-page',
  imports: [RouterLink],
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMePage {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => pageCopy[this.language.current()]);
  protected readonly imageFailed = signal(false);

  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}
