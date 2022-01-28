import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import myPicture from '../../assets/cover/pic.jpg'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import "./About.css";

const About = () => {
  
  return (
    <>
    <Container className="opening">
        <div className='opening' style={{ color: 'white' }}>
          <h2>Hi, my name is</h2>
          <h1>Oliver Hoang</h1>
          <h1 style={{ opacity: .5}}>Full-Stack Web Developer</h1>
          <h2>An experienced coding bootcamp graduate with extensive background in Javascript and developing mobile friendly web applications. </h2>
        </div>
    </Container>
    <Container className="empty"></Container>
    <Container className="about">
        <h1 className='title'>1. About Me <hr></hr></h1>
              <main>
              <h2>I am an experienced coding bootcamp graduate with extensive background in Javascript, HTMLContainer, CSS, developing mobile friendly web applications, and building websites from the ground up. Professional strengths include creative problem-solving, written and verbal communication, and time management.</h2>
            </main>
        <img className="picture" src={myPicture} alt={myPicture}/>

      </Container>
      <br></br>
      <br></br>
    </>
  );
}

export default About;
