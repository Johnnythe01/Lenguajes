import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Armas from './pages/Fantasia';
import Inicio from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route index element={<Inicio />} />
            <Route path="/Fantasia" element={<Armas />} />
          </Routes>
        </Container>
      </BrowserRouter>
      </div>
  );
}

export default App;
