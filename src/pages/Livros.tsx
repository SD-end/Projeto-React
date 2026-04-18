import ListaLivros from "../componentes/ListaLivros";
import { useLivros } from "../context/useLivros";

function Livros() {
  
  const { livros } = useLivros();
  
  return (
    <section className="container ms-md-2">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mb-4">Livros</h2>
        </div>
      </div>

      <div className="row">
        <ListaLivros livros={livros} />
      </div>
    </section>
  );
}

export default Livros;
