import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Armas } from '../pages/Fantasia';

const NavBar: React.FC = () => {
  const [armas, setArmas] = useState<Armas>([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Johnnythe01/Lenguajes/main/myapp6/data.json", {
    })
      .then((response) => response.json())
      .then((data: Armas) => {
        setArmas(data);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Guía de Armas</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Fantasia">Tipos de Armas</Link>
            </li>
            <li className="nav-item">
              {/* <Form className="d-flex">
                <Form.Select aria-label="Default select example">
                  <option value="">Selecciona un arma</option>
                  {armas.map((arma) => (
                    <option key={arma.id} value={arma.id}>
                      <Link to={`/Fantasia/${arma.id}`}>{arma.nombre}</Link>
                    </option> */}
                  {/* ))} */}
                {/* </Form.Select> */}
              {/* </Form> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;