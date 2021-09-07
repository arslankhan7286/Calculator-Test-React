import React from 'react';
import './App.css';
import KeyPad from "./Component/Keypad/index";

const App = () => {
        return (
            <div className="main">
                <div className="calculator-body">
                    <KeyPad />
                </div>
            </div>
        );
}
export default App;