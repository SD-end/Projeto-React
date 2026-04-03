import { useParams } from "react-router-dom";
import DetalheLivro from "../componentes/DetalheLivro";
import { livros } from "../Data/livros";

function Livro_1() {
  const { id } = useParams();

  const livroEncontrado = livros.find((livro) => livro.id === Number(id));

  if (!livroEncontrado) {
    return (
      <div className="container">
        <h2>Livro não encontrado</h2>
      </div>
    );
  }

  return <DetalheLivro livro={livroEncontrado} />;
}

export default Livro_1;