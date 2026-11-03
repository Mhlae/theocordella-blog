export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  hours: string;
  file: string;
  url: string;
}

function certificate(
  details: Omit<Certificate, 'url'>,
): Certificate {
  return {
    ...details,
    url: encodeURI(`/Certificados/${details.file}`),
  };
}

export const certificates: Certificate[] = [
  certificate({
    title: 'Intensivão de Claude',
    issuer: 'Hashtag Treinamentos',
    date: '29/10/2026',
    hours: '8 h',
    file: 'Intensivão de Claude - Hashtag Treinamentos.pdf',
  }),
  certificate({
    title: 'Construindo uma Pokédex com JavaScript',
    issuer: 'DIO',
    date: '19/10/2026',
    hours: '1 h',
    file: 'Construindo uma Pokédex com JavaScript.pdf',
  }),
  certificate({
    title: 'Dominando o Protocolo HTTP e Integrando com a PokeAPI',
    issuer: 'DIO',
    date: '13/10/2026',
    hours: '4 h',
    file: 'Dominando o Protocolo HTTP e Integrando com a PokeAPI.pdf',
  }),
  certificate({
    title: 'Criando um Projeto com HTML/CSS para Listagem de Pokémon',
    issuer: 'DIO',
    date: '07/10/2026',
    hours: '2 h',
    file: 'Criando um Projeto com HTML-CSS para Listagem de Pokémon.pdf',
  }),
  certificate({
    title: 'Coletivo Coca-Cola Jovem',
    issuer: 'Instituto Coca-Cola Brasil',
    date: 'Outubro/2026',
    hours: '11 h',
    file: 'Coletivo Coca-Cola Jovem.pdf',
  }),
  certificate({
    title: 'SQL - Structured Query Language',
    issuer: 'FGV Online',
    date: '29/09/2026',
    hours: '24 h',
    file: 'SQL - Structured Query Language.pdf',
  }),
  certificate({
    title: 'Introdução ao Desenvolvimento Web com JavaScript',
    issuer: 'DIO',
    date: '29/09/2026',
    hours: '1 h',
    file: 'Introdução ao Desenvolvimento Web com JavaScript.pdf',
  }),
  certificate({
    title: 'Sintaxe Básica em JavaScript',
    issuer: 'DIO',
    date: '29/09/2026',
    hours: '2 h',
    file: 'Sintaxe Básica em JavaScript.pdf',
  }),
  certificate({
    title: 'Introdução a Criação de Websites com HTML5 e CSS3',
    issuer: 'DIO',
    date: '21/09/2026',
    hours: '6 h',
    file: 'Introdução a Criação de Websites com HTML5 e CSS3.pdf',
  }),
  certificate({
    title: 'Contribuindo em um Projeto Open Source no GitHub',
    issuer: 'DIO',
    date: '04/08/2026',
    hours: '1 h',
    file: 'Contribuindo em um Projeto Open Source no GitHub.pdf',
  }),
  certificate({
    title: 'Desafios de Projetos: Crie Um Portfólio Vencedor',
    issuer: 'DIO',
    date: '01/08/2026',
    hours: '1 h',
    file: 'Desafios de Projetos - Crie Um Portfólio Vencedor.pdf',
  }),
  certificate({
    title: 'Git e GitHub: Primeiros Passos e Configuração do Ambiente',
    issuer: 'DIO',
    date: '31/07/2026',
    hours: '2 h',
    file: 'Git e GitHub - Primeiros Passos e Configuração do Ambiente.pdf',
  }),
  certificate({
    title: 'Bootcamps DIO: Educação Gratuita e Empregabilidade Juntas!',
    issuer: 'DIO',
    date: '29/07/2026',
    hours: '1 h',
    file: 'Bootcamps DIO - Educação Gratuita e Empregabilidade Juntas.pdf',
  }),
];
