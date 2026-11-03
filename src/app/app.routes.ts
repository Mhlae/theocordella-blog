import { Routes } from '@angular/router';
import { pageTitleKeys } from './i18n/shared-copy';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((module) => module.HomePage),
    title: pageTitleKeys.home,
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((module) => module.ProjectsPage),
    title: pageTitleKeys.projects,
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me').then((module) => module.AboutMePage),
    title: pageTitleKeys.about,
  },
  {
    path: 'studies',
    loadComponent: () => import('./pages/studies/studies').then((module) => module.StudiesPage),
    title: pageTitleKeys.studies,
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((module) => module.ContactPage),
    title: pageTitleKeys.contact,
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((module) => module.NotFoundPage),
    title: pageTitleKeys.notFound,
  },
];
