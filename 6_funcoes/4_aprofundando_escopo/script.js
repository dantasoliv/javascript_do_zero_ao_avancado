// Escopo global
let x = 10; // Declarando uma variável no escopo global

if(x > 5){ // Escopo de bloco if (Escopo local) 
    let x = 20; // Declarando uma variável no escopo do bloco if
    x++
    console.log(x); // Exibindo a variável do escopo do if
}

console.log(x); // Exibindo a variável do escopo global