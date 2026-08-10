# ELUS Psicologia v0.1.5 — checklist de validação

## Local / mobile
1. Abrir `/psicoterapia/`.
   - Confirmar que o CTA principal aparece cedo no primeiro viewport.
   - Confirmar nova mensagem de demanda (ansiedade, sobrecarga, conflitos, mudanças de vida).
   - Clicar no WhatsApp e confirmar a mensagem específica de Psicoterapia.
2. Abrir `/avaliacao-neuropsicologica/`.
   - Confirmar H1 direto: “Avaliação neuropsicológica para crianças, adolescentes e adultos.”
   - Confirmar CTA principal cedo no primeiro viewport.
   - Clicar no WhatsApp e confirmar a mensagem específica de Avaliação Neuropsicológica.
3. Validar sticky mobile.
   - Não deve competir visualmente com CTA de WhatsApp já visível na página.
   - Deve aparecer após rolagem quando não houver CTA inline visível.
   - Deve desaparecer com o menu mobile aberto.

## Após deploy / produção
1. Aceitar métricas no banner de consentimento.
2. Abrir uma landing page com parâmetros UTM de teste.
3. Clicar em Hero, sticky e CTA final separadamente.
4. Confirmar no GA4 Realtime/DebugView o evento `whatsapp_click`.
5. Validar os parâmetros: `cta_location`, `service`, `page_path`, `page_title` e, quando aplicável, parâmetros UTM/GCLID.

Observação: o Google Analytics somente é carregado nos hosts de produção configurados no projeto, portanto o evento não é enviado no endereço local `192.168.x.x`.
