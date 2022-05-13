// Class é um Syntatic Sugar em JS

class Pessoa {
    constructor(nome, cpf){
        this.nome = nome
        this.cpf = cpf
    }
}

class Funcionario extends Pessoa{
    constructor(cargo, salario){
        super(this.nome, this.cpf)
        this.cargo = cargo
        this.salario = salario
    }
}