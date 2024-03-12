import React from 'react';
import Carrusel from '../components/Carrusel';

function Inicio () {
  return (
    <div className='text-center'>
      <h1>BIENVENIDO!</h1>
      <p>Sea bienvenido a nuestra ciudad ficticia! o real... Tu decides! Esta es una breve descripción de la ciudad.</p>
      <Carrusel />
    </div>
  );
}

export default Inicio;