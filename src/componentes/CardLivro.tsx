import { Link } from "react-router-dom";
import type { ILivro } from "../interfaces/ILivro";
import { useLivros } from "../context/useLivros";


interface CardLivroProps {
  livro: ILivro;
}

function CardLivro({ livro }: CardLivroProps) {
  const { adicionarCarrinho, marcarLido } = useLivros();

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <article
        className={`card h-100 shadow-sm ${
          livro.comprado ? "border-success" : ""
        }`}
      >
        <img
          src={livro.imagem}
          alt={livro.titulo}
          className="card-img-top"
          style={{ height: "500px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{livro.titulo}</h5>

          <p className="card-text mb-1">
            <strong>Autor:</strong> {livro.autor}
          </p>

          <p className="card-text mb-1">
            <strong>Ano:</strong> {livro.ano}
          </p>

          <p className="card-text mb-1">
            <strong>Físico:</strong> R$ {livro.precoFisico}
          </p>

          <p className="card-text mb-3">
            <strong>Kindle:</strong> R$ {livro.precoKindle}
          </p>

          
          <div className="mt-auto d-flex flex-column gap-2">
            
            
            <button
              className="btn btn-warning"
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
              className="btn btn-secondary"
              disabled={livro.lido}
              onClick={() => marcarLido(livro.id)}
            >
              {livro.lido ? "📖 Já lido" : "📖 Marcar como lido"}
            </button>

            
            <Link
              to={`/livros/${livro.id}`}
              className="btn btn-dark"
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CardLivro;

