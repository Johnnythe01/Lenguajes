import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ListaHoteles } from '../datos/ListaHoteles';

function Hoteles() {
  return (
    <Row>
      {ListaHoteles.map((filas, indice) =>
        <Col>
          <div className='text-center'>
            <img src={filas.imagen} style={{ height: '330px', width: '330px' }} />
            <h1>{filas.Hotel}</h1>
            <p>Ubicación: {filas.calle}</p>
            <p>Precio: {filas.precio}</p>
            <p>Disponible: {filas.disponible ? "Si" : "No"}</p>
          </div>
        </Col>)}
    </Row>
  );
}

export default Hoteles;