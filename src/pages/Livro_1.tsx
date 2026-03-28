import { useParams } from "react-router-dom";

function Livro_1() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Detalhe do Livro {id}</h2>
    </div>
  );
}

export default Livro_1;