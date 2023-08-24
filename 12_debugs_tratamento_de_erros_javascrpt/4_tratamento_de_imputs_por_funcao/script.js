function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){ // Verificando se o valor passado no parâmetro é do tipo number
        alert("Por favor, passe somente números para o programa");
    } else{
        return number;
    }
}
let number = prompt("Digite um número");

checarNumero(number);