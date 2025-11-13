import './header.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = (username="User") => {
    return (
        <Container>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container fluid="lg" className="header">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav navbarScroll>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link href="#log">Log</Nav.Link>
                            <NavDropdown title="Social" id="social-dropdown">
                                <NavDropdown.Item>Friends</NavDropdown.Item>
                                <NavDropdown.Item>Groups</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Find a Game</NavDropdown.Item>
                            </NavDropdown>
                            <Navbar.Text>
                                Signed in as: <a href="#profile">{username}</a>
                            </Navbar.Text>
                        </Nav>
                        <Form>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Header;