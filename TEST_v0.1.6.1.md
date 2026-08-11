# Checklist de teste — v0.1.6.1

## Local

- [ ] `npm run build`
- [ ] `npm run dev -- --host`
- [ ] Abrir em janela anônima e confirmar que o banner aparece.
- [ ] Testar `Recusar` e confirmar que o banner fecha sem erros de console.
- [ ] Limpar `localStorage` ou abrir nova janela privada e testar `Aceitar métricas`.
- [ ] Confirmar que navegação, menu e CTAs continuam normais.

> O GA4 só carrega no domínio de produção (`eluspsicologia.com.br`), portanto Realtime/Tag Assistant devem ser validados após o deploy.

## Produção

- [ ] Abrir janela anônima em `https://eluspsicologia.com.br/`.
- [ ] Confirmar que o banner aparece.
- [ ] Antes de aceitar, validar no Tag Assistant que os estados estão `denied`.
- [ ] Clicar em `Aceitar métricas` e validar atualização para `granted` sem reload.
- [ ] Abrir GA4 → Tempo real e confirmar a visita.
- [ ] Navegar para `/psicoterapia/` e clicar em um CTA de WhatsApp.
- [ ] Confirmar `whatsapp_click` no GA4 Realtime/DebugView.
- [ ] Conferir `service=psicoterapia` e a posição do CTA (`cta_location`).
