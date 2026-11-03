# Théo Cordella — Portfólio

Portfólio pessoal em Angular com navegação por rotas, conteúdo em português,
inglês e espanhol, temas claro e escuro, renderização no servidor e páginas
pré-renderizadas.

## Desenvolvimento

```bash
npm install
npm start
```

O servidor local fica disponível em `http://localhost:4200`.

## Rotas

- `/` redireciona para `/home`.
- `/home` apresenta o hero e os atalhos de navegação.
- `/projects` lista os seis projetos e um resumo da arquitetura.
- `/about-me` apresenta o perfil pessoal e a foto (em `public/images/theo.png`).
- `/studies` abre por padrão a aba Formação, com idiomas e cursos complementares.
- `/studies?tab=education` abre a aba de Formação.
- `/studies?tab=technologies` abre os cinco grupos de tecnologias.
- `/studies?tab=certificates` abre os certificados em `public/Certificados/`.
- `/contact` reúne os canais de contato.
- Caminhos desconhecidos exibem a página de erro com retorno para o início.

As páginas compartilham o cabeçalho e o rodapé. Na Home, os atalhos de páginas
ficam no orbitador; nas páginas internas, o cabeçalho oferece apenas o retorno
à Home. Os componentes de rota são carregados sob demanda e o idioma e o tema
selecionados persistem entre rotas.

## Navegação

| Elemento                                         | Destino                                             |
| ------------------------------------------------ | --------------------------------------------------- |
| Botão Voltar ao início (páginas internas)        | `/home`                                             |
| Hero: Ver projetos / Sobre mim                   | `/projects` / `/about-me`                           |
| Órbita: Projetos / Sobre Mim / Estudos / Contato | `/projects` / `/about-me` / `/studies` / `/contact` |
| Arquitetura: Conheça mais                        | `/studies?tab=technologies`                         |
| Sobre mim: Ver meus estudos / Falar comigo       | `/studies` / `/contact`                             |

## Build e testes

```bash
npm run build
npm test
```

O build de produção pré-renderiza a raiz e as cinco páginas principais para
`dist/theocordella-blog/browser`. A configuração de rewrite do Vercel mantém o
fallback de navegação para caminhos diretos.
