// Criando uma classe
class Cachorro{
    // Método construtor
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    //Métodos
    latir(){
        console.log("Au Au");
    }

    // Método Get: Serve para resgatar o valor da propriedade
    get getCor(){
        return this.cor;
    }

    // Método Set: Serve para inserir um valor na propriedade
    set setCor(cor){
        this.cor = cor;
    }
}

// Instanciando um objeto da classe pai
let pastorAlemao = new Cachorro("Pastor alemão", "Sem cor");

// Acesando o objeto instanciado
console.log(pastorAlemao);

// Alterando o valor da propriedade do objeto com o Set
pastorAlemao.setCor = "Marrom";

// Acessando o valor da propriedade do objeto com o Get
console.log(pastorAlemao.getCor);