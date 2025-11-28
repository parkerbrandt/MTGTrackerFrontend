import './home.css'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import News from '../../components/News';


/*
* Render the Login Page and then the Home Page if the user is logged in
*/
const Home = () => {
  
  // Variables
  

  /*
  * Login Page
  */
  const LoginPage = () => {
    return (
      <Container>
        <Row>

        </Row>
      </Container>
    );
  }


  /*
  * Home Page
  */
  const HomePage = () => {
    return  (
      <Container fluid>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col>
            <h1 className="welcome">Track Your TCG Games!</h1>
          </Col>
        </Row>
        <Row>
          <Col><News /></Col>
          <Col><h3>Featured</h3></Col>
          <Col><h3>Your Updates</h3></Col>
        </Row>
        <Row>
          <Col><h3>Looking for Players</h3></Col>
        </Row>
        <Row>
          <Col><Footer /></Col>
        </Row>
      </Container>
    );
  }


  return (
    <div className="App">
      <HomePage/>
    </div>
  );

}

export default Home;
