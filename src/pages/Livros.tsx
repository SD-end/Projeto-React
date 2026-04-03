import ListaLivros from "../componentes/ListaLivros";
import { livros } from "../Data/livros";

function Livros() {
  return (
    <section className="container ms-md-2">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Livros</h2>
        </div>
      </div>

      <div className="row">
        <ListaLivros livros={livros} />
      </div>
    </section>
  );
}

export default Livros;