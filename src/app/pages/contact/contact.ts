import { Component, computed, inject } from '@angular/core';
import { pageCopy } from '../../i18n/page-copy';
import { LanguageService } from '../../services/language.service';

const emailAddress = 'theocordella@proton.me';

@Component({
  selector: 'app-contact-page',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class ContactPage {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => pageCopy[this.language.current()]);
  protected readonly email = emailAddress;
  protected readonly links = [
    { href: `mailto:${emailAddress}`, external: false },
    { href: 'https://www.linkedin.com/in/theo-cordella-89b91434a/', external: true },
    { href: 'https://instagram.com/theocordella', external: true },
    { href: 'https://instagram.com/theocordella.tkd', external: true },
    { href: 'https://github.com/Mhlae', external: true },
  ];
}
