function verificarNumero(num){ // Criando uma função com Promise
    return new Promise((resolve, reject) => { // Retornando uma Promise
        if(num == 2){
            resolve(console.log(`O número é ${num}`)); // Usando o método Resolve
        }else{
            reject(new Error("Falhou")); // Usando o método Reject para rejeirar a promise caso acontece algum erro
        }
    });
}

verificarNumero(2);
verificarNumero(3);
