/*
Caracteres especiais Regex
\d  - Qualquer dígito de caracteres numéricos
\w - Caracteres alfanuméricos ("teste")
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são dígitos numéricos
\W - Caracteres não-alfanuméricos
\S - Caractere que não seja espaço em branco
. - Qualquer caractere, menos nova linha
*/
console.log("------------------------------");
console.log(".");
// Usando Regex com .
const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

console.log("------------------------------");
console.log("d");

// Usando Regex com \d
const dRegex = /\d/; // Outra forma de usar [^0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

console.log("------------------------------");
console.log("D");
// Usando Regex com \D
const dRegex2 = /\D/;

console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));

console.log("------------------------------");
console.log("s");

// Usando Regex com \s
const sRegex = /\s/;

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

console.log("------------------------------");
console.log("w");

// Usando Regex com \w
const wRegex = /\w/;

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));