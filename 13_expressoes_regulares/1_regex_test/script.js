// Criando um Regex
const reg1 = new RegExp("bola");

// Usando o método test() para verificar se na string tem determinata palavra 
console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

//  Outra forma de criar um Regex
const reg2 = /bola/;

// Usando o método test() para verificar se na string tem determinata palavra 
console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));

// Usando o método test() com uma variável
let texto = "Tem bola na cesta";
console.log(reg2.test(texto));

// Usando o Regex em uma linha de código
console.log(/quadrado/.test("Onde tem o quadrado sedv5ft9r"));