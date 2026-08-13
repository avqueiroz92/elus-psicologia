# Validação — ELUS v0.1.6.2.1

## Local

1. `npm run build`
2. `npm run dev -- --host`
3. Em janela privada, confirmar que o banner de métricas aparece.
4. Testar Recusar e Aceitar métricas.
5. Confirmar menu, navegação e todos os CTAs de WhatsApp.
6. Em `npm run dev`, a Google tag não deve ser enviada ao GA4 de produção.

## Produção

Após deploy:

1. Abrir janela privada sem preferência salva.
2. Confirmar banner.
3. Aceitar métricas.
4. Navegar para outra página e conferir GA4 Realtime.
5. Clicar em WhatsApp e conferir `whatsapp_click` em Realtime.
6. Repetir em nova janela privada escolhendo Recusar; o site deve continuar funcional.
7. Validar Consent Mode no Tag Assistant: armazenamento começa `denied`; após aceite, Analytics/Ads measurement passam a `granted`; `ad_personalization` continua `denied`.
8. Abrir a Política de Privacidade, usar **Alterar preferência de métricas** e confirmar que o banner volta a aparecer.

## GA4 pós-deploy

- Criar dimensões personalizadas `service` e `cta_location` (escopo Evento).
- Revisar Data Redaction.
- Confirmar Google Signals OFF.
- Confirmar User-provided data OFF.
- Confirmar retenção em 14 meses.
