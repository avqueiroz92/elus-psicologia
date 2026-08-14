# ELUS Psicologia — Regression Gate v0.1.7

Este checklist protege decisões já homologadas no histórico do projeto. A v0.1.7 só pode ser incorporada à `main` se os itens abaixo permanecerem válidos.

## Baseline protegida

Base oficial: `main` na v0.1.6.2.1.

A v0.1.7 é um patch de SEO local, entidades/schema e correção de atribuição do Atendimento Online. Não é um redesign.

## 1. Navegação e mobile

- [ ] Menu mobile continua abrindo e fechando normalmente.
- [ ] Menu fecha ao clicar em link, backdrop e tecla Escape.
- [ ] Menu não interfere no scroll/viewport.
- [ ] CTA sticky mobile continua oculto quando um CTA inline de WhatsApp está visível.
- [ ] CTA sticky aparece após rolagem quando não existe CTA inline visível.
- [ ] CTA sticky permanece oculto enquanto o menu mobile está aberto.
- [ ] Header desktop permanece visualmente inalterado.

## 2. Marca, favicon e imagens

- [ ] Logo vetorial/transparente do header continua sendo `/images/elus/brand/logo-elus.svg`.
- [ ] Logo do footer permanece inalterado.
- [ ] Favicon permanece nos assets `elus-favicon-2026.png`, `elus-favicon-2026.ico` e `elus-apple-touch-2026.png`.
- [ ] Fotografias atuais permanecem nos mesmos contextos.
- [ ] `object-position`, proporções e recortes homologados permanecem inalterados.
- [ ] Os três cartões do espaço continuam: Recepção, Consultório e Espaço infantil.

## 3. Arquitetura e URLs

- [ ] Nenhuma URL existente foi removida ou renomeada.
- [ ] Permanecem `/`, `/psicoterapia/`, `/psicoterapia-infantil/`, `/avaliacao-neuropsicologica/`, `/atendimento-online/`, `/a-elus/`, `/sobre-jessica/` e `/politica-de-privacidade/`.
- [ ] Header, footer e links internos continuam alcançando as páginas de serviço.
- [ ] Sitemap continua sendo gerado por `@astrojs/sitemap`.
- [ ] `robots.txt` continua permitindo rastreamento e apontando para `sitemap-index.xml`.

## 4. CRO das landing pages

### Psicoterapia
- [ ] CTA principal continua aparecendo cedo no primeiro viewport.
- [ ] Demandas de ansiedade, sobrecarga, conflitos e mudanças de vida permanecem no conteúdo.
- [ ] Microcopy sobre não precisar chegar com tudo organizado permanece.
- [ ] WhatsApp específico de Psicoterapia permanece.

### Avaliação Neuropsicológica
- [ ] H1 permanece: “Avaliação neuropsicológica para crianças, adolescentes e adultos.”
- [ ] Atenção, memória, aprendizagem, funções executivas e aspectos emocionais/comportamentais permanecem no primeiro viewport.
- [ ] Jéssica, CRP e sinais de adequação permanecem acima da dobra.
- [ ] WhatsApp específico de Avaliação Neuropsicológica permanece.

### Psicoterapia Infantil
- [ ] Landing dedicada permanece independente.
- [ ] Hero para responsáveis, “Quando buscar”, espaço infantil, participação da família, fluxo em quatro etapas, profissional, FAQ e CTA contextual permanecem.
- [ ] Integrações na Home, menu, Psicoterapia, A ELUS e Footer permanecem.
- [ ] `service="psicoterapia_infantil"` permanece no tracking.

### Atendimento Online
- [ ] Layout e conteúdo clínico principal permanecem inalterados.
- [ ] Header, footer, floating, sticky, hero e CTA final usam o contexto `atendimento_online`.
- [ ] Mensagem de WhatsApp específica para Atendimento Online é utilizada.

## 5. GA4 e eventos

- [ ] `whatsapp_click` permanece ativo.
- [ ] `phone_click` permanece ativo.
- [ ] `email_click` permanece ativo.
- [ ] `directions_click` permanece ativo.
- [ ] Eventos continuam enviando `destination`, `page_path`, `page_title`, `cta_location` e `service`.
- [ ] Nenhum evento envia URL completa do WhatsApp ou texto pré-preenchido da mensagem.
- [ ] `service` e `cta_location` não foram renomeados.

## 6. Consent Mode v2 e privacidade — NÃO REGREDIR

- [ ] Inicialização do Consent Mode continua antes da Google tag.
- [ ] `analytics_storage` começa como `denied` sem escolha salva e muda para `granted` após aceite.
- [ ] `ad_storage` começa como `denied` sem escolha salva e muda para `granted` após aceite.
- [ ] `ad_user_data` começa como `denied` sem escolha salva e muda para `granted` após aceite.
- [ ] `ad_personalization` permanece sempre `denied`.
- [ ] `allow_ad_personalization_signals` permanece `false`.
- [ ] `allow_google_signals` permanece `false`.
- [ ] UTMs/GCLID/GBRAID/WBRAID não voltam a ser persistidos manualmente em `sessionStorage`.
- [ ] Banner de métricas permanece funcional.
- [ ] Política de privacidade permanece disponível.

## 7. SEO e entidades — objetivo da v0.1.7

- [ ] Canonical continua sendo gerado com o domínio oficial.
- [ ] Open Graph existente permanece funcional.
- [ ] JSON-LD não usa mais `ProfessionalService`.
- [ ] ELUS é representada como `LocalBusiness` com `@id` estável.
- [ ] Jéssica é representada como `Person` com `@id` estável e CRP.
- [ ] `WebSite` e `WebPage` estão ligados ao grafo.
- [ ] Páginas de serviço recebem entidade `Service` correspondente.
- [ ] Endereço, horários e áreas atendidas do schema refletem informações visíveis no site.
- [ ] A Home reforça Barra Olímpica sem apagar Centro Metropolitano nem o atendimento online.

## 8. Dados oficiais protegidos

- [ ] Profissional: Jessica Albuquerque Vasconcelos.
- [ ] Registro: CRP 05/87372.
- [ ] Telefone/WhatsApp atual permanece com DDD 21.
- [ ] Endereço continua Avenida Ator José Wilker, 605, Rio de Janeiro - RJ, 22775-024.
- [ ] Centro Metropolitano continua sendo o nome do local; Barra Olímpica, Barra da Tijuca e Jacarepaguá permanecem como contexto regional.

## 9. Validação antes do merge

- [ ] `npm run build` concluído sem erros em ambiente com Node >= 22.12.
- [ ] Home validada em desktop e mobile.
- [ ] Todas as páginas de serviço abertas e navegáveis.
- [ ] Links de WhatsApp testados por serviço.
- [ ] Tag Assistant validado em produção/preview quando aplicável.
- [ ] JSON-LD validado no Schema Markup Validator e, quando aplicável, no Rich Results Test.
- [ ] Diff final contra `main` revisado e limitado ao escopo aprovado.

## Regra de merge

Se qualquer item protegido regredir, corrigir na branch antes do merge. Não compensar uma regressão de UX, conversão, mensuração ou privacidade em troca de ganho de SEO.
