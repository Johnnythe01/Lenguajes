import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Inicio from './pages/Inicio';
import PuntosDeInteres from './pages/PuntosInteres';
import Restaurantes from './components/Restaurantes';
import Hoteles from './components/Hoteles';
import ActividadesDeOcio from './components/ActividadesOcio';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Guia turistica</h1> */}
      <Navbar />
      <Routes>
        <Route index Component={Inicio}/>
        <Route path="puntos-de-interes"Component={PuntosDeInteres}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;