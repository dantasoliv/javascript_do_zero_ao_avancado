let nome = "Daniel";
let idade = 30;

// Estrutura Else If com o Else no final
// undefined - Variávem sem valor definido / null
if(nome != undefined && nome == "Joaquim") {
    console.log("Nome está definido");
} else if(nome == "Daniel" && nome.length > 5 && idade == 50){
    console.log(`nome é ${nome}`);
} else { // O bloco Else só é executado se nenhuma das condições acima foram satisfeitas
    console.log("Não é Matheus");
}

// Estrutura Else If sem o Else no final
if(1 > 2){
    console.log("Teste");
} else if( 1 == 1){
    console.log("Testando")
}