import LivroCard from "../componentes/LivroCard";
import Livro_1 from "../Imagens/Livro_1.webp";
import Livro_2 from "../Imagens/Livro_2.png";
import Livro_3 from "../Imagens/Livro_3.jpg";
import Livro_4 from "../Imagens/Livro_4.png";
import Livro_5 from "../Imagens/Livro_5.webp";

function Livros() {
  return (
      <section className="container ms-md-2">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Livros</h2>
          </div>
        </div>
        <div className="row">
          <LivroCard
            id={1}
            imagem={Livro_1}
            titulo="A guerra dos Tronos"
            descricao="zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz 
                          zzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz"
          />
          <LivroCard
            id={2}
            imagem={Livro_2}
            titulo="A Fúria dos Reis"
            descricao="zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz 
                          zzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz"
          />
          <LivroCard
            id={1}
            imagem={Livro_3}
            titulo="Livro 3"
            descricao="zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz 
                          zzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz"
          />
          <LivroCard
            id={1}
            imagem={Livro_4}
            titulo="Livro 4"
            descricao="zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz 
                          zzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz"
          />
          <LivroCard
            id={1}
            imagem={Livro_5}
            titulo="Livro 5"
            descricao="zzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzzzzzzzz 
                          zzzzzzzzzzzzzzzzzzzzzzzzzzzzz zzzzzzzzzzzzzzzzzz"
          />
        </div>
      </section>  
  );
}

export default Livros;