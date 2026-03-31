import type { ILivro } from "../interfaces/ILivro";
import CardLivro from "./CardLivro";

interface ListaLivrosProps {
  livros: ILivro[];
}

function ListaLivros({ livros }: ListaLivrosProps) {
  return (
    <section>
      <div className="row">
        {livros.map((livro) => (
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </div>
    </section>
  );
}

export default ListaLivros;