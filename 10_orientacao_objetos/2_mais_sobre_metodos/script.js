const cachorro = {
    //Propriedades
    raca: "SRD",

    //Métodos
    uivar: function(){
        console.log("Auuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrr");
    },
    // Método para alterar a propriedade raca
    setRaca: function(raca){
        this.raca = raca; // o this está referênciando o valor da propriedade da classe
    },
    // Método para exibir o valor da propriedade raca
    getRaca: function(){
        return "A raça é: " + this.raca; 
    }
}

// Exibindo o valor da propriedade raca
console.log(cachorro.raca);

// Executando o método para inserir um valor na propriedade raca passando um valor por parâmetro
cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());