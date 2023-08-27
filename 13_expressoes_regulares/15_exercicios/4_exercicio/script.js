const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/; // Criando uma regex para validar endereço de IP

console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("8.8.8.8"));
console.log(validarIp.test("192.168.0.62"));
console.log(validarIp.test("127.0.0"));
console.log(validarIp.test("192168012"));
console.log(validarIp.test("asbyxhjk"));
console.log(validarIp.test("1247.01234.0.1"));
console.log(validarIp.test("127,0,0,1"));
