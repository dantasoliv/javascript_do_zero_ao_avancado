//Criando uma classe
class Cachorro{
    // Método construtor
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor
    }

    // Métodos
    latir(){
        console.log("Au Au");
    }
}

// Adicionando uma propriedada e valor da uma classe via protorype
Cachorro.prototype.patas = 4;

// Instanciand um objeto da classe pai com new
let labrador = new Cachorro("Labrador", "Preto");

// Acessando o valor da pro´riedade do objeto instanciado
console.log(labrador.patas);

// Executando um método do objeto instanciado herdado daclasse pai
labrador.latir();