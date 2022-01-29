import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
  return (
    <>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1 id='contactMe' className='title3'>3. What's Next?</h1>
    <h1 className='miniTitle'>Let's Get In Touch <hr></hr></h1>
    <br></br>
    <div className='contactBox'>
    <h3 className='contactInfo'>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h3>
    </div>
    <br></br>
    <div className='buttonBox'>
        <Button className='button' variant="outline-warning" onClick={() => window.location = 'mailto:oliverhoang93@gmail.com'}>Contact Me</Button>
    </div>
      <br></br><br></br><br></br>
    </>
  );
}
export default Contact;
