import React, {useEffect} from 'react';
import './Project.css'
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000})
  }, []);
  return (
  <>

  <Container fluid>
  <Row>
  <Col xs={5}></Col>
  <Col id="works" xs={7}>
  <h1 className='title'>2. Here Are My Works
  </h1>
  </Col>
  </Row>
  <hr className='title'></hr>
  <br></br><br></br><br></br><br></br>


       {/* card 1 */}
    <Row>
    <Col xs={0} md={1}></Col>
    <Col data-aos="flip-up" xs={12} md={7}>
        <Card className='card'>
              <Card.Img variant="top" class="catPic" src="https://user-images.githubusercontent.com/91640571/152278371-86da6352-6cd6-489d-927e-ca93552cf7a7.png" />
          <Card.Body>
            <Card.Title>Pocket Change</Card.Title>
            <Card.Text>
              Pocket Change is a budgeting app that helps users track their expenses on a month to month basis. The user will calculate their income for expenses by inputting their expendable income for the month and percentage that they would like to save for the month. The user will then create their expense report by inputting the category, the goal of how much they would like to spend and what their actual expense was. It will then generate a report.
                  <br></br><br></br>
              <p className="tags">Javascript Dotenv MongoDB Sequelize Passport JsonWebToken React</p>
            </Card.Text>
                <a className='button' rel="noopener noreferrer" target="_blank" href="https://pocketchange.herokuapp.com"><Button variant="secondary">Deployed Heroku</Button></a>
                <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/pocket-change"><Button variant="secondary">Github Repo</Button></a>
          </Card.Body>
        </Card>
        </Col>
      <Col xs={0} md={4}  ></Col>
    </Row>


        <br></br><br></br>

        {/* card 2 */}
      <Row>
      <Col xs={0} md={7}  ></Col>
          <Col data-aos="fade-down" xs={12} md={5}>
            <Card className='card2'>
          <Card.Img variant="top" src="https://user-images.githubusercontent.com/91640571/148442022-f6e8c8c4-d5b2-44a0-9259-99378e2b1311.png" />
          <Card.Body>
            <Card.Title>Smarter Barter</Card.Title>
            <Card.Text>
              Smarter Barter is a trading or bartering app that helps users to trade for items that they are interested in. Users can use their own money or an item that they own to trade for another item that is listed. Users can post their items, comment on the items that they are interested in, and mark their items as traded or not.
              <br></br><br></br>
              <p className="tags">Javascript Dotenv Mysql Sequelize Passport JsonWebToken HTML CSS</p>
            </Card.Text>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://smartbartering.herokuapp.com/login.html"><Button variant="secondary">Deployed Heroku</Button></a>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/bartering"><Button variant="secondary">Github Repo</Button></a>
          </Card.Body>
        </Card>
      </Col>
      </Row>
        <br></br><br></br>


        {/* card 3 */}
      <Row>
        <Col xs={0} md={1}></Col>
          <Col data-aos="slide-right" xs={12} md={7}>
            <Card className='card'>
          <Card.Img className="cardImage" variant="top" src="https://user-images.githubusercontent.com/93016157/144180815-ed7b2f82-88bb-4c49-85c9-5bc75bf7c9cf.png" />
          <Card.Body>
            <Card.Title>Date Night</Card.Title>
            <Card.Text>
              An application where you can find a random food with random movie to have a perfect Date Night with your significant one.
              <br></br><br></br>
              <p className="tags">Javascript API HTML CSS</p> 
            </Card.Text>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://lohasot.github.io/project-ghoat/"><Button variant="secondary">Deployed Page</Button></a>
            <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/project-ghoat"><Button variant="secondary">Github Repo</Button></a>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={0} md={4}  ></Col>
      </Row>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div>
    <h1 className='title2'>Other Noteworthy Works</h1>
    <hr className='title'></hr>
    </div>
    <br></br>
    <div className='link'>
      <Button className='button' variant="outline-warning" rel="noopener noreferrer" target="_blank" href='https://github.com/LohasOT?tab=repositories'>View The Rest On My Github Repo</Button>
    </div>
  </Container >
    <br></br><br></br><br></br><br></br><br></br>
  <Container fluid>
        <CardGroup>
          <Card className="card3">
            <Card.Img variant="top" src="https://user-images.githubusercontent.com/91640571/148659805-4af50c1f-5ee8-44e4-99f0-25abacf76c40.png" />
            <Card.Body>
              <Card.Title>TechBlog</Card.Title>
              <Card.Text>
                This project demonstrates how to create a web application where a user can be created and added to a database, the ability to sign in and actively use the website, and the ability to post and comments.
                <br></br><br></br>
                <p className="tags">Javascript Dotenv Mysql Sequelize Passport JsonWebToken HTML CSS</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a className='button' rel="noopener noreferrer" target="_blank" href="https://nameless-chamber-02132.herokuapp.com/login.html"><Button variant="secondary">Deployed Heroku</Button></a>
              <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/TechBlog"><Button variant="secondary">Github Repo</Button></a>
            </Card.Footer>
          </Card>
          <Card className="card3">
            <Card.Img variant="top" src="https://user-images.githubusercontent.com/91640571/151683692-a5987b89-e534-42f8-89c1-cba2b1cabdfc.png" />
            <Card.Body>
              <Card.Title>SocialNetworkApi</Card.Title>
              <Card.Text>
                API for a social network web application where users can share their thoughts, comment to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.
              <br></br><br></br>
              <p className="tags">Javascript Dotenv MongoDB Sequelize Passport JsonWebToken HTML CSS</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/socialApi"><Button variant="secondary">Github Repo</Button></a>
            </Card.Footer>
          </Card>
          <Card className="card3">
            <Card.Img class="catPic" variant="top" src="https://user-images.githubusercontent.com/91640571/147063641-eb8a1626-69a0-4361-b9d6-5d7f6cfc930b.png" />
            <Card.Body>
              <Card.Title>E-commerce</Card.Title>
              <Card.Text>
                The back end of a retail company that include many products and inventory.
                <br></br><br></br>
                <p className="tags">Javascript Dotenv Sequelize Passport JsonWebToken</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a className='button' rel="noopener noreferrer" target="_blank" href="https://github.com/LohasOT/-E-Commerce-Back-End"><Button variant="secondary">Github Repo</Button></a>
            </Card.Footer>
          </Card>
        </CardGroup>
  </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  </>
  );
}

export default Project;
