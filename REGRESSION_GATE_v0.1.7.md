# ELUS Psicologia — Regression Gate v0.1.7

Este checklist protege decisões já homologadas no histórico do projeto. A v0.1.7 só pode ser incorporada à `main` se os itens abaixo permanecerem válidos.

## Baseline protegida

Base oficial: `main` na v0.1.6.2.1.

A v0.1.7 é um patch de SEO local, entidades/schema e correção de atribuição do Atendimento Online. Não é um redesign.

## 1. Navegação e mobile

- [ ] Menu mobile revalidado em dispositivo real nesta release. **Pendente:** o celular não conseguiu acessar o servidor local por restrição de rede.
- [x] Header desktop permanece visualmente inalterado.
- [x] Navegação das páginas principais abre normalmente no preview local desktop.
- [x] A lógica de menu/sticky mobile permanece fora do diff funcional da v0.1.7.

## 2. Marca, favicon e imagens

- [x] Logo vetorial/transparente do header permanece `/images/elus/brand/logo-elus.svg`.
- [x] Logo do footer permanece inalterado.
- [x] Favicon permanece nos assets `elus-favicon-2026.png`, `elus-favicon-2026.ico` e `elus-apple-touch-2026.png`.
- [x] Fotografias, `object-position`, proporções e recortes permanecem fora do diff da v0.1.7.
- [x] Os três cartões do espaço continuam preservados: Recepção, Consultório e Espaço infantil.

## 3. Arquitetura e URLs

- [x] Nenhuma URL existente foi removida ou renomeada.
- [x] Permanecem `/`, `/psicoterapia/`, `/psicoterapia-infantil/`, `/avaliacao-neuropsicologica/`, `/atendimento-online/`, `/a-elus/`, `/sobre-jessica/` e `/politica-de-privacidade/`.
- [x] Páginas principais foram abertas e navegadas no preview local desktop.
- [x] Sitemap e `robots.txt` permanecem fora do diff da v0.1.7.

## 4. CRO das landing pages

### Psicoterapia
- [x] Landing permanece fora do diff funcional desta versão.
- [x] WhatsApp específico de Psicoterapia permanece preservado.

### Avaliação Neuropsicológica
- [x] H1 permanece: “Avaliação neuropsicológica para crianças, adolescentes e adultos.”
- [x] Landing permanece fora do diff funcional desta versão.
- [x] WhatsApp específico de Avaliação Neuropsicológica permanece preservado.

### Psicoterapia Infantil
- [x] Landing dedicada permanece independente e fora do diff funcional desta versão.
- [x] Integrações existentes e `service="psicoterapia_infantil"` permanecem preservados.

### Atendimento Online
- [x] Layout e conteúdo clínico principal validados no desktop.
- [x] Hero, CTA final, header e floating desktop usam a mensagem/contexto específico de Atendimento Online.
- [x] BaseLayout recebe `whatsappService="atendimento_online"`, preservando o contexto também para footer/sticky/floating.
- [ ] Sticky mobile revalidado em dispositivo real. **Pendente por acesso de rede local.**

## 5. GA4 e eventos

- [x] `whatsapp_click`, `phone_click`, `email_click` e `directions_click` permanecem no código existente e fora do diff funcional.
- [x] `service` e `cta_location` não foram renomeados.
- [x] Privacy hardening da v0.1.6.2.1 permanece fora do diff.
- [ ] GA4 Realtime/Tag Assistant pós-deploy.

## 6. Consent Mode v2 e privacidade — NÃO REGREDIR

- [x] Inicialização do Consent Mode e Google tag permanecem na mesma posição do `BaseLayout`.
- [x] `ad_personalization` continua `denied`.
- [x] `allow_ad_personalization_signals` continua `false`.
- [x] `allow_google_signals` continua `false`.
- [x] Não houve reintrodução de persistência manual de UTMs/GCLID/GBRAID/WBRAID.
- [x] Componente de consentimento e política de privacidade permanecem fora do escopo funcional.
- [ ] Revalidar estados no Tag Assistant após deploy.

## 7. SEO e entidades — objetivo da v0.1.7

- [x] Canonical e Open Graph existentes permanecem preservados.
- [x] JSON-LD local não usa mais `ProfessionalService`.
- [x] ELUS é renderizada como `LocalBusiness`.
- [x] Jéssica é renderizada como `Person` com CRP `05/87372`.
- [x] `WebSite` e `WebPage` estão ligados ao grafo.
- [x] Páginas de serviço recebem entidade `Service` correspondente.
- [x] Atendimento Online renderiza `Psicoterapia Online` no nó de serviço.
- [x] Home reforça Barra Olímpica em `title`/description sem alterar o H1 homologado.
- [ ] Schema Markup Validator/Rich Results Test após deploy.

## 8. Dados oficiais protegidos

- [x] Profissional: Jessica/Jéssica Albuquerque Vasconcelos conforme contexto existente do site.
- [x] Registro: CRP 05/87372.
- [x] Telefone/WhatsApp permanece com DDD 21.
- [x] Endereço permanece Avenida Ator José Wilker, 605, Rio de Janeiro - RJ, 22775-024.
- [x] Centro Metropolitano permanece como local; Barra Olímpica, Barra da Tijuca e Jacarepaguá permanecem como contexto regional.

## 9. Validação antes do merge

- [x] `npm run build` concluído sem erros pelo usuário em 14/08/2026.
- [x] Home validada no desktop.
- [x] Todas as páginas principais abertas e navegáveis no desktop.
- [x] Atendimento Online e WhatsApp contextual validados no desktop.
- [x] JSON-LD validado localmente via HTML renderizado (`curl`/`grep`).
- [ ] Mobile em dispositivo real: pendente por restrição da rede local ao preview.
- [ ] Tag Assistant/GA4: pós-deploy.
- [ ] Schema validator externo: pós-deploy.
- [ ] Cloudflare/crawlers: pós-deploy/configuração.
- [ ] Diff final contra `main` revisado após fechamento da release.

## Regra de merge

Se qualquer item protegido regredir, corrigir na branch antes do merge. Não compensar uma regressão de UX, conversão, mensuração ou privacidade em troca de ganho de SEO.
