let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("daniel_123"));
console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("1111111111111111111111111"));