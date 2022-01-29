import React from 'react';
import './Appbar.css';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

const Appbar = () => {

  return (
    <>
      <Navbar className="nav" expand="lg">
        <Container>
          <Navbar.Brand className="name" href="#home">Oliver Hoang</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="links" href="#home">1. About</Nav.Link>
              <Nav.Link className="links" href="#link">2. Works</Nav.Link>
              <Nav.Link className="links" href="#link">3. Contact Me</Nav.Link>
              <Nav.Link className="links" href="#link">4. Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
