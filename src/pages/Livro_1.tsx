import { useParams } from "react-router-dom";
import DetalheLivro from "../componentes/DetalheLivro";
import { useLivros } from "../context/useLivros"; 

function Livro_1() {
  const { id } = useParams();
  const { livros } = useLivros(); 

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
