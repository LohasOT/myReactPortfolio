import React from 'react';
import "./About.css";
import myPicture from "../../assets/cover/photo.jpg"
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col } from 'react-bootstrap';

const About = () => {

  return (
    <>
      <br></br><br></br><br></br><br></br>
    <Container fluid className="aboutMe">
    <Row id='aboutMe'>
      <Col xs={1} md={1}></Col>
      <Col xs={11} md={11}>
      <h1 className='title'>About Me</h1>
      </Col>
    </Row>
          <hr className='line'></hr>
    <Row>
    <Col xs={0} md={1}></Col>
    <Col xs={12} md={5}>
            <main className="about">
              <h2 className="para">I am an experienced coding bootcamp graduate with extensive background in Javascript, HTML, CSS, developing mobile friendly web applications, and building websites from the ground up.</h2>
              <h2 className="para">Professional strengths include creative problem-solving, written and verbal communication, and time management.</h2>
              <h2 className="para"> Here are some of the techologies I worked with before:</h2>
            </main>
            <br></br>
            <Row>
              <Col xs={6} md={6}>
            <h3 className="para" >Front-end Proficiencies</h3>
            <li className="para">HTML</li>
            <li className="para">CSS</li>
            <li className="para">JavaScript</li>
            <li className="para">jQuery</li>
            <li className="para">responsive design</li>
            <li className="para">React</li>
            <li className="para">Bootstrap</li>
              </Col>
              <Col xs={6} md={6}>
            <h3 className="para">Back-end Proficiencies</h3>
            <li className="para">APIs</li>
            <li className="para">Node</li>
            <li className="para">Express</li>
            <li className="para">MySQL, Sequelize</li>
            <li className="para">MongoDB, Mongoose</li>
            <li className="para">REST</li>
            <li className="para">GraphQL</li>
            </Col>
            </Row>
            <br></br>
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
