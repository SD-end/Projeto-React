import type { ILivro } from "../interfaces/ILivro";

// Importando da pasta correta que existe no seu projeto
import got from "../Imagens/Livro_1.webp";
import clash from "../Imagens/Livro_2.png";
import storm from "../Imagens/Livro_3.jpg";
import feast from "../Imagens/Livro_4.png";
import dance from "../Imagens/Livro_5.webp";

export const livros: ILivro[] = [
  {
    id: 1,
    titulo: "A Game of Thrones",
    autor: "George R. R. Martin",
    ano: 1996,
    sinopse: "Primeiro livro da saga.",
    imagem: got,
    precoFisico: 59.9,
    precoKindle: 29.9,
    lido: false,
    noCarrinho: false,
    comprado: false,
    formato: "fisico",
  },
  {
    id: 2,
    titulo: "A Clash of Kings",
    autor: "George R. R. Martin",
    ano: 1998,
    sinopse: "Segundo livro da saga.",
    imagem: clash,
    precoFisico: 64.9,
    precoKindle: 32.9,
    lido: false,
    noCarrinho: false,
    comprado: false,
    formato: "kindle",
  },
  {
    id: 3,
    titulo: "A Storm of Swords",
    autor: "George R. R. Martin",
    ano: 2000,
    sinopse: "Terceiro livro da saga.",
    imagem: storm,
    precoFisico: 69.9,
    precoKindle: 34.9,
    lido: false,
    noCarrinho: false,
    comprado: false,
    formato: "fisico",
  },
  {
    id: 4,
    titulo: "A Feast for Crows",
    autor: "George R. R. Martin",
    ano: 2005,
    sinopse: "Quarto livro da saga.",
    imagem: feast,
    precoFisico: 62.9,
    precoKindle: 31.9,
    lido: false,
    noCarrinho: false,
    comprado: false,
    formato: "kindle",
  },
  {
    id: 5,
    titulo: "A Dance with Dragons",
    autor: "George R. R. Martin",
    ano: 2011,
    sinopse: "Quinto livro da saga.",
    imagem: dance,
    precoFisico: 74.9,
    precoKindle: 36.9,
    lido: false,
    noCarrinho: false,
    comprado: false,
    formato: "fisico",
  },
];
