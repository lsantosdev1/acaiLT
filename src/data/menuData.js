// src/data/menuData.js

export const menuCategories = [
  { id: "all", label: "Todos" },
  { id: "combos", label: "Combos & Promos" },
  { id: "copos", label: "Copos Tradicionais" },
  { id: "especiais", label: "Copos Especiais" },
];

export const products = [
  {
    id: 1,
    name: "Combo Casal Premium",
    description:
      "2 Copos de 500ml com direito a 4 adicionais e 2 caldas cada. Perfeito para dividir e saborear.",
    price: 34.9,
    category: "combos",
    tag: "Mais Vendido",
    image:
      "https://media.istockphoto.com/id/1451850592/pt/foto/acai-cups-with-fruits-and-cereal-on-the-table-ready-to-eat-in-summer-weather.jpg?s=1024x1024&w=is&k=20&c=xx3CIRpOjnLQbcSDf32pCy_JedG2jDw1SXsLF-QbSr8=",
  },
  {
    id: 2,
    name: "Açaí Turbinado",
    description:
      "Copo de 700ml montado com camadas generosas de leite em pó, Nutella legítima, morango e banana.",
    price: 22.0,
    category: "especiais",
    tag: "Destaque",
    image:
      "https://media.istockphoto.com/id/1451849887/pt/foto/acai-bowl-with-banana-granola-and-condensed-milk-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Ptih1oQ5wcrdz9drFJZrmHSzaUHLw2DysPg8HHBoXKY=",
  },
  {
    id: 3,
    name: "Açaí Clássico 500ml",
    description:
      "O puro açaí artesanal batido na hora, acompanhado de granola crocante e fatias de banana fresca.",
    price: 16.5,
    category: "copos",
    tag: null,
    image:
      "https://media.istockphoto.com/id/1454467126/pt/foto/hand-holding-glass-of-brazilian-acai-with-strawberry-and-granola-brazilian-popular-food.jpg?s=1024x1024&w=is&k=20&c=4iVPf3vFZrF1-MYphr4TS3wMFBdoUc_jmh4tQ_NdVI4=",
  },
  {
    id: 4,
    name: "Copo Sensação",
    description:
      "Copo de 400ml com açaí cremoso, morango fresco, raspas de chocolate meio amargo e calda artesanal de morango.",
    price: 18.9,
    category: "especiais",
    tag: "Novo",
    image:
      "https://media.istockphoto.com/id/1255137561/pt/foto/falling-fruits-in-a-cup-of-acai-with-slash.jpg?s=1024x1024&w=is&k=20&c=4RMj_aeZIEVAM6HmQmGMbz8mhHg_Rz8MhIOrUk3Q28U=",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Cliente VIP",
    comment:
      "O melhor açaí que já provei! Chega impecável e super congelado. O Combo Casal virou lei aqui em casa nos finais de semana.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Guia Local",
    comment:
      "O atendimento pelo WhatsApp é extremamente ágil e educado. Os adicionais são claramente premium, a Nutella é de verdade. Recomendo muito!",
    rating: 5,
  },
];

// NOVOS DADOS PARA AS FUNCIONALIDADES DE CONVERSÃO
export const availableToppings = [
  { id: "top_leite_ninho", name: "Leite Ninho" },
  { id: "top_morango", name: "Morango Fresco" },
  { id: "top_granola", name: "Granola Crocante" },
  { id: "top_nutella", name: "Nutella Legítima" },
  { id: "top_banana", name: "Banana em Rodelas" },
  { id: "top_ovomaltine", name: "Ovomaltine" },
];

export const deliveryNeighborhoods = [
  { id: "centro", name: "Centro", fee: 4.0 },
  { id: "bairro_norte", name: "Bairro Norte", fee: 6.5 },
  { id: "bairro_sul", name: "Bairro Sul", fee: 7.0 },
  { id: "bairro_oeste", name: "Vila Nova", fee: 5.0 },
];

export const activeCoupons = {
  PRIMEIRACOMPRA: { type: "percentage", value: 10 }, // 10% de desconto
  ACAITOP: { type: "fixed", value: 5.0 }, // R$ 5,00 de desconto fixo
};
