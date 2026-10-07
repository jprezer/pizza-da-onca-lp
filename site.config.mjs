export default {
  preset: "warm",

  brand: {
    name: "Pizza da Onça",
    shortName: "PO",
    tagline: "Massa, fogo e noite boa em Araucária.",
    logo: "/assets/pizza-da-onca-logo.png",
    logoAlt: "Pizza da Onça",
    wordmarkLines: ["Pizza", "da Onça"],
  },

  seo: {
    title: "Pizza da Onça | Pizzaria napolitana em Araucária",
    description:
      "Pizza napolitana em Araucária: forno a lenha, fermentação natural e ingredientes selecionados. Peça online na Pizza da Onça.",
    keywords: [
      "pizza napolitana em Araucária",
      "pizzaria em Araucária",
      "pizza de fermentação natural",
      "pizza no forno a lenha",
      "Pizza da Onça",
    ],
    canonical: "https://pizza-da-onca-one.vercel.app/",
    locale: "pt_BR",
    schemaType: "Restaurant",
  },

  announcement: {
    label: "Araucária · Pizzaria napolitana",
    actionLabel: "Ver cardápio e pedir",
  },

  contact: {
    primaryLabel: "Pedir pelo cardápio",
    footerPrimaryLabel: "Fazer pedido",
    primaryUrl: "https://app.cardapioweb.com/pizza_daonca",
    phone: "+55 41 99705-7094",
    instagramLabel: "Ver Instagram",
    socialLabel: "Instagram",
    instagramUrl: "https://www.instagram.com/apizzadaonca/",
    mapsUrl:
      "https://www.google.com/maps/place/Pizza+da+On%C3%A7a/@-25.5924494,-49.3958425,17z/data=!3m1!4b1!4m6!3m5!1s0x94dd03602b951dfd:0xc5ba2af3a9f4457e!8m2!3d-25.5924494!4d-49.3958425!16s%2Fg%2F11xf121vhb",
  },

  navigation: [
    { label: "A pizza", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Como chegar", href: "#visite" },
  ],

  hero: {
    kicker: "1ª pizzaria napolitana de Araucária",
    title: ["Do forno.", "Para", "a noite."],
    accentLine: 1,
    description:
      "Fermentação natural, ingredientes honestos e o tempo certo de forno. A Pizza da Onça foi feita para transformar uma noite comum em encontro.",
    image:
      "https://storage.googleapis.com/prod-cardapio-web/uploads/company/image/24661/284aefc7img8709jpg_9zt0z9.jpg",
    imageAlt: "Ambiente da Pizza da Onça, pizzaria napolitana em Araucária",
    imagePosition: "60% center",
    proofLabel: "Forno a lenha",
    proofValue: "Fermentação natural",
    scrollLabel: "Conheça a pizza",
  },

  statement: {
    label: "Feita sem atalhos",
    text: "Farinha, tempo, fogo e mãos habilidosas. É assim que uma pizza ganha pinta de onça.",
    accent: "pinta de onça.",
  },

  services: {
    title: "A pizza pede tempo.",
    description:
      "Da massa ao forno, cada escolha respeita a tradição napolitana sem perder o jeito da casa. Escolha a sua e peça direto pelo cardápio online.",
    items: [
      {
        title: "Massa de longa fermentação",
        description:
          "Leve, aerada e preparada com calma para chegar à mesa com textura, sabor e digestibilidade.",
        detail: "Farinha · Água · Tempo",
      },
      {
        title: "Forno a lenha",
        description:
          "Calor intenso, borda marcada e aquele ponto que só o fogo vivo consegue entregar.",
        detail: "Assada em 60 a 90 segundos",
      },
      {
        title: "Sabores para dividir",
        description:
          "Das clássicas Margherita e Pepperoni às receitas da casa, com opções para um encontro ou mesa cheia.",
        detail: "Combos · Salgadas · Doces",
      },
    ],
  },

  gallery: {
    label: "Da casa para a mesa",
    title: "Pizza boa não precisa de atalho.",
    items: [
      {
        image:
          "https://storage.googleapis.com/prod-cardapio-web/uploads/item/image/3799388/eb61b838IMG_1556.PNG",
        alt: "Pizzas napolitanas da Pizza da Onça",
        caption: "Combos para compartilhar",
      },
      {
        image:
          "https://storage.googleapis.com/prod-cardapio-web/uploads/item/image/3799402/933ff37c161b6ea8-7467-4083-bd4f-1731ad2bb3c0.jpg",
        alt: "Pizza artesanal da Pizza da Onça",
        caption: "Ingredientes que falam por si",
      },
    ],
  },

  reviews: {
    label: "Avaliações no Google",
    title: "Uma das favoritas de Araucária.",
    rating: "4,8",
    total: "149 avaliações no Google",
    sourceLabel: "Ver avaliações no Google Maps",
    items: [
      {
        quote:
          "Ambiente maravilhoso e a pizza uma delícia! Vale a pena conhecer e sentir a explosão de sabor. Recomendo demais.",
        author: "Sabrina Diehl",
        score: "5/5 · Google",
      },
      {
        quote:
          "Pizzas de fermentação natural e ingredientes frescos — e entregam isso mesmo. Massa fina e bem assada.",
        author: "Felipe Santos",
        score: "4/5 · Google",
      },
    ],
  },

  location: {
    label: "Venha comer com a gente",
    title: "No centro de Araucária.",
    description:
      "Para pedir em casa, retirar ou sentar à mesa. A Pizza da Onça fica na Av. Archelau de Almeida Tôrres, no coração da cidade.",
    actionLabel: "Traçar rota no Google Maps",
    addressLines: [
      "Av. Archelau de Almeida Tôrres, 698",
      "Centro · Araucária — PR · 83702-185",
    ],
    address: {
      street: "Av. Archelau de Almeida Tôrres, 698",
      city: "Araucária",
      region: "PR",
      postalCode: "83702-185",
      country: "BR",
    },
    hours: [
      "Terça a quinta · 18h às 23h",
      "Sexta e sábado · 18h às 23h30",
      "Domingo e segunda · 18h às 23h",
    ],
    openingHours: [
      {
        days: ["Tuesday", "Wednesday", "Thursday"],
        opens: "18:00",
        closes: "23:00",
      },
      { days: ["Friday", "Saturday"], opens: "18:00", closes: "23:30" },
      { days: ["Sunday", "Monday"], opens: "18:00", closes: "23:00" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Pizza+da+On%C3%A7a,+Av.+Archelau+de+Almeida+T%C3%B4rres,+698,+Arauc%C3%A1ria+-+PR&output=embed",
  },

  theme: {
    accent: "oklch(77% 0.16 82)",
    accentStrong: "oklch(83% 0.17 82)",
    ink: "oklch(14% 0.018 70)",
    paper: "oklch(96% 0.02 85)",
    displayFont: "'DM Serif Display', Georgia, serif",
    bodyFont: "'Manrope', Arial, sans-serif",
    fontGoogle:
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap",
  },
};
