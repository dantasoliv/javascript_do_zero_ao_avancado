// Criando uma classe com construtor na versão ES6 do Javascript (forma mais atual de criar classes)
class Cachorro{
    // Método construtor
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    // Métodos
    latir(){
        console.log("Au Au");
    }
}

// Criando um método da classe pai fora da classe
Cachorro.prototype.uivar = function(){
        console.log("Auuu");
    }

// Instanciando um objeto da classe cachorro
let labrador = new Cachorro("Labrador", 4, "Amarelo");

console.log(labrador.raca);
labrador.latir();
labrador.uivar();