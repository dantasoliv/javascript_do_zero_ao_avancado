const validarId = /\d+ID\b/;

console.log(validarId.test("1ID"));
console.log(validarId.test("aID"));
console.log(validarId.test(1));
console.log(validarId.test("ID"));