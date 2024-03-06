import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import PuntosDeInteres from './Components/PuntosInteres';
import Restaurantes from './Components/Restaurantes';
import Hoteles from './Components/Hoteles';
import ActividadesDeOcio from './Components/ActividadesOcio';

 function App () {
  return (
    <div classname="App">
      <h1>Guia turistica</h1>
        <Navbar />
      </div>
  );
}

export default App;