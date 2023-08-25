const dia = /\d\d/; // Regex com dois digitos numéricos

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);

console.log("----------------------------");

const palavraPeloMenosTresLetras = /\w\w\w/; // Regex com tres digitos alfanuméricos

console.log(palavraPeloMenosTresLetras.test("as1"));
console.log(palavraPeloMenosTresLetras.test("asddd"));
console.log(palavraPeloMenosTresLetras.test("as"));