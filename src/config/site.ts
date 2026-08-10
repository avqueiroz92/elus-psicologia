export const site = {
  name: "Elus Psicologia",
  title: "Elus Psicologia | Psicoterapia e Avaliação Neuropsicológica",
  description:
    "Psicoterapia, psicoterapia infantil, avaliação neuropsicológica e atendimento online com escuta acolhedora, ética e responsabilidade técnica.",
  url: "https://eluspsicologia.com.br",
  analyticsMeasurementId: "G-PJTE6G9DC6",

  professionalName: "Jessica Albuquerque Vasconcelos",
  crp: "CRP 05/87372",

  phone: "5521967015814",
  email: "psicologa.jessicaalbuquerque@gmail.com",
  instagram: "https://www.instagram.com/elus_psicologia",
  instagramUser: "@elus_psicologia",

  placeName: "Centro Metropolitano",
  location: "Avenida Ator José Wilker, 605, Jacarepaguá, Rio de Janeiro - RJ, 22775-024",
  locationContext:
    "Localização próxima à Barra da Tijuca, Barra Olímpica e aos bairros da região.",
  whatsappMessage:
    "Olá, vim pelo site da Elus Psicologia e gostaria de saber mais sobre os atendimentos.",
};

export const whatsappMessages = {
  general: site.whatsappMessage,
  psicoterapia:
    "Olá, vim pela página de Psicoterapia da ELUS e gostaria de consultar os horários disponíveis para atendimento.",
  psicoterapiaInfantil:
    "Olá, vim pela página de Psicoterapia Infantil da ELUS e gostaria de conversar sobre atendimento para meu/minha filho(a) e consultar disponibilidade.",
  avaliacaoNeuropsicologica:
    "Olá, vim pela página de Avaliação Neuropsicológica da ELUS e gostaria de entender melhor o processo e consultar disponibilidade.",
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;

export const whatsappLink = buildWhatsAppLink(whatsappMessages.general);
export const psicoterapiaWhatsappLink = buildWhatsAppLink(whatsappMessages.psicoterapia);
export const psicoterapiaInfantilWhatsappLink = buildWhatsAppLink(whatsappMessages.psicoterapiaInfantil);
export const avaliacaoWhatsappLink = buildWhatsAppLink(whatsappMessages.avaliacaoNeuropsicologica);
