import "./App.css";
import { useState, useEffect } from "react";
function App() {
    const [message, setMessage] = useState('');

    const textNote = event => {
        setMessage(event.target.value);
        console.log(message);
    };

    const saveNote = () => {
        localStorage.setItem("message", message);
    };

    const clearNote = () => {
        localStorage.clear();
        setMessage('');
    }

    useEffect(() => {
        setMessage(localStorage.getItem("message"));
    }, []);

    return (
        <div className="App">
            <div className="box">
                <div className="field">
                    <div className="control">
                        <textarea className="textarea is-large" value={message} onChange={textNote} placeholder="Notes..." />
                    </div>
                </div>
                <button className="button is-large is-primary is-active" onClick={saveNote}>Save</button>
                <button className="button is-large" onClick={clearNote}>Clear</button>
            </div>
        </div>
    );
}

export default App;
