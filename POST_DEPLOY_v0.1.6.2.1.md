# Pós-deploy — ELUS v0.1.6.2.1

Estas configurações ficam fora do código do site e devem ser verificadas no GA4 depois da publicação.

## Definições personalizadas

Criar duas dimensões com escopo **Evento**:

- Nome: **Serviço** | parâmetro: `service`
- Nome: **Localização do CTA** | parâmetro: `cta_location`

## Data Redaction

No fluxo Web do GA4:

- manter/ativar redação de endereços de e-mail;
- revisar parâmetros de URL que possam conter dados pessoais e incluir, quando aplicável: `email`, `email_address`, `nome`, `name`, `telefone`, `phone`, `message`, `mensagem`, `text`.

## Recursos de publicidade

- Google Signals: **OFF**.
- User-provided data / dados fornecidos pelo usuário: **OFF**.
- Não habilitar públicos/remarketing baseados em interesse de saúde.

## Retenção

- Retenção dos dados de eventos: **14 meses**, se a propriedade ainda estiver em 2 meses.

## Validação

- GA4 Realtime após aceitar métricas.
- `whatsapp_click` no Realtime.
- Tag Assistant: `analytics_storage`, `ad_storage` e `ad_user_data` começam denied e ficam granted após aceite; `ad_personalization` deve permanecer denied.
