export interface ILivro {
  id: number;
  titulo: string;
  autor: string;
  ano: number;
  sinopse: string;
  imagem: string;
  precoFisico: number;
  precoKindle: number;
  lido: boolean;
  noCarrinho: boolean;
  comprado: boolean;
  formato: "fisico" | "kindle";
}