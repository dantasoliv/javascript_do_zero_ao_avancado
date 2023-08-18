// Criando uma classe
let cachorro = {
    // Propriedades
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("Au Au");
    }
}

// Criando um objeto a partir de uma classe
// Instanciando um objeto a partir de uma classe
let labrador = Object.create(cachorro);

// Executando o método prototype do objeto
labrador.latir();

// Inserindo um valor na propriedade do objeto instanciado
labrador.raca = "Labrador";

// Acessando o valor da propriedade do objeto instanciado
console.log(labrador.raca);

// Acessando o valor da propriedade da classe pai do objeto instanciado
console.log(cachorro.raca);

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca);