import { useLivros } from "../context/useLivros";
import type { ILivro } from "../interfaces/ILivro";

interface DetalheLivroProps {
  livro: ILivro;
}

function DetalheLivro({ livro }: DetalheLivroProps) {

  const { adicionarCarrinho, marcarLido } = useLivros();

  return (
    <section className="container my-4">
      <div className="card shadow-lg p-4">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-md-4 text-center">
            <img
              src={livro.imagem}
              alt={livro.titulo}
              className="img-fluid rounded"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          <div className="col-12 col-md-8">
            <h2 className="mb-3">{livro.titulo}</h2>

            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
            <p><strong>Descrição:</strong> {livro.sinopse}</p>
            
            
            <div className="mt-4 d-flex gap-3">
              
              
              <button
                className="btn btn-warning px-4 py-2"
                disabled={livro.noCarrinho || livro.comprado}
                onClick={() => adicionarCarrinho(livro.id)}
              >
                {livro.noCarrinho
                  ? "🛒 No carrinho"
                  : livro.comprado
                  ? "✔️ Já comprado"
                  : "🛒 Adicionar ao carrinho"}
              </button>

              
              <button
                className="btn btn-secondary px-4 py-2"
                disabled={livro.lido}
                onClick={() => marcarLido(livro.id)}
              >
                {livro.lido ? "📖 Já lido" : "📖 Marcar como lido"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalheLivro;
