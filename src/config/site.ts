export const site = {
  name: "Elus Psicologia",
  title: "Elus Psicologia | Psicoterapia e Avaliação Neuropsicológica",
  description:
  "Psicoterapia, avaliação neuropsicológica e atendimento online com escuta acolhedora, ética e responsabilidade técnica.",
  url: "https://eluspsicologia.com.br",

  professionalName: "Jessica Albuquerque Vasconcelos",
  crp: "CRP 06/162373",

  phone: "5511983273584",
  email: "psicologa.jessicaalbuquerque@gmail.com",
  instagram: "https://www.instagram.com/elus_psicologia",
  instagramUser: "@elus_psicologia",

  location: "Barra da Tijuca, Rio de Janeiro - RJ",
  whatsappMessage:
    "Olá, vim pelo site da Elus Psicologia e gostaria de saber mais sobre os atendimentos.",
};

export const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;