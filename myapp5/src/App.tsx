//import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
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

        <Routes>
          <Route index Component={Inicio} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/breeds/id" element={<BreedsDetails id={""} />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;