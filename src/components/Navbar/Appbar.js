import React from 'react';
import './Appbar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


window.onscroll = function (e) {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector('nav');
  var height = -header.clientHeight;
  header.style.transition = 'transform 0.1s';

  (scrollY <= Math.max(this.lastScroll, 50) || window.innerWidth <= 1200 || this.loaded === undefined)
    ? header.style.transform = 'translateY(0px)'
    : header.style.transform = 'translateY(' + height + 'px)'

  this.lastScroll = scrollY;
  this.loaded = true;
}


const Appbar = () => {
  return (
    <>
      <Navbar id="nav" expand="lg">
        <Container>
          <Navbar.Brand className="name" href="#home">Oliver Hoang</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="links" href="#aboutMe">About</Nav.Link>
              <Nav.Link className="links" href="#works">Works</Nav.Link>
              <Nav.Link className="links" href="#contactMe">Contact Me</Nav.Link>
              <Nav.Link className="links" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1DvWV4wpITVhZVyjQkzXxSumAnaMgZwLP/view?usp=sharing">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
