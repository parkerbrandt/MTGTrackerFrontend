import "./log.css"

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
        if (selectedFormat === "EDH") {
            setNumPlayers(4);
            setPlayers(new Array(4));
        } else {
            setNumPlayers(2);
            setPlayers(new Array(2));
        }
    }, [selectedFormat])


    /*
    * Child Components
    */
    const PlayerInput = (players) => {
        return (
            Array.from(players).map((item, index) => {
                console.log("test");
                <div>
                    <label>Player</label>
                    <input type="text" /><br />
                </div>
            })
        )
    }
    

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
                            <input type="text"></input>
                        </>
                    )
                }

                <h4>Outcome</h4>

                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Log;