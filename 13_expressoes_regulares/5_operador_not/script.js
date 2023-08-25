const notAB = /[^ab]/; // Usando o operador Not ^ no Regex

console.log(notAB.test("a"));
console.log(notAB.test("b"));
console.log(notAB.test("ab"));
console.log(notAB.test("abc"));
console.log(notAB.test("Aqui tem a e b"));


console.log("-------------------------");

const notAtoZ = /[^a-z]/;

console.log(notAtoZ.test("abgh"));
console.log(notAtoZ.test("123abgh"));

console.log("-------------------------");

const az = /[a-z]/; // usando o Regex sem o operador Not

console.log(az.test("123abgh"))