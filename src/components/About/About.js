import React from 'react';
import "./About.css";
import myPicture from "../../assets/cover/pic.jpg"
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col } from 'react-bootstrap';

const About = () => {

  return (
    <>
    <Container className="container flex">
    <div className="opening">
        <div className='opening'>
          <h2>Hi, my name is</h2>
          <h1>Oliver Hoang</h1>
          <h1 className="descript">Full-Stack Web Developer</h1>
          <h2>An experienced coding bootcamp graduate with extensive background in Javascript and developing mobile friendly web applications. </h2>
        </div>
    </div>
    <div className="empty"></div>
    </Container>
    <Container className="aboutMe">
    <Row>
      <h1 className='title'>1. About Me <hr></hr></h1>
    <Col xs={6}>
            <main className="about">
              <h2 className="para">I am an experienced coding bootcamp graduate with extensive background in Javascript, HTMLContainer, CSS, developing mobile friendly web applications, and building websites from the ground up.</h2>
              <h2 className="para">Professional strengths include creative problem-solving, written and verbal communication, and time management.</h2>
              <h2 className="para"> Here are some of the techologies I worked with before:</h2>
            </main>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
      </Col>
    <Col xs={6}>
      <br></br>
      <br></br>
        <Image className="picture" src={myPicture} alt= {myPicture} />
      </Col>
    </Row>
    </Container>
      <br></br>
      <br></br>

    </>
  );
}

export default About;
