let carro = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0"
};

// Usando a sintaxe Destructuring para transformar propriedades de um objeto em váriaveis
const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = carro;

console.log(vRodas);
console.log(vTetoSolar);