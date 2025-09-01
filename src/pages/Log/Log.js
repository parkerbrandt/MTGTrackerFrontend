import "./log.css"

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";


// TODO: Get list of formats from server and display that way
// TODO: Loading Symbol
const Log = () => {
    
    const [players, setPlayers] = useState([]);
    const [selectedFormat, setSelectedFormat] = useState("");
    const [numPlayers, setNumPlayers] = useState(2);


    /*
    * Helper Functions
    */ 
    function isFormComplete() {
        return false;
    }


    /*
    * Handler Functions
    */
    function handleChange(e) {
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
        <div className="App">
            <Header /><br />

            <h1 className="block">Log</h1>
            <form onSubmit={handleSubmit}>
                <h4>DATE</h4>
                <input type="date"></input><br />

                <h4>FORMAT</h4>
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="STD"
                        checked={selectedFormat === "STD"}
                        onChange={handleChange}
                    />Standard
                </label>
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="MDN"
                        checked={selectedFormat === "MDN"}
                        onChange={handleChange}
                    />Modern
                </label>
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="PNR"
                        checked={selectedFormat === "PNR"}
                        onChange={handleChange}
                    />Pioneer
                </label>
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="LGY"
                        checked={selectedFormat === "LGY"}
                        onChange={handleChange}
                    />Legacy
                </label>
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="PPR"
                        checked={selectedFormat === "PPR"}
                        onChange={handleChange}
                    />Pauper
                </label><br />
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="EDH"
                        checked={selectedFormat === "EDH"}
                        onChange={handleChange}
                    />Commander
                </label>
                <label>
                    <input 
                        type="radio"
                        name="format"
                        value="CHD"
                        checked={selectedFormat === "CHD"}
                        onChange={handleChange}
                    />Canadian Highlander
                </label><br />
                
                <h4>Players</h4>
                <label>Player 1: </label>
                <input type="text"></input>
                <label>Player 2: </label>
                <input type="text"></input>
                {
                    (selectedFormat === "EDH" || selectedFormat === "CHD") && (
                        <>
                            <br />
                            <label>Player 3: </label>
                            <input type="text"></input>
                            <label>Player 4: </label>
                            <input type="text"></input>
                        </>
                    )
                }

                {
                    (selectedFormat === "EDH") && (
                        <>
                            <h4>Commanders</h4>
                            <label>Player 1: </label>
                            <input type="text"></input>
                            <label>Player 2: </label>
                            <input type="text"></input><br />
                            <label>Player 3: </label>
                            <input type="text"></input>
                            <label>Player 4: </label>
                            <input type="text"></input><br />
                            <label>Bracket: </label>
                            <input type="number"></input>
                        </>
                    )
                }

                <h4>Decks</h4>
                <label>Player 1 Deck Title: </label>
                <input type="text"></input>
                <label>Decklist Link: </label>
                <input type="text"></input><br />

                <label>Player 2 Deck Title: </label>
                <input type="text"></input>
                <label>Decklist Link: </label>
                <input type="text"></input><br />

                {
                    ((selectedFormat === "EDH") || (selectedFormat === "CHD")) && 
                    <>
                        <label>Player 3 Deck Title: </label>
                        <input type="text"></input>
                        <label>Decklist Link: </label>
                        <input type="text"></input><br />

                        <label>Player 4 Deck Title: </label>
                        <input type="text"></input>
                        <label>Decklist Link: </label>
                        <input type="text"></input><br />
                    </>
                }

                <h4>Outcome</h4>

                {
                    ((selectedFormat !== "EDH") && (selectedFormat !== "CHD")) &&
                    <>
                        <label>Winner: </label>
                        <input type="text" /><br />
                    </>
                }

                {
                    ((selectedFormat === "EDH") || (selectedFormat === "CHD")) && 
                    <>
                        <label>1st Place: </label>
                        <input type="text" /><br />
                        <label>2nd Place: </label>
                        <input type="text" /><br />
                        <label>3rd Place: </label>
                        <input type="text" /><br />
                        <label>4th Place: </label>
                        <input type="text" /><br />
                    </>
                }

                <h4>Optional</h4>
                <label>Who went first? </label>
                <input type="text"></input><br />
                <label>How many turns? </label>
                <input type="number"></input><br />

                <h4>Comments</h4>
                <input type="text"></input>

                <br /><br />
                <button type="submit">Submit</button>
            </form><br />

            <Footer />
        </div>
    );
}

export default Log;