const validarEmail = /\w+@\w+\.\w+/; // Usando Regex para validar e-mail

console.log(validarEmail.test("dantas@gmail.com")); // true
console.log(validarEmail.test("dantas#gmail.com")); // false
console.log(validarEmail.test("dantas@gmail")); // false
console.log(validarEmail.test("dantas@gmail,com")); // false
console.log(validarEmail.test("dantas@teste.com.br")); // true
