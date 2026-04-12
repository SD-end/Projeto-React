import { Link } from "react-router-dom";
import { useLivros } from "../context/useLivros";
import type { ILivro } from "../interfaces/ILivro";

interface CardLivroProps {
  livro: ILivro;
}

function CardLivro({ livro }: CardLivroProps) {
  const { adicionarCarrinho, comprarLivro, marcarLido } = useLivros();

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <article className="card h-100 shadow-sm">
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
            <strong>Físico:</strong> R$ {livro.precoFisico.toFixed(2)}
          </p>

          <p className="card-text mb-3">
            <strong>Kindle:</strong> R$ {livro.precoKindle.toFixed(2)}
          </p>

          {/* Status do Livro */}
          <div className="mb-2">
            {livro.noCarrinho && (
              <span className="badge bg-warning text-dark me-1">
                🛒 No Carrinho
              </span>
            )}
            {livro.comprado && (
              <span className="badge bg-success me-1">
                💰 Comprado
              </span>
            )}
            {livro.lido && (
              <span className="badge bg-primary">
                📖 Lido
              </span>
            )}
          </div>

          {/* Botões de Ação */}
          <div className="d-flex flex-wrap gap-2 mb-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => adicionarCarrinho(livro.id)}
              disabled={livro.comprado}
            >
              🛒 Carrinho
            </button>

            <button
              className="btn btn-success btn-sm"
              onClick={() => comprarLivro(livro.id)}
              disabled={livro.comprado}
            >
              💰 Comprar
            </button>

            <button
              className="btn btn-primary btn-sm"
              onClick={() => marcarLido(livro.id)}
              disabled={livro.lido}
            >
              📖 Lido
            </button>
          </div>

          <Link to={`/livros/${livro.id}`} className="btn btn-dark mt-auto">
            Ver detalhes
          </Link>
        </div>
      </article>
    </div>
  );
}

export default CardLivro;

