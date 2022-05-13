class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this.saldo){
            return 'Operação negada';
        }
        this.saldo = this.saldo - valor;

        return this.saldo;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(value){
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    saque(valor){
        if(valor > 500){
            return '[ERRO] saque máximo ultrapassado';
        }

        this._saldo = this._saldo - valor;
        return `Saque de R$${valor},00 efetuado com sucesso`;
    }
}

const minhaConta = new ContaCorrente(1, 324, true)
console.log(minhaConta)
minhaConta.depositar(200)
console.log(minhaConta.saldo)