import { useState } from "react";
import type { ReactNode } from "react";
import type { ILivro } from "../interfaces/ILivro";
import { LivrosContext } from "./LivrosContext";
import { livros as dadosIniciais } from "../data/livros";

export const LivrosProvider = ({ children }: { children: ReactNode }) => {
  // Inicializa o estado com os dados do arquivo livros.ts
  const [livros, setLivros] = useState<ILivro[]>(dadosIniciais);

  
  const atualizarLivro = (id: number, changes: Partial<ILivro>) => {
    setLivros((prev) =>
      prev.map((livro) =>
        livro.id === id ? { ...livro, ...changes } : livro
      )
    );
  };

  
  const adicionarCarrinho = (id: number) => {
    atualizarLivro(id, { noCarrinho: true });
  };

  
  const removerCarrinho = (id: number) => {
    atualizarLivro(id, { noCarrinho: false });
  };

  
  const comprarLivro = (id: number) => {
    atualizarLivro(id, { comprado: true, noCarrinho: false });
  };

 
  const marcarLido = (id: number) => {
    atualizarLivro(id, { lido: true });
  };

  
  const totalLivros = livros.length;
  const livrosCarrinho = livros.filter(l => l.noCarrinho).length;
  const livrosComprados = livros.filter(l => l.comprado).length;
  const livrosLidos = livros.filter(l => l.lido).length;

  return (
    <LivrosContext.Provider
      value={{
        livros,
        adicionarCarrinho,
        removerCarrinho,
        marcarLido,
        comprarLivro,
        totalLivros,
        livrosCarrinho,
        livrosComprados,
        livrosLidos,
      }}
    >
      {children}
    </LivrosContext.Provider>
  );
};
