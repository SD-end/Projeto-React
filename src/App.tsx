import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LivrosProvider } from "./context/LivrosProvider";

import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";

// Páginas
import Home from "./pages/Home";
import Livros from "./pages/Livros";
import Casas from "./pages/Casas"; 
import Livro_1 from "./pages/Livro_1";

function App() {
  return (
    <LivrosProvider>
      <BrowserRouter>
        <Header />

        <div className="container-fluid">
          <div className="row">
            
            <aside className="col-12 col-md-3 mt-3 mt-md-4 order-1 order-md-2">
              <Menu />
            </aside>

            <main className="col-12 col-md-9 mt-2 mt-md-4 px-2 px-md-3 order-2 order-md-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/casas" element={<Casas />} /> {/* 👈 corrigido */}
                <Route path="/livros/:id" element={<Livro_1 />} />
              </Routes>
            </main>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </LivrosProvider>
  );
}

export default App;
