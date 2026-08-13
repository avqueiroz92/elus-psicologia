# ELUS Psicologia v0.1.6.2.1 — Measurement & Privacy Hardening

Hotfix técnico construído sobre a v0.1.6.2 após auditoria completa de mensuração, consentimento e privacidade. Não altera layout, páginas clínicas ou arquitetura do site.

## Alterações no código

- Google tag permanece instalada diretamente no `<head>` e somente em builds de produção (`import.meta.env.PROD`).
- Consent Mode v2 é inicializado antes da Google tag.
- `analytics_storage`, `ad_storage` e `ad_user_data` começam como `denied` e passam a `granted` quando o visitante aceita métricas.
- `ad_personalization` permanece permanentemente `denied`, inclusive após aceite.
- `allow_ad_personalization_signals: false` e `allow_google_signals: false` no `gtag config`.
- Removida a persistência manual de UTMs/GCLID/GBRAID/WBRAID em `sessionStorage`. A atribuição fica sob responsabilidade nativa da Google tag.
- Eventos de contato não enviam mais a URL completa do WhatsApp nem o texto pré-preenchido da mensagem.
- `whatsapp_click`, `phone_click`, `email_click` e `directions_click` enviam apenas `destination`, `page_path`, `page_title`, `cta_location` e `service`.
- Ao recusar ou redefinir a preferência, cookies Google acessíveis pelo domínio (`_ga*`, `_gid`, `_gat*`, `_gcl*`) são removidos quando possível.
- Política de Privacidade atualizada para refletir o Consent Mode avançado e a ausência de publicidade personalizada.

## Configurações externas ainda necessárias

Após publicação, revisar no GA4:

1. Registrar dimensões personalizadas de escopo Evento:
   - `service` → nome sugerido: **Serviço**
   - `cta_location` → nome sugerido: **Localização do CTA**
2. Confirmar Data Redaction / redação de e-mails habilitada e revisar parâmetros sensíveis de URL.
3. Confirmar Google Signals desativado.
4. Manter User-provided data / enhanced conversions com dados fornecidos pelo usuário desativados.
5. Ajustar retenção de dados para 14 meses, se ainda estiver em 2 meses.

## Versão

`0.1.6.2.1`
