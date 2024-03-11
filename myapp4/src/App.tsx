import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/NavBar';
import Inicio from './pages/Inicio';
import PuntosDeInteres from './pages/PuntosInteres';
import Restaurantes from './pages/Restaurantes';
import Hoteles from './pages/Hoteles';
import ActividadesDeOcio from './pages/ActividadesOcio';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>Guia turistica</h1> */}
      <Navbar />
      <Routes>
        <Route index Component={Inicio}/>
        <Route path="puntos-de-interes"Component={PuntosDeInteres}/>
        <Route path="restaurantes"Component={Restaurantes}/>
        <Route path="hoteles"Component={Hoteles}/>
        <Route path="actividades-de-ocio"Component={ActividadesDeOcio}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;