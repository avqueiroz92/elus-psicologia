export const site = {
  name: "Elus Psicologia",
  title: "Elus Psicologia | Psicoterapia e Avaliação Neuropsicológica",
  description:
  "Psicoterapia, avaliação neuropsicológica e atendimento online com escuta acolhedora, ética e responsabilidade técnica.",
  url: "https://eluspsicologia.com.br",

  professionalName: "Jessica Albuquerque Vasconcelos",
  crp: "CRP 05/87372",

  phone: "5521967015814",
  email: "psicologa.jessicaalbuquerque@gmail.com",
  instagram: "https://www.instagram.com/elus_psicologia",
  instagramUser: "@elus_psicologia",

  location: "Avenida Ator José Wilker, 605, Barra Olímpica, Jacarepaguá, Rio de Janeiro - RJ, 22775-024",
  whatsappMessage:
    "Olá, vim pelo site da Elus Psicologia e gostaria de saber mais sobre os atendimentos.",
};

export const whatsappLink = `https://wa.me/${site.phone}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;