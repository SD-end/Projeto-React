import { useNavigate } from "react-router-dom";

interface LivroCardProps {
  id: number;
  imagem: string;
  titulo: string;
  descricao: String;
}

function LivroCard({ id, imagem, titulo, descricao }: LivroCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="card mt-2"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/livros/${id}`)}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src={imagem} alt={titulo} className="img-fluid" />
          </div>
          <div className="col-12 col-md-9 text-center">
            <h5>{titulo}</h5>
            <p>{descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivroCard;