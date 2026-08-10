# ELUS Psicologia v0.1.6 — Psicoterapia Infantil

Última evolução planejada deste ciclo do site. A versão cria uma landing page dedicada à Psicoterapia Infantil e integra o novo serviço à arquitetura atual sem redesenhar o restante do site.

## Nova landing page
- `/psicoterapia-infantil/`
- Hero específico para responsáveis que buscam atendimento para crianças.
- Bloco “Quando buscar psicoterapia infantil?”.
- Destaque do espaço infantil real da ELUS.
- Seção sobre participação dos responsáveis.
- Fluxo em 4 etapas.
- Apresentação da Jéssica no contexto infantil.
- FAQ específico.
- CTA contextual de WhatsApp.

## Integrações
- Novo serviço no menu desktop e mobile.
- Novo card na Home, com layout 2x2 em telas médias e 4 colunas em telas grandes.
- Link contextual na página Psicoterapia.
- Link contextual no card Espaço Infantil em A ELUS.
- Novo item no Footer.

## Conversão e mensuração
- Mensagem de WhatsApp dedicada a Psicoterapia Infantil.
- `service: psicoterapia_infantil` no tracking dos CTAs.
- CTAs identificados por `cta_location`: hero, professional_section, final, header, footer, sticky e floating.
- Fallback do Analytics atualizado para reconhecer `/psicoterapia-infantil/`.

## SEO
- Título e description próprios.
- Página incluída automaticamente no sitemap pelo `@astrojs/sitemap`.
- Links internos a partir de Home, Serviços, Psicoterapia, A ELUS e Footer.
