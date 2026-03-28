import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="nav nav-pills justify-content-center flex-md-column bg-light p-2 mt-md-5 border rounded m-2">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/Livros" className="nav-link">
        Livros
      </NavLink>

      <NavLink to="/Personagens" className="nav-link">
        Personagens
      </NavLink>
    </nav>
  );
}

export default Menu;