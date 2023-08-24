function saudacao(nome){
    if(typeof nome != 'string'){
        // Criando um tratamento de erro
        throw new Error('O parâmetro nome precisa ser string');
    }else{
        console.log(`olá ${nome}`);
    }
}

saudacao("Daniel");
saudacao(5);

console.log("Teste");