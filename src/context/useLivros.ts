import { useContext } from "react";
import { LivrosContext } from "./LivrosContext";

export const useLivros = () => {
  const context = useContext(LivrosContext);

  if (!context) {
    throw new Error("useLivros deve ser usado dentro do LivrosProvider");
  }

  return context;
};