export const site = {
  name: "Elus Psicologia",
  title: "Elus Psicologia | Psicoterapia e Avaliação Psicológica",
  description:
    "Psicoterapia, avaliação psicológica e atendimento online com escuta, ética e responsabilidade técnica.",
  url: "https://eluspsicologia.com.br",

  professionalName: "Jessica Albuquerque Vasconcelos",
  crp: "CRP 00/00000",

  phone: "5521999999999",
  email: "contato@eluspsicologia.com.br",
  instagram: "https://www.instagram.com/elus.psicologia",
  instagramUser: "@elus.psicologia",

  location: "Barra da Tijuca, Rio de Janeiro - RJ",
  whatsappMessage:
    "Olá, vim pelo site da Elus Psicologia e gostaria de saber mais sobre os atendimentos.",
};

export const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;