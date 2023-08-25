// Criando um Regex para validar um domínio
const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.daniel.com.br"));
console.log(validaDominio.test("google.com"));
console.log(validaDominio.test("www.google.br"));