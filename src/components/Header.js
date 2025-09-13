import './header.css'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container className='header'>
            <Row className='header-left'>
                <Col><Link className="text" to="/">Home</Link></Col>
                <Col><Link className="text" to="/profile">Profile</Link></Col>
                <Col><Link className="text" to="/log">Log</Link></Col>
                <Col><Link className="text" to="/">Logout</Link></Col>
            </Row>
        </Container>
    );
}

export default Header;