let pessoa = {
    "nome": "Daniel",
    "idade": 28,
    "profissao": "programador",
    "hovies": ["Fotografia", "Leitura", "Correr"]
}

// Convertendo um Objeto em um Json (string)
let pessoaTexto  = JSON.stringify(pessoa);
console.log(pessoaTexto);

// Convertendo um Json em um Objeto
let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);
console.log(pessoa.idade);
console.log(pessoa.hovies[0]);