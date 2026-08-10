# ELUS Psicologia v0.1.5 — CRO & Ads Optimization

Versão focada em melhorar a conversão das landing pages que já recebem tráfego pago, sem alterar a arquitetura validada na v0.1.4.2.

## Psicoterapia
- Primeiro viewport mais orientado à intenção de busca e às principais demandas acolhidas.
- Microcopy reduzindo a barreira da primeira sessão (não é preciso saber exatamente o que dizer).
- Reforço de localização, modalidade e CRP acima da dobra.
- WhatsApp com mensagem específica para Psicoterapia.
- Tracking explícito de CTA do hero e CTA final.

## Avaliação Neuropsicológica
- H1 alterado para mensagem direta: “Avaliação neuropsicológica para crianças, adolescentes e adultos.”
- Texto inicial orientado a atenção, memória, aprendizagem, funções executivas e aspectos emocionais/comportamentais.
- Reforço da profissional responsável e CRP já no primeiro viewport.
- Sinais de adequação do serviço acima da dobra: faixa etária, entrevista/instrumentos e devolutiva/documento.
- Microcopy sobre variação do número de encontros conforme o caso.
- WhatsApp com mensagem específica para Avaliação Neuropsicológica.
- Tracking explícito de CTA do hero e CTA final.

## Tracking / GA4
O evento `whatsapp_click` passa a enviar também:
- `cta_location`
- `service`
- `page_title`
- parâmetros de campanha preservados na sessão quando houver consentimento: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, `wbraid`

Também foram identificados os CTAs de WhatsApp no header, footer, sticky mobile e botão flutuante desktop.

## Sticky mobile
- CTA reduzido para ocupar menos área útil da tela.
- Passa a desaparecer quando um CTA de WhatsApp da própria página estiver visível, evitando duplicidade visual.
- Continua oculto com o menu mobile aberto.

## Escopo preservado
- Sem alteração de URLs.
- Sem mudança de arquitetura.
- Sem nova revisão fotográfica.
- Sem alteração de serviços ou promessas clínicas.
