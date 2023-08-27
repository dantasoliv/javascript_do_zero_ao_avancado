const letrasMaisculas = /[A-Z]/; // Criando um Regex que aceita somente Letras maiúculas

console.log(letrasMaisculas.test("ab"));
console.log(letrasMaisculas.test("123"));
console.log(letrasMaisculas.test("AB"));