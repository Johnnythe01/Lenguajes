import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ListaHoteles } from '../datos/ListaHoteles';

function Hoteles() {
  return (
    <div>
      <h1>Hoteles</h1>
      <p>Los hoteles más importantes y con las mejores ubicaciones de la zona.</p>
      
      <p>Disponible: {filas.disponible ? "Sí" : "No"}</p>
      <p className="card-text"> {filas.precio}</p>
    </div>
  );
}

export default Hoteles;