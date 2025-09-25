import './header.css'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid="lg" className="header">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#log">Log</Nav.Link>
                    <NavDropdown title="Social" id="social-dropdown">
                        <NavDropdown.Item>Friends</NavDropdown.Item>
                        <NavDropdown.Item>Groups</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Find a Game</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;