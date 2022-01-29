import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
  return (
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1 className='title3'>3. What's Next?</h1>
    <h1 className='miniTitle'>Let's Get In Touch <hr></hr></h1>
    <br></br>
    <Row>
    <Col md="4"></Col>
    <Col md="3">
    <h3 className='contactInfo'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h3>
    </Col>
    <Col md="4"></Col>
    </Row>
    <br></br>
    <Row>
    <Col xs="4" md="5"></Col>
    <Col className='buttonBox' xs="3" md="2">
    <Button className='button' onClick={() => window.location = 'mailto:oliverhoang93@gmail.com'}>ContactMe</Button>
    </Col>
    <Col xs="5" md="5"></Col>
    </Row>
    </>
  );
}
export default Contact;
