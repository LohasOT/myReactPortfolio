import React from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
  return (
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1 id='contactMe' className='title3'>What's Next?</h1>
    <h1 className='miniTitle'>Let's Get In Touch <hr></hr></h1>
    <br></br>
    <div className='contactBox'>
    <h3 className='contactInfo'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h3>
    </div>
    <br></br>
    <Container className='containerForm' fluid>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="formLabel">Your Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="formLabel">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              I'll never share your email with anyone else.
            </Form.Text>
          <p className="formLabel">Your Message</p>
          </Form.Group>
          <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Message">
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <Button variant="outline-warning" type="submit">
          Submit Your Message
        </Button>
      </Form>
    </Container>
      <br></br>
      <p className='or'>Or</p>
      <br></br>
    <div className='buttonBox'>
        
        <Button className='button' variant="outline-warning" onClick={() => window.location = 'mailto:oliverhoang93@gmail.com'}>Email Me</Button>
    </div>
      <br></br><br></br><br></br>
    </>
  );
}
export default Contact;
