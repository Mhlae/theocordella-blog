import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pageCopy } from '../../i18n/page-copy';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFoundPage {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => pageCopy[this.language.current()]);
}
