# ELUS Psicologia v0.1.7 — SEO Local & Entity Graph

Versão técnica focada em SEO local, clareza de entidades e correção de atribuição do Atendimento Online, preservando a baseline visual, mobile, CRO, mensuração e privacidade da v0.1.6.2.1.

## Alterações implementadas

### Entidades e dados estruturados
- Remove o uso de `ProfessionalService` do JSON-LD.
- Adiciona o componente isolado `StructuredData.astro`, reduzindo o risco de regressão no `BaseLayout.astro`.
- Implementa grafo JSON-LD com `WebSite`, `LocalBusiness`, `Person`, `WebPage` e `Service` quando a URL representa um serviço.
- ELUS recebe `@id` estável, endereço, telefone, horários visíveis no site, áreas locais atendidas, imagem e Instagram.
- Jéssica recebe `@id` estável, página própria, imagem, função profissional, CRP e vínculo com a ELUS.
- Psicoterapia, Psicoterapia Infantil, Avaliação Neuropsicológica e Atendimento Online recebem nós `Service` correspondentes.
- Atendimento Online não recebe automaticamente área local no nó `Service`.

### Home / SEO local
- O `title` da Home passa a priorizar a intenção “Psicóloga na Barra Olímpica”.
- A `description` reforça Centro Metropolitano, Barra Olímpica, Barra da Tijuca e Jacarepaguá.
- O H1 homologado “Cuidado psicológico com escuta, ética e clareza” permanece inalterado.
- Estrutura do hero, CTAs, fotografia e classes responsivas permanecem inalteradas.

### Atendimento Online
- Adiciona mensagem de WhatsApp dedicada ao Atendimento Online.
- Header, footer, sticky mobile, floating desktop, hero e CTA final passam a compartilhar o contexto `atendimento_online`.
- O `title` da página passa a usar “Psicoterapia Online”.
- Layout e conteúdo clínico principal permanecem inalterados.

### Proteção contra regressão
- Adiciona `REGRESSION_GATE_v0.1.7.md` com os itens homologados que não podem regredir.
- Consent Mode v2, Google tag, eventos GA4, URLs, favicon, menu mobile, fotografias e arquitetura permanecem fora do escopo de alteração.

## Validação executada em 14/08/2026
- `npm run build`: concluído sem erros pelo usuário.
- Home desktop: validada.
- Navegação das páginas principais: validada.
- Atendimento Online no desktop: layout e CTAs de WhatsApp validados.
- JSON-LD local: confirmado sem `ProfessionalService`, com `LocalBusiness`, `Person`, CRP, `Service` e `Psicoterapia Online` renderizados conforme esperado.
- Diff revisado para manter Consent Mode/Google tag fora das alterações funcionais.

## Validações pós-deploy / pendências operacionais
- Validar novamente a experiência mobile em dispositivo real; o acesso ao servidor local pelo celular foi bloqueado pela rede local durante esta rodada.
- Validar Tag Assistant e GA4 em produção após deploy.
- Validar JSON-LD com Schema Markup Validator/Rich Results Test após deploy.
- Confirmar no Cloudflare que Googlebot e demais crawlers permitidos pelo `robots.txt` não são bloqueados por regras adicionais.
- Solicitar recrawl das URLs prioritárias no Search Console após publicação.

## Fora do escopo
- Redesign.
- Mudança de URLs.
- Blog/hub de conteúdo.
- Alteração da landing de Psicoterapia Infantil.
- Alteração dos H1s homologados das landing pages.
- Alteração de fotografias ou recortes.
- Alteração do Consent Mode v2 ou da política de privacidade.
