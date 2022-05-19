import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./styles.css";

const element = 'Wendell';
const element2 = <h1>Olá =D</h1>

function soma(a, b){
    alert(a + n);
};

function App() {
    
    return (
        <div className="App">
            Hello World
            <Button onClick={() => soma(12, 20)} name="Wendell"/>
            <ComponentA>
                <ComponentB>
                    <Button></Button>
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);