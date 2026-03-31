import type { ILivro } from "../interfaces/ILivro";

interface DetalheLivroProps {
  livro: ILivro;
}

function DetalheLivro({ livro }: DetalheLivroProps) {
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
            <p><strong>Sinopse:</strong> {livro.sinopse}</p>
            <p><strong>Preço Físico:</strong> R$ {livro.precoFisico}</p>
            <p><strong>Preço Kindle:</strong> R$ {livro.precoKindle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalheLivro;