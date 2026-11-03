import { Component, ElementRef, HostListener, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { pageCopy } from '../../i18n/page-copy';
import { LanguageService } from '../../services/language.service';
import { certificates } from './certificates';

type StudyTab = 'education' | 'technologies' | 'certificates';

const studyTabs: StudyTab[] = ['education', 'technologies', 'certificates'];

@Component({
  selector: 'app-studies-page',
  imports: [RouterLink],
  styleUrl: './studies.scss',
  templateUrl: './studies.html',
})
export class StudiesPage {
  private readonly language = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  protected readonly copy = computed(() => pageCopy[this.language.current()]);
  protected readonly selectedTab = computed<StudyTab>(() => {
    const tab = this.queryParams().get('tab');
    return tab === 'technologies' || tab === 'certificates' ? tab : 'education';
  });
  protected readonly certificates = certificates;

  @HostListener('keydown', ['$event'])
  protected onTabKeydown(event: KeyboardEvent): void {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Home' && event.key !== 'End') {
      return;
    }

    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const currentTab = target.closest<HTMLElement>('[role="tab"]')?.dataset['tab'];
    const currentIndex = studyTabs.findIndex((tab) => tab === currentTab);
    if (currentIndex < 0) {
      return;
    }

    event.preventDefault();
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? studyTabs.length - 1
          : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + studyTabs.length) % studyTabs.length;
    const nextTab = this.host.nativeElement.querySelector<HTMLElement>(
      `[data-tab="${studyTabs[nextIndex]}"]`,
    );
    nextTab?.focus();
    nextTab?.click();
  }
}
