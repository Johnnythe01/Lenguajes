import React from 'react';
import Carrusel from '../components/Carrusel';
// import { ListaPuntosInteres } from './ListaPuntosInteres';

function PuntosDeInteres () {
  return (
    
    <div className="card">
      <h1>Puntos de Interés</h1>
      <p>Aquí encontrarás los principales puntos de interés turístico de nuestra ciudad.</p>
      <Carrusel />
    </div>
  );
}

export default PuntosDeInteres;