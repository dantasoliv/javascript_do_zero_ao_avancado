const nomeDaMarca = /\Marca: (Nike|Adidas|Puma|Asics)/;

console.log(nomeDaMarca.test("Marca: Nike"));
console.log(nomeDaMarca.test("Marca: Adidas"));
console.log(nomeDaMarca.test("Marca: Puma"));
console.log(nomeDaMarca.test("Marca: Asics"));
console.log(nomeDaMarca.test("Marca: Teste"))
console.log(nomeDaMarca.test("Nike"));
console.log(nomeDaMarca.test("Marca:"));
