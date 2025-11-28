import "./log.css"

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import Footer from "../../components/Footer";
import Header from "../../components/Header";



// TODO: Get list of formats from server and display that way
// TODO: Loading Symbol
const Log = () => {

    // TODO: Change to request

    const [formats, setFormats] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);
    const [selectedFormat, setSelectedFormat] = useState("");
    const [validateForm, setValidateForm] = useState(false);

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
            // Form is incomplete, display error message and show invalid fields
            setValidateForm(true);
        }
    }


    /*
    * First Render Hook
    */
    useEffect(() => {
        // Get formats from the server
        // TODO: Could put into async handler
        try {

        } catch(err) {
            console.log("Unable to retrieve formats, using defaults.");
            setFormats({
                "CDH": ["Canadian Highlander", 2],
                "EDH": ["Commander", 4],
                "LGC": ["Legacy", 2],
                "MDN": ["Modern", 2],
                "PPR": ["Pauper", 2],
                "PNR": ["Pioneer", 2],
                "STD": ["Standard", 2],
                "THD": ["Two Headed Dragon", 4]
            });
        }
        
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
        // Update the number of players based on format selected
        let numPlayers = formats[selectedFormat][1];
        setPlayers(new Array(numPlayers));
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
                <Form validated={validateForm}>
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
                        {
                            players.map((e, i) => (
                                <Form.Text id={"player" + i + "Name"} muted>Player {i}</Form.Text>
                            ))
                        }
                    </Form.Group>
                    <Form.Group controlId="logForm.DeckInput">
                        <Form.Label><b>DECKS: </b></Form.Label>
                        {
                            players.map((e, i) => (
                                <>
                                    <Form.Text id={"player" + i + "Deck"} muted>Player {i} Deck</Form.Text>
                                    <Form.Text id={"player" + i + "Decklist"} muted>Player {i} Decklist - Optional</Form.Text>
                                </>
                            ))
                        }
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
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Log;