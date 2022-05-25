// import React from "react";

// const deleteButton = <button onClick={showEvent}>Mostrar Evento</button>

// const App = () => {
    
//     const name = 'Digital Inovatio One'
    
//     const handleChange = () => {
//         const { value } = e.target
//         console.log(value)
//     }
    
//     const showEvent = () => {
//         console.log('evento clicado')
//         console.log(e)
//         alert(name)
//     }
    
//     return (
//         <div>
//             <p>Digital Inovatio One</p>
//             <input onChange={handleChange}></input>
//             {deleteButton}
//         </div>
//     )
// }

import React from "react";
import mock from './mock';
import Button from "./components/Button";

const buttonA = <button>histórico dos clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false



const App = () => {

    const handleClick = (e, id) => {
        console.log('deletar cliente')
        alert(id)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={customer.id}>
                <li>{customer.name} <Button onClick={() => handleClick(customer.id)}>Deletar o cliente</Button></li> 
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
                {mock.map(renderCustomers)}
                </ul>
            </div>
        </div>
    )
}

export default App;