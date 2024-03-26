import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Razas } from '../pages/Breeds';

const NavBar: React.FC = () => {
  const [razas, setRazas] = useState<Razas>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api.key": "live_mcTVh4fpn2L66xOCrz41QwgJdWazS7V74N62rI2Rd21cNDvDaT1m974KaXgNHjNl",
      },
    })
      .then((response) => response.json())
      .then((data: Razas) => {
        setRazas(data);
      });
  }, []);

  const handleSelectRaza = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRazaId = event.target.value;
  };

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
              <Form className="d-flex">
                <Form.Select aria-label="Default select example" onChange={handleSelectRaza}>
                  <option value="">Selecciona una raza</option>
                  {razas.map((raza) => (
                    <option key={raza.id} value={raza.id}>{raza.name}</option>
                  ))}
                </Form.Select>
              </Form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;