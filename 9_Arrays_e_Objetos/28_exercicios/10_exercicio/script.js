let calculadora = {
    // Métodos
    somar: function(n1, n2){
        return n1 + n2;
    },
    subtrair: function(n1, n2){
        return n1 - n2;
    },
    multiplicar: function(n1, n2){
        return n1 * n2;
    },
    dividir: function(n1, n2){
        return n1 / n2;
    }
}

console.log(calculadora.somar(1,1));
console.log(calculadora.subtrair(10, 2));
console.log(calculadora.multiplicar(2,7));
console.log(calculadora.dividir(5,2));