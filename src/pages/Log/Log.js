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

        try {
            // TODO: Get formats from the server
            // TODO: Could put into async handler
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
        if (selectedFormat !== "") {
            let playerArr = new Array(formats[selectedFormat][1]);
            for (let i = 0; i < playerArr.length; i++) {
                playerArr[i] = "";
            }
            setPlayers(playerArr);
        } else {
            setPlayers(new Array(0))
        }
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
                        <Form.Label><b>FORMAT: </b></Form.Label><br />
                        <Form.Control 
                            as="select"
                            value={selectedFormat}
                            onChange={ e => {
                                setSelectedFormat(e.target.value);
                            }}>
                            <option value="">Select format...</option>
                            {
                                Object.keys(formats).map((e) => (
                                    <option value={`${e}`}>{formats[e][0]}</option>
                                ))
                            }
                        </Form.Control><br />
                    </Form.Group>
                    <Form.Group controlId="logForm.PlayerInput">
                        <Form.Label><b>PLAYERS: </b></Form.Label><br />
                        {
                            players.map((e, i) => (
                                <>
                                    <Col>
                                        <Form.Label>Player {i + 1}</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            placeholder="Player Name"
                                            onChange={e => {
                                                let tempArr = players.slice();
                                                tempArr[i] = e.target.value;
                                                setPlayers(tempArr);
                                            }}>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Control 
                                            type="text"
                                            placeholder="Deck Title"
                                            onChange={e => {

                                            }}>
                                        </Form.Control>
                                        <Form.Control
                                            type="text"
                                            placeholder="Deck Link (Optional)"
                                            onChange={e => {

                                            }}>

                                        </Form.Control>
                                    </Col>
                                    <br />
                                </>
                            ))
                        }
                    </Form.Group>
                    <Form.Group controlId="logForm.OutcomeInput">
                        <Form.Label><b>OUTCOME: </b></Form.Label>
                        {
                            players.map((e, i) => (
                                <Form.Control
                                    as="select"
                                    onChange={e => {
                                        
                                    }}>
                                    {
                                        players.map((e, i) => (
                                            <>
                                                <option value={`${e}`}>{e}</option>
                                            </>
                                        ))
                                    }
                                </Form.Control>
                            ))
                        }
                    </Form.Group>
                    <Form.Group controlId="logForm.CommentInput">
                        <Form.Label><b>COMMENTS: </b></Form.Label>
                        <Form.Control as="textarea" rows={3}></Form.Control><br />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button><br />
                </Form>
            </Row><br />
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Log;