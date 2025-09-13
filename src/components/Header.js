import './header.css'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container fluid="lg" className='header'>
            <Row className='header-left'>
                <Col>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/profile">Profile</Link>
                    <Link className="links" to="/log">Log</Link>
                    <Link className="links" to="/">Logout</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;