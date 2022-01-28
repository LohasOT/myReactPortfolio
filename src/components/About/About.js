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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'https://www.google.com',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'https://www.google.com',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    link: 'https://www.google.com',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    link: 'https://www.google.com',
  },
];

const About = () => {
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
        <h1>1. About Me <hr></hr></h1>
        <Grid className="about" container spacing={2}>
          <Grid className="about" item xs={5} md={5}>
            <Item className="about">
              <main xs={5}>
              <h2>I am an experienced coding bootcamp graduate with extensive background in Javascript, HTMLContainer, CSS, developing mobile friendly web applications, and building websites from the ground up. Professional strengths include creative problem-solving, written and verbal communication, and time management.</h2>
            </main>
            </Item >
          </Grid>
          <Grid className="about" item xs={7} md={7}>
            <Item className="about">
              <img src={myPicture} xs={7} md={7} />
            </Item>
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <br></br>
    </>
  );
}

export default About;
