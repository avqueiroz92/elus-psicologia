export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  serviceHref: string;
  serviceLabel: string;
  reviewedAt: string;
};

export const contentItems: ContentItem[] = [
  {
    slug: "avaliacao-neuropsicologica-quando-procurar",
    title: "Avaliação neuropsicológica: quando procurar e o que ela investiga",
    description:
      "Entenda em quais situações uma avaliação neuropsicológica pode ser considerada e quais funções podem ser investigadas ao longo do processo.",
    category: "Avaliação neuropsicológica",
    readTime: "6 min de leitura",
    serviceHref: "/avaliacao-neuropsicologica/",
    serviceLabel: "Conhecer a Avaliação Neuropsicológica",
    reviewedAt: "15/08/2026",
  },
  {
    slug: "como-funciona-avaliacao-neuropsicologica",
    title: "Como funciona a avaliação neuropsicológica: etapas do processo",
    description:
      "Veja como entrevista, levantamento da história, instrumentos, análise integrada e devolutiva podem fazer parte de uma avaliação neuropsicológica.",
    category: "Avaliação neuropsicológica",
    readTime: "7 min de leitura",
    serviceHref: "/avaliacao-neuropsicologica/",
    serviceLabel: "Entender o serviço de avaliação",
    reviewedAt: "15/08/2026",
  },
  {
    slug: "psicoterapia-infantil-quando-procurar",
    title: "Psicoterapia infantil: quando procurar apoio psicológico para a criança",
    description:
      "Um guia para responsáveis observarem mudanças persistentes no comportamento, nas emoções, na rotina e entenderem quando vale conversar com um profissional.",
    category: "Psicoterapia infantil",
    readTime: "6 min de leitura",
    serviceHref: "/psicoterapia-infantil/",
    serviceLabel: "Conhecer a Psicoterapia Infantil",
    reviewedAt: "15/08/2026",
  },
];

export const contentBySlug = Object.fromEntries(
  contentItems.map((item) => [item.slug, item])
) as Record<string, ContentItem>;
