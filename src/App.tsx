import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";
import Livro_1 from "./pages/Livro_1";

import Home from "./pages/Home";
import Livros from "./pages/Livros";
import Personagens from "./pages/Personagens";

function App() {
  return (
    <BrowserRouter>
    
      <div className="container-fluid fundo">
        <div className="row">
          <Header />
          <aside className="col-12 col-md-3 container mt-3 mt-md-4 order-1 order-md-2">
            <Menu />
          </aside>

          <main className="col-12 col-md-9 container mt-4 order-2 order-md-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Livros" element={<Livros />} />
              <Route path="/Personagens" element={<Personagens />} />
              <Route path="/livros/:id" element={<Livro_1 />} />
            </Routes>
          </main>
        </div>  

        <Footer />
      </div>  
    </BrowserRouter>
  );
}

export default App;