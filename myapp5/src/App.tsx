import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from './components/NavBar';
import Breeds from './pages/Breeds';
import BreedsDetails from './pages/BreedsDetails';
import Inicio from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route index element={<Inicio />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breeds/:id" element={<BreedsDetails />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;