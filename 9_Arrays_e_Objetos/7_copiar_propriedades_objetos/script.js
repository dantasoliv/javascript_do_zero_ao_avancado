let carro = {
    portas: 2,
    pirtamalas: "200l",
    motor: "2.0",
}
console.log(carro);

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

Object.assign(carro, adicionais); // Copiando as propriedades de um objeto para outro objeto
console.log(carro);