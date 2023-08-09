// Escopo global
let y = 10; // Variável declarada no escopo global

function imprimir(){
    // Escopo de função
    let y = 150; // Variável declarada no escopo de função
    console.log(y);
}

imprimir(); // Escvopo de função

console.log(y); // Escopo global