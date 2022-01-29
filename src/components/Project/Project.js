import React from 'react';
import './Project.css'
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col, Card, Button } from 'react-bootstrap';

const Project = () => {
  return (
  <>

  <Container fluid>
  <Row>
  <Col xs={5}></Col>
  <Col xs={7}>
  <h1 className='title'>2. Here Are My Works
  </h1>
  </Col>
  </Row>
  <hr className='title'></hr>
  <br></br>
  <br></br>


       {/* card 1 */}
        <Card className='card'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Pocket Change</Card.Title>
            <Card.Text>
              I'm still working on this shit CHILL OUT! LMAO KEKW
            </Card.Text>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://smartbartering.herokuapp.com/login.html"><Button variant="secondary">Deployed Heroku</Button></a>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/bartering"><Button variant="secondary">Github Repo</Button></a>
          </Card.Body>
        </Card>


        <br></br><br></br>

        {/* card 2 */}
      <Row>
      <Col xs={0} md={7}  ></Col>
      <Col xs={12} md={5}>
        <Card className='card'>
          <Card.Img variant="top" src="https://user-images.githubusercontent.com/91640571/148442022-f6e8c8c4-d5b2-44a0-9259-99378e2b1311.png" />
          <Card.Body>
            <Card.Title>Smarter Barter</Card.Title>
            <Card.Text>
              This project demonstrates how to create a web application where a user can be created and added to a database, the ability to sign in and actively use the website, and the ability to post items and comments. 
            </Card.Text>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://smartbartering.herokuapp.com/login.html"><Button variant="secondary">Deployed Heroku</Button></a>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/bartering"><Button variant="secondary">Github Repo</Button></a>
          </Card.Body>
        </Card>
      </Col>
      </Row>
        <br></br><br></br>


        {/* card 3 */}
        <Card className='card'>
          <Card.Img variant="top" src="https://user-images.githubusercontent.com/93016157/144180815-ed7b2f82-88bb-4c49-85c9-5bc75bf7c9cf.png" />
          <Card.Body>
            <Card.Title>Date Night</Card.Title>
            <Card.Text>
              An application where you can find a random food with random movie to have a perfect Date Night with your significant one. 
            </Card.Text>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://smartbartering.herokuapp.com/login.html"><Button variant="secondary">Deployed Heroku</Button></a>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/bartering"><Button variant="secondary">Github Repo</Button></a>
          </Card.Body>
        </Card>


  </Container >


  </>
  );
}

export default Project;
