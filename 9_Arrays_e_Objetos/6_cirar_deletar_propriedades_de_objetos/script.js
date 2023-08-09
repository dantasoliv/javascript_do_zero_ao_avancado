// Criando um objeto
let pessoa = {
    // Propriedades do objeto
    nome: "Daniel",
    idade: 30,
    profissao:"programador",
}

console.log(pessoa.nome); // Exibindo a propriedade

delete pessoa.nome; // deletando a progiedade do objeto

console.log(pessoa.nome);

console.log(pessoa); // Exibindo o objeto pessoa no console

console.log(typeof pessoa); // Exibindo o tipo de dado

pessoa.casado = false; // Adicionando uma propiedade no objeto pessoa

console.log(pessoa.casado); // Exibindo a propriedade