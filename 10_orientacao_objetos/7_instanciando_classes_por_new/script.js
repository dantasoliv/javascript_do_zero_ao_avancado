// Criando a classe
function Cachorro(raca,patas,cor){
    // Propriedades
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;

    // Métodos
    this.latir = function(){
        console.log("Au Au");
    }
}

// Instanciando o objeto da classe com new e passando os valores das propriedades por parâmetro
let husky = new Cachorro("Husky", 4, "cinza");

// Acessando o valor de uma propriedade do objeto
console.log(husky.cor);

// Executando o método do objeto
husky.latir();

// Alterando o valor da propriedade do objeto
husky.cor = "branco";

console.log(husky.cor);