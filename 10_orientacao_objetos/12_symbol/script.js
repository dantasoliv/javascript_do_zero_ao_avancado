// Criando uma classe
class Cachorro{
    // Método construtor
    constructor(raca, cor){
        this.raca = raca;
        this.cor  = cor;
    }

    // Métodos
    latir(){
        console.log("Au Au");
    }
}

// Inserindo um valor para uma propriedade do prototype da classe pai
Cachorro.prototype.raca = "SRD";

// Criando um Symbol para a classe pai
let patas = Symbol();

// Inserindo um valor para o Symbol criado
Cachorro.prototype[patas] = 4;

// Instanciando um objeto da classe pai e passanso os valores do mértodo construtor via parâmetro
let labrador = new Cachorro("Labrador", "Amarelo");

// Executando um método no objeto herdado da classe pai
labrador.latir();

// Acesando o valor da propriedade do prototype da classe pai
console.log(Cachorro.prototype.raca);

// Acesando o valor da propriedade do objeto instanciado
console.log(labrador.raca);

// Acesando o valor da propriedade do Symbol da classe pai
console.log(Cachorro.prototype[patas]);

// Acesando o valor da propriedade do Symbol do objeto instanciado da classe pai
console.log(labrador[patas]);
