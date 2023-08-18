// Criando a classe
class Cachorro{
    // Método construtor
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    // Métodos
    latir(){
        console.log("Au Au")
    }
}

// Definindo um valor para a propriedade do prprotype da classe pai
Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

// Instanciando um objeto da classe pai passando os valores por parâmtro  para o método construtor
let labrador = new Cachorro('Labrador', 'Amarelo');

// Acesaando o valor da propriedade do objeto instanciado
console.log(labrador.patas);
console.log(labrador.raca);

// Executando o método da classe
labrador.latir();

// Acessando o valor da propriedade do prototype da classe pai
console.log(Cachorro.prototype.raca);
console.log(Cachorro.prototype.patas);