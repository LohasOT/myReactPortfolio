import React from 'react';
import "./About.css";
import myPicture from "../../assets/cover/pic.jpg"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const About = () => {

  return (
    <>
    <Container className="container">
    <div className="opening">
        <div className='opening' style={{ color: 'white' }}>
          <h2>Hi, my name is</h2>
          <h1>Oliver Hoang</h1>
          <h1 style={{ opacity: .5}}>Full-Stack Web Developer</h1>
          <h2>An experienced coding bootcamp graduate with extensive background in Javascript and developing mobile friendly web applications. </h2>
        </div>
    </div>
    <div className="empty"></div>
    <div className="about">
        <h1 className='title'>1. About Me <hr></hr></h1>
              <main className="about">
              <h2>I am an experienced coding bootcamp graduate with extensive background in Javascript, HTMLContainer, CSS, developing mobile friendly web applications, and building websites from the ground up. Professional strengths include creative problem-solving, written and verbal communication, and time management.</h2>
            </main>

      <img className="picture" src={myPicture} alt= {myPicture} />
      </div>
      </Container>
      <br></br>
      <br></br>

    </>
  );
}

export default About;
