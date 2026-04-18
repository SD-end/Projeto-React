import { useLivros } from "../context/useLivros";

function Carrinho() {
  const { livros, comprarLivro, removerCarrinho } = useLivros();

  const livrosCarrinho = livros.filter((l) => l.noCarrinho);

  const total = livrosCarrinho.reduce((acc, livro) => {
    return acc + (livro.formato === "fisico"
      ? livro.precoFisico
      : livro.precoKindle);
  }, 0);

  return (
    <section>
      <h1 className="mb-4">🛒 Carrinho</h1>

      {livrosCarrinho.length === 0 ? (
        <div className="alert alert-info shadow-sm">
          Nenhum livro no carrinho. Vá até a aba de livros para adicionar alguns!
        </div>
      ) : (
        <>
          <div className="row">
            {livrosCarrinho.map((livro) => (
              <div key={livro.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={livro.imagem}
                    alt={livro.titulo}
                    className="card-img-top"
                    style={{ height: "350px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{livro.titulo}</h5>
                    
                    <p className="card-text text-muted mb-3">
                      💰 <strong>R$ {
                        livro.formato === "fisico"
                          ? livro.precoFisico.toFixed(2)
                          : livro.precoKindle.toFixed(2)
                      }</strong>
                    </p>

                    <div className="mt-auto d-grid gap-2">
                      <button
                        className="btn btn-success"
                        onClick={() => comprarLivro(livro.id)}
                      >
                        ✅ Finalizar Compra
                      </button>
                      
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removerCarrinho(livro.id)}
                      >
                        🗑️ Remover do Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-light border-0 p-4 mt-2 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">Total do Pedido:</h4>
              <h3 className="text-success m-0">R$ {total.toFixed(2)}</h3>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrinho;
