import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function sum(a, b) {
    return a + b;
};

function firstJSX() {
    return (
        <div className="teste">
            Olá
            <h1>Soma: {sum(12, 20)}</h1>
        </div>
    );
};

const app = () => {

    return (
        <div className="App">
            {firstJSX()}
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);