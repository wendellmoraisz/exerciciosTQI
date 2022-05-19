import React from "react";
import ReactDOM from "react-dom";

const element = 'Wendell'
const element2 = <h1>Olá =D</h1>

function App() {
    
    return (
        <div>
            {element}
            {element2}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);