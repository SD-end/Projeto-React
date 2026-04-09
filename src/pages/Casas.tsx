import Stark from "../Imagens/Casa-Stark.webp";
import Lannister from "../Imagens/Casa-Lannister.webp";
import Baratheon from "../Imagens/Casa-Baratheon.webp";
import Targaryen from "../Imagens/Casa-Targaryen.webp";
import Mormont from "../Imagens/Casa-Mormont.webp";
import Greyjoy from "../Imagens/Casa-Greyjoy.webp";
import Bolton from "../Imagens/Casa-Bolton.webp";
import Tyrell from "../Imagens/Casa-Tyrell.webp";
import Tully from "../Imagens/Casa-Tully.webp";
import Arryn from "../Imagens/Casa-Arryn.webp";
import Tarly from "../Imagens/Casa-Tarly.webp";
import Martell from "../Imagens/Casa-Martell.webp";
import Frey from "../Imagens/Casa-Frey.webp";
import Hightower from "../Imagens/Casa-Hightower.webp";
import Velaryon from "../Imagens/Casa-Velaryon.webp";
import Cole from "../Imagens/Casa-Cole.webp";
import Strong from "../Imagens/Casa-Strong.webp";

function Casas() {
  return (
    <section className="text-start px-4">
      <div className="row">
              <div className="col-12">
                <h2>Casas</h2>
              </div>
            </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mt-4 g-4">
              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Stark - Os lobos do inverno</h3>
                <img src={Stark} alt="Casa Stark" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um lobo gigante cinza em fundo cinza</li>
                  <li>Lema: O inverno está chegando</li>
                  <li>Local: Winterfell</li>
                </ul>
              </div>
            
              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Lannister - Os leões do ouro</h3>
                <img src={Lannister} alt="Casa Lannister" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um leão dourado rugindo em um fundo carmesim</li>
                  <li>Lema: Ouça meu rugido! (Ouça-me rugir!)</li>
                  <li>Local: Rochedo Casterly</li>
                </ul>
              </div>
            
              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Baratheon - O veado que conquistou a coroa</h3>
                <img src={Baratheon} alt="Casa Baratheon" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um cervo coroado preto em um fundo dourado</li>
                  <li>Lema: Nossa é a fúria</li>
                  <li>Local: Ponta da Tempestade</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Targaryen - O dragão com sede de sangue</h3>
                <img src={Targaryen} alt="Casa Targaryen" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um dragão negro de três cabeças cuspidor de fogo, em um fundo preto. As três cabeças representam Aegon I e suas irmãs Rhaenys e Visenya</li>
                  <li>Lema: Fogo e Sangue</li>
                  <li>Local: Pedra do Dragão</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Mormont - Os resistentes ursos</h3>
                <img src={Mormont} alt="Casa Mormont" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um urso preto em um fundo verde</li>
                  <li>Lema: Aqui estamos nós</li>
                  <li>Localização: Ilha do Urso (Casa do Urso)</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Greyjoy - O terror dos mares</h3>
                <img src={Greyjoy} alt="Casa Greyjoy" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um kraken dourado em um fundo preto</li>
                  <li>Lema: Nós não semeamos</li>
                  <li>Local: Pike</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Bolton - Os torturadores do norte</h3>
                <img src={Bolton} alt="Casa Bolton" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um homem esfolado de cabeça para baixo em um fundo rosa e sangue</li>
                  <li>Lema: Nossas lâminas são afiadas</li>
                  <li>Local: Forte do Pavor</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Tully - A truta fazedora de alianças</h3>
                <img src={Tully} alt="Casa Tully" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Uma truta prateada saltando sobre um fundo ondulante de azul e vermelho</li>
                  <li>Lema: Família, Dever, Honra</li>
                  <li>Local: Correrrio (Sweetwater)</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Tyrell - A rosa de raízes fortes</h3>
                <img src={Tyrell} alt="Casa Tyrell" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Uma rosa dourada em um fundo verde</li>
                  <li>Lema: Crescendo forte</li>
                  <li>Local: Jardim Superior</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Tarly - O caçador destemido</h3>
                <img src={Tarly} alt="Casa Tarly" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um caçador, armado com arco e flecha e espada, em vermelho sobre um fundo verde escuro</li>
                  <li>Lema: Primeiros em Batalha</li>
                  <li>Local: Monte Chifre</li>
                </ul>
              </div>
              
              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Arryn - O falcão que vigia do alto</h3>
                <img src={Arryn} alt="Casa Arryn" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um falcão azul-céu voando acima de uma lua branca, com fundo azul</li>
                  <li>Lema: Tão alto quanto a honra</li>
                  <li>Local: Ninho da Águia</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Martell - A lança que resistiu ao fogo</h3>
                <img src={Martell} alt="Casa Martell" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um sol vermelho perfurado por uma lança dourada em um fundo laranja</li>
                  <li>Lema: Insubmissos, Não Curvados, Não Quebrados</li>
                  <li>Local: Lança Solar</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Frey - Os reguladores da travessia</h3>
                <img src={Frey} alt="Casa Frey" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Duas torres e uma ponte sobre um fundo cinza</li>
                  <li>Lema: Estamos unidos</li>
                  <li>Local: Ramo Verde</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Hightower - O farol da sabedoria</h3>
                <img src={Hightower} alt="Casa Hightower" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um farol de pedra branca com uma chama na ponta</li>
                  <li>Lema: Nós iluminamos o caminho</li>
                  <li>Localização: Oldtown (Antígua), especificamente El Faro</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Cole - A ascensão das marchas</h3>
                <img src={Cole} alt="Casa Cole" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Dez círculos pretos em fundo vermelho</li>
                  <li>Lema: Não há lema definido</li>
                  <li>Local: Marchas Dornesas</li>
                </ul>
              </div>

              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Strong - A força de Harrenhal</h3>
                <img src={Strong} alt="Casa Strong" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Escudo tripartida de azur, vermelho e verde em fundo prateado. Representa os três rios do Tridente.</li>
                  <li>Lema: Não há lema definido</li>
                  <li>Local: Harrenhall</li>
                </ul>
              </div>
              
              <div className="col-12 col-md-6 text-center mb-3 card p-3 casa">
                <h3>Velaryon - Os senhores das marés</h3>
                <img src={Velaryon} alt="Casa Velaryon" className="img-fluid rounded-4"/>
                <ul className="text-start">
                  <li>Brasão: Um cavalo-marinho prateado em fundo verde mar</li>
                  <li>Lema: O velho, o verdadeiro, o bravo</li>
                  <li>Local: High Tide</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Casas;