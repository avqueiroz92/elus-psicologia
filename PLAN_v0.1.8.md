# ELUS Psicologia v0.1.8 — Autoridade Orgânica & AI Search

## Objetivo

Criar a primeira camada editorial da ELUS para ampliar descoberta orgânica no Google e em mecanismos de busca com IA, fortalecendo a entidade profissional de Jéssica Albuquerque Vasconcelos sem transformar o site em um blog genérico.

## Princípios

1. Conteúdo útil, original e orientado a dúvidas reais de pacientes e responsáveis.
2. Conteúdo assinado pela profissional somente após revisão clínica da Jéssica.
3. Sem promessa de resultado, diagnóstico por conteúdo, sensacionalismo, comparação com outros profissionais ou preço como propaganda.
4. Conteúdos informativos devem levar naturalmente às landing pages de serviço, sem substituir avaliação individual.
5. Preservar integralmente Consent Mode v2, GA4, navegação mobile homologada, fotos, favicon e CRO das páginas de serviço.
6. Não criar dezenas de páginas por variações de palavra-chave; priorizar poucos conteúdos de alta qualidade.

## Escopo técnico

- Criar hub `/conteudos/`.
- Criar layout editorial reutilizável.
- Adicionar cards de conteúdo reutilizáveis.
- Adicionar `BlogPosting` e `BreadcrumbList` aos artigos.
- Representar `/sobre-jessica/` como `ProfilePage` mantendo a entidade `Person` existente.
- Representar `/conteudos/` como `CollectionPage`.
- Ligar artigos à entidade `Person` da Jéssica e à ELUS como publisher.
- Adicionar `Conteúdos` à navegação principal e footer.
- Exibir conteúdos assinados na página da Jéssica.

## Cluster inicial — rascunhos para revisão clínica

1. **Avaliação neuropsicológica: quando procurar e o que ela investiga**
   - intenção: entender indicação / necessidade;
   - ligação principal: `/avaliacao-neuropsicologica/`.

2. **Como funciona a avaliação neuropsicológica: etapas do processo**
   - intenção: entender processo, etapas e devolutiva;
   - ligação principal: `/avaliacao-neuropsicologica/`.

3. **Psicoterapia infantil: quando procurar apoio psicológico para a criança**
   - intenção: responsáveis tentando decidir se vale buscar ajuda;
   - ligação principal: `/psicoterapia-infantil/`.

## Fontes editoriais prioritárias

- Conselho Federal de Psicologia — Manual Neuropsicologia: Ciência e Profissão.
- Resolução CFP nº 31/2022 / SATEPSI.
- Cartilha de Avaliação Psicológica do CFP.
- Ministério da Saúde / fontes públicas de saúde para contexto infantojuvenil.
- OMS quando necessário para contexto de saúde mental de crianças e jovens.

## Gate editorial obrigatório

Antes do merge:

- [ ] Jéssica revisou os três textos.
- [ ] Nome completo, Psicóloga e CRP 05/87372 aparecem de forma clara.
- [ ] Nenhuma afirmação sugere diagnóstico por leitura do conteúdo.
- [ ] Nenhuma promessa taxativa de resultado.
- [ ] Nenhum preço usado como argumento de aquisição.
- [ ] Nenhuma qualificação não comprovada foi adicionada.
- [ ] Referências oficiais foram conferidas.

## Fora do escopo

- Site separado da Jéssica para brasileiros no exterior.
- Conteúdo de TDAH/TEA orientado a diagnóstico específico nesta primeira leva.
- Newsletter.
- Comentários em artigos.
- Conteúdo gerado em escala.
- `llms.txt` como suposto fator de ranking.
