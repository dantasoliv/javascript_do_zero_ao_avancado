let p = Promise.resolve(new Error("Não deu certo")); // Cirando uma Promise com erro

console.log("Teste");

p.then(value => console.log(value))
.catch(reason => console.log("Falhou" + reason)); // Tratamento de erro da Promise