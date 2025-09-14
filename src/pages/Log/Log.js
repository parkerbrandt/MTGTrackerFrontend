import "./log.css"

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';

import Footer from "../../components/Footer";
import Header from "../../components/Header";



// TODO: Get list of formats from server and display that way
// TODO: Loading Symbol
const Log = () => {

    // TODO: Change to request

    const formats = {
        "CDH": ["Canadian Highlander", 2],
        "EDH": ["Commander", 4],
        "LGC": ["Legacy", 2],
        "MDN": ["Modern", 2],
        "PPR": ["Pauper", 2],
        "PNR": ["Pioneer", 2],
        "STD": ["Standard", 2],
        "THD": ["Two Headed Dragon", 4]
    };
    
    const [players, setPlayers] = useState([]);
    const [selectedFormat, setSelectedFormat] = useState("");

    /*
    * Helper Functions
    */ 
    function isFormComplete() {
        return true;
    }


    /*
    * Handler Functions
    */
    function handleFormatChange(e) {
        setSelectedFormat(e.target.value);
    }

    function handleSubmit(e) {
        if (isFormComplete()) {
            // Form is complete, log the game
        } else {
            // Form is incomplete, display error message
        }
    }


    /*
    * First Render Hook
    */
    useEffect(() => {
        // Get formats from the server
    }, []);


    /*
    * Every Render Hook
    */
    useEffect(() => {

    });


    /*
    * Hooks for changes
    */
    useEffect(() => {

    }, [selectedFormat])


    /*
    * Child Components
    */
    

    /*
    * Rendering
    */ 
    return (
        <Container fluid="lg" className="App">
            <Row>
                <Col><Header /></Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="block">Log</h1>
                </Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group controlId="logForm.DateInput">
                        <Form.Label><b>DATE: </b></Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="logForm.FormatInput">
                        <Form.Label><b>FORMAT: </b></Form.Label>
                        {
                            Object.keys(formats).map((e) => (
                                    <Form.Check 
                                        inline
                                        type={"radio"}
                                        id={`${e}`}
                                        label={`${formats[e][0]}`}
                                    />
                            ))
                        }
                    </Form.Group>
                    <Form.Group controlId="logForm.PlayerInput">
                        <Form.Label><b>PLAYERS: </b></Form.Label>
                    </Form.Group>
                    <Form.Group controlId="logForm.DeckInput">
                        <Form.Label><b>DECKS: </b></Form.Label>
                    </Form.Group>
                    <Form.Group controlId="logForm.OutcomeInput">
                        <Form.Label><b>OUTCOME: </b></Form.Label>
                    </Form.Group>
                    <Form.Group controlId="logForm.OptionalInput">
                        <Form.Label><b>OPTIONAL: </b></Form.Label>
                    </Form.Group>
                    <Form.Group controlId="logForm.CommentInput">
                        <Form.Label><b>COMMENTS: </b></Form.Label>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Log;