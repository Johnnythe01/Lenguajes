import React from 'react';
import { Link } from 'react-router-dom';

const BarraNav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Guía de Gatos</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Breeds">Razas de Gatos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Curiosidades">Curiosidades</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BarraNav;