class Conta{
    constructor(saldoCorrente, saldoPoupanca, juros){
        this.saldoCorrente = saldoCorrente,
        this.saldoPoupanca = saldoPoupanca,
        this.juros = juros
    }

    set deposito(valor){
        this.saldoCorrente += valor;
    }

    set saque(valor){
        this.saldoCorrente -= valor;
    }

    set transferirCP(valor){
        this.saldoPoupanca += valor;
        this.saldoCorrente -= valor;
    }

    set transferirCC(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }

    jurosDeAniversario(){
        let juros = (this.saldoPoupanca * this.juros) / 100;
        this.saldoPoupanca += juros;
    }

}

class ContaEspecial extends Conta{
    constructor(saldoCorrente, saldoPoupanca, juros){
        super(saldoCorrente, saldoPoupanca, juros*2)
    }

    set deposito(valor){
        this.saldoCorrente += valor;
    }

    set saque(valor){
        this.saldoCorrente -= valor;
    }

    set transferirCP(valor){
        this.saldoPoupanca += valor;
        this.saldoCorrente -= valor;
    }

    set transferirCC(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }
}

let minhaConta = new Conta(1000, 5000, 1);

console.log(minhaConta);
minhaConta.saque = 500;
console.log(minhaConta.saldoCorrente);
minhaConta.deposito = 5000;
console.log(minhaConta.saldoCorrente);

minhaConta.transferirCP = 3000;
console.log(minhaConta.saldoPoupanca);
console.log(minhaConta.saldoCorrente);

minhaConta.jurosDeAniversario();
console.log(minhaConta.saldoPoupanca);

let outraConta = new ContaEspecial(10000, 50000, 1);

console.log(outraConta);
outraConta.saque = 5000;
console.log(outraConta.saldoCorrente);
outraConta.jurosDeAniversario();
console.log(outraConta.saldoPoupanca);