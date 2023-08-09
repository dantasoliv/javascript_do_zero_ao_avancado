let x = 10;

while(x > 0){ // Condição para a repetição,o bloco de código abaixo será repetido até que a condição retorne false
    console.log("O x vale: " + x); // Contatenando uma string com o valor de uma váriável do tipo number
    x = x - 1; // Decrementando o valor da váriável
}

let y = 0;

while(y <= 10){
    console.log("O y vale: " + y);
    y = y + 1; // Icrementando o valor da variável
}

/* Exemplo de loop infinito (Não utilzar)
let z = 10;

while(z > 0){
    console.log(z);
}
*/