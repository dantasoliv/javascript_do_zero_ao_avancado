// Função com parâmetros  e retorno
function somaValor(a,b){
    return a + b; 
}
console.log(somaValor(5,3));

// -----------------------------------

// Criando uma variável com uma função (função anônima)
const soma = somaValor(5,5);
console.log("O valor de soma é: " + soma);

// -----------------------------------

// Função com parâmetro sem retorno e com if
function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    }else if(idade >= 18 && cnh == false ){
        console.log("Não pode dirigir, mas pode tirara CNH")
    }else{
        console.log("Não pode dirigir");
    }
}
// 0 = false, 1 = true
podeDirigir(28, true);
podeDirigir(25, false);
podeDirigir(17,true);
podeDirigir(30,1);
podeDirigir(18,0);
podeDirigir(16,1)