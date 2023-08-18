// Criando a classe pai
function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

// Criando o métoto do prototype (classe pai)
Cachorro.prototype.latir = function(){
    console.log("Au Au");
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuu");
}

// Instancitando um objeto da classe pai, passando os valores das propriedades por parâmetro
let husky = new Cachorro("Husky", 4, "Cinza");

// Executando os métodos do objeto herdado da classe pai
husky.latir();
husky.uivar();