import productCaderno from "@/assets/product-caderno.jpg";
import productKit from "@/assets/product-kit.jpg";
import productMochila from "@/assets/product-mochila.jpg";
import productLivro from "@/assets/product-livro.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "caderno-inteligente",
    name: "Caderno Inteligente",
    shortDescription: "Caderno com sistema de folhas removíveis e organização prática.",
    description:
      "O Caderno Inteligente é perfeito para quem busca organização e praticidade nos estudos. Com sistema de folhas removíveis, você pode reorganizar suas anotações da forma que preferir. Capa resistente e design moderno que acompanha você em todas as aulas.",
    price: 49.9,
    image: productCaderno,
  },
  {
    id: "kit-escolar",
    name: "Kit Escolar Completo",
    shortDescription: "Kit completo com lápis, canetas, borracha, régua e muito mais.",
    description:
      "Nosso Kit Escolar Completo reúne tudo o que você precisa para começar o ano letivo com o pé direito. Inclui lápis de cor, canetas coloridas, borracha, apontador, régua e estojo organizador. Materiais de alta qualidade e durabilidade garantida.",
    price: 89.9,
    image: productKit,
  },
  {
    id: "mochila-escolar",
    name: "Mochila Escolar",
    shortDescription: "Mochila colorida, resistente e confortável para o dia a dia escolar.",
    description:
      "A Mochila Escolar NAJU.Educa foi pensada para o conforto e a diversão dos pequenos. Com alças acolchoadas, compartimentos organizadores e design colorido, ela é a companheira ideal para levar todos os materiais com segurança e estilo.",
    price: 129.9,
    image: productMochila,
  },
  {
    id: "livro-educacional",
    name: "Livro Educacional Infantil",
    shortDescription: "Livros ilustrados para estimular o aprendizado e a criatividade.",
    description:
      "Nossos livros educacionais são cuidadosamente selecionados para estimular a curiosidade e o aprendizado das crianças. Com ilustrações coloridas e conteúdo pedagógico, são perfeitos para leitura em casa ou na escola.",
    price: 34.9,
    image: productLivro,
  },
];

export const WHATSAPP_NUMBER = "5535987893234";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppProductUrl(productName: string) {
  const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}`);
  return `${WHATSAPP_URL}?text=${message}`;
}
