// Função sem parâmetro esem retorno
function imprimirNoConsole(){ // Definindo uma função sem parâmetro
    // Bloco de código da função
    console.log("Olá mundo");
}
imprimirNoConsole(); // Chamando a função sem parâmetro

// ------------------------------------

// Função com prãmetro e sem retorno
function imprimirNumero(num){ // Definindo uma função com parâmetro
    console.log("O número é: " + num);
}
imprimirNumero(2); // Chamando a função com parâmetro
imprimirNumero(25);
imprimirNumero(100);

// ------------------------------------

// Criando uma função anônima dentro de uma váriavel
const numeroAleatorio = function(){
    console.log(Math.random());
}
numeroAleatorio();
numeroAleatorio();
