// Criando a classe
class ContaBanco{
    // Método construtor
    constructor(saldo){
        this.saldo = saldo;
    }

    // Método para realizar deposito
    deposito(valor){
        this.saldo += valor;
    }

    // Método para o Saque
    saque(valor){
        this.saldo -= valor;
    }
}

// Instamnciando o objeto da classe ContaBanco, passando por parâmetro o valor da da propriedade saldo do método construtor 
let conta = new ContaBanco(1000);

// Acessando o valor da propriedade saldo 
console.log(conta.saldo);

// Executando o método de deposito
conta.deposito(500);

console.log(conta.saldo);

// Exectando o método de saque
conta.saque(250);

console.log(conta.saldo);