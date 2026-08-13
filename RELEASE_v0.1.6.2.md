# ELUS Psicologia v0.1.6.2 — Google Tag / Consent Mode Hotfix

## Motivo
A v0.1.6.1 restaurou o banner, mas visitas com consentimento aceito ainda não apareciam de forma confiável no GA4 Realtime e o Tag Assistant não detectava uma Google tag depurável.

## Correção
- Move a inicialização do Consent Mode v2 para o `<head>`, antes da Google tag.
- Instala a Google tag (`gtag.js`) diretamente no `<head>` com o Measurement ID oficial da ELUS.
- Mantém o estado padrão `denied` quando não existe escolha salva.
- Usa `granted` já no carregamento quando o usuário havia aceitado métricas anteriormente.
- O componente `AnalyticsConsent.astro` passa a cuidar somente do banner, `consent update` e eventos customizados.
- Preserva `whatsapp_click`, `phone_click`, `email_click`, `directions_click`, `service`, `cta_location` e atribuição de campanha.

## Validação esperada em produção
1. Janela privada: banner aparece.
2. Aceitar métricas.
3. Recarregar/navegar.
4. GA4 Realtime deve registrar o usuário.
5. Tag Assistant deve reconhecer a Google tag G-PJTE6G9DC6.
