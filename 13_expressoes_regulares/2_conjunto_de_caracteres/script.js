// Usando o Regex com um conjunto de números - Está forma não é muito utilizado
const reg1 = /[12345]/;

// Utilizando o método test() para verificar se determinado caractere está presente na String
console.log(reg1.test("O número 5 está aqui?"));
console.log(reg1.test("o npumero 7 está aqui?"));

// Usando o Regex com um conjunto com intervalo
const reg2 = /[1-9]/;

console.log(reg2.test("O numero 2 está aqui?"));
console.log(reg2.test("O número 10 está aqui?"));