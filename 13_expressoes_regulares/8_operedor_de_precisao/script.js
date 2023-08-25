const cep = /\d{5}-\d{3}/; // Usando o operedor de ocorrência precisa {}

console.log(cep.test("04939-120"));
console.log(cep.test("asd"));
console.log(cep.test("881-20"));
console.log(cep.test("99999-999"));

console.log("--------------------------")

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(11)99999-5555"));
console.log(tel.test("11999999999"));



