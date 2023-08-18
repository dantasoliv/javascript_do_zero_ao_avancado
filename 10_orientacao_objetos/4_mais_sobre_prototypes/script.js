const pessoa = {
    maos: 2,
}

// getPrototypeOf é uma função embutida em JavaScript que é usada para verificar o protótipo de um objeto que o usuário criou
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// Verfica se o objeto a proipriedade especificada
console.log(pessoa.hasOwnProperty('maos'));


// Criando um novo objeto a partir do objeto pessoa. O novo objeto herda as propriedades e métodos do objeto pai
const pessoaNova = Object.create(pessoa);

// Acessando o valor da propriedade do pbjeto
console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

// Verificando o protótipo de um obejto criado
console.log(Object.getPrototypeOf(pessoaNova) === pessoa);
