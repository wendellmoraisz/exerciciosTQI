import React from "react";

const buttonA = <button>histórico dos clientes</button>

const buttonB = <button>Casdatrar Cliente</button>

const hasCustomer = false

const App = () => {

    const renderShowHistory = (
        <div>
            Clique abaixo para cadastrar o cliente
            <br>
            {buttonB}
        </br>
        </div>
    )

    const customer = 'Wendell'

    const showCustomer = () => {
        if (!hasCustomer) return null

        return (
            <div>
                <h1>Nome do cliente: {customer}</h1>
            </div>
        )
    }

    const renderAddCustomer = (
            <p>
                clique no botao abaixo para visualizar o hisótico dos clientes
                {buttonA}
            </p>
    )
    return (
        <div>
            <p>Digital Inovatio One</p>
            <p>Bem vindo</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
            <div>
                {showCustomer}
            </div>
        </div>
    )
}

export default App;