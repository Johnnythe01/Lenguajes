import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ListaRestaurantes } from '../datos/ListaRestaurantes';

function Restaurantes () {
  return (
    <Row>
      {ListaRestaurantes.map((filas, indice) =>
        <Col>
          <div className='text-center'>
            <img src={filas.imagen} style={{ height: '300px', width: '300px' }} />
            <h1>{filas.Restaurante}</h1>
            <p>Ubicación: {filas.calle}</p>
            <p>Precio: {filas.precio}</p>
            <p>Disponible: {filas.disponible ? "Si" : "No"}</p>
          </div>
        </Col>)}
    </Row>
  );
}

export default Restaurantes;