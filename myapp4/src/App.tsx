import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import PuntosDeInteres from './components/PuntosDeInteres';
import Restaurantes from './components/Restaurantes';
import Hoteles from './components/Hoteles';
import ActividadesDeOcio from './components/ActividadesDeOcio';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/puntos-de-interes" component={PuntosDeInteres} />
          <Route path="/restaurantes" component={Restaurantes} />
          <Route path="/hoteles" component={Hoteles} />
          <Route path="/actividades-de-ocio" component={ActividadesDeOcio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;