import { Meta, Title } from '@angular/platform-browser';
import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { pageCopy, PageTitleKey } from './i18n/page-copy';
import { LanguageService } from './services/language.service';

function isPageTitleKey(value: string): value is PageTitleKey {
  return Object.prototype.hasOwnProperty.call(pageCopy.pt.titles, value);
}

@Injectable()
export class SiteTitleStrategy extends TitleStrategy {
  private readonly language = inject(LanguageService);

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(snapshot);
    if (!titleKey || !isPageTitleKey(titleKey)) {
      return;
    }

    const language = this.language.current();
    this.title.setTitle(pageCopy[language].titles[titleKey]);
    this.meta.updateTag({
      name: 'description',
      content: pageCopy[language].descriptions[titleKey],
    });
  }
}
