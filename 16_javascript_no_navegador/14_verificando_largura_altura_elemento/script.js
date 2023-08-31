let elemento = document.querySelector('#titulo-principal'); // Acessando um elemento com querySelector

console.log("Largura " + elemento.offsetWidth); // Acessando o valor da largura do elemento, considera as bordas
console.log("Altura " + elemento.offsetHeigth); // Acessando o valor da altura do elemento considera as bordas

console.log("----------------------");

console.log("largura " + elemento.clientWidth); // Acessando o valor da largura do elemento, desconsidera as bordas
console.log("Altura " + elemento.clientHeight); // Acessando o valor da altura do elemento desconsidera as bordas
