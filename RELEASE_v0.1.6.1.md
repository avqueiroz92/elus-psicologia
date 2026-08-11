# ELUS Psicologia v0.1.6.1 — Measurement Hotfix

Hotfix técnico de mensuração. Não altera layout, copy ou arquitetura do site.

## Correções

- Corrige o erro de JavaScript do componente `AnalyticsConsent.astro` causado por TypeScript dentro de um script inline com `define:vars`.
- O banner de preferências volta a ser exibido para visitantes sem decisão salva.
- Implementa Consent Mode v2 avançado com estado padrão `denied` para:
  - `analytics_storage`
  - `ad_storage`
  - `ad_user_data`
  - `ad_personalization`
- O Google tag passa a carregar no domínio de produção mesmo antes da escolha do visitante, respeitando o estado de consentimento.
- Ao aceitar, o consentimento é atualizado para `granted` na mesma página, sem reload.
- Ao recusar, o consentimento permanece `denied`.
- `whatsapp_click`, `phone_click`, `email_click` e `directions_click` continuam sendo enviados ao Google tag; com consentimento negado, o comportamento é controlado pelo Consent Mode.
- Preserva `service`, `cta_location`, `page_path`, `page_title` e os parâmetros de aquisição já implementados.
- UTMs/GCLID continuam persistidos em `sessionStorage` somente após consentimento aceito; antes disso, apenas parâmetros presentes na URL atual são usados no evento.

## Validação esperada após deploy

1. Janela anônima: o banner deve aparecer.
2. Antes de aceitar: o Google tag deve estar carregado com consentimento `denied`.
3. Após aceitar: o consentimento deve mudar para `granted` sem recarregar a página.
4. GA4 Realtime: após aceitar, a visita deve aparecer rapidamente.
5. Clicar no WhatsApp deve gerar `whatsapp_click` e preservar `service`/`cta_location`.
6. Validar os estados de consentimento no Google Tag Assistant.
