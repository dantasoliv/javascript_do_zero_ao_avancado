let idade = 19; // number
let nome = "Daniel" // string
let passaporte = true // boolean

// Estrutura condicional IF
if (idade == 19) {
    console.log(`A idade é = ${idade}`);
}

if (idade > 25) {
    console.log("Idade é maior que 25");
}

if (nome == "Daniel" && idade > 10) {
    console.log("Liberado");
}

if ((nome == "Daniel" && idade == 19) || passaporte == true) {
    console.log("Pode entrar");
}