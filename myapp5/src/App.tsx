import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from './components/NavBar';
import Cards from './components/Cards';
import Breeds from './pages/Breeds';
import Inicio from './pages/home';
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index Component={Inicio}/>
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
      <Row>
      </Row>
    </BrowserRouter>
    </>
  );
}

export default App;