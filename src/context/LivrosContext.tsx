import { createContext } from "react";
import type { ILivro } from "../interfaces/ILivro";

export interface LivrosContextType {
  livros: ILivro[];
  adicionarCarrinho: (id: number) => void;
  marcarLido: (id: number) => void;
  comprarLivro: (id: number) => void;

  totalLivros: number;
  livrosCarrinho: number;
  livrosComprados: number;
  livrosLidos: number;
}

export const LivrosContext = createContext<LivrosContextType | undefined>(undefined);