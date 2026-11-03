export type Language = 'pt' | 'en' | 'es';
export type PageKey = 'home' | 'projects' | 'about' | 'studies' | 'contact' | 'notFound';

export const sharedCopy: Record<
  Language,
  {
    languageLabel: string;
    portuguese: string;
    english: string;
    spanish: string;
    lightTheme: string;
    darkTheme: string;
    notFoundMessage: string;
    returnHome: string;
    footer: string;
  }
> = {
  pt: {
    languageLabel: 'Seletor de idioma',
    portuguese: 'Português',
    english: 'Inglês',
    spanish: 'Espanhol',
    lightTheme: 'Ativar tema claro',
    darkTheme: 'Ativar tema escuro',
    notFoundMessage: 'A página que você procura não foi encontrada.',
    returnHome: 'Voltar ao início',
    footer: 'DESENVOLVIMENTO FULL-STACK',
  },
  en: {
    languageLabel: 'Language selector',
    portuguese: 'Portuguese',
    english: 'English',
    spanish: 'Spanish',
    lightTheme: 'Use light theme',
    darkTheme: 'Use dark theme',
    notFoundMessage: 'The page you are looking for could not be found.',
    returnHome: 'Back to home',
    footer: 'FULL-STACK DEVELOPMENT',
  },
  es: {
    languageLabel: 'Selector de idioma',
    portuguese: 'Portugués',
    english: 'Inglés',
    spanish: 'Español',
    lightTheme: 'Activar tema claro',
    darkTheme: 'Activar tema oscuro',
    notFoundMessage: 'No se encontró la página que buscas.',
    returnHome: 'Volver al inicio',
    footer: 'DESARROLLO FULL-STACK',
  },
};

export const pageTitleKeys = {
  home: 'home',
  projects: 'projects',
  about: 'about',
  studies: 'studies',
  contact: 'contact',
  notFound: 'notFound',
} as const satisfies Record<string, PageKey>;
