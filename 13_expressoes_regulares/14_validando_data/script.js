const validarData = /[0-31]{2}[/][0-12]{2}[/][1920-2023]{4}/; // Usando Regex para validar datas

console.log(validarData.test("13/10/2000")); // true
console.log(validarData.test("02/07/2026")); // false
console.log(validarData.test("5/5/2003")); // false
console.log(validarData.test("23-20-1994")); // false
console.log(validarData.test("01/2003")); // false
console.log(validarData.test("14/08/80")); // false
console.log(validarData.test("12/4/1996")); // false