import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="menu-navegacao">
      <ul>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ color: isActive ? '#007bff' : '#333', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sobre" 
            style={({ isActive }) => ({ color: isActive ? '#007bff' : '#333', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/filmes" 
            style={({ isActive }) => ({ color: isActive ? '#007bff' : '#333', fontWeight: isActive ? 'bold' : 'normal' })}
          >
            Consulta de filmes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;