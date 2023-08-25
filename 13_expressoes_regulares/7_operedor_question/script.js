const opcional = /abacax?i/; // Usando o operador Question ?

console.log(opcional.test("abacaxi"));
console.log(opcional.test("abacai"));

const opcional2 = /\d+\w?/;

console.log(opcional2.test("1234"));
console.log(opcional2.test("1234x"));
console.log(opcional2.test("123 "));