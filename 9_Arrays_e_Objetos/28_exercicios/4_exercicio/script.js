let onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2
};

delete onibus.rodas; // Deletando uma propriedade em um objeto

onibus.janelas = 20; // Adicionabdo uma proprieade emum objeto

console.log(onibus.janelas);

console.log(onibus);