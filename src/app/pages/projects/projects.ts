import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pageCopy } from '../../i18n/page-copy';
import { LanguageService } from '../../services/language.service';
import { projects } from '../project-data';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink],
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class ProjectsPage {
  private readonly language = inject(LanguageService);
  protected readonly copy = computed(() => pageCopy[this.language.current()]);
  protected readonly projects = projects;
}
