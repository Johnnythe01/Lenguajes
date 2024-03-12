import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ListaPuntosInteres } from '../datos/ListaPuntosInteres';

function PuntosDeInteres () {
  return (
    <Row>
      {ListaPuntosInteres.map((filas, indice) =>
        <Col>
          <div className='text-center'>
            <img src={filas.imagen} style={{ height: '220px', width: '200' }} />
            <h1>{filas.Zona}</h1>
            <p>Ubicación: {filas.calle}</p>
            <p>Precio: {filas.precio}</p>
            <p>Disponible: {filas.disponible ? "Si" : "No"}</p>
          </div>
        </Col>)}
    </Row>
  );
}

export default PuntosDeInteres;