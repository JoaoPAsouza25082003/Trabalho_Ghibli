// src/components/navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="menu-navegacao">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/filmes">Consulta de filmes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;