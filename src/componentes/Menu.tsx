import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";

function Menu() {
  return (
    <>
      <Dashboard />

      <nav className="nav nav-pills flex-column p-3 bg-medieval">
        <h5 className="text-center mb-3" style={{ color: '#c5a059' }}>
          📜 Menu
        </h5>

        <NavLink to="/" className="nav-link mb-2">🏠 Home</NavLink>
        <NavLink to="/livros" className="nav-link mb-2">📚 Livros</NavLink>
        <NavLink to="/casas" className="nav-link">🏰 Casas</NavLink> {/* 👈 corrigido */}
      </nav>
    </>
  );
}

export default Menu;