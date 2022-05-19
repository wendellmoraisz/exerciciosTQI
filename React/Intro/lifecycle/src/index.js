import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 1000)
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refri'
        })

        // this.state.copo = 'refri' // O state não é alterado
    }

    render() {
        const { clock, copo } = this.state
        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => alterarCopo()}></button>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);