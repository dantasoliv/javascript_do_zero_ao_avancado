const reg = /\w+: (Daniel|Matheus|Maria)/;

console.log(reg.test("Nome: Daniel"));
console.log(reg.test("Nome: Jose"));
console.log(reg.test("Nome: Maria"));