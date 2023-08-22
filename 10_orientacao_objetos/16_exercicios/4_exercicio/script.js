// Criando a classe
class Carro{
    // Método Construtor
    constructor(marca, cor, gasolinaRestante, consumo){
        // Propriedades da classe
        this.marca = marca,
        this.cor = cor,
        this.gasolinaRestante = gasolinaRestante,
        this.consumo = consumo
    }

    // Métodos
    dirigir(km){
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos
    }

    abastecer(litros){
        this.gasolinaRestante += litros; 
    }
}

// Instanciando a classe carro
let meuCarro = new Carro("Ford", "Preto", 100, 14);

console.log(meuCarro);

meuCarro.dirigir(100);

console.log(meuCarro.gasolinaRestante);

meuCarro.abastecer(10);

console.log(meuCarro.gasolinaRestante);