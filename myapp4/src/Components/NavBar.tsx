import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Guía Turística</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/puntos-de-interes">Puntos de Interés</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restaurantes">Restaurantes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hoteles">Hoteles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/actividades-de-ocio">Actividades de Ocio</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;