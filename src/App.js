import React from "react";
import Appbar from "./components/Navbar/Appbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About"
import Project from "./components/Project/Project"
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


function App() {
  return (
    <>
    <Container className= "container" fluid>
    <Appbar></Appbar>
    <About></About>
    <Project></Project>
    <Footer></Footer>
    </Container>
    </>
  );
}

export default App;
