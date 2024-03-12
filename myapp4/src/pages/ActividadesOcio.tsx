import React from 'react';
import { Col, Row } from "react-bootstrap";
import { ListaOcio } from '../datos/ListaOcio';

function ActividadesLectura () {
  return (
    <Row>
      {ListaOcio.map((filas, indice) =>
        <Col>
          <div className='text-center'>
            <img src={filas.imagen} style={{ height: '270px', width: '350px' }} />
            <h1>{filas.Actividad}</h1>
            <p>Ubicación: {filas.calle}</p>
            <p>Precio: {filas.precio}</p>
            <p>Disponible: {filas.disponible ? "Si" : "No"}</p>
          </div>
        </Col>)}
    </Row>
  );
}

export default ActividadesLectura;