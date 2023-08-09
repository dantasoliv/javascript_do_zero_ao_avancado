let carros = ["BMW", "Fiat", "VW", "Renaut", "Audi"];

// O método includes verifica que uma Array possaui o elemento passado por parâmetro (verifica letras maiusculas e minusculas) e retorna um valor boolean true ou false
console.log(carros.includes("Fiat"));

// Podemos usar o método includes() com a estrutura de controle if
//Exemplo:
if(carros.includes("BMW")){
    console.log("Está no array")
}else{
    console.log("Não está no array")
}