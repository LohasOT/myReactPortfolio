import React from 'react';
import "./About.css";
import myPicture from "../../assets/cover/pic.jpg"
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col } from 'react-bootstrap';

const About = () => {

  return (
    <>
      <br></br><br></br><br></br><br></br>
    <Container fluid>
    <div className="opening">
        <div className='opening'>
          <h2>Hi, my name is</h2>
          <h1>Oliver Hoang</h1>
          <h1 className="descript">Full-Stack Web Developer</h1>
          <h2>An experienced coding bootcamp graduate with extensive background in Javascript, developing, and building mobile first web applications. </h2>
        </div>
    </div>
    <div className="empty"></div>
    </Container>
      <br></br><br></br><br></br><br></br>
    <Container fluid className="aboutMe">
    <Row id='aboutMe'>
      <h1 className='title'>1. About Me <hr></hr></h1>
    <Col xs={0} md={1}></Col>
    <Col xs={12} md={5}>
            <main className="about">
              <h2 className="para">I am an experienced coding bootcamp graduate with extensive background in Javascript, HTMLContainer, CSS, developing mobile friendly web applications, and building websites from the ground up.</h2>
              <h2 className="para">Professional strengths include creative problem-solving, written and verbal communication, and time management.</h2>
              <h2 className="para"> Here are some of the techologies I worked with before:</h2>
            </main>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
      </Col>
    <Col xs={0} md={1}></Col>
    <Col xs={6} md={5}>
      <br></br>
        <Image className="picture" src={myPicture} alt= {myPicture} />
      </Col>
    </Row>
    </Container>
      <br></br>      <br></br>      <br></br>      <br></br>      <br></br>      <br></br>      <br></br>      <br></br>



    </>
  );
}

export default About;
