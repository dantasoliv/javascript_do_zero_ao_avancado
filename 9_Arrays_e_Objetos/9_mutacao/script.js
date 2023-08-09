let pessoa = {
    nome: "Daniel",
};
console.log(pessoa.nome);

let pessoa2 = pessoa; // Referênciando um objeto aoutro objeto

let pessoa3 = {
    nome: "Daniel",
}

console.log(pessoa == pessoa2); // Verificando se o objeto está referênciando outro objetp
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Pedro"; // Alterando o valor da proproedade do objeto

console.log(pessoa.nome);

pessoa.nome = "Maria",

console.log(pessoa2.nome);