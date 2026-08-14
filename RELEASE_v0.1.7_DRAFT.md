# ELUS Psicologia v0.1.7 — SEO Local & Entity Graph (DRAFT)

Versão técnica focada em SEO local, clareza de entidades e correção de atribuição do Atendimento Online, preservando a baseline visual, mobile, CRO, mensuração e privacidade da v0.1.6.2.1.

## Alterações implementadas

### Entidades e dados estruturados
- Remove o uso de `ProfessionalService` do JSON-LD.
- Novo componente isolado `StructuredData.astro` para reduzir risco de regressão no `BaseLayout.astro`.
- Grafo JSON-LD com entidades `WebSite`, `LocalBusiness`, `Person`, `WebPage` e `Service` quando a URL representa um serviço.
- ELUS recebe `@id` estável, endereço, telefone, horários visíveis no site, áreas locais atendidas, imagem e Instagram.
- Jéssica recebe `@id` estável, página própria, imagem, função profissional, CRP e vínculo com a ELUS.
- Páginas de Psicoterapia, Psicoterapia Infantil, Avaliação Neuropsicológica e Atendimento Online recebem nós `Service` correspondentes.
- Atendimento Online não recebe automaticamente uma área local no nó `Service`.

### Home / SEO local
- `title` da Home passa a priorizar a intenção “Psicóloga na Barra Olímpica”.
- `description` reforça Centro Metropolitano, Barra Olímpica, Barra da Tijuca e Jacarepaguá.
- H1 da Home passa a comunicar diretamente Psicoterapia e Avaliação Neuropsicológica na Barra Olímpica.
- A assinatura “Cuidado psicológico com escuta, ética e clareza” é preservada no texto de apoio.
- Estrutura do hero, CTAs, fotografia e classes responsivas permanecem inalteradas.

### Atendimento Online
- Adicionada mensagem de WhatsApp dedicada ao Atendimento Online.
- Header, footer, sticky mobile, floating desktop, hero e CTA final passam a utilizar o mesmo contexto `atendimento_online`.
- `title` passa a usar “Psicoterapia Online”.
- Layout e conteúdo clínico principal permanecem inalterados.

### Proteção contra regressão
- Adicionado `REGRESSION_GATE_v0.1.7.md` com os itens homologados que não podem regredir.
- Consent Mode v2, Google tag, eventos GA4, URLs, favicon, menu mobile, fotografias e arquitetura permanecem fora do escopo de alteração.

## Itens ainda pendentes antes do merge

- Executar `npm run build` em ambiente com Node >= 22.12.
- Validar Home em desktop e mobile, principalmente altura do novo H1 no primeiro viewport.
- Validar os links de WhatsApp e `service=atendimento_online` em todos os CTAs da página online.
- Validar o JSON-LD no Schema Markup Validator e no Rich Results Test quando aplicável.
- Revisar diff final contra `main` usando o Regression Gate.
- Validar no Cloudflare que crawlers permitidos pelo `robots.txt` não estão sendo bloqueados por configuração adicional.

## Fora do escopo

- Redesign.
- Mudança de URLs.
- Blog/hub de conteúdo.
- Alteração da landing de Psicoterapia Infantil.
- Alteração do H1 da Avaliação Neuropsicológica.
- Alteração de fotografias ou recortes.
- Alteração do Consent Mode v2 ou da política de privacidade.
