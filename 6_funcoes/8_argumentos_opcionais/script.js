function soma(a,b){
    // Criando uma condição com if para verificar se os argmentos foram preenchidos
    if(a === undefined || b === undefined){
        console.log("Está função precisa ter os dois argunentos");
    }else{
        return a + b;
    }
}

console.log(soma(1));
console.log(soma(1,2));

function saudacao(nome,idade){
    // Criando uma condição com if para verificar se o argmento idade foi preenchido
    if(idade === undefined){
        console.log("Ola " + nome);
    }else{
        console.log("Olá " + nome  + " você tem " + idade + " anos");
    }
}

saudacao("Daniel",30);
saudacao("Igpr");