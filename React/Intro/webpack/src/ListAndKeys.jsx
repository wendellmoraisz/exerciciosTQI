import React from "react";

const buttonA = <button>histórico dos clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false

const listCustomer = [
    {
        id: 1,
        name: 'joao',
        skills: ['react', 'node', 'css']
    },
    {
        id: 2,
        name: 'pedro',
        skills: ['js', 'ts', 'css']
    },
    {
        id: 3,
        name: 'paulo',
        skills: ['java', 'node', 'html']
    },
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div>
                <li key={`customer-${cutomer.id}`}>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div>
                <li key={`skill-${index}`}>{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Inovatio One</p>
            <p>Bem vindo</p>
            <div>
                <ul>
                {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}

export default App;